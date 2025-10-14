"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin, Phone, Mail, Signature } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Tentang Desa",
      href: "/tentang-desa",
      submenu: [
        { name: "Profil Desa", href: "/tentang-desa/profil" },
        { name: "Sejarah", href: "/tentang-desa/sejarah" },
        { name: "Visi & Misi", href: "/tentang-desa/visi-misi" },
        { name: "Geografi & Demografi", href: "/tentang-desa/geografi" },
        { name: "Struktur Pemerintahan", href: "/tentang-desa/struktur" },
      ],
    },
    {
      name: "Budaya & Adat",
      href: "/budaya-adat",
      submenu: [
        { name: "Kalender Upacara", href: "/budaya-adat/kalender" },
        { name: "Pura di Desa", href: "/budaya-adat/pura" },
        { name: "Tradisi & Kearifan Lokal", href: "/budaya-adat/tradisi" },
        { name: "Galeri Kegiatan", href: "/budaya-adat/galeri" },
        { name: "Dokumentasi Upacara", href: "/budaya-adat/dokumentasi" },
      ],
    },
    {
      name: "Paruman & Berita",
      href: "/paruman-berita",
      submenu: [
        { name: "Jadwal Paruman", href: "/paruman-berita/jadwal" },
        { name: "Notulen Rapat", href: "/paruman-berita/notulen" },
        { name: "Pengumuman", href: "/paruman-berita/pengumuman" },
        { name: "Berita Desa", href: "/paruman-berita/berita" },
      ],
    },
    {
      name: "Layanan",
      href: "/layanan",
      submenu: [
        { name: "Persyaratan Surat", href: "/layanan/persyaratan" },
        { name: "Download Formulir", href: "/layanan/formulir" },
        { name: "Peraturan Desa", href: "/layanan/peraturan" },
        { name: "Kontak Layanan", href: "/layanan/kontak" },
      ],
    },
    {
      name: "UMKM & Ekonomi",
      href: "/umkm-ekonomi",
      submenu: [
        { name: "Direktori Usaha", href: "/umkm-ekonomi/direktori" },
        { name: "Produk Lokal", href: "/umkm-ekonomi/produk" },
        { name: "Lowongan Kerja", href: "/umkm-ekonomi/lowongan" },
      ],
    },
    {
      name: "Transparansi",
      href: "/transparansi",
      submenu: [
        { name: "APBDes", href: "/transparansi/apbdes" },
        { name: "Laporan Keuangan", href: "/transparansi/laporan" },
        { name: "Program Pembangunan", href: "/transparansi/program" },
      ],
    },
    { name: "Kontak", href: "/kontak" },
  ];

  return (
    <header className="bg-[#F5F5F0] shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-[#5D866C] text-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span>Desa Baktiseraga, Bali</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>+62 361 123456</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@baktiseraga.id</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#5D866C] rounded-full flex items-center justify-center">
                <Signature className="h-4 w-4 text-[#F5F5F0]" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#5D866C]">
                  Desa Baktiseraga
                </h1>
                <p className="text-sm text-[#C2A68C]">Pemerintahan Desa</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-[#5D866C] hover:text-[#C2A68C] transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#E6D8C3] hover:text-[#5D866C] transition-colors duration-200"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#5D866C] hover:text-[#C2A68C] transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E6D8C3]">
          <div className="px-4 py-2 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-[#5D866C] hover:bg-[#E6D8C3] hover:text-[#5D866C] transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 space-y-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-3 py-1 text-sm text-[#C2A68C] hover:bg-[#E6D8C3] hover:text-[#5D866C] transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
