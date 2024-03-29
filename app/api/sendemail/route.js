import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { NextResponse } from "next/server";

dotenv.config();

export async function POST(req) {
  if (req.method !== 'POST') {
    return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
  }


  let data = await req.json();
  let name = data.name
  let bio = data.bio
  let email = data.email

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'Website Message',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${bio}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
