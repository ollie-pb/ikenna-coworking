// Handle CTA button clicks
const ctaButtons = document.querySelectorAll('.cta-button');

ctaButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Placeholder for actual signup/payment integration
        // You can integrate with Stripe, PayPal, or a form submission
        alert('Ready to join Ikenna! \n\nIntegrate this button with:\n- Payment processor (Stripe, PayPal)\n- Email signup form\n- Booking system\n- Or contact form');

        // Example: Redirect to signup page
        // window.location.href = '/signup';

        // Example: Open email client
        // window.location.href = 'mailto:hello@ikenna.co.ke?subject=Membership Inquiry';
    });
});

// Smooth scroll for multiple CTAs (if needed in future)
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ikenna Coworking - Landing Page Loaded');
});
