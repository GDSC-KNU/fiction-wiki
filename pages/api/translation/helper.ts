import axios from "axios";
import FormData from "form-data";

export async function downloadAndUploadImage(
  imgUrl: string,
  translatedTitle: string
) {
  try {
    // Download the image from the URL
    const response = await axios.get(imgUrl, {
      responseType: "arraybuffer",
    });
    console.log(typeof response)
    console.log(response)
    // Create a FormData instance
    const formData = new FormData();
    formData.append("file", Buffer.from(response.data), {
      contentType: response.headers["content-type"],
      filename: translatedTitle,
    });
    

    // Fetch the uploadURL from your API route
    const { uploadURL } = await (
      await fetch(`${process.env.NEXTAUTH_URL}/api/files`, {
        method: "GET",
      })
    ).json();

    // Upload the image to your server using the fetched uploadURL
    const { data } = await axios.post(uploadURL, formData, {
      headers: formData.getHeaders(),
    });

    const {
      result: { id },
    } = data;

    return id;
  } catch (error: any) {
    throw new Error(`Failed to download and upload image: ${error.message}`);
  }
}
