import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="prose prose-sm max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
            <p className="text-muted-foreground">
              Permission is granted to temporarily download one copy of the materials (information or software) on KAE's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 ml-6 text-muted-foreground">
              <li>• Modifying or copying the materials</li>
              <li>• Using the materials for any commercial purpose or for any public display</li>
              <li>• Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>• Removing any copyright or other proprietary notations from the materials</li>
              <li>• Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on KAE's website are provided on an 'as is' basis. KAE makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall KAE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on KAE's website, even if KAE or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground">
              The materials appearing on KAE's website could include technical, typographical, or photographic errors. KAE does not warrant that any of the materials on its website are accurate, complete, or current. KAE may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Links</h2>
            <p className="text-muted-foreground">
              KAE has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by KAE of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
            <p className="text-muted-foreground">
              KAE may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which KAE operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 space-y-2 text-muted-foreground">
              <p>Email: legal@kae.com</p>
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
