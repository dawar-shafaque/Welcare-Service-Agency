import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const contactItems = [
  { icon: FaPhoneAlt, label: 'Contact us', value: '+91 9875496157', href: 'tel:+919875496157' },
  { icon: FaMapMarkerAlt, label: 'Visit us', value: 'Thakurpukur, Kolkata', href: '#' },
  { icon: FaInstagram, label: 'Follow us', value: '@welcare_service_agency', href: 'https://instagram.com/welcare_service_agency' },
  { icon: FaFacebookF, label: 'Facebook', value: 'Wellcare Service Agency', href: 'https://facebook.com/Wellcare-Service-Agency' }
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1f4d3f] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-3 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center transition hover:-translate-y-1 hover:bg-white/10 sm:rounded-3xl sm:p-6"
            >
              <div className="mb-3 flex justify-center text-2xl text-[#e7c97d] sm:mb-4 sm:text-3xl">
                <Icon />
              </div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#dfeee7] sm:text-sm">{label}</p>
              <p className="mt-2 text-sm font-medium text-white sm:mt-3 sm:text-base">{value}</p>
            </a>
          ))}
        </div>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-[#f5efe4] p-6 text-center text-[#1f4d3f]">
          <p className="text-2xl font-black uppercase tracking-tight">Wellcare for a better life.</p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-3xl text-white">
          <a href="https://instagram.com/welcare_service_agency" target="_blank" rel="noreferrer" className="hover:text-[#f5b5d8]" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/Wellcare-Service-Agency" target="_blank" rel="noreferrer" className="hover:text-[#7cb7ff]" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/919433803782" target="_blank" rel="noreferrer" className="hover:text-[#8fe4a0]" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
}
