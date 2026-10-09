import { FaWhatsapp } from 'react-icons/fa';

const whatsappLink = 'https://wa.me/919433803782';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8d0c3] bg-[#f6f1e8]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="Welcare Service Agency logo"
            className="h-10 w-10 object-contain drop-shadow-sm sm:h-12 sm:w-12"
          />
          <div className="leading-tight">
            <div className="text-base font-black tracking-wide text-[#1f4d3f] sm:text-lg">Welcare</div>
            <div className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#244f40] sm:text-[10px]">
              Service Agency
            </div>
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1f4d3f] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#183a30]"
        >
          <FaWhatsapp className="text-lg" />
          <span>WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
