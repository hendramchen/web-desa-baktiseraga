import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Users,
  FileText,
  Building2,
  Briefcase,
  Eye,
  MessageSquare,
  Clock,
} from "lucide-react";

export default function Home() {
  const quickServices = [
    {
      title: "Persyaratan Surat",
      description: "Informasi lengkap persyaratan dokumen",
      icon: FileText,
      href: "/layanan/persyaratan",
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Download Formulir",
      description: "Unduh formulir yang diperlukan",
      icon: Building2,
      href: "/layanan/formulir",
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Kalender Upacara",
      description: "Jadwal upacara adat dan keagamaan",
      icon: Calendar,
      href: "/budaya-adat/kalender",
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Direktori UMKM",
      description: "Daftar usaha mikro kecil menengah",
      icon: Briefcase,
      href: "/umkm-ekonomi/direktori",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const latestNews = [
    {
      title: "Upacara Galungan dan Kuningan 2024",
      excerpt:
        "Pelaksanaan upacara Galungan dan Kuningan akan diselenggarakan serentak di seluruh pura desa...",
      date: "15 Oktober 2024",
      image: "https://picsum.photos/400/250?random=1",
    },
    {
      title: "Program Pembangunan Jalan Desa",
      excerpt:
        "Pemerintah desa melaksanakan program pembangunan infrastruktur jalan untuk meningkatkan...",
      date: "12 Oktober 2024",
      image: "https://picsum.photos/400/250?random=2",
    },
    {
      title: "Paruman Desa Bulan Oktober",
      excerpt:
        "Mengundang seluruh warga untuk menghadiri paruman desa yang akan membahas program...",
      date: "10 Oktober 2024",
      image: "https://picsum.photos/400/250?random=3",
    },
  ];

  const stats = [
    { label: "Total Penduduk", value: "2,847", icon: Users },
    { label: "Kepala Keluarga", value: "892", icon: Building2 },
    { label: "Pura di Desa", value: "12", icon: Calendar },
    { label: "UMKM Aktif", value: "156", icon: Briefcase },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#5D866C] to-[#E6D8C3] text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/8333127/pexels-photo-8333127.jpeg)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Selamat Datang di
                <br />
                <span className="text-[#E6D8C3]">Desa Baktiseraga</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-[#E6D8C3]">
                Desa yang kaya akan budaya, tradisi, dan kearifan lokal Bali.
                Bersama membangun desa yang maju, sejahtera, dan lestari.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/tentang-desa/profil"
                  className="bg-[#E6D8C3] text-[#5D866C] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-200 text-center"
                >
                  Profil Desa
                </Link>
                <Link
                  href="/layanan"
                  className="border-2 border-[#E6D8C3] text-[#E6D8C3] px-8 py-3 rounded-lg font-semibold hover:bg-[#E6D8C3] hover:text-[#5D866C] transition-colors duration-200 text-center"
                >
                  Layanan Desa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-[#E6D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5D866C] mb-4">
              Layanan Cepat
            </h2>
            <p className="text-lg text-[#0a3e1e] max-w-2xl mx-auto">
              Akses mudah dan cepat untuk berbagai layanan dan informasi desa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#5D866C] mb-2">
                  {service.title}
                </h3>
                <p className="text-[#0a3e1e] text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#E6D8C3] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-[#5D866C]" />
                </div>
                <div className="text-3xl font-bold text-[#5D866C] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#E6D8C3] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-[#E6D8C3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5D866C] mb-4">
                Berita Terkini
              </h2>
              <p className="text-lg text-[#E6D8C3]">
                Informasi terbaru dari desa
              </p>
            </div>
            <Link
              href="/paruman-berita/berita"
              className="text-balinese-green hover:text-balinese-tan transition-colors duration-200 font-semibold"
            >
              Lihat Semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <Image
                  src={news.image}
                  alt={news.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#614d3a] mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                  <h3 className="text-lg font-semibold text-[#5D866C] mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-[#614d3a] text-sm line-clamp-3 mb-4">
                    {news.excerpt}
                  </p>
                  <Link
                    href="/paruman-berita/berita"
                    className="text-[#5D866C] hover:text-[#614d3a] transition-colors duration-200 font-medium text-sm"
                  >
                    Baca Selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#5D866C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bergabunglah dalam Membangun Desa
          </h2>
          <p className="text-xl text-[#E6D8C3] mb-8 max-w-2xl mx-auto">
            Partisipasi aktif warga adalah kunci kemajuan desa. Mari
            bersama-sama membangun desa yang lebih baik untuk generasi
            mendatang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/paruman-berita/jadwal"
              className="bg-[#E6D8C3] text-[#5D866C] px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors duration-200"
            >
              <MessageSquare className="inline h-5 w-5 mr-2" />
              Ikuti Paruman
            </Link>
            <Link
              href="/transparansi"
              className="border-2 border-[#E6D8C3] text-[#E6D8C3] px-8 py-3 rounded-lg font-semibold hover:bg-[#E6D8C3] hover:text-[#5D866C] transition-colors duration-200"
            >
              <Eye className="inline h-5 w-5 mr-2" />
              Transparansi Desa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
