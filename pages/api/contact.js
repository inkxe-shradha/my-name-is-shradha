// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { sendEmailToAdmin, sendWelcomeEmail } from "../../emails/account";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, subject } = req.body;
    sendWelcomeEmail(email);
    sendEmailToAdmin(email, name, subject, message);
  }
  res.status(200).json({
    message: "Thank you for contacting us",
  });
}
