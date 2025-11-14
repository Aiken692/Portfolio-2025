// Example Serverless Function for Contact Form
// This can be deployed to Vercel, Netlify, or AWS Lambda

// For Vercel/Netlify Functions
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // TODO: Implement your email sending logic here
    // Options:
    // 1. SendGrid: https://sendgrid.com/
    // 2. AWS SES: https://aws.amazon.com/ses/
    // 3. Nodemailer with SMTP
    // 4. Resend: https://resend.com/

    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'walter.ruganzu@example.com',
      from: 'noreply@walterruganzu.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    */

    // For now, just log the data (remove in production)
    console.log('Contact form submission:', { name, email, subject, message });

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      error: 'Failed to send message. Please try again later.',
    });
  }
}

// For AWS Lambda, use this format instead:
/*
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body);
    
    // Your email sending logic here
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Message sent successfully',
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to send message',
      }),
    };
  }
};
*/