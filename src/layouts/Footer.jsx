import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook, FaPaperPlane } from 'react-icons/fa';
import { useState } from 'react';

const footerLinks = {
  telusuri: [
    { label: 'Beranda', path: '/' },
    { label: 'Terbaru', path: '/kategori/terbaru' },
    { label: 'Nasional', path: '/kategori/nasional' },
    { label: 'Internasional', path: '/kategori/internasional' },
    { label: 'Ekonomi', path: '/kategori/ekonomi' },
  ],
  bantuan: [
    { label: 'Tentang Kami', path: '#' },
    { label: 'Kontak', path: '#' },
    { label: 'Kebijakan Privasi', path: '#' },
    { label: 'Syarat & Ketentuan', path: '#' },
  ],
};

const socialLinks = [
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      alert('Terima kasih telah berlangganan!');
      setEmail('');
    }
  };

  return (
    <footer className="text-neutral-300" id="footer" style={{ backgroundColor: '#2C3C4D' }}>
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <img src="/Standard Collection 10.svg" alt="BeritaKini Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-white">
                Berita Kini
              </span>
            </Link>
            <p className="text-caption text-white mb-6 leading-relaxed">
              Portal berita terkini Indonesia. Menyajikan informasi terpercaya dari berbagai sumber terbaik.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-[#E8E8E8] text-[#333333] hover:bg-primary-500 hover:text-white flex items-center justify-center transition-base"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Telusuri Links */}
          <div>
            <h3 className="text-white font-semibold text-body mb-4">Telusuri</h3>
            <ul className="space-y-2.5">
              {footerLinks.telusuri.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-caption text-white hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan Links */}
          <div>
            <h3 className="text-white font-semibold text-body mb-4">Bantuan</h3>
            <ul className="space-y-2.5">
              {footerLinks.bantuan.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-caption text-white hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-body mb-4">Berlangganan</h3>
            <p className="text-caption text-white mb-4">
              Dapatkan berita terbaru langsung di email kamu.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center w-full mt-2">
              <input
                type="email"
                placeholder="Masukan email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-neutral-800 pl-4 py-3 pr-14 rounded-xl text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 border border-neutral-200 transition-base"
                required
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-primary-500 hover:bg-primary-600 text-white w-9 h-9 flex items-center justify-center rounded-lg transition-base cursor-pointer"
                aria-label="Subscribe"
              >
                <FaPaperPlane size={14} className="transform -translate-x-0.5 translate-y-0.5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
          <p className="text-small text-neutral-500">
            © {new Date().getFullYear()} BeritaKini. Dibuat untuk Technical Test SEAL.
            Data berita dari{' '}
            <a
              href="https://berita-indo-api-next.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:underline"
            >
              Berita Indo API
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
