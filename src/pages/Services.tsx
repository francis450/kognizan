import { motion } from 'motion/react';
import { Code, Globe, ShoppingCart, Palette, TrendingUp, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const services = [
  {
    title: 'Custom Software Development',
    description: 'We build bespoke software solutions tailored to your exact business requirements, ensuring efficiency and a competitive edge.',
    icon: Code,
    color: 'bg-blue-50 text-blue-600',
    features: ['Agile Development', 'Legacy Migration', 'System Integration', 'API Development']
  },
  {
    title: 'Web and Mobile App Development',
    description: 'We create responsive and user-friendly websites and mobile applications that connect you with your customers wherever they are.',
    icon: Globe,
    color: 'bg-indigo-50 text-indigo-600',
    features: ['Progressive Web Apps', 'Native iOS/Android', 'Cross-platform (Flutter)', 'UI/UX Design']
  },
  {
    title: 'E-commerce Development',
    description: 'Establish your online store with high-performance e-commerce solutions that drive sales and provide seamless customer journeys.',
    icon: ShoppingCart,
    color: 'bg-brand-red/5 text-brand-red',
    features: ['Shopify/WooCommerce', 'Payment Gateway Integration', 'Inventory Management', 'Order Tracking']
  },
  {
    title: 'Graphics Design',
    description: 'We create visually appealing and impactful designs to enhance your brand identity and engage your audience effectively.',
    icon: Palette,
    color: 'bg-purple-50 text-purple-600',
    features: ['Logo & Branding', 'Print Design', 'Social Media Graphics', '3D Illustrations']
  },
  {
    title: 'Digital Marketing',
    description: 'Our comprehensive strategies help you reach your target audience, build brand awareness, and drive conversions across all channels.',
    icon: TrendingUp,
    color: 'bg-emerald-50 text-emerald-600',
    features: ['SEO/SEM', 'Content Marketing', 'Analytics Reporting', 'Social Strategy']
  },
  {
    title: 'Managed IT Services',
    description: 'Focus on your core business while we handle your IT infrastructure, security, and maintenance with 24/7 expert support.',
    icon: Cpu,
    color: 'bg-orange-50 text-orange-600',
    features: ['Cybersecurity', 'Cloud Management', 'IT Support/Helpdesk', 'Disaster Recovery']
  },
];

export default function Services() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6 tech-gradient relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 circuit-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <TrendingUp size={24} className="text-brand-red shadow-[0_0_15px_#FF1E2D]" />
            <span className="font-bold text-sm tracking-widest uppercase text-white/90">Elevate your business today</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-extrabold mb-8"
          >
            Enabling Your <span className="text-brand-red italic underline decoration-brand-red/30">Digital Transformation</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed font-medium"
          >
            At Kognizan Technologies, we provide a comprehensive suite of IT solutions designed to help businesses of all sizes achieve their digital goals in the modern landscape.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-light-bg">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-brand-blue/30 transition-all group flex flex-col h-full"
            >
              <div className={cn("w-16 h-16 rounded-xl flex items-center justify-center mb-8 transform transition-transform group-hover:scale-110 group-hover:-rotate-3", service.color)}>
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow font-medium">
                {service.description}
              </p>
              
              <div className="space-y-3 mb-10">
                {service.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm font-semibold text-neutral-dark/80">
                    <CheckCircle2 size={16} className="text-brand-blue shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact" 
                className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-brand-blue hover:text-white text-neutral-dark hover:shadow-lg hover:shadow-brand-blue/20 font-bold py-4 rounded-xl transition-all"
              >
                Get Started <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6 text-center bg-white">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-display font-bold mb-6">Expertise You Can Count On</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12">
                  Our team of experts delivers high-quality services across a range of areas, ensuring you have the tools and support you need to succeed in today's competitive landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                      <span className="w-2 h-2 bg-brand-blue rounded-full" /> 24/7 Support
                  </div>
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                      <span className="w-2 h-2 bg-brand-red rounded-full" /> Expert Team
                  </div>
                  <div className="flex items-center gap-2 font-bold text-gray-800">
                      <span className="w-2 h-2 bg-orange-400 rounded-full" /> Fast Delivery
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
