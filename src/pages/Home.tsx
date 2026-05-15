import { motion } from 'motion/react';
import { ArrowRight, Code, Globe, ShoppingCart, Palette, TrendingUp, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const services = [
  {
    title: 'Custom Software Development',
    description: 'We build bespoke software solutions tailored to your exact business requirements, ensuring efficiency and a competitive edge.',
    icon: Code,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Web and Mobile App Development',
    description: 'We create responsive and user-friendly websites and mobile applications that connect you with your customers wherever they are.',
    icon: Globe,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'E-commerce Development',
    description: 'Establish your online store with high-performance e-commerce solutions that drive sales and provide seamless customer journeys.',
    icon: ShoppingCart,
    color: 'bg-brand-red/5 text-brand-red',
  },
  {
    title: 'Graphics Design',
    description: 'We create visually appealing and impactful designs to enhance your brand identity and engage your audience effectively.',
    icon: Palette,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Digital Marketing',
    description: 'Our comprehensive strategies help you reach your target audience, build brand awareness, and drive conversions across all channels.',
    icon: TrendingUp,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Managed IT Services',
    description: 'Focus on your core business while we handle your IT infrastructure, security, and maintenance with 24/7 expert support.',
    icon: Cpu,
    color: 'bg-orange-50 text-orange-600',
  },
];

const partners = ['TechGlobal', 'CloudStream', 'InnovateX', 'NairobiHub', 'AfricanTech'];

export default function Home() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 lg:py-32 tech-gradient text-white">
        <div className="absolute inset-0 opacity-20 circuit-pattern pointer-events-none" />
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-20 blur-3xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red rounded-full -mr-64 -mt-64" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
              </span>
              Custom Software Solutions ✨
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] mb-8">
              Driving Intelligent <span className="text-brand-red">Digital Transformation</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl font-medium">
              Off-the-shelf software doesn't always fit your unique business needs. We design and develop bespoke technology that works exactly how you need it to.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/services"
                className="w-full sm:w-auto bg-brand-blue text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-red transition-all shadow-xl shadow-black/20 transform hover:-translate-y-1"
              >
                Learn More <ArrowRight size={20} />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto border border-white/30 px-8 py-4 rounded-xl font-bold text-white hover:bg-white/10 transition-all text-center"
              >
                Start collaborating
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative group border border-white/10">
              <img
                src="/hero-african-tech-team.png"
                alt="African technology team collaborating in a modern office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-4 h-1 bg-brand-red rounded-full shadow-[0_0_10px_#FF1E2D]" />
                    ))}
                  </div>
                  <p className="font-display font-bold text-2xl">Building Business Value</p>
                  <p className="text-white/60 text-sm">Trusted by over 50+ companies in Africa</p>
                </div>
              </div>
            </div>
            
            {/* Floating stat card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass border border-white/20 p-6 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="text-3xl font-display font-bold text-brand-blue">98%</div>
              <div className="text-xs text-brand-blue/60 font-bold uppercase tracking-wider">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 border-y border-gray-100 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Trusted Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner) => (
              <span key={partner} className="font-display text-2xl font-bold text-gray-800">{partner}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6">Our Solutions</h2>
            <p className="text-gray-600 leading-relaxed">
              Driven by innovation and creativity, we partner with businesses and professionals to build powerful digital solutions. From web development and managed IT services to digital marketing and graphic design, we help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                key={service.title}
                className="p-8 bg-white border border-gray-100 rounded-3xl hover:border-brand-blue/30 transition-all hover:shadow-2xl hover:shadow-brand-blue/5 group"
              >
                <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3', service.color)}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/contact" className="text-brand-blue font-bold text-sm flex items-center gap-2 group/btn">
                  Contact Us <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-brand-blue rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--brand-red)_0%,_transparent_70%)]" />
          
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 relative z-10">Ready to Start Your Project?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10 font-medium">
            Following your submission, anticipate a confirmation or further communication regarding the acceptance of your collaboration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white text-brand-blue px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-all shadow-2xl"
            >
              PREPARE Collaboration
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto text-white/90 font-bold px-10 py-5 hover:text-white transition-colors"
            >
              Who we are
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
