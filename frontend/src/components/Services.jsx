import { useEffect, useState } from 'react';
import { FaArrowRight, FaHome, FaStethoscope, FaVideo, FaBriefcaseMedical } from 'react-icons/fa';

const baseWhatsAppLink = 'https://wa.me/919433803782?text=';

const serviceIconMap = {
  'home-health-care': FaHome,
  'medical-equipment': FaStethoscope,
  'teleconsultation': FaVideo,
};

export default function Services() {
  const [services, setServices] = useState([]);
  const [expandedService, setExpandedService] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch(() => {
        setServices([
          {
            id: 'home-health-care',
            name: 'Home Health Care',
            description: 'Professional home healthcare support with trained nurses and care professionals.',
            subServices: [
              { id: 'bedside-nurses', name: '24/7 bedside trained nurses available', description: 'For continuous care and support.' },
              { id: 'medication-primary-care', name: 'Medication and primary care', description: 'For prescriptions and regular health routines.' },
              { id: 'weekly-doctor-visit', name: 'Weekly 1 doctor visit', description: 'For routine examinations and health monitoring.' }
            ]
          },
          {
            id: 'medical-equipment',
            name: 'Medical Equipment',
            description: 'Reliable equipment and supplies for home health and recovery support.',
            subServices: [
              { id: 'medical-equipment-supply', name: 'Medical equipment', description: 'Essential devices and equipment for home use.' }
            ]
          },
          {
            id: 'teleconsultation',
            name: 'Teleconsultation',
            description: 'Virtual consultations for medical advice without the need to travel.',
            subServices: [
              { id: 'online-consultation', name: 'Teleconsultation', description: 'Consult with doctors remotely.' }
            ]
          }
        ]);
      });
  }, []);

  const handleBookService = (serviceName, subServiceName) => {
    const message = `Hello, I want to book this service: ${serviceName} - ${subServiceName}. Please contact me.`;
    window.open(`${baseWhatsAppLink}${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Our services</p>
          <h2 className="section-title">Solutions for every need</h2>
        </div>

        <div className="-mx-4 overflow-x-auto pb-4 lg:mx-0 lg:overflow-visible lg:pb-0">
          <div className="flex gap-6 px-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:px-0">
            {services.map((service) => {
              const Icon = serviceIconMap[service.id] || FaBriefcaseMedical;

              return (
                <div
                  key={service.id}
                  className="card-shadow w-[78vw] shrink-0 rounded-[2rem] border border-green-100 bg-slate-50 p-6 sm:w-[28rem] lg:w-auto"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-[#dff3e7] text-[#1f4d3f] ring-1 ring-[#bfe2c5]">
                      <Icon className="text-3xl" />
                    </div>
                    <button
                      onClick={() => setExpandedService(expandedService === service.id ? '' : service.id)}
                      className="rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-semibold text-green-700"
                    >
                      {expandedService === service.id ? 'Hide' : 'View'}
                    </button>
                  </div>

                <h3 className="mb-3 text-2xl font-bold text-gray-900">{service.name}</h3>
                <p className="mb-6 text-base leading-7 text-gray-600">{service.description}</p>

                  {expandedService === service.id && (
                    <div className="space-y-4 border-t border-green-100 pt-5">
                      {service.subServices?.map((subService) => (
                        <div key={subService.id} className="rounded-2xl bg-white p-4 shadow-sm">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-base font-bold text-gray-900">{subService.name}</p>
                              <p className="mt-2 text-sm leading-6 text-gray-600">{subService.description}</p>
                            </div>
                            <button
                              onClick={() => handleBookService(service.name, subService.name)}
                              className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-700"
                              aria-label={`Book ${subService.name}`}
                            >
                              <FaArrowRight />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
