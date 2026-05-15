import { motion } from 'motion/react';
import { Target, Eye, Quote, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6 tech-gradient overflow-hidden relative text-white">
        <div className="absolute inset-0 opacity-10 circuit-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold mb-8"
            >
                About Kognizan Technologies
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-display font-extrabold mb-10 leading-tight"
            >
                Empowering Businesses in the <span className="text-brand-red">Digital Era</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
            >
                Kognizan Technologies Limited is a dynamic IT solutions provider located at The Prism Tower in Nairobi. We specialize in delivering cutting-edge software and managed IT services designed to help you thrive.
            </motion.p>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="relative max-w-5xl mx-auto"
            >
                <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069" 
                    alt="Office Space" 
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl border border-white/10" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl md:flex hidden">
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white">
                        <Award size={32} />
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-light-bg">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                  { label: 'Projects Completed', value: '120+', icon: Target },
                  { label: 'Expert Engineers', value: '25+', icon: Users },
                  { label: 'Years Experience', value: '8+', icon: Clock },
                  { label: 'Client Retention', value: '96%', icon: Award },
              ].map((stat, i) => (
                  <div key={i} className="text-center p-8 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-blue/20 transition-all group">
                      <div className="w-12 h-12 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue mx-auto mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all">
                          <stat.icon size={24} />
                      </div>
                      <div className="text-3xl font-display font-bold text-neutral-dark mb-1">{stat.value}</div>
                      <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
              ))}
          </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="relative p-10 bg-brand-blue rounded-3xl text-white shadow-2xl shadow-brand-blue/20 group">
                  <div className="absolute top-6 right-6 opacity-20 transition-transform group-hover:scale-110">
                      <Target size={120} />
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                      <Target size={24} />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4">Our Mission</h2>
                  <p className="text-white/80 leading-relaxed text-lg">
                    To empower businesses through innovative technology solutions. We are committed to simplifying technology for our clients, delivering cutting-edge IT services that drive growth and success.
                  </p>
              </div>

              <div className="relative p-10 bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-100 group">
                  <div className="absolute top-6 right-6 opacity-5 text-brand-blue transition-transform group-hover:scale-110">
                      <Eye size={120} />
                  </div>
                  <div className="w-12 h-12 bg-brand-blue/5 rounded-xl flex items-center justify-center mb-6 text-brand-blue">
                      <Eye size={24} />
                  </div>
                  <h2 className="text-3xl font-display font-bold mb-4">Our Vision</h2>
                  <p className="text-gray-500 leading-relaxed text-lg">
                    We envision a future where Kognizan Technologies stands as the leading provider of transformative technology solutions across Africa, enabling businesses to realize their full potential.
                  </p>
              </div>
            </div>

            <div className="bg-brand-blue/5 p-8 lg:p-16 rounded-[3rem] relative">
               <div className="absolute -top-6 -right-6 w-12 h-12 bg-brand-red rounded-full" />
               <Quote className="text-brand-blue/20 mb-8" size={64} />
               <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 leading-relaxed">
                   Message from Board Chair
               </h3>
               <p className="text-gray-600 italic text-xl leading-relaxed mb-10">
                   "Welcome to Kognizan. Our mission is simple: to empower your business through smart, effective technology solutions. We're focused on the future and committed to providing you with the tools and expertise you need to thrive in the digital age. Let's build that future together."
               </p>
               <div className="flex items-center gap-4">
                   <div className="w-14 h-14 bg-gray-200 rounded-full border-2 border-white overflow-hidden shadow-lg">
                       <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" />
                   </div>
                   <div>
                       <div className="font-display font-bold text-gray-900">Dr. Samuel K.</div>
                       <div className="text-brand-blue text-sm font-bold">Chairman, Kognizan Group</div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
            <h2 className="text-4xl font-display font-bold mb-8">Ready to evolve your business?</h2>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-brand-red transition-all shadow-xl shadow-brand-blue/20">
                Start collaborating
            </Link>
      </section>
    </div>
  );
}
