import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact Form API
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({ 
          error: "Missing required fields" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: "Invalid email address" 
        });
      }

      // In production, you would send an actual email here
      // For now, we'll log it and return success
      console.log("📧 Contact form submission:", {
        name,
        email,
        subject: subject || "General Inquiry",
        message,
        timestamp: new Date().toISOString()
      });

      // TODO: Integrate email service (nodemailer, SendGrid, etc.)
      // Example with nodemailer (uncomment when configured):
      /*
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_PORT === "465",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || "alaebilaizi@gmail.com",
        subject: `Portfolio Contact: ${subject || "General Inquiry"}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: email,
      });
      */

      return res.status(200).json({ 
        success: true,
        message: "Message received successfully" 
      });

    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({ 
        error: "Failed to send message" 
      });
    }
  });

  return httpServer;
}
