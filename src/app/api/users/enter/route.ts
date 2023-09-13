"use client";

import { NextRequest, NextResponse, userAgent } from "next/server";
import client from "@libs/server/client";
import twilio from "twilio";
import mail from "@sendgrid/mail";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

////
export async function POST(req: NextRequest) {
  try {
    const { phone, email }: any = req.body;
    const user = phone ? { phone: phone } : email ? { email } : null;

    if (!user) return NextResponse.error();

    const payload = Math.floor(100000 + Math.random() * 900000) + "";

    const token = await client.token.create({
      data: {
        payload,
        user: {
          connectOrCreate: {
            where: {
              ...user,
            },
            create: {
              name: "Anonymous",
              ...user,
            },
          },
        },
      },
    });

    if (phone) {
      const message = await twilioClient.messages.create({
        messagingServiceSid: process.env.TWILIO_MSID,
        to: process.env.MY_PHONE!,
        body: `Your login token is ${payload}`,
      });
      // console.log(message);
    } else if (email) {
      const email = await mail.send({
        from: { email: "mk44879@naver.com" },
        to: "mk44879@naver.com",
        subject: "Your Fdbs Verification Email",
        text: `Your token is ${payload}`,
        html: `<strong>Your token is ${payload}</strong>`,
      });
      // console.log(email);
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    return NextResponse.error();
  }
}

// export async function GET(req: NextRequest, res: NextResponse<ResponseType>) {
//   return NextResponse.json({});
// }
