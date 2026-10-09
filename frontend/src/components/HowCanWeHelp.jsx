import {
  FaUserNurse,
  FaClock,
  FaRupeeSign,
  FaUsers,
  FaStethoscope,
  FaBriefcaseMedical,
  FaCheckCircle
} from 'react-icons/fa';

const features = [
  { icon: FaUserNurse, title: 'Trained & Verified Caregivers' },
  { icon: FaClock, title: '24/7 Support' },
  { icon: FaRupeeSign, title: 'Affordable & Transparent' },
  { icon: FaUsers, title: 'Experienced Staff' },
  { icon: FaStethoscope, title: 'Weekly Doctor Care Facilities' },
  { icon: FaBriefcaseMedical, title: 'Medical Equipment Supplies' }
];

export default function HowCanWeHelp() {
  return (
    <section className="bg-[#1f4d3f] py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] bg-[#1f4d3f] px-3 py-5 sm:px-6">
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
              Home care service center
            </h2>
            <p className="mb-8 max-w-xl text-lg text-[#d8efe5]">
              Compassionate care in the comfort of your home.
            </p>

            <div className="grid grid-cols-2 gap-4 xl:grid-cols-3">
              {[
                'Personal Care',
                'Elderly Care',
                'Medication Reminders',
                'Companionship & Support',
                'Post-Hospital Care',
                'Daily Living Support'
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-medium text-[#edf9f2]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#f5efe4] p-6 text-[#1f4d3f]">
            <h3 className="mb-5 text-2xl font-black uppercase tracking-tight text-[#1f4d3f]">
              Why choose us?
            </h3>
            <div className="space-y-4">
              {features.map(({ icon: Icon, title }) => (
                <div key={title} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dfeee7] text-[#1f4d3f]">
                    <FaCheckCircle />
                  </div>
                  <div className="flex items-center gap-2 text-base font-semibold">
                    <Icon className="text-[#1f4d3f]" />
                    <span>{title}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-dashed border-[#1f4d3f] bg-[#edf6ef] p-4 text-center text-lg font-medium italic">
              We don’t just provide care, we care.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
