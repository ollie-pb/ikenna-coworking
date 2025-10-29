// Ikenna Coworking - Interactive Features

// ===================================
// Scroll-triggered Animations
// ===================================

function initScrollAnimations() {
  const scrollElements = document.querySelectorAll('.scroll-animate');

  const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
  };

  const displayScrollElement = (element) => {
    element.classList.add('is-visible');
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });

  // Trigger on initial load
  handleScrollAnimation();
}

// ===================================
// CTA Button Handlers
// ===================================

function initCTAButtons() {
  const ctaButtons = document.querySelectorAll('.btn-primary');

  ctaButtons.forEach(button => {
    button.addEventListener('click', handleCTAClick);
  });
}

function handleCTAClick(e) {
  const buttonText = e.target.textContent.trim();

  console.log(`CTA clicked: ${buttonText}`);

  // Placeholder for actual integration
  // You can replace this with your preferred solution:

  // Option 1: Redirect to a signup/payment page
  // window.location.href = '/signup';

  // Option 2: Open a modal with a form
  // openSignupModal();

  // Option 3: Integrate with Stripe, PayPal, etc.
  // initiateCheckout();

  // Option 4: Collect email for follow-up
  // openEmailCapture();

  // For demo purposes, show an alert
  alert(`Thank you for your interest!

The "${buttonText}" feature will be integrated soon.

Possible integrations:
• Stripe or PayPal for payments
• Email signup form
• Booking/scheduling system
• Contact form

Contact: hello@ikenna.co.ke`);
}

// ===================================
// Smooth Scroll (for future anchor links)
// ===================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===================================
// Initialize on DOM Ready
// ===================================

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initCTAButtons();
  initSmoothScroll();

  console.log('Ikenna Coworking - Interactive features initialized');
});

// ===================================
// Accessibility: Respect reduced motion
// ===================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  console.log('Reduced motion preference detected - animations simplified');
}
