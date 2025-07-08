import { addData } from "../db/index.js";
import nodemailer from "nodemailer";

const sendEmail = () => {
  // Create a transporter object using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "mdjawad11223344@gmail.com",
      pass: "uvjn gqym curm grdo",
    },
  });

  // Email options
  const mailOptions = {
    from: "mdjawad11223344@gmail.com",      //muhammaddjawad.0@gmail.com
    to: "muhammaddjawad.0@gmail.com",       //mdjawad11223344@gmail.com
    subject: "👋 Hello from Node.js 🚀 Nodemailer Maze ka ha",
    text: "Kafi acha experience raha bhai... 📧💻",
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("paisa barbad");
      console.error("❌ Error:", error.message);
    } else {
      console.log("email gya bruh");
      console.log("✅ Email sent:", info.response);
    }
  });
};

const postService = async (data) => {
    sendEmail()
  return await addData(data);
};

export default postService;
