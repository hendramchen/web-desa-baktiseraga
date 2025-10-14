import Link from 'next/link';
import { FileText, Download, BookOpen, Phone, Clock, Users, CheckCircle } from 'lucide-react';

export default function Layanan() {
  const services = [
    {
      title: 'Persyaratan Surat',
      description: 'Informasi lengkap persyaratan untuk berbagai jenis surat keterangan',
      icon: FileText,
      href: '/layanan/persyaratan',
      color: 'bg-blue-100 text-blue-600',
      items: ['Surat Keterangan Domisili', 'Surat Keterangan Usaha', 'Surat Keterangan Tidak Mampu']
    },
    {
      title: 'Download Formulir',
      description: 'Unduh formulir yang diperlukan untuk berbagai keperluan administrasi',
      icon: Download,
      href: '/layanan/formulir',
      color: 'bg-green-100 text-green-600',
      items: ['Formulir Permohonan KTP', 'Formulir Surat Izin', 'Formulir Pengaduan']
    },
    {
      title: 'Peraturan Desa',
      description: 'Kumpulan peraturan dan kebijakan yang berlaku di desa',
      icon: BookOpen,
      href: '/layanan/peraturan',
      color: 'bg-purple-100 text-purple-600',
      items: ['Perdes APBDes', 'Perdes Organisasi', 'Perdes Adat']
    },
    {
      title: 'Kontak Layanan',
      description: 'Informasi kontak untuk berbagai layanan dan bantuan',
      icon: Phone,
      href: '/layanan/kontak',
      color: 'bg-orange-100 text-orange-600',
      items: ['Kantor Desa', 'Kepala Desa', 'Sekretaris Desa']
    }
  ];

  const operationalHours = [
    { day: 'Senin - Kamis', hours: '08:00 - 16:00 WITA' },
    { day: 'Jumat', hours: '08:00 - 11:30 WITA' },
    { day: 'Sabtu', hours: '08:00 - 12:00 WITA' },
    { day: 'Minggu', hours: 'Tutup' }
  ];

  const quickServices = [
    {
      title: 'Surat Keterangan Domisili',
      time: '30 menit',
      requirements: 'KTP, KK, Surat Pengantar RT'
    },
    {
      title: 'Surat Keterangan Usaha',
      time: '1 jam',
      requirements: 'KTP, KK, Foto Usaha'
    },
    {
      title: 'Surat Keterangan Tidak Mampu',
      time: '45 menit',
      requirements: 'KTP, KK, Surat Pengantar RT'
    }
  ];

  return (
    <div className="min-h-screen bg-balinese-cream">
      {/* Hero Section */}
      <section className="relative bg-balinese-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Layanan Desa
            </h1>
            <p className="text-xl md:text-2xl text-balinese-beige max-w-3xl mx-auto">
              Berbagai layanan administrasi dan informasi untuk kemudahan masyarakat Desa Balinese
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Jenis Layanan
            </h2>
            <p className="text-lg text-balinese-tan max-w-2xl mx-auto">
              Pilih layanan yang Anda butuhkan untuk mendapatkan informasi lengkap
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-balinese-green mb-2 group-hover:text-balinese-tan transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-balinese-tan text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-1">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-balinese-tan">
                          <CheckCircle className="h-3 w-3 mr-2 text-green-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Layanan Cepat
            </h2>
            <p className="text-lg text-balinese-tan">
              Layanan yang dapat diselesaikan dalam waktu singkat
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickServices.map((service, index) => (
              <div key={index} className="bg-balinese-beige p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-balinese-green mb-3">
                  {service.title}
                </h3>
                <div className="flex items-center justify-center mb-3">
                  <Clock className="h-4 w-4 text-balinese-tan mr-2" />
                  <span className="text-balinese-tan font-medium">{service.time}</span>
                </div>
                <p className="text-sm text-balinese-tan">
                  <strong>Persyaratan:</strong> {service.requirements}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Hours */}
      <section className="py-16 bg-balinese-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-6">
                Jam Operasional
              </h2>
              <p className="text-lg text-balinese-tan mb-8 leading-relaxed">
                Kantor Desa Balinese melayani masyarakat sesuai dengan jadwal berikut. 
                Untuk layanan darurat, silakan hubungi nomor kontak yang tersedia.
              </p>
              <div className="space-y-4">
                {operationalHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg">
                    <span className="font-medium text-balinese-green">{schedule.day}</span>
                    <span className="text-balinese-tan">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-balinese-green mb-6">
                Informasi Penting
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-balinese-green mt-1" />
                  <div>
                    <h4 className="font-medium text-balinese-green">Pelayanan Terpadu</h4>
                    <p className="text-sm text-balinese-tan">
                      Semua layanan administrasi dapat diakses di satu tempat
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-balinese-green mt-1" />
                  <div>
                    <h4 className="font-medium text-balinese-green">Waktu Proses</h4>
                    <p className="text-sm text-balinese-tan">
                      Sebagian besar surat dapat diselesaikan dalam 1 hari kerja
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-balinese-green mt-1" />
                  <div>
                    <h4 className="font-medium text-balinese-green">Gratis</h4>
                    <p className="text-sm text-balinese-tan">
                      Semua layanan administrasi desa tidak dikenakan biaya
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
