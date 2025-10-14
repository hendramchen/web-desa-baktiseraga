import Link from 'next/link';
import Image from 'next/image';
import { Store, ShoppingBag, Briefcase, TrendingUp, Users, MapPin, Phone } from 'lucide-react';

export default function UMKMEkonomi() {
  const sections = [
    {
      title: 'Direktori Usaha',
      description: 'Daftar lengkap UMKM dan usaha yang ada di Desa Balinese',
      icon: Store,
      href: '/umkm-ekonomi/direktori',
      color: 'bg-blue-100 text-blue-600',
      count: '156 Usaha'
    },
    {
      title: 'Produk Lokal',
      description: 'Showcase produk unggulan dan kerajinan khas Desa Balinese',
      icon: ShoppingBag,
      href: '/umkm-ekonomi/produk',
      color: 'bg-green-100 text-green-600',
      count: '89 Produk'
    },
    {
      title: 'Lowongan Kerja',
      description: 'Informasi peluang kerja dan kemitraan usaha di desa',
      icon: Briefcase,
      href: '/umkm-ekonomi/lowongan',
      color: 'bg-purple-100 text-purple-600',
      count: '23 Lowongan'
    }
  ];

  const featuredBusinesses = [
    {
      name: 'Kerajinan Bambu Balinese',
      category: 'Kerajinan',
      owner: 'I Made Bambang',
      description: 'Produksi kerajinan bambu berkualitas tinggi dengan desain tradisional dan modern',
      image: 'https://picsum.photos/400/300?random=bamboo',
      contact: '+62 812 3456 7890',
      address: 'Banjar Tengah'
    },
    {
      name: 'Warung Organic Farm',
      category: 'Pertanian',
      owner: 'Ni Kadek Sari',
      description: 'Sayuran organik segar langsung dari kebun dengan sistem pertanian berkelanjutan',
      image: 'https://picsum.photos/400/300?random=farm',
      contact: '+62 813 4567 8901',
      address: 'Banjar Utara'
    },
    {
      name: 'Kopi Balinese Heritage',
      category: 'F&B',
      owner: 'I Ketut Kopi',
      description: 'Kopi premium dari kebun sendiri dengan cita rasa khas pegunungan Bali',
      image: 'https://picsum.photos/400/300?random=coffee',
      contact: '+62 814 5678 9012',
      address: 'Banjar Selatan'
    }
  ];

  const economicStats = [
    { label: 'Total UMKM', value: '156', icon: Store, growth: '+12%' },
    { label: 'Tenaga Kerja', value: '423', icon: Users, growth: '+8%' },
    { label: 'Omzet Bulanan', value: '2.8M', icon: TrendingUp, growth: '+15%' },
    { label: 'Produk Unggulan', value: '89', icon: ShoppingBag, growth: '+20%' }
  ];

  const businessCategories = [
    { name: 'Kerajinan Tangan', count: 45, percentage: 29 },
    { name: 'Pertanian & Perkebunan', count: 38, percentage: 24 },
    { name: 'Kuliner & F&B', count: 32, percentage: 21 },
    { name: 'Jasa & Perdagangan', count: 25, percentage: 16 },
    { name: 'Pariwisata', count: 16, percentage: 10 }
  ];

  return (
    <div className="min-h-screen bg-balinese-cream">
      {/* Hero Section */}
      <section className="relative bg-balinese-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              UMKM & Ekonomi Desa
            </h1>
            <p className="text-xl md:text-2xl text-balinese-beige max-w-3xl mx-auto">
              Mendukung pertumbuhan ekonomi lokal melalui pemberdayaan UMKM dan 
              pengembangan produk unggulan Desa Balinese
            </p>
          </div>
        </div>
      </section>

      {/* Economic Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Statistik Ekonomi Desa
            </h2>
            <p className="text-lg text-balinese-tan">
              Pertumbuhan ekonomi desa dalam angka
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {economicStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-balinese-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-balinese-green" />
                </div>
                <div className="text-3xl font-bold text-balinese-green mb-2">
                  {stat.value}
                </div>
                <div className="text-balinese-tan font-medium mb-2">
                  {stat.label}
                </div>
                <div className="text-green-600 text-sm font-medium">
                  {stat.growth} tahun ini
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Jelajahi UMKM Desa
            </h2>
            <p className="text-lg text-balinese-tan max-w-2xl mx-auto">
              Temukan berbagai usaha dan produk lokal yang ada di Desa Balinese
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className="bg-balinese-cream p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <section.icon className="h-6 w-6" />
                  </div>
                  <span className="bg-white text-balinese-green px-3 py-1 rounded-full text-sm font-medium">
                    {section.count}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-balinese-green mb-2 group-hover:text-balinese-tan transition-colors duration-200">
                  {section.title}
                </h3>
                <p className="text-balinese-tan text-sm leading-relaxed">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-16 bg-balinese-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              UMKM Unggulan
            </h2>
            <p className="text-lg text-balinese-tan">
              Usaha mikro kecil menengah terbaik di desa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBusinesses.map((business, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <Image
                  src={business.image}
                  alt={business.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-balinese-beige text-balinese-green px-3 py-1 rounded-full text-sm font-medium">
                      {business.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-balinese-green mb-2">
                    {business.name}
                  </h3>
                  <p className="text-balinese-tan text-sm mb-4 leading-relaxed">
                    {business.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-balinese-tan">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{business.owner}</span>
                    </div>
                    <div className="flex items-center text-balinese-tan">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{business.address}</span>
                    </div>
                    <div className="flex items-center text-balinese-tan">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>{business.contact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Kategori Usaha
            </h2>
            <p className="text-lg text-balinese-tan">
              Distribusi UMKM berdasarkan jenis usaha
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {businessCategories.map((category, index) => (
                <div key={index} className="bg-balinese-beige p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-balinese-green">{category.name}</span>
                    <span className="text-balinese-tan font-semibold">{category.count} usaha</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-balinese-green h-2 rounded-full transition-all duration-500"
                      style={{ width: `${category.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-sm text-balinese-tan">{category.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-balinese-beige p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-balinese-green mb-6 text-center">
                Potensi Ekonomi Desa
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-balinese-green rounded-full"></div>
                  <span className="text-balinese-tan">Kerajinan tangan dengan kualitas ekspor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-balinese-green rounded-full"></div>
                  <span className="text-balinese-tan">Produk pertanian organik berkelanjutan</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-balinese-green rounded-full"></div>
                  <span className="text-balinese-tan">Kuliner tradisional dengan inovasi modern</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-balinese-green rounded-full"></div>
                  <span className="text-balinese-tan">Wisata budaya dan alam yang autentik</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-balinese-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bergabung dengan Komunitas UMKM
          </h2>
          <p className="text-xl text-balinese-beige mb-8 max-w-2xl mx-auto">
            Daftarkan usaha Anda atau temukan peluang kemitraan dengan UMKM lokal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/umkm-ekonomi/direktori"
              className="bg-balinese-cream text-balinese-green px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-200"
            >
              Daftar Usaha Anda
            </Link>
            <Link
              href="/umkm-ekonomi/lowongan"
              className="border-2 border-balinese-cream text-balinese-cream px-8 py-3 rounded-lg font-semibold hover:bg-balinese-cream hover:text-balinese-green transition-colors duration-200"
            >
              Cari Peluang Kerja
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
