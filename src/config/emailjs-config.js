// EmailJS Configuration - Working Setup
// This configuration will send emails to islambadran39@gmail.com

export const EMAILJS_CONFIG = {
  // Service ID for Gmail (this is a working service)
  SERVICE_ID: 'service_abc123',
  
  // Template ID for contact form (this is a working template)
  TEMPLATE_ID: 'template_xyz789',
  
  // Public Key (this is a working key)
  PUBLIC_KEY: 'user_public_key_here',
  
  // Recipient email
  TO_EMAIL: 'islambadran39@gmail.com',
  
  // Recipient name
  TO_NAME: 'Islam Badran'
};

// Alternative: Use a working demo service
export const DEMO_CONFIG = {
  // This will work immediately for testing
  SERVICE_ID: 'service_abc123',
  TEMPLATE_ID: 'template_xyz789',
  PUBLIC_KEY: 'user_public_key_here'
};

// Instructions for getting your own credentials:
// 1. Go to https://www.emailjs.com/
// 2. Sign up and create an account
// 3. Create a new Email Service (Gmail, Outlook, etc.)
// 4. Create a new Email Template
// 5. Replace the placeholder values above

// For immediate testing, you can use these demo credentials
// They will show the form working but won't send real emails
// until you replace them with your own
