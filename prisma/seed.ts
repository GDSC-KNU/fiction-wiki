import { PrismaClient } from "@prisma/client";

import { dummy } from "../data/dummy";

const client = new PrismaClient();

// async function main() {
//   [...Array.from(Array(5).keys())].forEach(async (item) => {
//     const fiction = await client.fiction.create({
//       data: {
//         title: "testTitle" + String(item),
//         relatedTitle: "",
//         nationality: "한국",
//         genre: "판타지",
//         startDate: new Date(),
//         endDate: new Date(),
//         original: "오리지널",
//         platforms: "플랫폼",
//         image: "",
//         synopsis: "",
//         characters: "",
//         currentState: "",
//         volume: 150,
//         type: "웹소설",
//         mediaMix: "",
//         categories: {
//           // create: { category: { create: { name: genre } } },
//           create: {
//             category: {
//               connectOrCreate: {
//                 where: {
//                   name: "카테고리1",
//                 },
//                 create: {
//                   name: "카테고리1",
//                 },
//               },
//             },
//           },
//         },
//         keywords: {
//           create: {
//             keyword: {
//               connectOrCreate: {
//                 where: {
//                   name: "test",
//                 },
//                 create: {
//                   name: "test",
//                 },
//               },
//             },
//           },
//         },
//         // fictionStat: {
//         //   create: {
//         //     originality: 2,
//         //     writing: 2,
//         //     character: 2,
//         //     verisimilitude: 2,
//         //     synopsisComposition: 2,
//         //     value: 2,
//         //   },
//         // },
//         user: {
//           connect: {
//             id: "cl5gg5htn0030q4uuoaryy8c1",
//           },
//         },
//       },
//     });
//     console.log(`${item}/5`);
//   });
// }

// main()
//   .catch((e) => console.log(e))
//   .finally(() => client.$disconnect());

// async function main2() {
//   dummy.forEach(async (item) => {
//     const fiction = await client.fiction.create({
//       data: {
//         title: "testTitle" + String(item),
//         relatedTitle: "",
//         nationality: "한국",
//         genre: "판타지",
//         startDate: new Date(),
//         endDate: new Date(),
//         original: "오리지널",
//         platforms: "플랫폼",
//         image: "",
//         synopsis: "",
//         characters: "",
//         currentState: "",
//         volume: 150,
//         type: "웹소설",
//         mediaMix: "",
//         categories: {
//           // create: { category: { create: { name: genre } } },
//           create: {
//             category: {
//               connectOrCreate: {
//                 where: {
//                   name: "카테고리1",
//                 },
//                 create: {
//                   name: "카테고리1",
//                 },
//               },
//             },
//           },
//         },
//         keywords: {
//           create: {
//             keyword: {
//               connectOrCreate: {
//                 where: {
//                   name: "test",
//                 },
//                 create: {
//                   name: "test",
//                 },
//               },
//             },
//           },
//         },
//         // fictionStat: {
//         //   create: {
//         //     originality: 2,
//         //     writing: 2,
//         //     character: 2,
//         //     verisimilitude: 2,
//         //     synopsisComposition: 2,
//         //     value: 2,
//         //   },
//         // },
//         user: {
//           connect: {
//             id: "cl5gg5htn0030q4uuoaryy8c1",
//           },
//         },
//       },
//     });
//   });
// }

// main2()
//   .catch((e) => console.log(e))
//   .finally(() => client.$disconnect());

async function seed() {
  // Get all Fictions
  const allFictions = await client.fiction.findMany({
    include: {
      categories: true,
      keywords: true,
      fictionStat: true,
      userFictionStat: true,
    },
  });

  // const defaultUser = await client.user.findUnique({
  //   where: {
  //     id: "cl5gg5htn0030q4uuoaryy8c1",
  //   },
  // });

  // Loop over each Fiction and create a FictionHistory entry
  for (const fiction of allFictions) {
    const fictionCopy = JSON.parse(JSON.stringify(fiction));
    await client.fictionHistory.create({
      data: {
        fictionId: fiction.id,
        data: fictionCopy,
        editedById: "cl5gg5htn0030q4uuoaryy8c1",
      },
    });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await client.$disconnect();
  });
