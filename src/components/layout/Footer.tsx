import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <BrandLogo imageClassName="h-16" />
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading end-to-end ICT solutions service provider in Nairobi Kenya. Empowering businesses through innovative technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-brand-blue hover:border-brand-blue transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-500 hover:text-brand-blue transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Contact info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Mail size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span>info@kognizan.co.ke</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <Phone size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+254 758 224 002</span>
                  <span>+254 722 543 994</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-sm">
                <MapPin size={18} className="text-brand-blue shrink-0 mt-0.5" />
                <span>The Prism Tower, 3rd Avenue Ngong, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-gray-900 mb-6">Let's Talk</h4>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
              />
              <button className="w-full bg-brand-blue text-white font-bold py-2.5 rounded-lg text-sm hover:bg-brand-red transition-all">
                Send Now
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">© 2026 Kognizan Technologies Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
