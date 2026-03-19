
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resendApiKey = import.meta.env.RESEND_API_KEY;
const siteOwnerEmail = import.meta.env.SITE_OWNER_EMAIL;
const fromEmail = import.meta.env.RESEND_FROM_EMAIL;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Common spam patterns
const spamPatterns = [
  /\b(viagra|cialis|casino|lottery|prize|winner|click here|buy now)\b/i,
  /\b(bitcoin|crypto|investment|forex|loan|debt)\b/i,
  /(https?:\/\/[^\s]+){3,}/gi, // Multiple URLs
  /(.)\1{10,}/i, // Repeated characters
];

// Common profanity list (you can expand this)
const profanityWords = [
  'fuck', 'shit', 'bitch', 'asshole', 'damn', 'crap',
  'bastard', 'dick', 'piss', 'cunt', 'whore', 'slut'
];

// Check for spam patterns
const containsSpam = (text: string): boolean => {
  return spamPatterns.some(pattern => pattern.test(text));
};

// Check for profanity
const containsProfanity = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return profanityWords.some(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'i');
    return regex.test(lowerText);
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check if email service is configured
    if (!resend || !siteOwnerEmail || !fromEmail) {
      console.error('Email service environment variables are not configured on the server.');
      return new Response(
        JSON.stringify({ error: 'Email service is not configured. Please contact the site administrator.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }


    const data = await request.json();
    const { name, email, subject, message } = data;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const textToCheck = `${name} ${subject} ${message}`;

    // Check for spam
    if (containsSpam(textToCheck)) {
      return new Response(
        JSON.stringify({ error: 'Your message appears to contain spam content. Please revise and try again.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check for profanity
    if (containsProfanity(textToCheck)) {
      return new Response(
        JSON.stringify({ error: 'Please keep your message professional and avoid inappropriate language.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Length validation
    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: 'Message is too long. Please keep it under 5000 characters.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Handle Resend restriction on free public domains
    let secureFromEmail = fromEmail;
    if (/@(gmail|yahoo|hotmail|outlook|live|icloud)\.com/i.test(fromEmail)) {
      console.warn(`[Resend Fix] Replacing unverified sender "${fromEmail}" with "onboarding@resend.dev"`);
      secureFromEmail = 'onboarding@resend.dev';
    }

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: secureFromEmail,
      to: siteOwnerEmail,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email. Please try again.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Unexpected error in contact form API route:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred. Please try again later.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
