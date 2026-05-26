import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    const host = (process.env.ZEPTO_MAIL_HOST || 'smtp.zeptomail.com').replace(/^["']|["']$/g, '');
    const port = Number(String(process.env.ZEPTO_MAIL_PORT || '587').replace(/^["']|["']$/g, '')) || 587;
    const user = (process.env.ZEPTO_MAIL_USER || '').replace(/^["']|["']$/g, '');
    const pass = (process.env.ZEPTO_MAIL_PASS || '').replace(/^["']|["']$/g, '');

    this.transporter = nodemailer.createTransport({
      host,
      port,
      auth: {
        user,
        pass,
      },
    });
  }

  async sendLeadNotificationEmail(to: string, leadData: Record<string, any>) {
    const fromEmail = (process.env.ZEPTO_MAIL_FROM_EMAIL || 'noreply@billionairevox.in').replace(/^["']|["']$/g, '');
    const fromName = (process.env.ZEPTO_MAIL_FROM_NAME || 'Billionaire Vox').replace(/^["']|["']$/g, '');

    let payloadHtml = '';
    const payload = leadData.payload || leadData;
    if (payload && typeof payload === 'object') {
      payloadHtml = `
        <table border="0" cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 24px; color: #333333; font-size: 14px; font-family: sans-serif;">
          ${Object.entries(payload)
            .map(([key, val]) => {
              const formattedVal = typeof val === 'object' ? JSON.stringify(val) : String(val);
              return `
                <tr style="border-bottom: 1px solid #eeeeee;">
                  <td width="30%" style="font-weight: bold; padding: 8px; color: #666666; text-transform: capitalize;">${key}:</td>
                  <td style="padding: 8px; color: #111111;">${formattedVal}</td>
                </tr>
              `;
            })
            .join('')}
        </table>
      `;
    }

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Lead Captured</title>
      </head>
      <body style="margin: 0; padding: 20px; background-color: #f6f9fc; font-family: Arial, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e8e8e8; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="background-color: #1a1a1a; padding: 24px; text-align: center; color: #ffffff;">
            <h1 style="margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">Cheetah AGI</h1>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #a0a0a0;">New Lead Notification</p>
          </div>
          <div style="padding: 32px 24px;">
            <h2 style="margin: 0 0 16px 0; font-size: 18px; color: #111111;">Lead Details</h2>
            <p style="margin: 0 0 24px 0; font-size: 14px; color: #666666; line-height: 1.5;">
              A new form submission was captured on the website. Below are the details:
            </p>
            
            ${payloadHtml}

            <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #eeeeee; font-size: 11px; color: #aaaaaa; text-align: center;">
              ID: ${leadData.id || 'N/A'} | Captured at: ${leadData.createdAt || new Date().toISOString()}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    try {
      await this.transporter.sendMail({
        from: `"${fromName}" <${fromEmail}>`,
        to,
        subject: `[Cheetah AGI] New Lead Submission - ${leadData.type || 'Form'}`,
        html,
      });
      console.log(`Lead notification email sent successfully to ${to}`);
    } catch (error) {
      console.error('Failed to send lead notification email via ZeptoMail:', error);
      throw error;
    }
  }
}
