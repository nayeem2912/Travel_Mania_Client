import React from 'react';

const TermsOfUse = () => {
  return (
    <section className="px-6 py-10 ">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Terms of Use</h1>
        {/* 1. Acceptance */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Travel Mania website, you agree to these Terms of Use. If you do not agree, please do not use the website or its services.
          </p>
        </div>

        {/* 2. Website Use */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">2. Use of Website</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>You must be at least 18 years old to book packages.</li>
            <li>All information provided must be accurate and honest.</li>
            <li>Unauthorized or illegal use of this website is strictly prohibited.</li>
          </ul>
        </div>

        {/* 3. Booking & Payment */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">3. Booking & Payment</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>All bookings depend on availability.</li>
            <li>Advance/full payment may be required to confirm your tour.</li>
            <li>Prices may change without prior notice.</li>
          </ul>
        </div>

        {/* 4. Cancellation */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">4. Cancellations & Refunds</h2>
          <p>
            Cancellation and refund policies vary by package. We are not liable for delays due to weather, political unrest, or natural disasters.
          </p>
        </div>

        {/* 5. Intellectual Property */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">5. Intellectual Property</h2>
          <p>
            All content on Travel Mania including text, images, and logos are protected. Do not copy, reproduce, or reuse without permission.
          </p>
        </div>

        {/* 6. User Conduct */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">6. User Conduct</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Do not share offensive or spam content.</li>
            <li>Hacking or disrupting the website is prohibited.</li>
          </ul>
        </div>

        {/* 7. Third-party Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">7. Third-party Links</h2>
          <p>
            We may link to other websites. We are not responsible for their content or services.
          </p>
        </div>

        {/* 8. Changes */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">8. Changes to Terms</h2>
          <p>
            We may update these Terms at any time. Please check this page regularly for changes.
          </p>
        </div>

        {/* 9. Contact */}
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-blue-500">9. Contact Us</h2>
          <p>
            If you have any questions, feel free to contact us at:
            <br />
            <strong>Email:</strong> support@travelmania.com
            <br />
            <strong>Phone:</strong> +880 1575-162723
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfUse;
