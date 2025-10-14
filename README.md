# Website Desa Balinese

Website resmi Pemerintahan Desa Balinese yang menyediakan informasi lengkap tentang profil desa, layanan masyarakat, budaya adat, dan transparansi pemerintahan.

## 🌟 Fitur Utama

### 🏠 **Home Page**
- Hero section dengan informasi sambutan
- Quick services untuk akses cepat layanan
- Statistik desa
- Berita terkini
- Call-to-action untuk partisipasi masyarakat

### 🏛️ **Tentang Desa**
- **Profil Desa**: Informasi umum, lokasi, dan karakteristik
- **Sejarah**: Perjalanan sejarah desa
- **Visi & Misi**: Tujuan pembangunan desa
- **Geografi & Demografi**: Data geografis dan kependudukan
- **Struktur Pemerintahan**: Organisasi pemerintahan desa

### 🎭 **Budaya & Adat**
- **Kalender Upacara**: Jadwal upacara keagamaan dan adat
- **Pura di Desa**: Informasi tempat suci
- **Tradisi & Kearifan Lokal**: Budaya dan tradisi
- **Galeri Kegiatan**: Dokumentasi kegiatan budaya
- **Dokumentasi Upacara**: Arsip upacara adat

### 📢 **Paruman & Berita**
- **Jadwal Paruman**: Rapat dan pertemuan warga
- **Notulen Rapat**: Arsip hasil rapat
- **Pengumuman**: Informasi penting
- **Berita Desa**: Perkembangan terkini

### 🏢 **Layanan**
- **Persyaratan Surat**: Informasi persyaratan dokumen
- **Download Formulir**: Formulir administrasi
- **Peraturan Desa**: Kebijakan dan peraturan
- **Kontak Layanan**: Informasi kontak

### 💼 **UMKM & Ekonomi**
- **Direktori Usaha**: Daftar UMKM desa
- **Produk Lokal**: Showcase produk unggulan
- **Lowongan Kerja**: Peluang kerja dan kemitraan

### 👁️ **Transparansi**
- **APBDes**: Anggaran desa
- **Laporan Keuangan**: Transparansi keuangan
- **Program Pembangunan**: Proyek pembangunan

### 📞 **Kontak**
- Informasi kontak lengkap
- Form pengaduan/saran
- Peta lokasi
- Kontak darurat

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Images**: Lorem Picsum (placeholder)
- **Language**: TypeScript
- **No Database**: Static content dengan dummy data

## 🎨 Design System

### Color Palette
- **Cream**: `#F5F5F0` - Background utama
- **Beige**: `#E6D8C3` - Background sekunder
- **Tan**: `#C2A68C` - Text sekunder
- **Green**: `#5D866C` - Primary color (hijau Bali)

### Typography
- Font utama: Geist Sans
- Font monospace: Geist Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Installation

1. Clone repository:
```bash
git clone <repository-url>
cd webdesa
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) di browser

### Build untuk Production

```bash
npm run build
npm start
```

## 📁 Struktur Project

```
src/
├── app/                          # App Router pages
│   ├── budaya-adat/             # Budaya & Adat section
│   │   ├── kalender/            # Kalender upacara
│   │   ├── pura/                # Pura di desa
│   │   ├── tradisi/             # Tradisi & kearifan lokal
│   │   ├── galeri/              # Galeri kegiatan
│   │   └── dokumentasi/         # Dokumentasi upacara
│   ├── kontak/                  # Kontak page
│   ├── layanan/                 # Layanan section
│   │   ├── persyaratan/         # Persyaratan surat
│   │   ├── formulir/            # Download formulir
│   │   ├── peraturan/           # Peraturan desa
│   │   └── kontak/              # Kontak layanan
│   ├── paruman-berita/          # Paruman & Berita section
│   │   ├── jadwal/              # Jadwal paruman
│   │   ├── notulen/             # Notulen rapat
│   │   ├── pengumuman/          # Pengumuman
│   │   └── berita/              # Berita desa
│   ├── tentang-desa/            # Tentang Desa section
│   │   ├── profil/              # Profil desa
│   │   ├── sejarah/             # Sejarah
│   │   ├── visi-misi/           # Visi & misi
│   │   ├── geografi/            # Geografi & demografi
│   │   └── struktur/            # Struktur pemerintahan
│   ├── transparansi/            # Transparansi section
│   │   ├── apbdes/              # APBDes
│   │   ├── laporan/             # Laporan keuangan
│   │   └── program/             # Program pembangunan
│   ├── umkm-ekonomi/            # UMKM & Ekonomi section
│   │   ├── direktori/           # Direktori usaha
│   │   ├── produk/              # Produk lokal
│   │   └── lowongan/            # Lowongan kerja
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
└── components/                   # Reusable components
    ├── Header.tsx               # Navigation header
    └── Footer.tsx               # Site footer
```

## 🌐 Features

- ✅ Responsive design (mobile-first)
- ✅ Modern UI dengan Balinese color scheme
- ✅ Navigation dengan dropdown menu
- ✅ Hero sections dengan background images
- ✅ Interactive forms
- ✅ Statistics dan data visualization
- ✅ News dan announcements
- ✅ Contact forms
- ✅ Transparency reports
- ✅ UMKM directory
- ✅ Cultural calendar
- ✅ SEO optimized

## 📝 Content Structure

Website ini menggunakan dummy content yang representative untuk:
- Informasi profil desa
- Data statistik kependudukan
- Jadwal upacara adat Bali
- Berita dan pengumuman
- Direktori UMKM
- Laporan transparansi keuangan
- Form kontak dan pengaduan

## 🔧 Customization

Untuk mengadaptasi website ini:

1. **Ganti informasi desa** di setiap page
2. **Update color scheme** di `tailwind.config.ts`
3. **Ganti logo** di Header component
4. **Update kontak** di Footer component
5. **Tambah content management** jika diperlukan

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

Untuk pertanyaan atau support, silakan hubungi:
- Email: info@desabalinese.id
- Phone: +62 361 123456
