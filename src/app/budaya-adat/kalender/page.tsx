import Image from 'next/image';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export default function KalenderUpacara() {
  const upcomingCeremonies = [
    {
      name: 'Galungan',
      date: '2024-11-13',
      time: '06:00 WITA',
      location: 'Seluruh Pura di Desa',
      description: 'Hari raya Hindu yang memperingati kemenangan dharma (kebaikan) atas adharma (kejahatan)',
      image: 'https://picsum.photos/400/250?random=galungan',
      countdown: 30
    },
    {
      name: 'Kuningan',
      date: '2024-11-23',
      time: '06:00 WITA',
      location: 'Seluruh Pura di Desa',
      description: 'Hari raya yang menandai berakhirnya perayaan Galungan',
      image: 'https://picsum.photos/400/250?random=kuningan',
      countdown: 40
    },
    {
      name: 'Odalan Pura Desa',
      date: '2024-12-05',
      time: '19:00 WITA',
      location: 'Pura Desa Balinese',
      description: 'Upacara piodalan (hari jadi) Pura Desa yang diselenggarakan setiap 210 hari',
      image: 'https://picsum.photos/400/250?random=odalan',
      countdown: 52
    },
    {
      name: 'Nyepi',
      date: '2025-03-29',
      time: '06:00 WITA',
      location: 'Seluruh Desa',
      description: 'Hari raya Saka (tahun baru Hindu Bali) yang dirayakan dengan catur brata penyepian',
      image: 'https://picsum.photos/400/250?random=nyepi',
      countdown: 166
    }
  ];

  const monthlyCalendar = [
    {
      month: 'November 2024',
      ceremonies: [
        { date: '13', name: 'Galungan', type: 'major' },
        { date: '23', name: 'Kuningan', type: 'major' }
      ]
    },
    {
      month: 'Desember 2024',
      ceremonies: [
        { date: '5', name: 'Odalan Pura Desa', type: 'local' },
        { date: '15', name: 'Purnama Kapat', type: 'minor' }
      ]
    },
    {
      month: 'Januari 2025',
      ceremonies: [
        { date: '14', name: 'Purnama Kapitu', type: 'minor' },
        { date: '29', name: 'Tilem Kapitu', type: 'minor' }
      ]
    }
  ];

  const ceremonyTypes = [
    {
      type: 'Yadnya Dewa',
      description: 'Upacara untuk memuja Ida Sang Hyang Widhi Wasa',
      examples: ['Galungan', 'Kuningan', 'Odalan Pura'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      type: 'Yadnya Rsi',
      description: 'Upacara untuk menghormati para guru spiritual',
      examples: ['Saraswati', 'Guru Purnama'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      type: 'Yadnya Pitra',
      description: 'Upacara untuk menghormati leluhur',
      examples: ['Ngaben', 'Pitra Paksa'],
      color: 'bg-green-100 text-green-600'
    },
    {
      type: 'Yadnya Manusa',
      description: 'Upacara untuk manusia dalam siklus hidup',
      examples: ['Potong Gigi', 'Pernikahan'],
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-balinese-cream">
      {/* Hero Section */}
      <section className="relative bg-balinese-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kalender Upacara Adat
            </h1>
            <p className="text-xl md:text-2xl text-balinese-beige max-w-3xl mx-auto">
              Jadwal lengkap upacara keagamaan dan adat istiadat Hindu Bali di Desa Balinese
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Ceremonies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Upacara Mendatang
            </h2>
            <p className="text-lg text-balinese-tan max-w-2xl mx-auto">
              Persiapkan diri untuk mengikuti upacara adat dan keagamaan yang akan datang
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingCeremonies.map((ceremony, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={ceremony.image}
                  alt={ceremony.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-balinese-green">
                      {ceremony.name}
                    </h3>
                    <div className="bg-balinese-beige text-balinese-green px-3 py-1 rounded-full text-sm font-medium">
                      {ceremony.countdown} hari lagi
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-balinese-tan">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{new Date(ceremony.date).toLocaleDateString('id-ID', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-balinese-tan">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{ceremony.time}</span>
                    </div>
                    <div className="flex items-center text-balinese-tan">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{ceremony.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-balinese-tan text-sm leading-relaxed">
                    {ceremony.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Calendar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Kalender Bulanan
            </h2>
            <p className="text-lg text-balinese-tan">
              Jadwal upacara dalam beberapa bulan ke depan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monthlyCalendar.map((month, index) => (
              <div key={index} className="bg-balinese-beige p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-balinese-green mb-4 text-center">
                  {month.month}
                </h3>
                <div className="space-y-3">
                  {month.ceremonies.map((ceremony, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-white p-3 rounded">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-balinese-green text-white rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                          {ceremony.date}
                        </div>
                        <span className="text-balinese-tan font-medium">{ceremony.name}</span>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        ceremony.type === 'major' ? 'bg-red-100 text-red-600' :
                        ceremony.type === 'local' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {ceremony.type === 'major' ? 'Utama' : 
                         ceremony.type === 'local' ? 'Lokal' : 'Kecil'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceremony Types */}
      <section className="py-16 bg-balinese-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Jenis-jenis Upacara
            </h2>
            <p className="text-lg text-balinese-tan max-w-2xl mx-auto">
              Mengenal berbagai kategori upacara dalam agama Hindu Bali berdasarkan Panca Yadnya
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ceremonyTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${type.color}`}>
                  {type.type}
                </div>
                <p className="text-balinese-tan mb-4 leading-relaxed">
                  {type.description}
                </p>
                <div>
                  <h4 className="font-semibold text-balinese-green mb-2">Contoh Upacara:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, idx) => (
                      <span key={idx} className="bg-balinese-beige text-balinese-green px-2 py-1 rounded text-sm">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
