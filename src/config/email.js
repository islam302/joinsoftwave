// EmailJS Configuration
// You need to sign up at https://www.emailjs.com/ and get these credentials

export const EMAIL_CONFIG = {
  // Your EmailJS service ID (create a new email service)
  SERVICE_ID: 'YOUR_EMAILJS_SERVICE_ID',
  
  // Your EmailJS template ID (create a new email template)
  TEMPLATE_ID: 'YOUR_EMAILJS_TEMPLATE_ID',
  
  // Your EmailJS user ID (found in your account)
  USER_ID: 'YOUR_EMAILJS_USER_ID',
  
  // Recipient email address
  TO_EMAIL: 'islambadran39@gmail.com',
  
  // EmailJS API endpoint
  API_URL: 'https://api.emailjs.com/api/v1.0/email/send'
};

// Alternative: Simple form submission to your own backend
export const BACKEND_CONFIG = {
  // If you have your own backend, use this endpoint
  API_URL: 'https://your-backend.com/api/contact',
  
  // Or use a form submission service like Formspree
  FORMSPREE_URL: 'https://formspree.io/f/YOUR_FORM_ID'
};

// Instructions for setup:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create a new Email Service (Gmail, Outlook, etc.)
// 3. Create a new Email Template with variables: {{to_email}}, {{from_name}}, {{from_email}}, {{company}}, {{message}}
// 4. Replace the placeholder values above with your actual credentials
// 5. Test the form to ensure emails are being sent
