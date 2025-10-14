'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, User, MessageSquare, Send } from 'lucide-react';

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah terkirim.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contacts = [
    {
      title: 'Kepala Desa',
      name: 'I Made Balinese',
      phone: '+62 361 123456',
      email: 'kades@desabalinese.id',
      office: 'Kantor Desa Balinese'
    },
    {
      title: 'Sekretaris Desa',
      name: 'I Ketut Sekretaris',
      phone: '+62 361 123457',
      email: 'sekdes@desabalinese.id',
      office: 'Kantor Desa Balinese'
    },
    {
      title: 'Bendahara Desa',
      name: 'Ni Made Bendahara',
      phone: '+62 361 123458',
      email: 'bendahara@desabalinese.id',
      office: 'Kantor Desa Balinese'
    }
  ];

  const emergencyContacts = [
    { service: 'Polsek', phone: '110', description: 'Keamanan dan Ketertiban' },
    { service: 'Puskesmas', phone: '+62 361 234567', description: 'Kesehatan Masyarakat' },
    { service: 'Damkar', phone: '113', description: 'Pemadam Kebakaran' },
    { service: 'SAR', phone: '115', description: 'Search and Rescue' }
  ];

  return (
    <div className="min-h-screen bg-balinese-cream">
      {/* Hero Section */}
      <section className="relative bg-balinese-green text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontak Kami
            </h1>
            <p className="text-xl md:text-2xl text-balinese-beige max-w-3xl mx-auto">
              Hubungi kami untuk informasi, layanan, atau saran terkait Desa Balinese
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-balinese-green mb-8">
                Informasi Kontak
              </h2>
              
              {/* Office Address */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-balinese-green mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-balinese-green mb-2">
                      Alamat Kantor Desa
                    </h3>
                    <p className="text-balinese-tan leading-relaxed">
                      Jl. Raya Desa Balinese No. 123<br />
                      Kecamatan Balinese, Kabupaten Bali<br />
                      Provinsi Bali 80571
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-lg font-semibold text-balinese-green mb-4">
                  Kontak Utama
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-balinese-green" />
                    <span className="text-balinese-tan">+62 361 123456</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-balinese-green" />
                    <span className="text-balinese-tan">info@desabalinese.id</span>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-balinese-green mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-balinese-green mb-3">
                      Jam Operasional
                    </h3>
                    <div className="space-y-2 text-balinese-tan">
                      <div className="flex justify-between">
                        <span>Senin - Kamis</span>
                        <span>08:00 - 16:00 WITA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Jumat</span>
                        <span>08:00 - 11:30 WITA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sabtu</span>
                        <span>08:00 - 12:00 WITA</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Minggu</span>
                        <span>Tutup</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-balinese-green mb-8">
                Kirim Pesan
              </h2>
              
              <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-balinese-green mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-balinese-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-balinese-green"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-balinese-green mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-balinese-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-balinese-green"
                      placeholder="Masukkan nomor telepon"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-balinese-green mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-balinese-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-balinese-green"
                    placeholder="Masukkan alamat email"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-balinese-green mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-balinese-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-balinese-green"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="layanan">Pertanyaan Layanan</option>
                    <option value="pengaduan">Pengaduan</option>
                    <option value="saran">Saran dan Masukan</option>
                    <option value="informasi">Permintaan Informasi</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-balinese-green mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-balinese-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-balinese-green"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-balinese-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-balinese-tan transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Kontak Pejabat Desa
            </h2>
            <p className="text-lg text-balinese-tan">
              Hubungi langsung pejabat desa untuk keperluan khusus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-balinese-beige p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-balinese-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-balinese-green mb-1">
                  {contact.title}
                </h3>
                <p className="text-balinese-tan font-medium mb-3">{contact.name}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-balinese-green" />
                    <span className="text-balinese-tan">{contact.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-balinese-green" />
                    <span className="text-balinese-tan">{contact.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-balinese-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Kontak Darurat
            </h2>
            <p className="text-lg text-balinese-tan">
              Nomor penting untuk situasi darurat
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyContacts.map((emergency, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-semibold text-balinese-green mb-2">
                  {emergency.service}
                </h3>
                <div className="text-2xl font-bold text-balinese-green mb-2">
                  {emergency.phone}
                </div>
                <p className="text-sm text-balinese-tan">
                  {emergency.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-balinese-green mb-4">
              Peta Lokasi
            </h2>
            <p className="text-lg text-balinese-tan">
              Lokasi Kantor Desa Balinese
            </p>
          </div>
          
          <div className="bg-balinese-beige p-8 rounded-lg text-center">
            <MapPin className="h-16 w-16 text-balinese-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-balinese-green mb-2">
              Kantor Desa Balinese
            </h3>
            <p className="text-balinese-tan mb-4">
              Jl. Raya Desa Balinese No. 123, Kecamatan Balinese, Kabupaten Bali, Provinsi Bali 80571
            </p>
            <p className="text-sm text-balinese-tan">
              * Peta interaktif akan tersedia dalam pembaruan selanjutnya
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
