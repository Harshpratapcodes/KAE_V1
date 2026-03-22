'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, TrendingUp, Award } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    id: 1,
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
    details: 'Implemented comprehensive control systems for a 50,000 sq ft manufacturing facility with 200+ machines.'
  },
  {
    id: 2,
    title: 'Power Distribution Network Upgrade',
    description: 'Modernized power distribution infrastructure for a regional utility company',
    industry: 'Power Systems',
    client: 'Regional Power Corp',
    results: {
      efficiency: '+35%',
      reliability: '99.9%',
      roi: '24 months'
    },
    image: '⚡',
    details: 'Replaced legacy systems with modern switchgear and monitoring solutions across 15 substations.'
  },
  {
    id: 3,
    title: 'Renewable Energy Integration Project',
    description: 'Integration of solar and wind power systems with existing grid infrastructure',
    industry: 'Energy',
    client: 'GreenEnergy Solutions',
    results: {
      capacity: '50 MW',
      carbon: '-15,000 tons/yr',
      roi: '6 years'
    },
    image: '🌱',
    details: 'Deployed hybrid energy management system with real-time monitoring and predictive analytics.'
  },
  {
    id: 4,
    title: 'Smart Infrastructure Control System',
    description: 'Centralized monitoring and control system for a smart city infrastructure',
    industry: 'Infrastructure',
    client: 'Metropolitan Authority',
    results: {
      cities: '5 cities',
      assets: '10,000+',
      efficiency: '+28%'
    },
    image: '🏙️',
    details: 'Integrated traffic, water, power, and communication systems with AI-powered optimization.'
  },
  {
    id: 5,
    title: 'Predictive Maintenance Platform',
    description: 'IoT-based predictive maintenance system for industrial equipment monitoring',
    industry: 'Manufacturing',
    client: 'Industrial Manufacturing Inc',
    results: {
      downtime: '-75%',
      savings: '$2.5M/year',
      equipment: '500+'
    },
    image: '📊',
    details: 'Deployed IoT sensors and AI analytics to predict equipment failures before they occur.'
  },
  {
    id: 6,
    title: 'Process Optimization Initiative',
    description: 'Complete process redesign and automation of cement production plant',
    industry: 'Manufacturing',
    client: 'CementCo Global',
    results: {
      production: '+40%',
      energy: '-30%',
      roi: '14 months'
    },
    image: '⚙️',
    details: 'Optimized production workflows and implemented advanced process control systems.'
  },
  {
    id: 7,
    title: 'Critical Infrastructure Backup System',
    description: 'Redundant power and control systems for mission-critical operations',
    industry: 'Infrastructure',
    client: 'DataCenter Ops',
    results: {
      uptime: '99.99%',
      failover: '<1 second',
      sites: '8'
    },
    image: '🔐',
    details: 'Implemented multi-redundant systems with automatic failover and comprehensive monitoring.'
  },
  {
    id: 8,
    title: 'Smart Grid Implementation',
    description: 'Advanced metering infrastructure and demand response system',
    industry: 'Power Systems',
    client: 'Regional Utility',
    results: {
      meters: '250,000+',
      losses: '-5%',
      response: 'Real-time'
    },
    image: '📡',
    details: 'Deployed smart meters, communication network, and demand response platform.'
  }
]

const industries = ['All', ...new Set(projects.map(p => p.industry))]

export default function ProjectsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All')

  const filteredProjects = selectedIndustry === 'All' 
    ? projects 
    : projects.filter(p => p.industry === selectedIndustry)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Success <span className="text-primary">Stories</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real-world projects where KAE solutions delivered exceptional results
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Industry Filter */}
          <div className="flex items-center space-x-2 mb-12 overflow-x-auto pb-4">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition font-medium ${
                  selectedIndustry === industry
                    ? 'bg-primary text-white'
                    : 'bg-muted text-foreground hover:bg-muted/80'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-white rounded-xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl group-hover:scale-110 transition overflow-hidden relative">
                  {typeof project.image === 'string' && !project.image.startsWith('/') ? (
                    <span>{project.image}</span>
                  ) : (
                    project.image && project.image.startsWith('/') && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Industry Badge */}
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                    {project.industry}
                  </span>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Client */}
                  <div className="pt-2 border-t border-border">
                    <p className="text-xs text-muted-foreground">Client</p>
                    <p className="font-semibold text-foreground">{project.client}</p>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(project.results).map(([key, value]) => (
                      <div key={key} className="bg-muted/50 rounded-lg p-3 text-center">
                        <div className="text-sm font-bold text-primary">{value}</div>
                        <p className="text-xs text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full text-center text-primary font-semibold group-hover:text-primary/80 transition py-2">
                    View Details →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Project Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Award size={40} className="text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary">450+</div>
              <p className="text-muted-foreground">Completed Projects</p>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <Building2 size={40} className="text-secondary" />
              </div>
              <div className="text-4xl font-bold text-secondary">500+</div>
              <p className="text-muted-foreground">Active Clients</p>
            </div>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <TrendingUp size={40} className="text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent">$250M+</div>
              <p className="text-muted-foreground">Client Savings</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-lg text-white/90">
            Let's discuss how KAE can help you achieve similar results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
