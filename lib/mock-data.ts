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
  extraContent?: ServoExtraContent
  brochureUrl?: string
  datastateUrl?: string
  images: ProductImage[]
  createdAt: string
  updatedAt: string
}

export interface ServoExtraContent {
  productCards: {
    id: string
    title: string
    description: string
    badges: string[]
  }[]
  technicalSpecifications: {
    headers: string[]
    rows: string[][]
  }
  airOilComparison: {
    headers: string[]
    rows: string[][]
  }
  balancedUnbalancedComparison: {
    headers: string[]
    rows: string[][]
  }
  availableModels: {
    title: string
    items: string[]
  }[]
  chooseGuides: {
    title: string
    items: string[]
  }[]
  mechanismStages: {
    stage: string
    title: string
    description: string
  }[]
  protectionInfo: {
    title: string
    items: string[]
  }[]
  problemSolutions: {
    problem: string
    solution: string
  }[]
  caseStudies: {
    title: string
    challenge: string
    solution: string
    results: string[]
  }[]
  customizationOptions: string[]
  installationPhases: {
    phase: string
    timing: string
    steps: string
    activities: string
  }[]
  targetIndustries: string[]
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
    name: 'Servo Controlled Voltage Stabilizer',
    categoryId: 'cat-1',
    description: 'High-precision three-phase voltage stabilization for industrial loads.',
    longDescription:
      'Servo controlled voltage stabilizers deliver ultra-stable 415V output with fast correction and robust protection for critical industrial processes.',
    price: 'Custom Quote',
    powerRating: '3-1000 KVA',
    phaseType: 'Three',
    applicationType: ['Manufacturing', 'Power Systems', 'Industrial', 'Commercial', 'Data Centers'],
    features: [
      'Dual cooling technology: air (3-250 KVA) and oil (25-1000 KVA) variants',
      'Balanced and unbalanced load handling with single or triple servo motors',
      'Ultra-wide input voltage range with fast 40-70V/sec correction',
      'High precision regulation at 415V +/-0.5% with <20ms response',
      'Advanced microcontroller with LCD monitoring and self-teaching panel',
      'IoT remote monitoring with alerts and historical data logging',
      'Generator (DG set) compatibility with frequency variation tolerance',
      'High efficiency: 97% air-cooled, 98% oil-cooled',
      'Built-in bypass system with quick changeover',
      'Rugged industrial construction with CRGO core and copper windings',
      'Variable speed servo motor for smooth, fast correction',
      'Multi-layer protection for phase, overload, surge, and neutral faults',
    ],
    applications: [
      'Pharmaceuticals',
      'Textiles',
      'Chemicals & Petrochemicals',
      'Food Processing',
      'Cold Storage',
      'Heavy Manufacturing',
      'Metal Industries',
      'CNC & Precision Machining',
      'Data Centers',
      'Commercial Buildings',
      'Hotels',
      'Sewage Treatment',
    ],
    specifications: {
      'Input Voltage Range': 'Standard 360-460V; Wide 340-480V; Custom 300-500V (oil 250-500V)',
      'Output Voltage': '415V AC +/-1% (adjustable +/-6%)',
      'Output Accuracy': '+/-0.5%',
      'Frequency': '50 Hz +/-5%',
      'Efficiency': '97-98% at rated load',
      'Response Time': '<20 ms (air), <15 ms (oil)',
    },
    extraContent: {
      productCards: [
        {
          id: 'prod-8',
          title: 'Air Cooled Servo Controlled Stabilizer',
          description: 'Compact, low-noise stabilizer for 3-250 KVA applications.',
          badges: ['3-250 KVA', 'Three Phase', 'Natural/Forced Air'],
        },
        {
          id: 'prod-9',
          title: 'Oil Cooled Servo Stabilizer',
          description: 'Heavy-duty stabilizer for 25-1000 KVA continuous operation.',
          badges: ['25-1000 KVA', 'Three Phase', 'BS 335 Oil'],
        },
      ],
      technicalSpecifications: {
        headers: ['Parameter', 'Air-Cooled (3-250 KVA)', 'Oil-Cooled (25-1000 KVA)'],
        rows: [
          ['Capacity Range', '3 KVA to 250 KVA', '25 KVA to 1000 KVA'],
          ['Phase', 'Three Phase', 'Three Phase'],
          ['Construction Type', 'Balanced / Unbalanced', 'Balanced / Unbalanced'],
          [
            'Input Voltage Range',
            'Standard 360V-460V; Wide 340V-480V; Custom 300V-500V',
            'Standard 360V-460V; Wide 340V-480V; Custom 250V-500V',
          ],
          ['Output Voltage', '415V AC +/-1% (Adjustable +/-6%)', '415V AC +/-1% (Adjustable +/-6%)'],
          ['Output Voltage Accuracy', '+/-0.5% (Ultra-precision)', '+/-0.5% (Ultra-precision)'],
          ['Frequency', '50 Hz +/-5%', '50 Hz +/-5%'],
          ['Voltage Correction Rate', '40-60V per second', '50-70V per second'],
          ['Response Time', '<20 milliseconds', '<15 milliseconds'],
          ['Cooling Type', 'Natural / Forced Air Cooling', 'Oil cooled (BS 335 standard oil)'],
          ['Efficiency', '>=97% at rated load', '>=98% at rated load'],
          ['Waveform', 'Pure sinusoidal (THD <3%)', 'Pure sinusoidal (THD <2%)'],
        ],
      },
      airOilComparison: {
        headers: ['Feature', 'Air-Cooled (3-250 KVA)', 'Oil-Cooled (25-1000 KVA)'],
        rows: [
          ['Cooling Medium', 'Natural / Forced Air', 'BS 335 transformer oil'],
          ['Size & Weight', 'Compact, lightweight', 'Larger, heavier'],
          ['Noise Level', 'Very low (silent)', 'Low'],
          ['Maintenance', 'Minimal (periodic cleaning)', 'Regular (oil level check, quality testing)'],
          ['Installation', 'Simple, plug-and-play', 'Professional installation required'],
          ['Environment', 'Indoor, controlled', 'Indoor/outdoor with enclosure'],
          ['Heat Dissipation', 'Good (requires ventilation)', 'Excellent (superior cooling)'],
          ['Component Life', '10-15 years', '15-20 years'],
          ['Efficiency', '97%', '98%'],
          ['Continuous Operation', 'Suitable for 20-22 hrs/day', 'Designed for 24/7 operation'],
          ['Ambient Temperature', 'Up to 45C', 'Up to 50C'],
          ['Initial Cost', 'Lower', 'Higher'],
          ['Best For', 'Small-medium industries, commercial applications', 'Heavy industries, continuous operations'],
        ],
      },
      balancedUnbalancedComparison: {
        headers: ['Parameter', 'Balanced Type (Single Motor)', 'Unbalanced Type (3 Independent Motors)'],
        rows: [
          ['Motor Setup', 'Single servo motor for all 3 phases', '3 separate servo motors (one per phase)'],
          ['Phase Sensing', 'R-Y phase reference only', 'Independent sensing for R, Y, B phases'],
          ['Correction Method', 'All 3 phases corrected simultaneously', 'Each phase corrected independently'],
          ['Best Load Type', 'Symmetrical / balanced industrial loads', 'Asymmetric, mixed single and three-phase loads'],
          ['Input Supply Requirement', 'Requires balanced three-phase input', 'Works with unbalanced input supply'],
          ['Imbalance Tolerance', 'Not recommended above 10% imbalance', 'Handles any level of phase imbalance'],
          ['Accuracy per Phase', '+/-0.5% (all phases together)', '+/-0.5% independently per phase'],
          ['Complexity', 'Simpler construction', 'More complex (3 motors to coordinate)'],
          ['Maintenance', 'Easier maintenance', 'More components to maintain'],
          ['Initial Cost', 'Lower', 'Higher'],
          ['Modern Industrial Fit', 'Standard applications', 'Recommended for most modern setups'],
        ],
      },
      availableModels: [
        {
          title: 'Air-Cooled Range',
          items: [
            '3 KVA',
            '7.5 KVA',
            '10 KVA',
            '15 KVA',
            '20 KVA',
            '75 KVA',
            '80 KVA',
            '100 KVA',
            'Up to 250 KVA',
          ],
        },
        {
          title: 'Oil-Cooled Range',
          items: [
            '25 KVA',
            '125 KVA',
            '150 KVA',
            '175 KVA',
            '200 KVA',
            '250 KVA',
            '300 KVA',
            '350 KVA',
            '400 KVA',
            '500 KVA',
            '600 KVA',
            '750 KVA',
            '800 KVA',
            '1000 KVA',
          ],
        },
      ],
      chooseGuides: [
        {
          title: 'Choose Air-Cooled when',
          items: [
            'Capacity requirement below 250 KVA',
            'Well-ventilated indoor spaces',
            'Noise level is a concern (offices)',
            'Budget constraints exist',
            'Easier maintenance is preferred',
            'Space is limited',
          ],
        },
        {
          title: 'Choose Oil-Cooled when',
          items: [
            'Capacity requirement exceeds 25 KVA',
            '24/7 continuous operation is needed',
            'High-temperature environments',
            'Maximum reliability is required',
            'Heavy industrial applications',
            'Better heat dissipation is critical',
          ],
        },
      ],
      mechanismStages: [
        {
          stage: '1',
          title: 'Continuous Monitoring',
          description:
            'Microcontroller monitors R, Y, B phase voltages simultaneously and tracks voltage, current, frequency, and power factor.',
        },
        {
          stage: '2',
          title: 'Comparison & Analysis',
          description:
            'Controller compares actual phase voltages with the 415V reference and calculates deviation per phase.',
        },
        {
          stage: '3',
          title: 'Intelligent Decision Making',
          description:
            'Microprocessor generates error signals and determines optimal servo motor rotation speed and direction.',
        },
        {
          stage: '4',
          title: 'Servo Motor Activation',
          description:
            'Variable-speed, high-torque AC servo motor rotates in proportion to voltage deviation.',
        },
        {
          stage: '5',
          title: 'Auto-Transformer Adjustment',
          description:
            'Servo motor drives the variac; carbon brushes move across windings to adjust active turns.',
        },
        {
          stage: '6',
          title: 'Buck-Boost Transformation',
          description:
            'Adjusted voltage feeds into a buck-boost transformer to add or subtract voltage from the supply.',
        },
        {
          stage: '7',
          title: 'Stable Output Delivery',
          description:
            'Corrected three-phase voltage is maintained at 415V +/-0.5% with pure sinusoidal output.',
        },
        {
          stage: '8',
          title: 'Feedback Loop',
          description:
            'Output voltage is continuously fed back to the controller for real-time millisecond correction.',
        },
      ],
      protectionInfo: [
        {
          title: 'Protection Features',
          items: [
            'Phase reversal protection',
            'Single phasing protection',
            'Overload protection (electronic trip)',
            'Short circuit (MCCB)',
            'High voltage cutoff (user-settable)',
            'Low voltage cutoff (user-settable)',
            'Surge control protection',
            'Neutral failure protection',
            'Output overload protection',
            'Phase missing / reversal alarm',
          ],
        },
        {
          title: 'Indications & Alarms',
          items: [
            'Mains ON indicator',
            'Output ON indicator',
            'Over voltage alarm',
            'Under voltage alarm',
            'Single phasing trip indicator',
            'Overload trip indicator',
            'Fault condition buzzer',
          ],
        },
        {
          title: 'Standards Compliance',
          items: [
            'IEC 60038 (Standard Voltages)',
            'IEC 61000 (EMC Standards)',
            'BIS standards compliant',
            'ISO 9001:2015 certified',
            'Environmental tests certified',
            'Performance tests validated',
          ],
        },
      ],
      problemSolutions: [
        {
          problem: 'Problem 1 - Production Downtime',
          solution:
            'Precision regulation and <20ms response prevent voltage trips. IoT monitoring provides early alerts.',
        },
        {
          problem: 'Problem 2 - Equipment Damage',
          solution:
            'Multi-layer protection extends equipment life and reduces breakdown maintenance significantly.',
        },
        {
          problem: 'Problem 3 - Product Quality Issues',
          solution:
            'Consistent +/-0.5% voltage ensures CNC tolerance stability and process quality compliance.',
        },
        {
          problem: 'Problem 4 - Process Instability',
          solution:
            'Stable voltage reduces defects and improves batch consistency in sensitive processes.',
        },
        {
          problem: 'Problem 5 - Three-Phase Motor Failures',
          solution:
            'Unbalanced type with independent phase correction prevents single-phasing and motor burnouts.',
        },
        {
          problem: 'Problem 6 - Generator Compatibility',
          solution:
            'Special circuit handles frequency variation and rapid load changes for DG set operation.',
        },
        {
          problem: 'Problem 7 - No Real-Time Monitoring',
          solution: 'IoT monitoring provides visibility, alerts, and historical trend analysis.',
        },
        {
          problem: 'Problem 8 - Maintenance Burden',
          solution:
            'Industrial-grade components and self-diagnostics reduce service frequency and downtime.',
        },
      ],
      caseStudies: [
        {
          title: 'Pharmaceutical Plant, Pune',
          challenge: '125 KVA load with frequent voltage trips causing large batch losses.',
          solution:
            '150 KVA oil-cooled unbalanced servo with IoT (input 340-480V, output 415V +/-0.5%).',
          results: [
            'Zero voltage trips in 3 years',
            'Significant batch loss eliminated',
            '65% reduction in equipment maintenance',
            'ROI in 14 months with 99.8% uptime',
          ],
        },
        {
          title: 'Textile Mill',
          challenge: 'Fabric rejections and frequent motor failures impacting productivity.',
          solution: 'Unbalanced servo stabilizer with phase protection and fast correction.',
          results: [
            'Fabric rejection reduced from 8% to 1.2%',
            'Zero motor failures in 2.5 years',
            'Production efficiency improved by 12%',
            'Payback achieved in 16 months',
          ],
        },
        {
          title: 'Cold Storage Facility',
          challenge: 'Compressor tripping during voltage dips causing temperature fluctuations.',
          solution:
            '350 KVA oil-cooled balanced servo with wide input range and generator compatibility.',
          results: [
            'Temperature maintained within +/-1C',
            'Zero spoilage incidents',
            'Compressor life extended by ~5 years',
            'Annual savings reported at INR 18 lakh',
          ],
        },
      ],
      customizationOptions: [
        'Custom input voltage ranges (250V-500V or any specification)',
        'Custom output voltages (360V / 380V / 400V / 415V / 440V)',
        'Special enclosures (weatherproof, corrosion-resistant, ATEX-compliant)',
        'Custom control panels with specific instrumentation',
        'Integration with existing SCADA/automation systems',
        'Multi-stabilizer synchronized systems for large loads',
      ],
      installationPhases: [
        {
          phase: 'Phase 1',
          timing: 'Week 1',
          steps: 'Site survey, load analysis, custom design',
          activities:
            'Load assessment, voltage quality measurement, balanced vs unbalanced recommendation, enclosure design, electrical drawings',
        },
        {
          phase: 'Phase 2',
          timing: 'Week 2-3',
          steps: 'Installation',
          activities:
            'Foundation preparation, cable sizing, earthing verification, delivery and positioning, electrical installation, neutral bonding',
        },
        {
          phase: 'Phase 3',
          timing: 'Week 3-4',
          steps: 'Testing & commissioning',
          activities:
            'Insulation testing, phase sequence verification, load testing (25/50/75/100%), response time and overload tests, IoT configuration',
        },
        {
          phase: 'Phase 4',
          timing: 'Handover',
          steps: 'Training & documentation',
          activities:
            'Operator training, emergency bypass procedure, basic troubleshooting, documentation handover, warranty and AMC proposal',
        },
      ],
      targetIndustries: [
        'Pharmaceuticals',
        'Textiles',
        'Chemicals & Petrochemicals',
        'Food Processing',
        'Cold Storage',
        'Heavy Manufacturing',
        'Metal Industries',
        'CNC & Precision Machining',
        'Data Centers',
        'Commercial Buildings',
        'Hotels',
        'Sewage Treatment',
      ],
    },
    images: [
      {
        id: 'img-1',
        productId: 'prod-1',
        imageUrl: '/products/servo-controlled.png',
        altText: 'Servo Controlled Voltage Stabilizer',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-2',
    name: 'Online UPS',
    categoryId: 'cat-4',
    description: 'Double-conversion online UPS for critical power protection.',
    longDescription:
      'Online UPS systems provide clean, uninterrupted power with fast transfer and battery backup for mission-critical equipment.',
    price: 'Custom Quote',
    powerRating: '10KVA',
    phaseType: 'Three',
    applicationType: ['Power Systems', 'Data Centers'],
    features: [
      'Double conversion topology',
      'High power factor',
      'Low harmonic distortion output',
      'Smart battery management',
    ],
    applications: [
      'Data centers',
      'Hospitals',
      'Industrial automation',
      'Banking systems',
    ],
    specifications: {
      'Input Voltage': '380V 3-phase',
      'Output Voltage': '415V +/-2%',
      'Backup Time': 'Configurable',
    },
    images: [
      {
        id: 'img-2',
        productId: 'prod-2',
        imageUrl: '/products/online-ups.png',
        altText: 'Online UPS',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-3',
    name: 'Electric Panel',
    categoryId: 'cat-3',
    description: 'Custom electric panels for protection, distribution, and control.',
    longDescription:
      'Electric panels engineered for safe distribution and precise control with reliable protection and monitoring.',
    price: 'Custom Quote',
    powerRating: '100A',
    phaseType: 'Three',
    applicationType: ['Manufacturing', 'Commercial'],
    features: [
      'Modular design with certified components',
      'MCCB and relay-based protection',
      'Clear labeling and wiring standards',
      'Easy maintenance access',
    ],
    applications: [
      'Factories',
      'Commercial buildings',
      'Infrastructure projects',
    ],
    specifications: {
      'Protection': 'MCCB/MCB with overload and short-circuit',
      'Enclosure': 'Powder-coated steel, IP rated',
      'Standards': 'IEC and BIS compliant',
    },
    images: [
      {
        id: 'img-3',
        productId: 'prod-3',
        imageUrl: '/products/electric-panel.png',
        altText: 'Electric Panel',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-4',
    name: 'Industrial Transformer',
    categoryId: 'cat-2',
    description: 'Industrial transformers for step up, step down, and isolation needs.',
    longDescription:
      'Industrial transformers built for reliable voltage conversion with high efficiency and robust thermal design.',
    price: 'Custom Quote',
    powerRating: '30KVA',
    phaseType: 'Three',
    applicationType: ['Manufacturing', 'Industrial'],
    features: [
      'Low-loss CRGO core',
      'High thermal endurance',
      'Robust insulation system',
      'Overload and short-circuit resilience',
    ],
    applications: [
      'Manufacturing plants',
      'Steel mills',
      'Chemical facilities',
      'Power distribution',
    ],
    specifications: {
      'Input Voltage': '11kV 3-phase',
      'Output Voltage': '415V 3-phase',
      'Cooling': 'Oil immersed or dry type',
    },
    images: [
      {
        id: 'img-4',
        productId: 'prod-4',
        imageUrl: '/products/transformer.png',
        altText: 'Industrial Transformer',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-5',
    name: 'Industrial Inverter',
    categoryId: 'cat-5',
    description: 'Pure sine wave inverters for dependable backup and conversion.',
    longDescription:
      'Industrial inverters deliver stable AC power from DC sources with high efficiency and low distortion.',
    price: 'Custom Quote',
    powerRating: '5KW',
    phaseType: 'Single',
    applicationType: ['Energy', 'Power Systems'],
    features: [
      'Pure sine wave output',
      'High efficiency design',
      'Multiple input protections',
      'Compact industrial enclosure',
    ],
    applications: [
      'Solar installations',
      'Backup power systems',
      'Remote sites',
    ],
    specifications: {
      'Input Voltage': '48V DC',
      'Output Voltage': '230V AC',
      'Efficiency': '94%',
    },
    images: [
      {
        id: 'img-5',
        productId: 'prod-5',
        imageUrl: '/products/inverter.png',
        altText: 'Industrial Inverter',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-6',
    name: 'Phase Sequence Corrector',
    categoryId: 'cat-6',
    description: 'Automatic phase sequence correction and protection device.',
    longDescription:
      'Phase sequence correctors automatically detect and correct phase reversals to protect three-phase equipment.',
    price: 'Custom Quote',
    powerRating: '100A',
    phaseType: 'Three',
    applicationType: ['Manufacturing', 'Power Systems'],
    features: [
      'Automatic phase correction',
      'Phase failure detection',
      'Fast response time',
      'Compact DIN-rail option',
    ],
    applications: [
      'Factories',
      'Industrial facilities',
      'Power distribution',
    ],
    specifications: {
      'Input Voltage': '380V 3-phase',
      'Response Time': '<100ms',
      'Efficiency': '99%',
    },
    images: [
      {
        id: 'img-6',
        productId: 'prod-6',
        imageUrl: '/products/phase-sequence-corrector.png',
        altText: 'Phase Sequence Corrector',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-7',
    name: 'All Types Batteries',
    categoryId: 'cat-7',
    description: 'Industrial batteries for backup, telecom, and energy storage.',
    longDescription:
      'All types of industrial batteries engineered for long cycle life and dependable backup power.',
    price: 'Custom Quote',
    powerRating: '200Ah',
    phaseType: 'Single',
    applicationType: ['Energy', 'Power Systems'],
    features: [
      'Long cycle life',
      'Low self-discharge',
      'Safety certified',
    ],
    applications: [
      'Backup power',
      'Solar installations',
      'Telecom towers',
    ],
    specifications: {
      'Voltage': '48V',
      'Chemistry': 'Lead-acid / lithium options',
      'Cycle Life': '2000+ cycles',
    },
    images: [
      {
        id: 'img-7',
        productId: 'prod-7',
        imageUrl: '/products/batteries.png',
        altText: 'All Types Batteries',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-8',
    name: 'Air Cooled Servo Controlled Stabilizer',
    categoryId: 'cat-1',
    subcategoryId: 'cat-1-3',
    description: 'Compact, low-noise stabilizer for 3-250 KVA applications.',
    longDescription:
      'Air-cooled servo stabilizers offer reliable voltage regulation with minimal maintenance and compact footprint.',
    price: 'Custom Quote',
    powerRating: '3-250 KVA',
    phaseType: 'Three',
    applicationType: ['Industrial', 'Commercial'],
    features: [
      'Natural or forced air cooling',
      'Low noise operation',
      'Compact installation footprint',
      'Fast correction response',
    ],
    applications: [
      'Small to medium industries',
      'Commercial facilities',
      'Indoor installations',
    ],
    specifications: {
      'Input Voltage Range': 'Standard 360-460V, Wide 340-480V',
      'Output Voltage': '415V AC +/-1%',
      'Response Time': '<20 ms',
    },
    images: [
      {
        id: 'img-8',
        productId: 'prod-8',
        imageUrl: '/products/servo-air.png',
        altText: 'Air Cooled Servo Stabilizer',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'prod-9',
    name: 'Oil Cooled Servo Stabilizer',
    categoryId: 'cat-1',
    subcategoryId: 'cat-1-2',
    description: 'Heavy-duty stabilizer designed for 24/7 industrial operation.',
    longDescription:
      'Oil-cooled servo stabilizers deliver superior heat dissipation and reliability for high capacity loads.',
    price: 'Custom Quote',
    powerRating: '25-1000 KVA',
    phaseType: 'Three',
    applicationType: ['Industrial', 'Manufacturing'],
    features: [
      'BS 335 transformer oil cooling',
      'Designed for continuous operation',
      'Higher efficiency at rated load',
      'Suitable for harsh environments',
    ],
    applications: ['Heavy industries', 'Continuous operations', 'Outdoor enclosures'],
    specifications: {
      'Input Voltage Range': 'Standard 360-460V, Wide 340-480V, Custom 250-500V',
      'Output Voltage': '415V AC +/-1%',
      'Response Time': '<15 ms',
    },
    images: [
      {
        id: 'img-9',
        productId: 'prod-9',
        imageUrl: '/products/servo-oil.png',
        altText: 'Oil Cooled Servo Stabilizer',
        displayOrder: 1,
      },
    ],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]
