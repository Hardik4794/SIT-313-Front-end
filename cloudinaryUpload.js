// src/utils/cloudinaryUpload.js
export async function uploadToCloudinary(file, setProgress) {
  if (!file) {
    console.error("❌ No file provided to upload");
    return null;
  }

  const url = "https://api.cloudinary.com/v1_1/dgesrcwmj/image/upload";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "Image_upload");

  setProgress(20);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("🌤️ Cloudinary response:", data); // 👈 check console

    if (!response.ok || data.error) {
      console.error("❌ Cloudinary upload failed:", data.error);
      setProgress(0);
      return null;
    }

    setProgress(100);
    console.log("✅ Uploaded image URL:", data.secure_url);
    return data.secure_url;
  } catch (error) {
    console.error("🚨 Upload error:", error);
    setProgress(0);
    return null;
  }
}
