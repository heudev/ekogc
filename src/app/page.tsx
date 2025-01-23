"use client";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Team from "./components/Team";
import FAQ from "./components/FAQ";

const calculateTimeLeft = () => {
  const difference = +new Date("2025-04-20") - +new Date();
  return {
    gun: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
    saat: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
    dakika: Math.max(0, Math.floor((difference / 1000 / 60) % 60)),
    saniye: Math.max(0, Math.floor((difference / 1000) % 60)),
  };
};

const CountdownTimer = ({ timeLeft }: { timeLeft: { gun: number; saat: number; dakika: number; saniye: number } }) => {
  return (
    <div className="flex justify-center gap-2 sm:gap-4 text-xl sm:text-2xl md:text-3xl font-bold">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center justify-center w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-black/80 backdrop-blur-sm border border-white/10 text-white rounded-xl shadow-lg"
        >
          <span className="text-white">{value}</span>
          <span className="text-xs sm:text-sm uppercase text-gray-300">{unit}</span>
        </div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Türkiye Gençlik Çalıştayı 2025</title>
        <meta
          name="description"
          content="Türkiye'nin geleceğini şekillendirmek için bir araya geliyoruz. 20-22 Nisan 2025'te İzmir'de düzenlenecek Gençlik Çalıştayı'na katılın."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-black text-white flex flex-col">
        <div className="fixed inset-0 z-0">
          <Image
            src="/images/background/image1.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <main className="flex-grow relative z-10">
          <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
              <Image
                src="/images/logo/2.png"
                alt="Logo"
                width={120}
                height={40}
                className="object-contain"
              />

              {/* Hamburger Menu Button */}
              <button
                className="md:hidden text-white hover:text-gray-400 transition-colors duration-300"
                onClick={toggleMenu}
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li><a href="#about" className="hover:text-gray-400 transition duration-300">Hakkında</a></li>
                  <li><a href="#program" className="hover:text-gray-400 transition duration-300">Program</a></li>
                  <li><a href="#committees" className="hover:text-gray-400 transition duration-300">Komiteler</a></li>
                  <li><a href="#team" className="hover:text-gray-400 transition duration-300">Ekip</a></li>
                  <li><a href="#faq" className="hover:text-gray-400 transition duration-300">SSS</a></li>
                  <li><a href="#contact" className="hover:text-gray-400 transition duration-300">İletişim</a></li>
                </ul>
              </nav>

              {/* Mobile Navigation */}
              <div
                className={`md:hidden absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-sm transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                <nav className="container mx-auto px-6 py-4">
                  <ul className="flex flex-col space-y-4">
                    <li><a href="#about" className="block hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Hakkında</a></li>
                    <li><a href="#program" className="block hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Program</a></li>
                    <li><a href="#committees" className="block hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Komiteler</a></li>
                    <li><a href="#team" className="block hover:text-gray-400 transition duration-300" onClick={toggleMenu}>Ekip</a></li>
                    <li><a href="#faq" className="block hover:text-gray-400 transition duration-300" onClick={toggleMenu}>SSS</a></li>
                    <li><a href="#contact" className="block hover:text-gray-400 transition duration-300" onClick={toggleMenu}>İletişim</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <section
            id="hero"
            className="relative h-screen flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"></div>
            <div className="relative text-center px-4 md:px-0">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FD6B00] via-[#004A81] to-white">
                İzmir Ekonomi Üniversitesi
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#004A81] to-[#FD6B00]">
                Gençlik Çalıştayı 2025
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-[#E6F3F3]">
                Geleceğimizi birlikte şekillendirmek için bir araya geliyoruz
              </p>
              <div className="mb-8">
                <CountdownTimer timeLeft={timeLeft} />
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center items-center">
                <a
                  href="#about"
                  className="w-full sm:w-auto inline-block bg-gradient-to-r from-[#004A81] to-[#FD6B00] text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:opacity-90 transition duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                >
                  Daha Fazla Bilgi
                </a>
                <a
                  href="#register"
                  className="w-full sm:w-auto inline-block bg-transparent text-white border-2 border-white/20 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                >
                  Hemen Kayıt Ol
                </a>
              </div>
            </div>
          </section>

          <section id="about" className="relative py-20 px-4 md:px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[url('/images/background/pattern.png')] opacity-[0.03]"></div>
            <div className="container relative mx-auto max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#004A81] to-[#FD6B00]">
                Çalıştay Hakkında
              </h2>
              <p className="text-lg text-[#E6F3F3] leading-relaxed mb-8">
                Türkiye Gençlik Çalıştayı, ülkemizin geleceğini şekillendirmek için gençlerin bir araya geldiği üç günlük yoğun bir programdır. Eğitim, ekonomi, teknoloji, çevre ve sosyal politikalar gibi kritik konularda fikirlerinizi paylaşın, tartışın ve çözüm önerileri geliştirin.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Fikir Alışverişi</h3>
                  <p className="text-[#E6F3F3]">Farklı bakış açılarını dinleyin, tartışın ve yeni perspektifler kazanın.</p>
                </div>
                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Networking</h3>
                  <p className="text-[#E6F3F3]">Türkiye&apos;nin dört bir yanından gelen değerli katılımcılarla tanışın.</p>
                </div>
                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Çözüm Üretme</h3>
                  <p className="text-[#E6F3F3]">Ülkemizin sorunlarına yönelik somut çözüm önerileri geliştirin.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="program" className="relative py-20 px-4 md:px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[url('/images/background/pattern.png')] opacity-[0.03]"></div>
            <div className="container relative mx-auto max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#004A81] to-[#FD6B00]">
                Program Akışı
              </h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">1. Gün - 20 Nisan</h3>
                  <ul className="space-y-3 text-[#E6F3F3]">
                    <li>09:00 - Kayıt ve Tanışma</li>
                    <li>10:00 - Açılış Konuşmaları</li>
                    <li>11:30 - Panel: Türkiye&apos;nin Güncel Sorunları</li>
                    <li>13:00 - Öğle Yemeği</li>
                    <li>14:30 - Komite Tanıtımları ve Seçimleri</li>
                    <li>16:00 - Komite Çalışmaları Başlangıcı</li>
                    <li>18:00 - Networking Resepsiyonu</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">2. Gün - 21 Nisan</h3>
                  <ul className="space-y-3 text-[#E6F3F3]">
                    <li>09:30 - Komite Çalışmaları</li>
                    <li>11:00 - Uzman Sunumları</li>
                    <li>13:00 - Öğle Yemeği</li>
                    <li>14:30 - Workshop Oturumları</li>
                    <li>16:30 - Proje Geliştirme</li>
                    <li>18:00 - Kültürel Etkinlik</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">3. Gün - 22 Nisan</h3>
                  <ul className="space-y-3 text-[#E6F3F3]">
                    <li>09:30 - Komite Sunumları</li>
                    <li>11:30 - Değerlendirme Oturumu</li>
                    <li>13:00 - Öğle Yemeği</li>
                    <li>14:30 - Sonuç Bildirgesinin Hazırlanması</li>
                    <li>16:00 - Kapanış Töreni ve Sertifika Takdimi</li>
                    <li>18:00 - Gala Yemeği</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="committees" className="relative py-20 px-4 md:px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[url('/images/background/pattern.png')] opacity-[0.03]"></div>
            <div className="container relative mx-auto max-w-6xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#004A81] to-[#FD6B00]">
                Çalıştay Komiteleri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Eğitim Politikaları Komitesi</h3>
                  <p className="text-[#E6F3F3] mb-4">Türkiye&apos;nin eğitim sistemini analiz ederek, yenilikçi ve sürdürülebilir eğitim politikaları geliştirmeyi hedefler.</p>
                  <ul className="text-[#E6F3F3] list-disc list-inside space-y-2">
                    <li>Müfredat Geliştirme</li>
                    <li>Öğretmen Yetiştirme</li>
                    <li>Uzaktan Eğitim</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Teknoloji ve İnovasyon Komitesi</h3>
                  <p className="text-[#E6F3F3] mb-4">Dijital dönüşüm sürecinde Türkiye&apos;nin teknolojik gelişimini hızlandıracak projeler üretir.</p>
                  <ul className="text-[#E6F3F3] list-disc list-inside space-y-2">
                    <li>Yapay Zeka</li>
                    <li>Siber Güvenlik</li>
                    <li>Dijital Dönüşüm</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Sürdürülebilirlik Komitesi</h3>
                  <p className="text-[#E6F3F3] mb-4">Çevre sorunlarına yönelik sürdürülebilir çözümler geliştirerek, yeşil ekonomiye geçiş sürecini destekler.</p>
                  <ul className="text-[#E6F3F3] list-disc list-inside space-y-2">
                    <li>İklim Değişikliği</li>
                    <li>Yenilenebilir Enerji</li>
                    <li>Sıfır Atık</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Sosyal Politikalar Komitesi</h3>
                  <p className="text-[#E6F3F3] mb-4">Toplumsal eşitlik ve sosyal adalet için politikalar geliştirir.</p>
                  <ul className="text-[#E6F3F3] list-disc list-inside space-y-2">
                    <li>Gençlik Politikaları</li>
                    <li>Sosyal İçerme</li>
                    <li>Toplumsal Cinsiyet Eşitliği</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Ekonomi ve İstihdam Komitesi</h3>
                  <p className="text-[#E6F3F3] mb-4">Genç istihdamını artıracak ve ekonomik kalkınmayı destekleyecek projeler üretir.</p>
                  <ul className="text-[#E6F3F3] list-disc list-inside space-y-2">
                    <li>Girişimcilik</li>
                    <li>Dijital Ekonomi</li>
                    <li>İstihdam Politikaları</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Kültür ve Sanat Komitesi</h3>
                  <p className="text-[#E6F3F3] mb-4">Kültürel mirasımızı koruyarak geleceğe taşıyacak projeler geliştirir.</p>
                  <ul className="text-[#E6F3F3] list-disc list-inside space-y-2">
                    <li>Kültürel Miras</li>
                    <li>Sanat Politikaları</li>
                    <li>Kültürel Diplomasi</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="register" className="relative py-20 px-4 md:px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[url('/images/background/pattern.png')] opacity-[0.03]"></div>
            <div className="container relative mx-auto max-w-4xl text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#004A81] to-[#FD6B00]">
                Katılım Bilgileri
              </h2>
              <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-[#FD6B00]">Katılım Ücreti</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-xl font-bold text-white">Erken Kayıt</p>
                    <p className="text-3xl font-bold text-white">₺750</p>
                    <p className="text-gray-300">1 Ocak - 1 Mart 2025</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xl font-bold text-white">Normal Kayıt</p>
                    <p className="text-3xl font-bold text-white">₺950</p>
                    <p className="text-gray-300">1 Mart - 1 Nisan 2025</p>
                  </div>
                </div>
                <div className="mt-8 space-y-4 text-gray-200">
                  <p>Katılım ücretine dahil olanlar:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>3 günlük çalıştay katılımı</li>
                    <li>Öğle yemekleri ve ikramlar</li>
                    <li>Çalıştay materyalleri</li>
                    <li>Sertifika</li>
                    <li>Networking etkinlikleri</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-block bg-gradient-to-r from-[#004A81] to-[#FD6B00] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition duration-300 transform hover:scale-105"
                  >
                    Hemen Kayıt Ol
                  </a>
                </div>
              </div>
            </div>
          </section>

          <Team />
          <FAQ />

          <section id="contact" className="relative py-20 px-4 md:px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[url('/images/background/pattern.png')] opacity-[0.03]"></div>
            <div className="container relative mx-auto max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#004A81] to-[#FD6B00]">
                İletişim
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">İletişim Bilgileri</h3>
                  <ul className="space-y-4 text-gray-200">
                    <li>
                      <strong className="block text-white">E-posta:</strong>
                      <a href="mailto:info@gencliktalistayi.org" className="hover:text-[#FD6B00] transition duration-300">
                        info@gencliktalistayi.org
                      </a>
                    </li>
                    <li>
                      <strong className="block text-white">Telefon:</strong>
                      <a href="tel:+902321234567" className="hover:text-[#FD6B00] transition duration-300">
                        +90 (232) 123 45 67
                      </a>
                    </li>
                    <li>
                      <strong className="block text-white">Adres:</strong>
                      <p>İzmir Ekonomi Üniversitesi, Balçova, İzmir</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-8 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">Sosyal Medya</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="text-gray-200 hover:text-[#FD6B00] transition duration-300 flex items-center">
                        <span className="mr-2">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-200 hover:text-[#FD6B00] transition duration-300 flex items-center">
                        <span className="mr-2">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-200 hover:text-[#FD6B00] transition duration-300 flex items-center">
                        <span className="mr-2">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="relative bg-black/80 text-gray-400 py-8 border-t border-white/10 z-10">
          <div className="absolute inset-0 bg-[url('/images/background/pattern.png')] opacity-[0.03]"></div>
          <div className="container relative mx-auto px-4 text-center">
            <p>© 2025 Türkiye Gençlik Çalıştayı. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
