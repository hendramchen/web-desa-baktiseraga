import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#5D866C] text-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-4">Desa Baktiseraga</h3>
            <p className="text-[#E6D8C3] mb-4 text-sm leading-relaxed">
              Website resmi Pemerintahan Desa Baktiseraga yang menyediakan
              informasi lengkap tentang profil desa, layanan masyarakat, dan
              kegiatan budaya adat.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tentang-desa/profil"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  Profil Desa
                </Link>
              </li>
              <li>
                <Link
                  href="/budaya-adat/kalender"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  Kalender Upacara
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan/persyaratan"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  Persyaratan Surat
                </Link>
              </li>
              <li>
                <Link
                  href="/paruman-berita/berita"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  Berita Desa
                </Link>
              </li>
              <li>
                <Link
                  href="/transparansi/apbdes"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  APBDes
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/layanan/formulir"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  Download Formulir
                </Link>
              </li>
              <li>
                <Link
                  href="/umkm-ekonomi/direktori"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  Direktori UMKM
                </Link>
              </li>
              <li>
                <Link
                  href="/paruman-berita/pengumuman"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  Pengumuman
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  Kontak Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/budaya-adat/galeri"
                  className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
                >
                  Galeri Kegiatan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#E6D8C3]">
                    Jl. Raya Desa Balinese No. 123
                    <br />
                    Kecamatan Balinese, Kabupaten Bali
                    <br />
                    Provinsi Bali 80571
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-[#E6D8C3]">+62 361 123456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-[#E6D8C3]">info@desabalinese.id</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1" />
                <div className="text-[#E6D8C3]">
                  <p>Senin - Jumat: 08:00 - 16:00</p>
                  <p>Sabtu: 08:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center py-10">
            <p className="text-[#E6D8C3] text-sm">
              © 2024 Desa Baktiseraga. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link
                href="/privacy"
                className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                href="/sitemap"
                className="text-[#E6D8C3] hover:text-white transition-colors duration-200"
              >
                Peta Situs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
