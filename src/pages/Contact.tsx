import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 lg:py-32 px-6 tech-gradient relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 circuit-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-display font-extrabold mb-8 leading-tight"
          >
            Don't hesitate to <span className="text-brand-red italic">reach out</span> to us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
          >
            Ready to discuss your IT needs or have any questions? Get in touch with our team today.
          </motion.p>
        </div>
      </section>

      <section className="pb-24 px-6 relative -mt-12 lg:-mt-20 z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-xl shadow-gray-200/50">
                <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
                  <MessageSquare className="text-brand-blue" /> Contact Details
                </h3>
                <ul className="space-y-8">
                  <li className="flex gap-4 group">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-dark mb-1">Email us</div>
                      <div className="text-gray-500 text-sm font-medium">info@kognizan.co.ke</div>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-brand-red shrink-0 group-hover:bg-brand-red group-hover:text-white transition-all">
                      <Phone size={22} />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-dark mb-1">Call us</div>
                      <div className="text-gray-500 text-sm font-medium flex flex-col">
                        <span>+254 758 224 002</span>
                        <span>+254 722 543 994</span>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4 group">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div className="font-bold text-neutral-dark mb-1">Visit us</div>
                      <div className="text-gray-500 text-sm font-medium">The Prism Tower, 3rd Avenue Ngong, Nairobi, Kenya</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick Quote Card */}
              <div className="bg-neutral-dark p-8 rounded-xl text-white overflow-hidden relative group border border-white/5 shadow-2xl">
                <div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform text-brand-red">
                  <MessageSquare size={160} />
                </div>
                <h4 className="text-2xl font-display font-bold mb-4 relative z-10">Need a Quick Consultation?</h4>
                <p className="text-white/60 mb-8 text-sm relative z-10 leading-relaxed font-medium">
                  Our solutions architects are ready to help you map out your digital strategy.
                </p>
                <button className="inline-flex items-center gap-2 font-bold text-brand-red relative z-10 hover:translate-x-1 transition-transform">
                  Speak to an Expert <Send size={16} />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 lg:p-12 rounded-xl shadow-2xl shadow-gray-200/50 border border-gray-50">
                <h2 className="text-3xl font-display font-bold mb-10">Send us a message</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Your Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Work Email</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@company.com"
                      className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Company Name</label>
                    <input
                      type="text"
                      placeholder="Kognizan Ltd"
                      className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all resize-none font-medium"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button className="w-full md:w-auto bg-brand-blue text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-brand-red transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center gap-3 transform hover:-translate-y-1">
                      Contact us <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[500px] w-full px-6 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
          <APIProvider apiKey={API_KEY}>
            <Map
              defaultCenter={{ lat: -1.3005, lng: 36.8041 }} // Approximate coordinates for Prism Tower
              defaultZoom={15}
              gestureHandling={'greedy'}
              disableDefaultUI={true}
              mapId="KOGNIZAN_CONTACT_MAP"
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            >
              <AdvancedMarker position={{ lat: -1.3005, lng: 36.8041 }} title="Kognizan Technologies">
                <Pin background={'#005696'} glyphColor={'#fff'} borderColor={'#005696'} />
              </AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </section>
    </div>
  );
}
