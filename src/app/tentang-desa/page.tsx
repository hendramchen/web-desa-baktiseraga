import Link from 'next/link';
import Image from 'next/image';
import { Users, MapPin, Calendar, Building, Target, History } from 'lucide-react';

export default function TentangDesa() {
  const sections = [
    {
      title: 'Profil Desa',
      description: 'Informasi umum tentang Desa Balinese, lokasi, dan karakteristik wilayah',
      icon: MapPin,
      href: '/tentang-desa/profil',
      image: 'https://picsum.photos/400/300?random=profile'
    },
    {
      title: 'Sejarah',
      description: 'Perjalanan sejarah dan perkembangan Desa Balinese dari masa ke masa',
      icon: History,
      href: '/tentang-desa/sejarah',
      image: 'https://picsum.photos/400/300?random=history'
    },
    {
      title: 'Visi & Misi',
      description: 'Visi, misi, dan tujuan pembangunan Desa Balinese',
      icon: Target,
      href: '/tentang-desa/visi-misi',
      image: 'https://picsum.photos/400/300?random=vision'
    },
    {
      title: 'Geografi & Demografi',
      description: 'Data geografis, demografis, dan statistik kependudukan desa',
      icon: Users,
      href: '/tentang-desa/geografi',
      image: 'https://picsum.photos/400/300?random=geography'
    },
    {
      title: 'Struktur Pemerintahan',
      description: 'Organisasi pemerintahan desa dan struktur kelembagaan',
      icon: Building,
      href: '/tentang-desa/struktur',
      image: 'https://picsum.photos/400/300?random=structure'
    }
  ];

  return (
    <div className="min-h-screen bg-balinese-cream">
      {/* Hero Section */}
      <section className="relative bg-balinese-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tentang Desa Balinese
            </h1>
            <p className="text-xl md:text-2xl text-balinese-beige max-w-3xl mx-auto">
              Mengenal lebih dekat Desa Balinese, sejarah, visi misi, dan struktur pemerintahan 
              yang menaungi kehidupan masyarakat desa yang kaya akan budaya dan tradisi.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-6">
                Desa yang Kaya Budaya dan Tradisi
              </h2>
              <p className="text-lg text-balinese-tan mb-6 leading-relaxed">
                Desa Balinese merupakan salah satu desa di Bali yang masih mempertahankan 
                kearifan lokal dan tradisi budaya Hindu Bali. Dengan penduduk yang mayoritas 
                beragama Hindu, desa ini memiliki berbagai pura dan tempat suci yang menjadi 
                pusat kegiatan keagamaan dan budaya.
              </p>
              <p className="text-lg text-balinese-tan mb-8 leading-relaxed">
                Kehidupan masyarakat desa yang harmonis tercermin dalam sistem gotong royong, 
                pelaksanaan upacara adat, dan partisipasi aktif dalam kegiatan banjar dan desa adat.
              </p>
              <Link
                href="/tentang-desa/profil"
                className="bg-balinese-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-balinese-tan transition-colors duration-200 inline-block"
              >
                Lihat Profil Lengkap
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://picsum.photos/600/400?random=village"
                alt="Desa Balinese"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Jelajahi Informasi Desa
            </h2>
            <p className="text-lg text-balinese-tan max-w-2xl mx-auto">
              Klik pada setiap bagian untuk mendapatkan informasi lengkap tentang berbagai aspek Desa Balinese
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className="group bg-balinese-cream rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-balinese-green bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-200"></div>
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 p-2 rounded-lg">
                    <section.icon className="h-6 w-6 text-balinese-green" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-balinese-green mb-3 group-hover:text-balinese-tan transition-colors duration-200">
                    {section.title}
                  </h3>
                  <p className="text-balinese-tan text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-balinese-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Data Singkat Desa
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-balinese-green mb-2">2,847</div>
              <div className="text-balinese-tan font-medium">Total Penduduk</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-balinese-green mb-2">892</div>
              <div className="text-balinese-tan font-medium">Kepala Keluarga</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-balinese-green mb-2">12</div>
              <div className="text-balinese-tan font-medium">Pura di Desa</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-balinese-green mb-2">8</div>
              <div className="text-balinese-tan font-medium">Banjar Adat</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
