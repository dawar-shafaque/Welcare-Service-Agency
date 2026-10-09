const services = [
  {
    id: 'home-health-care',
    name: 'Home Health Care',
    description:
      'Professional home care support for individuals who need consistent medical attention, comfort, and companionship in the safety of home.',
    icon: '🏥',
    subServices: [
      {
        id: 'bedside-nurses',
        name: '24/7 bedside trained nurses available',
        description:
          'Round-the-clock nursing care from trained bedside staff for continuous monitoring, comfort, and support.',
        template: 'I want to book the 24/7 bedside trained nurses service.'
      },
      {
        id: 'medication-primary-care',
        name: 'Medication and primary care',
        description:
          'Responsible medication management, health monitoring, and everyday primary care routines tailored to the patient.',
        template: 'I want to book the medication and primary care service.'
      },
      {
        id: 'weekly-doctor-visit',
        name: 'Weekly 1 doctor visit',
        description:
          'Regular doctor consultations to monitor recovery, support treatment plans, and improve long-term health outcomes.',
        template: 'I want to book the weekly doctor visit service.'
      }
    ]
  },
  {
    id: 'medical-equipment',
    name: 'Medical Equipment',
    description:
      'Reliable medical equipment and support solutions that help families manage health needs at home with confidence.',
    icon: '🩺',
    subServices: [
      {
        id: 'medical-equipment-supply',
        name: 'Medical equipment',
        description:
          'Access to essential equipment for safe, practical, and comfortable home care.',
        template: 'I want to enquire about medical equipment.'
      }
    ]
  },
  {
    id: 'teleconsultation',
    name: 'Teleconsultation',
    description:
      'Get expert medical guidance from the comfort of your home through trusted online consultations and remote support.',
    icon: '📞',
    subServices: [
      {
        id: 'online-consultation',
        name: 'Teleconsultation',
        description:
          'Schedule a virtual consultation with healthcare professionals for advice, follow-ups, and support.',
        template: 'I want to book a teleconsultation.'
      }
    ]
  }
];

module.exports = { services };
