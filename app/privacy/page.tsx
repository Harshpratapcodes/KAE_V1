import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground">
              At KAE, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <p className="text-muted-foreground">
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground">
              <li>• Personal data you voluntarily disclose (name, email, phone, company)</li>
              <li>• Information collected automatically (IP address, browser type, pages visited)</li>
              <li>• Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Use of Your Information</h2>
            <p className="text-muted-foreground">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground">
              <li>• Generate a personal profile about you</li>
              <li>• Increase the efficiency and operation of the Site</li>
              <li>• Monitor and analyze usage and trends to improve your experience</li>
              <li>• Notify you of updates to the Site</li>
              <li>• Respond to your inquiries and provide customer service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Disclosure of Your Information</h2>
            <p className="text-muted-foreground">
              We may share or disclose your information only in the ways described in this Privacy Policy. We may disclose the information we collect about you to:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground">
              <li>• Service providers and contractors we use to support our business</li>
              <li>• When required by law or to protect our rights</li>
              <li>• With your consent for any other purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Security of Your Information</h2>
            <p className="text-muted-foreground">
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>Email: privacy@kae.com</p>
              <p>Phone: +1 (234) 567-890</p>
            </div>
          </section>

          <p className="text-sm text-muted-foreground mt-12">Last updated: March 2024</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
