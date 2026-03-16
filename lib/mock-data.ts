export interface Category {
  id: string
  name: string
  description: string
  slug: string
  parentCategoryId?: string
  displayOrder: number
  isSubcategory: boolean
}

export interface ProductImage {
  id: string
  productId: string
  imageUrl: string
  altText: string
  displayOrder: number
}

export interface Product {
  id: string
  name: string
  categoryId: string
  subcategoryId?: string
  description: string
  longDescription: string
  price: string
  powerRating: string
  phaseType: 'Single' | 'Three'
  applicationType: string[]
  features: string[]
  applications: string[]
  specifications: Record<string, string>
  brochureUrl?: string
  datastateUrl?: string
  images: ProductImage[]
  createdAt: string
  updatedAt: string
}

export const categories: Category[] = [
  {
    id: 'cat-1',
    name: 'Servo Controlled Voltage Stabilizers',
    description: 'High-precision voltage stabilization systems',
    slug: 'servo-stabilizers',
    displayOrder: 1,
    isSubcategory: false,
  },
  {
    id: 'cat-1-1',
    name: 'Dimmer Type',
    description: 'Dimmer type servo stabilizers',
    slug: 'dimmer-type',
    parentCategoryId: 'cat-1',
    displayOrder: 1,
    isSubcategory: true,
  },
  {
    id: 'cat-1-2',
    name: 'Oil Cooled',
    description: 'Oil cooled servo stabilizers',
    slug: 'oil-cooled',
    parentCategoryId: 'cat-1',
    displayOrder: 2,
    isSubcategory: true,
  },
  {
    id: 'cat-1-3',
    name: 'Air Cooled',
    description: 'Air cooled servo stabilizers',
    slug: 'air-cooled',
    parentCategoryId: 'cat-1',
    displayOrder: 3,
    isSubcategory: true,
  },
  {
    id: 'cat-2',
    name: 'Industrial Transformers',
    description: 'Power transformation solutions',
    slug: 'transformers',
    displayOrder: 2,
    isSubcategory: false,
  },
  {
    id: 'cat-2-1',
    name: 'Step Down',
    description: 'Step down transformers',
    slug: 'step-down',
    parentCategoryId: 'cat-2',
    displayOrder: 1,
    isSubcategory: true,
  },
  {
    id: 'cat-2-2',
    name: 'Step Up',
    description: 'Step up transformers',
    slug: 'step-up',
    parentCategoryId: 'cat-2',
    displayOrder: 2,
    isSubcategory: true,
  },
  {
    id: 'cat-2-3',
    name: 'Isolation',
    description: 'Isolation transformers',
    slug: 'isolation',
    parentCategoryId: 'cat-2',
    displayOrder: 3,
    isSubcategory: true,
  },
  {
    id: 'cat-3',
    name: 'Electric Panels',
    description: 'Complete electrical panel solutions',
    slug: 'electric-panels',
    displayOrder: 3,
    isSubcategory: false,
  },
  {
    id: 'cat-3-1',
    name: 'HT Panels',
    description: 'High tension electric panels',
    slug: 'ht-panels',
    parentCategoryId: 'cat-3',
    displayOrder: 1,
    isSubcategory: true,
  },
  {
    id: 'cat-3-2',
    name: 'LT Panels',
    description: 'Low tension electric panels',
    slug: 'lt-panels',
    parentCategoryId: 'cat-3',
    displayOrder: 2,
    isSubcategory: true,
  },
  {
    id: 'cat-3-3',
    name: 'Power Factor Correction',
    description: 'Power factor correction panels',
    slug: 'pfc-panels',
    parentCategoryId: 'cat-3',
    displayOrder: 3,
    isSubcategory: true,
  },
  {
    id: 'cat-3-4',
    name: 'Distribution',
    description: 'Distribution panels',
    slug: 'distribution',
    parentCategoryId: 'cat-3',
    displayOrder: 4,
    isSubcategory: true,
  },
  {
    id: 'cat-4',
    name: 'Online UPS',
    description: 'Uninterruptible Power Supply systems',
    slug: 'online-ups',
    displayOrder: 4,
    isSubcategory: false,
  },
  {
    id: 'cat-5',
    name: 'Industrial Inverter',
    description: 'Power inverter solutions',
    slug: 'industrial-inverter',
    displayOrder: 5,
    isSubcategory: false,
  },
  {
    id: 'cat-6',
    name: 'Phase Sequence Corrector',
    description: 'Phase sequence correction devices',
    slug: 'phase-sequence',
    displayOrder: 6,
    isSubcategory: false,
  },
  {
    id: 'cat-7',
    name: 'Batteries',
    description: 'Industrial battery solutions',
    slug: 'batteries',
    displayOrder: 7,
    isSubcategory: false,
  },
]

export const products: Product[] = [
  {
    id: 'prod-1',
    name: 'Servo Stabilizer 50KVA',
    categoryId: 'cat-1',
    subcategoryId: 'cat-1-2',
    description: 'Oil-cooled servo stabilizer with advanced protection',
    longDescription: 'Our premium oil-cooled servo stabilizer 50KVA provides exceptional voltage stabilization for demanding industrial applications. Engineered for reliability and efficiency with advanced servo technology.',
    price: '₹185,000',
    powerRating: '50KVA',
    phaseType: 'Three',
    applicationType: ['Manufacturing', 'Power Systems'],
    features: [
      'Servo motor with advanced control',
      'Oil cooling system',
      'Phase failure protection',
      'Digital display',
      'Overload protection',
      'Thermal management',
    ],
    applications: [
      'Industrial manufacturing units',
      'Power distribution centers',
      'Heavy machinery operations',
      'Medical facilities',
    ],
    specifications: {
      'Input Voltage': '380-420V 3-phase',
      'Output Voltage': '380V ±2%',
      'Capacity': '50 KVA',
      'Cooling': 'Oil cooled',
      'Efficiency': '98.5%',
      'Response Time': '<50ms',
    },
    images: [
      {
        id: 'img-1',
        productId: 'prod-1',
        imageUrl: '/products/servo-50kva.jpg',
        altText: 'Servo Stabilizer 50KVA',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-2',
    name: 'UPS 10KVA 3-Phase',
    categoryId: 'cat-4',
    description: 'Online UPS system for continuous power protection',
    longDescription: 'Professional-grade online UPS system with three-phase support. Provides uninterrupted power supply for critical industrial operations.',
    price: '₹95,000',
    powerRating: '10KVA',
    phaseType: 'Three',
    applicationType: ['Power Systems', 'Data Centers'],
    features: [
      'Double conversion technology',
      '3-phase input and output',
      'High power factor',
      'EMI/RFI filtering',
      'Automatic load transfer',
      'Built-in surge protection',
    ],
    applications: [
      'Data centers',
      'Hospitals',
      'Financial institutions',
      'Manufacturing plants',
    ],
    specifications: {
      'Input Voltage': '380V 3-phase',
      'Output Voltage': '380V ±2%',
      'Capacity': '10 KVA',
      'Battery Type': 'Lead-acid',
      'Efficiency': '92%',
      'Backup Time': '15-30 minutes',
    },
    images: [
      {
        id: 'img-2',
        productId: 'prod-2',
        imageUrl: '/products/ups-10kva.jpg',
        altText: 'UPS 10KVA 3-Phase',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-3',
    name: 'Power Factor Correction Panel 100A',
    categoryId: 'cat-3',
    subcategoryId: 'cat-3-3',
    description: 'Automatic power factor correction system',
    longDescription: 'Advanced power factor correction panel for reducing reactive power and improving energy efficiency. Reduces electricity bills significantly.',
    price: '₹45,000',
    powerRating: '100A',
    phaseType: 'Three',
    applicationType: ['Manufacturing', 'Commercial'],
    features: [
      'Automatic capacitor control',
      'Digital monitoring display',
      'Harmonic filtering',
      'Low power loss',
      'Easy installation',
      'Warranty: 3 years',
    ],
    applications: [
      'Industrial facilities',
      'Commercial buildings',
      'Manufacturing units',
      'Hotels and malls',
    ],
    specifications: {
      'Input': '380V 3-phase',
      'Capacity': '100A',
      'Correction Range': 'Up to 95%',
      'Response Time': '2-5 seconds',
      'Display': 'Digital LED',
      'Cooling': 'Forced air',
    },
    images: [
      {
        id: 'img-3',
        productId: 'prod-3',
        imageUrl: '/products/pfc-panel.jpg',
        altText: 'Power Factor Correction Panel',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-4',
    name: 'Industrial Step Down Transformer 30KVA',
    categoryId: 'cat-2',
    subcategoryId: 'cat-2-1',
    description: 'Heavy-duty step down transformer for industrial applications',
    longDescription: 'Robust step down transformer designed for industrial grade voltage conversion with minimal losses and maximum efficiency.',
    price: '₹120,000',
    powerRating: '30KVA',
    phaseType: 'Three',
    applicationType: ['Manufacturing', 'Industrial'],
    features: [
      'Low copper loss',
      'Oil immersed design',
      'Thermal protection',
      'Robust construction',
      'High reliability',
      'CE certified',
    ],
    applications: [
      'Heavy machinery',
      'Steel mills',
      'Chemical plants',
      'Mining operations',
    ],
    specifications: {
      'Input': '11000V 3-phase',
      'Output': '400V 3-phase',
      'Capacity': '30 KVA',
      'Impedance': '5.5%',
      'Efficiency': '97.8%',
      'Cooling': 'Oil immersed',
    },
    images: [
      {
        id: 'img-4',
        productId: 'prod-4',
        imageUrl: '/products/transformer-30kva.jpg',
        altText: 'Step Down Transformer 30KVA',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-5',
    name: 'Industrial Inverter 5KW',
    categoryId: 'cat-5',
    description: 'Pure sine wave industrial inverter system',
    longDescription: 'High-performance industrial inverter delivering clean power for sensitive equipment. Pure sine wave output ensures compatibility with all devices.',
    price: '₹75,000',
    powerRating: '5KW',
    phaseType: 'Single',
    applicationType: ['Energy', 'Power Systems'],
    features: [
      'Pure sine wave output',
      'High efficiency design',
      'Multiple input protection',
      'Thermal management',
      'Remote monitoring capable',
      'Compact design',
    ],
    applications: [
      'Solar installations',
      'Backup power systems',
      'Remote locations',
      'Emergency power',
    ],
    specifications: {
      'Input Voltage': '48V DC',
      'Output Voltage': '230V AC',
      'Power': '5 KW',
      'Efficiency': '94%',
      'THD': '<3%',
      'Protection': 'Overload, over-voltage, low battery',
    },
    images: [
      {
        id: 'img-5',
        productId: 'prod-5',
        imageUrl: '/products/inverter-5kw.jpg',
        altText: 'Industrial Inverter 5KW',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-6',
    name: 'Phase Sequence Corrector 3-Phase',
    categoryId: 'cat-6',
    description: 'Automatic phase sequence correction device',
    longDescription: 'Sophisticated device that automatically corrects phase sequences and protects equipment from phase failures and unbalances.',
    price: '₹28,000',
    powerRating: '100A',
    phaseType: 'Three',
    applicationType: ['Manufacturing', 'Power Systems'],
    features: [
      'Automatic phase correction',
      'Digital display',
      'Phase failure detection',
      'Load balancing',
      'Easy installation',
      'Minimal power loss',
    ],
    applications: [
      'Factories',
      'Industrial facilities',
      'Power distribution',
      'Equipment protection',
    ],
    specifications: {
      'Input': '380V 3-phase',
      'Capacity': '100A',
      'Correction Type': 'Automatic',
      'Response Time': '<100ms',
      'Protection': 'Phase failure, phase reversal',
      'Efficiency': '99%',
    },
    images: [
      {
        id: 'img-6',
        productId: 'prod-6',
        imageUrl: '/products/phase-corrector.jpg',
        altText: 'Phase Sequence Corrector',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-7',
    name: 'Industrial Battery 48V 200Ah',
    categoryId: 'cat-7',
    description: 'Heavy-duty industrial battery system',
    longDescription: 'Reliable industrial-grade battery designed for long-duration backup power applications with superior cycle life.',
    price: '₹150,000',
    powerRating: '48V',
    phaseType: 'Single',
    applicationType: ['Energy', 'Power Systems'],
    features: [
      'Long cycle life',
      'Deep discharge capability',
      'Thermal management',
      'Robust terminals',
      'Low self-discharge',
      'Safety certified',
    ],
    applications: [
      'Backup power systems',
      'Solar installations',
      'Emergency power',
      'Telecom towers',
    ],
    specifications: {
      'Voltage': '48V',
      'Capacity': '200Ah',
      'Chemistry': 'Lead-acid',
      'Cycle Life': '>2000 cycles',
      'Weight': '650 kg',
      'Operating Temp': '-20°C to 60°C',
    },
    images: [
      {
        id: 'img-7',
        productId: 'prod-7',
        imageUrl: '/products/battery-48v.jpg',
        altText: 'Industrial Battery 48V',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-8',
    name: 'Air Cooled Servo Stabilizer 100KVA',
    categoryId: 'cat-1',
    subcategoryId: 'cat-1-3',
    description: 'Premium air-cooled servo stabilizer for large installations',
    longDescription: 'Enterprise-grade air-cooled servo stabilizer with advanced servo motor technology. Perfect for large industrial setups requiring stable voltage.',
    price: '₹350,000',
    powerRating: '100KVA',
    phaseType: 'Three',
    applicationType: ['Manufacturing', 'Industrial'],
    features: [
      'Advanced servo control',
      'Air cooling system',
      'Enhanced protection suite',
      'LCD display',
      'Multiple protection modes',
      '5-year warranty',
    ],
    applications: [
      'Large manufacturing plants',
      'Heavy industries',
      'Power distribution centers',
      'Critical applications',
    ],
    specifications: {
      'Input Voltage': '380-420V 3-phase',
      'Output Voltage': '380V ±1%',
      'Capacity': '100 KVA',
      'Cooling': 'Air cooled',
      'Efficiency': '99%',
      'Response Time': '<25ms',
    },
    images: [
      {
        id: 'img-8',
        productId: 'prod-8',
        imageUrl: '/products/servo-100kva.jpg',
        altText: 'Air Cooled Servo Stabilizer 100KVA',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]
