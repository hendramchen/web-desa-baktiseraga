import Image from 'next/image';
import { MapPin, Users, Calendar, Mountain, Waves, TreePine } from 'lucide-react';

export default function ProfilDesa() {
  const profileData = [
    { label: 'Nama Desa', value: 'Desa Balinese' },
    { label: 'Kecamatan', value: 'Kecamatan Balinese' },
    { label: 'Kabupaten', value: 'Kabupaten Bali' },
    { label: 'Provinsi', value: 'Bali' },
    { label: 'Kode Pos', value: '80571' },
    { label: 'Luas Wilayah', value: '12.5 km²' },
    { label: 'Ketinggian', value: '450 mdpl' },
    { label: 'Iklim', value: 'Tropis' }
  ];

  const boundaries = [
    { direction: 'Utara', area: 'Desa Utara Balinese' },
    { direction: 'Selatan', area: 'Desa Selatan Balinese' },
    { direction: 'Timur', area: 'Desa Timur Balinese' },
    { direction: 'Barat', area: 'Desa Barat Balinese' }
  ];

  const facilities = [
    { name: 'Kantor Desa', icon: Users, count: 1 },
    { name: 'Pura', icon: Mountain, count: 12 },
    { name: 'Sekolah', icon: TreePine, count: 5 },
    { name: 'Puskesmas', icon: Waves, count: 1 }
  ];

  return (
    <div className="min-h-screen bg-balinese-cream">
      {/* Hero Section */}
      <section className="relative bg-balinese-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Profil Desa Balinese
            </h1>
            <p className="text-xl md:text-2xl text-balinese-beige max-w-3xl mx-auto">
              Informasi lengkap tentang identitas, lokasi, dan karakteristik Desa Balinese
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Profile Image */}
            <div>
              <Image
                src="https://picsum.photos/600/400?random=village-profile"
                alt="Profil Desa Balinese"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-balinese-green mb-4">Tentang Desa</h3>
                <p className="text-balinese-tan leading-relaxed">
                  Desa Balinese adalah sebuah desa yang terletak di dataran tinggi Bali dengan 
                  pemandangan alam yang indah dan udara yang sejuk. Desa ini dikenal dengan 
                  kearifan lokal yang masih terjaga, tradisi budaya Hindu Bali yang kental, 
                  serta masyarakat yang ramah dan gotong royong.
                </p>
              </div>
            </div>

            {/* Profile Data */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold text-balinese-green mb-6">Data Profil Desa</h3>
                <div className="space-y-4">
                  {profileData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-balinese-beige pb-2">
                      <span className="font-medium text-balinese-tan">{item.label}</span>
                      <span className="text-balinese-green font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Boundaries */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-balinese-green mb-6">Batas Wilayah</h3>
                <div className="grid grid-cols-2 gap-4">
                  {boundaries.map((boundary, index) => (
                    <div key={index} className="text-center p-4 bg-balinese-beige rounded-lg">
                      <div className="font-semibold text-balinese-green mb-1">{boundary.direction}</div>
                      <div className="text-sm text-balinese-tan">{boundary.area}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Fasilitas Desa
            </h2>
            <p className="text-lg text-balinese-tan max-w-2xl mx-auto">
              Berbagai fasilitas yang tersedia untuk mendukung kehidupan masyarakat desa
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="text-center">
                <div className="bg-balinese-beige w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="h-8 w-8 text-balinese-green" />
                </div>
                <div className="text-3xl font-bold text-balinese-green mb-2">{facility.count}</div>
                <div className="text-balinese-tan font-medium">{facility.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Features */}
      <section className="py-16 bg-balinese-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Karakteristik Geografis
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Mountain className="h-12 w-12 text-balinese-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-balinese-green mb-2">Topografi</h3>
              <p className="text-balinese-tan">
                Desa berada di dataran tinggi dengan kontur berbukit-bukit dan pemandangan 
                pegunungan yang indah.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <TreePine className="h-12 w-12 text-balinese-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-balinese-green mb-2">Vegetasi</h3>
              <p className="text-balinese-tan">
                Didominasi oleh tanaman tropis, perkebunan, dan hutan bambu yang 
                menjadi ciri khas desa.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Waves className="h-12 w-12 text-balinese-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-balinese-green mb-2">Hidrologi</h3>
              <p className="text-balinese-tan">
                Memiliki beberapa sumber mata air dan sungai kecil yang mengalir 
                sepanjang tahun.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
