import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, Award } from 'lucide-react'

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = {
    id: params.id,
    title: 'Advanced Manufacturing Facility Automation',
    description: 'Complete automation of a large-scale automotive parts manufacturing facility',
    industry: 'Manufacturing',
    client: 'AutoTech Industries',
    results: {
      efficiency: '+45%',
      downtime: '-60%',
      roi: '18 months'
    },
    image: '🏭',
    details: 'Implemented comprehensive control systems for a 50,000 sq ft manufacturing facility with 200+ machines.',
    projectOverview: `
    This transformational project involved the complete modernization of a legacy manufacturing facility.
    AutoTech Industries needed to increase production capacity and improve quality control while reducing operational costs.
    `,
    challenges: [
      'Integration with 200+ existing machines from different manufacturers',
      'Minimal production downtime during implementation',
      'Training workforce on new systems',
      'Ensuring data security and compliance'
    ],
    solution: `
    We implemented a comprehensive control system that:
    - Integrated all production equipment into a unified control network
    - Provided real-time monitoring and analytics
    - Enabled predictive maintenance capabilities
    - Reduced manual interventions by 70%
    - Improved product quality consistency to 99.8%
    `,
    timeline: '8 months',
    team: '12 professionals',
    technologies: ['Advanced Control Systems', 'IoT Sensors', 'Cloud Analytics', 'Mobile Monitoring']
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <section className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/projects" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition">
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </section>

      {/* Project Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="h-80 bg-white rounded-xl border border-border flex items-center justify-center text-8xl">
            {project.image}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                {project.industry}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              {project.title}
            </h1>
            <div className="space-y-2">
              <p className="text-muted-foreground"><span className="font-semibold text-foreground">Client:</span> {project.client}</p>
              <p className="text-muted-foreground"><span className="font-semibold text-foreground">Timeline:</span> {project.timeline}</p>
              <p className="text-muted-foreground"><span className="font-semibold text-foreground">Team Size:</span> {project.team}</p>
            </div>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Request Similar Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Project Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.projectOverview}
                </p>
              </div>

              {/* Challenges */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Challenges</h2>
                <ul className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex space-x-3">
                      <span className="text-red-500 font-bold flex-shrink-0 mt-1">→</span>
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Solution</h2>
                <div className="bg-white border border-border rounded-xl p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We implemented a comprehensive control system that achieved all project objectives while maintaining
                    continuous production operations.
                  </p>
                  <ul className="space-y-2">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-muted-foreground">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Measurable Results</h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 text-center border border-primary/20">
                      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                      <p className="text-sm text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="sticky top-20 bg-white border border-border rounded-xl p-8 space-y-6">
                <h3 className="font-bold text-foreground text-lg">Key Metrics</h3>
                
                <div className="space-y-4 border-t border-border pt-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Production Increase</p>
                    <p className="text-2xl font-bold text-primary">45%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Downtime Reduction</p>
                    <p className="text-2xl font-bold text-primary">60%</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">ROI Period</p>
                    <p className="text-2xl font-bold text-primary">18 mo</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Quality Improvement</p>
                    <p className="text-2xl font-bold text-primary">99.8%</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="w-full text-center block bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition mt-6"
                >
                  Start Similar Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12">Other Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <Link key={i} href="/projects" className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-5xl">
                  🏆
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">Project {i}</h3>
                  <p className="text-xs text-muted-foreground">Success story</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
