import { Container } from "@/components/Containers";

export default function PrivacyPolicy() {
  return (
    <Container className="my-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p>Last updated: December 14, 2024</p>

        <h2>1. Information We Collect</h2>
        <p>When you use our QR code generation service, we collect:</p>
        <ul>
          <li>Usage data (QR codes generated, downloaded)</li>
          <li>Website analytics (visitor count, page views)</li>
          <li>Device information (browser type, operating system)</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and improve our QR code generation service</li>
          <li>Analyze usage patterns to enhance user experience</li>
          <li>Monitor and maintain service performance</li>
        </ul>

        <h2>3. Data Storage</h2>
        <p>Generated QR codes are stored temporarily and automatically deleted after 24 hours. We do not permanently store any QR code content or personal data.</p>

        <h2>4. Third-Party Services</h2>
        <p>We use analytics services to improve our website. These services may collect anonymous usage data in accordance with their own privacy policies.</p>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of analytics tracking</li>
        </ul>

        <h2>6. Contact Us</h2>
        <p>For any privacy-related questions or concerns, please contact us at support@qrng.app</p>
      </div>
    </Container>
  );
}
