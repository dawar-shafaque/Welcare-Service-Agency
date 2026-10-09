const whatsappLink = 'https://wa.me/919433803782?text=' + encodeURIComponent('Hello, I would like to know more about your services.');

export default function Hero() {
  return (
    <section className="bg-[#f5efe4] py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#d7cbb2] bg-[#efe7d9] p-4 shadow-sm sm:p-6 lg:p-8">
          <div className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:items-center lg:justify-center lg:gap-4">
            <img
              src="/logo.jpeg"
              alt="Welcare Service Agency logo"
              className="h-[220px] w-auto object-contain drop-shadow-lg sm:h-[260px] lg:h-[300px]"
            />

            <div className="text-center lg:text-left">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#244f40] sm:mb-3 sm:text-base">
                Caring for you,
              </p>
              <h1 className="text-4xl font-black uppercase tracking-tight text-[#1f4d3f] sm:text-5xl lg:text-7xl">
                WELCARE
              </h1>
              <p className="mt-1 text-base font-medium uppercase tracking-[0.22em] text-[#244f40] sm:mt-2 sm:text-xl">
                Service Agency
              </p>
              <p className="mt-4 text-lg italic text-[#244f40]">Every Step of the Way.</p>

              <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
                <a
                  href="#services"
                  className="rounded-full bg-[#1f4d3f] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#173c32]"
                >
                  Explore services
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#1f4d3f] bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#1f4d3f] transition hover:bg-[#ecf4ef]"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
