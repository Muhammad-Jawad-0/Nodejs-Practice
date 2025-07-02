import { v2 as cloudinary } from "cloudinary";
import ENV from "../../../constants/index.js";
import fsExtra from "fs-extra";
import sharp from "sharp";

cloudinary.config({
  cloud_name: ENV.CLOUD_NAME,
  api_key: ENV.CLOUD_KEY,
  api_secret: ENV.CLOUD_SECRET,
});

const uploadFile = async (file) => {
  const resizePath = `src/modules/upload/files/resize-${file.filename}`;
  const filePath = `src/modules/upload/files/${file.filename}`;
  return new Promise(async (resolve, reject) => {
    sharp(filePath)
      .jpeg({ quality: 30 })
      .toFile(resizePath, async (err, info) => {
        const uploadResult = await cloudinary.uploader
          .upload(resizePath, {
            public_id: `STORE/${file.filename}`,
      });
    if (uploadResult) {
      fsExtra.removeSync(filePath);
      fsExtra.removeSync(resizePath);
      resolve(uploadResult);
    } else {
      reject();
    }
      if (err) {
    console.log(err, "<<< err");
  } else {
    console.log(info, "<< info");
  }
  });

  });
};

export default uploadFile;
