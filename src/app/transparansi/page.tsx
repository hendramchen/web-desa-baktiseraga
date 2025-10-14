import Link from 'next/link';
import { DollarSign, FileText, BarChart3, TrendingUp, Download, Eye } from 'lucide-react';

export default function Transparansi() {
  const transparencyData = [
    {
      title: 'APBDes 2024',
      description: 'Anggaran Pendapatan dan Belanja Desa tahun 2024',
      icon: DollarSign,
      href: '/transparansi/apbdes',
      color: 'bg-green-100 text-green-600',
      amount: 'Rp 2.5 Miliar',
      status: 'Aktif'
    },
    {
      title: 'Laporan Keuangan',
      description: 'Laporan realisasi anggaran dan pertanggungjawaban keuangan',
      icon: FileText,
      href: '/transparansi/laporan',
      color: 'bg-blue-100 text-blue-600',
      amount: '12 Dokumen',
      status: 'Terbaru'
    },
    {
      title: 'Program Pembangunan',
      description: 'Daftar program dan proyek pembangunan desa',
      icon: BarChart3,
      href: '/transparansi/program',
      color: 'bg-purple-100 text-purple-600',
      amount: '8 Program',
      status: 'Berjalan'
    }
  ];

  const budgetSummary = [
    { category: 'Pendapatan Desa', amount: 2500000000, percentage: 100 },
    { category: 'Belanja Operasional', amount: 800000000, percentage: 32 },
    { category: 'Belanja Modal', amount: 1200000000, percentage: 48 },
    { category: 'Belanja Tak Terduga', amount: 100000000, percentage: 4 },
    { category: 'Sisa Anggaran', amount: 400000000, percentage: 16 }
  ];

  const recentReports = [
    {
      title: 'Laporan Realisasi APBDes Q3 2024',
      date: '30 September 2024',
      type: 'Keuangan',
      size: '2.3 MB'
    },
    {
      title: 'Laporan Program Pembangunan Infrastruktur',
      date: '25 September 2024',
      type: 'Program',
      size: '1.8 MB'
    },
    {
      title: 'Laporan Penggunaan Dana Desa',
      date: '20 September 2024',
      type: 'Keuangan',
      size: '3.1 MB'
    },
    {
      title: 'Laporan Kegiatan Sosial Kemasyarakatan',
      date: '15 September 2024',
      type: 'Program',
      size: '1.5 MB'
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-balinese-cream">
      {/* Hero Section */}
      <section className="relative bg-balinese-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparansi Desa
            </h1>
            <p className="text-xl md:text-2xl text-balinese-beige max-w-3xl mx-auto">
              Keterbukaan informasi keuangan dan program pembangunan Desa Balinese 
              untuk akuntabilitas dan partisipasi masyarakat
            </p>
          </div>
        </div>
      </section>

      {/* Transparency Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Informasi Transparansi
            </h2>
            <p className="text-lg text-balinese-tan max-w-2xl mx-auto">
              Akses informasi keuangan dan program desa secara transparan dan akuntabel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transparencyData.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="bg-balinese-beige text-balinese-green px-3 py-1 rounded-full text-sm font-medium">
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-balinese-green mb-2 group-hover:text-balinese-tan transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-balinese-tan text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-balinese-green">
                    {item.amount}
                  </span>
                  <Eye className="h-4 w-4 text-balinese-tan" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Ringkasan Anggaran 2024
            </h2>
            <p className="text-lg text-balinese-tan">
              Distribusi anggaran desa berdasarkan kategori belanja
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {budgetSummary.map((item, index) => (
                <div key={index} className="bg-balinese-beige p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-balinese-green">{item.category}</span>
                    <span className="text-balinese-tan font-semibold">{item.percentage}%</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-balinese-green">
                      {formatCurrency(item.amount)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-balinese-green h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-balinese-beige p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-balinese-green mb-6 text-center">
                Total APBDes 2024
              </h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-balinese-green mb-4">
                  {formatCurrency(2500000000)}
                </div>
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">Naik 15% dari tahun sebelumnya</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-balinese-tan">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-xl font-bold text-balinese-green">78%</div>
                    <div className="text-sm text-balinese-tan">Realisasi</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-balinese-green">22%</div>
                    <div className="text-sm text-balinese-tan">Sisa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Reports */}
      <section className="py-16 bg-balinese-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
                Laporan Terbaru
              </h2>
              <p className="text-lg text-balinese-tan">
                Dokumen dan laporan transparansi terkini
              </p>
            </div>
            <Link
              href="/transparansi/laporan"
              className="text-balinese-green hover:text-balinese-tan transition-colors duration-200 font-semibold"
            >
              Lihat Semua →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentReports.map((report, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-balinese-green mb-2">
                      {report.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-balinese-tan">
                      <span>{report.date}</span>
                      <span>•</span>
                      <span>{report.size}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    report.type === 'Keuangan' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {report.type}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <button className="flex items-center space-x-2 text-balinese-green hover:text-balinese-tan transition-colors duration-200">
                    <Download className="h-4 w-4" />
                    <span className="text-sm font-medium">Download</span>
                  </button>
                  <button className="flex items-center space-x-2 text-balinese-tan hover:text-balinese-green transition-colors duration-200">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">Lihat</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-6">
              Komitmen Transparansi
            </h2>
            <p className="text-lg text-balinese-tan max-w-3xl mx-auto mb-8 leading-relaxed">
              Pemerintah Desa Balinese berkomitmen untuk menyediakan informasi yang transparan, 
              akurat, dan mudah diakses oleh seluruh masyarakat sebagai bentuk akuntabilitas 
              dalam pengelolaan keuangan dan program desa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-balinese-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-balinese-green" />
                </div>
                <h3 className="text-lg font-semibold text-balinese-green mb-2">Transparan</h3>
                <p className="text-balinese-tan text-sm">
                  Semua informasi keuangan dan program dapat diakses publik
                </p>
              </div>
              <div className="text-center">
                <div className="bg-balinese-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-balinese-green" />
                </div>
                <h3 className="text-lg font-semibold text-balinese-green mb-2">Akurat</h3>
                <p className="text-balinese-tan text-sm">
                  Data dan laporan disajikan dengan akurat dan dapat dipertanggungjawabkan
                </p>
              </div>
              <div className="text-center">
                <div className="bg-balinese-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-balinese-green" />
                </div>
                <h3 className="text-lg font-semibold text-balinese-green mb-2">Berkelanjutan</h3>
                <p className="text-balinese-tan text-sm">
                  Informasi diperbarui secara berkala dan konsisten
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
