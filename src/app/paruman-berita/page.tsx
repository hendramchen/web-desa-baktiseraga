import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  FileText,
  Megaphone,
  Newspaper,
  Clock,
  Users,
  MapPin,
} from "lucide-react";

export default function ParumanBerita() {
  const sections = [
    {
      title: "Jadwal Paruman",
      description: "Jadwal rapat dan pertemuan warga desa yang akan datang",
      icon: Calendar,
      href: "/paruman-berita/jadwal",
      color: "bg-blue-100 text-blue-600",
      count: "3 Jadwal",
    },
    {
      title: "Notulen Rapat",
      description: "Arsip hasil rapat dan keputusan yang telah diambil",
      icon: FileText,
      href: "/paruman-berita/notulen",
      color: "bg-green-100 text-green-600",
      count: "45 Dokumen",
    },
    {
      title: "Pengumuman",
      description: "Pengumuman penting dari pemerintah desa",
      icon: Megaphone,
      href: "/paruman-berita/pengumuman",
      color: "bg-orange-100 text-orange-600",
      count: "8 Pengumuman",
    },
    {
      title: "Berita Desa",
      description: "Berita terkini tentang kegiatan dan perkembangan desa",
      icon: Newspaper,
      href: "/paruman-berita/berita",
      color: "bg-purple-100 text-purple-600",
      count: "24 Berita",
    },
  ];

  const upcomingMeetings = [
    {
      title: "Paruman Desa Bulanan",
      date: "2024-10-20",
      time: "19:00 WITA",
      location: "Balai Desa Balinese",
      agenda: "Pembahasan program pembangunan infrastruktur desa",
      attendees: "Seluruh warga desa",
      type: "Rutin",
    },
    {
      title: "Rapat Koordinasi Banjar",
      date: "2024-10-25",
      time: "20:00 WITA",
      location: "Balai Banjar Tengah",
      agenda: "Persiapan upacara Galungan dan Kuningan",
      attendees: "Kepala keluarga Banjar Tengah",
      type: "Koordinasi",
    },
    {
      title: "Sosialisasi Program Kesehatan",
      date: "2024-10-30",
      time: "14:00 WITA",
      location: "Puskesmas Desa",
      agenda: "Sosialisasi program imunisasi dan posyandu",
      attendees: "Ibu-ibu PKK dan kader kesehatan",
      type: "Sosialisasi",
    },
  ];

  const latestNews = [
    {
      title: "Pembangunan Jalan Desa Tahap II Dimulai",
      excerpt:
        "Proyek pembangunan jalan desa tahap kedua telah dimulai dengan target selesai akhir tahun...",
      date: "2024-10-12",
      category: "Pembangunan",
      image: "https://picsum.photos/400/250?random=road",
      author: "Humas Desa",
    },
    {
      title: "Festival Budaya Desa Balinese 2024",
      excerpt:
        "Festival tahunan yang menampilkan berbagai kesenian dan budaya lokal akan digelar bulan depan...",
      date: "2024-10-10",
      category: "Budaya",
      image: "https://picsum.photos/400/250?random=festival",
      author: "Seksi Kebudayaan",
    },
    {
      title: "Program Bantuan UMKM Tahap III",
      excerpt:
        "Pemerintah desa kembali menyalurkan bantuan untuk UMKM dalam rangka pemulihan ekonomi...",
      date: "2024-10-08",
      category: "Ekonomi",
      image: "https://picsum.photos/400/250?random=umkm",
      author: "Seksi Ekonomi",
    },
  ];

  const announcements = [
    {
      title: "Pendaftaran Bantuan Sosial Tahap IV",
      date: "2024-10-14",
      priority: "Penting",
      excerpt:
        "Dibuka pendaftaran bantuan sosial untuk keluarga kurang mampu...",
    },
    {
      title: "Jadwal Pelayanan Administrasi Libur Galungan",
      date: "2024-10-13",
      priority: "Info",
      excerpt:
        "Pelayanan administrasi desa akan diliburkan selama perayaan Galungan...",
    },
    {
      title: "Rekrutmen Kader Posyandu",
      date: "2024-10-11",
      priority: "Penting",
      excerpt:
        "Dibutuhkan kader posyandu untuk mendukung program kesehatan masyarakat...",
    },
  ];

  return (
    <div className="min-h-screen bg-balinese-cream">
      {/* Hero Section */}
      <section className="relative bg-balinese-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Paruman & Berita Desa
            </h1>
            <p className="text-xl md:text-2xl text-balinese-beige max-w-3xl mx-auto">
              Informasi terkini tentang rapat desa, pengumuman penting, dan
              berita terbaru dari Desa Balinese
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Informasi & Komunikasi
            </h2>
            <p className="text-lg text-balinese-tan max-w-2xl mx-auto">
              Akses informasi lengkap tentang kegiatan dan perkembangan desa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                  >
                    <section.icon className="h-6 w-6" />
                  </div>
                  <span className="bg-balinese-beige text-balinese-green px-2 py-1 rounded-full text-xs font-medium">
                    {section.count}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-balinese-green mb-2 group-hover:text-balinese-tan transition-colors duration-200">
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

      {/* Upcoming Meetings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
                Paruman Mendatang
              </h2>
              <p className="text-lg text-balinese-tan">
                Jadwal rapat dan pertemuan yang akan datang
              </p>
            </div>
            <Link
              href="/paruman-berita/jadwal"
              className="text-balinese-green hover:text-balinese-tan transition-colors duration-200 font-semibold"
            >
              Lihat Semua →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingMeetings.map((meeting, index) => (
              <div key={index} className="bg-balinese-beige p-6 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      meeting.type === "Rutin"
                        ? "bg-blue-100 text-blue-600"
                        : meeting.type === "Koordinasi"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {meeting.type}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-balinese-green mb-3">
                  {meeting.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-balinese-tan text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {new Date(meeting.date).toLocaleDateString("id-ID", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-balinese-tan text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{meeting.time}</span>
                  </div>
                  <div className="flex items-center text-balinese-tan text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{meeting.location}</span>
                  </div>
                  <div className="flex items-center text-balinese-tan text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{meeting.attendees}</span>
                  </div>
                </div>
                <p className="text-balinese-tan text-sm leading-relaxed">
                  <strong>Agenda:</strong> {meeting.agenda}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-balinese-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
                Berita Terkini
              </h2>
              <p className="text-lg text-balinese-tan">
                Perkembangan dan kegiatan terbaru di desa
              </p>
            </div>
            <Link
              href="/paruman-berita/berita"
              className="text-balinese-green hover:text-balinese-tan transition-colors duration-200 font-semibold"
            >
              Lihat Semua →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        news.category === "Pembangunan"
                          ? "bg-blue-100 text-blue-600"
                          : news.category === "Budaya"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {news.category}
                    </span>
                    <span className="text-xs text-balinese-tan">
                      {news.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-balinese-green mb-2 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-balinese-tan text-sm line-clamp-3 mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-balinese-tan">
                      Oleh: {news.author}
                    </span>
                    <Link
                      href="/paruman-berita/berita"
                      className="text-balinese-green hover:text-balinese-tan transition-colors duration-200 font-medium text-sm"
                    >
                      Baca →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Important Announcements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
                Pengumuman Penting
              </h2>
              <p className="text-lg text-balinese-tan">
                Informasi penting yang perlu diketahui warga
              </p>
            </div>
            <Link
              href="/paruman-berita/pengumuman"
              className="text-balinese-green hover:text-balinese-tan transition-colors duration-200 font-semibold"
            >
              Lihat Semua →
            </Link>
          </div>

          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <div
                key={index}
                className="bg-balinese-beige p-6 rounded-lg flex items-start space-x-4"
              >
                <div
                  className={`w-3 h-3 rounded-full mt-2 ${
                    announcement.priority === "Penting"
                      ? "bg-red-500"
                      : "bg-blue-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-balinese-green">
                      {announcement.title}
                    </h3>
                    <span className="text-sm text-balinese-tan">
                      {announcement.date}
                    </span>
                  </div>
                  <p className="text-balinese-tan leading-relaxed">
                    {announcement.excerpt}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    announcement.priority === "Penting"
                      ? "bg-red-100 text-red-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {announcement.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
