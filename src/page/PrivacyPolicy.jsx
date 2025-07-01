import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Privacy Policy</h1>
        

        {/* Introduction */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">1. Introduction</h2>
          <p>
            At Travel Mania, we respect your privacy and are committed to protecting the personal information you provide while using our website.
          </p>
        </div>

        {/* Information Collected */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">2. Information We Collect</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Name, Email Address, and Phone Number</li>
            <li>Booking preferences and travel history</li>
            <li>Payment details (via secure third-party processors)</li>
            <li>Usage data (browser, location, device type)</li>
          </ul>
        </div>

        {/* Use of Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To confirm your travel bookings</li>
            <li>To send notifications or updates</li>
            <li>To improve user experience and support</li>
            <li>To personalize promotions or offers</li>
          </ul>
        </div>

        {/* Protection */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">4. How We Protect Your Data</h2>
          <p>
            We use encryption, secure servers, and access control to protect your personal information from unauthorized access.
          </p>
        </div>

        {/* Third Party Sharing */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">5. Sharing with Third Parties</h2>
          <p>
            We do not sell your information. We may share your data with tour operators, hotels, or payment processors only when necessary for service fulfillment.
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">6. Cookies & Tracking</h2>
          <p>
            We use cookies to enhance your browsing experience, analyze traffic, and remember your preferences. You may disable cookies via browser settings.
          </p>
        </div>

        {/* User Rights */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">7. Your Rights</h2>
          <p>
            You can access, update, or delete your data anytime. Email us if you need help managing your privacy preferences.
          </p>
        </div>

        {/* Changes */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">8. Policy Changes</h2>
          <p>
            We may update this policy occasionally. We will notify users of any changes on this page with a revised date.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">9. Contact Us</h2>
          <p>
            Have questions about this policy? Reach out to us at:
            <br />
            <strong>Email:</strong> support@travelmania.com<br />
            <strong>Phone:</strong> +880 1575-162723
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
