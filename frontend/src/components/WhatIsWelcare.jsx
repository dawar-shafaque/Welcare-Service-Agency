export default function WhatIsWelcare() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">What is Welcare</p>
          <h2 className="section-title">A caring approach to everyday healthcare.</h2>

          <div className="mt-6 space-y-5 text-lg leading-8 text-gray-700">
            <p>
              Welcare Service Agency is a trusted home healthcare service focused on making quality medical and personal care more accessible to everyone.
            </p>
            <p>
              We combine trained caregivers, regular clinical support, and practical home healthcare solutions so that patients and families can receive compassionate care in a familiar and comfortable environment.
            </p>
            <p>
              Our focus is simple: bring skilled support, dignity, and peace of mind directly to your home.
            </p>
          </div>
        </div>

        <div className="order-1 overflow-hidden rounded-[2rem] border border-[#cfead9] bg-gradient-to-br from-[#e8f5ee] via-[#f7faf8] to-[#eef9f1] p-3 shadow-[0_18px_45px_rgba(31,77,63,0.08)] lg:order-2 lg:p-4">
          <div className="aspect-[4/3] overflow-hidden rounded-[1.6rem] bg-white/60 shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
              alt="Healthcare professional consulting a patient"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
