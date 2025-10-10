import { NextResponse } from "next/server";
import { Resend } from "resend";
import validator from "validator";


const resend = new Resend(process.env.RESEND_API_KEY_FOR_MY_PROJECT as string);

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}



export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, message } = body;
console.log(body)
    //  Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields (name, email, message) are required." },
        { status: 400 }
      );
    }

    //  Validate email format using validator.js
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address format." },
        { status: 400 }
      );
    }

    //  Sanitize input
    const safeName: string = validator.escape(name);
    const safeEmail: string = validator.normalizeEmail(email) || email;
    const safeMessage: string = validator.escape(message);

    //  Send email using Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // change after domain verification
      to: "chukwubuikekingsley369@gmail.com", // your personal or business email
      subject: "New Contact Form Message",
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; background-color: #f7f9fc; padding: 20px;">
          <table role="presentation" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <tr>
              <td style="background-color: #007BFF; padding: 20px 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Message</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 30px;">
                <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 10px;">
                  <strong>Name:</strong> ${safeName}
                </p>
                <p style="font-size: 16px; color: #333; line-height: 1.6; margin-bottom: 10px;">
                  <strong>Email:</strong> ${safeEmail}
                </p>
                <p style="font-size: 16px; color: #333; line-height: 1.6; margin-top: 20px;">
                  <strong>Message:</strong>
                </p>
                <div style="font-size: 15px; color: #555; background: #f1f4f8; border-radius: 6px; padding: 15px; line-height: 1.6;">
                  ${safeMessage}
                </div>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f1f4f8; padding: 15px; text-align: center; font-size: 13px; color: #777;">
                <p style="margin: 0;">&copy; ${new Date().getFullYear()} Kingsley Chukwubuike. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });

    // return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Email sending error:", error);

    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while sending your message.";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
