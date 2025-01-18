"use client";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div className="flex justify-center gap-3 text-2xl md:text-3xl font-bold">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center justify-center w-20 h-20 bg-white opacity-80 text-black rounded-md shadow-md"
        >
          <span>{value}</span>
          <span className="text-sm uppercase text-gray-700">{unit}</span>
        </div>
      ))}
    </div>
  );
};

const Home: NextPage = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Gençlik Çalıştayı</title>
        <meta
          name="description"
          content="İzmir Ekonomi Üniversitesi'nde Gençlik Çalıştayı tanıtım sitesi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="minh-screen bg-black text-white flex flex-col">
        <main className="flex-grow">
          <section
            id="hero"
            className="relative text-center h-screen px-4 md:px-6 bg-fixed bg-cover bg-center text-white flex items-center justify-center"
            style={{ backgroundImage: "url('/images/background/image1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
            <header className="absolute top-0 left-0 right-0 bg-transparent z-50">
              <div className="container mx-auto px-6 py-4 flex justify-between items-center bg-white rounded-b-2xl opacity-80">
                <Image
                  src="/images/logo/1.png"
                  alt="Logo"
                  className="object-contain"
                  width={120}
                  height={120}
                />
                <nav>
                  <ul className="flex space-x-4 md:space-x-6">
                    <li>
                      <a href="#about" className="text-gray-700 hover:text-black transition">Hakkında</a>
                    </li>
                    <li>
                      <a href="#program" className="text-gray-700 hover:text-black transition">Program</a>
                    </li>
                    <li>
                      <a href="#contact" className="text-gray-700 hover:text-black transition">İletişim</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Gençlik Çalıştayı 2025</h2>
              <p className="text-base md:text-lg max-w-lg mx-auto mb-6 md:mb-8">
                İzmir Ekonomi Üniversitesi&apos;nde 20 Nisan&apos;da düzenlenecek Gençlik Çalıştayı&apos;na katılın. Türkiye&apos;nin sorunlarını ele alacağımız bu etkinlikte siz de yer alın.
              </p>
              <div className="mt-8">
                <p className="text-lg md:text-xl font-semibold mb-4">Etkinliğe Kalan Süre</p>
                <CountdownTimer timeLeft={timeLeft} />
              </div>
              <a
                href="#about"
                className="mt-8 inline-block bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-md shadow hover:scale-105 transition"
              >
                Daha Fazla Bilgi Edinin
              </a>
            </div>
          </section>

          <section id="about" className="py-12 px-4 md:py-16 md:px-6">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8">Hakkında</h2>
              <p className="text-center text-sm md:text-base leading-relaxed max-w-xl mx-auto text-gray-400">
                Gençlik Çalıştayı, gençlerin Türkiye&apos;nin güncel sorunlarını tartışıp çözümler üretmesini amaçlayan, birkaç gün sürecek kapsamlı bir etkinliktir.
              </p>
            </div>
          </section>

          <section id="program" className="py-12 px-4 md:py-16 md:px-72 bg-black">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8">Program</h2>
              <ul className="space-y-4 md:space-y-6">
                <li className="border border-gray-700 p-3 md:p-4 rounded-md">
                  <h3 className="font-semibold text-base md:text-lg text-white">20 Nisan</h3>
                  <p className="text-gray-400">Çalıştay açılışı ve tanışma etkinlikleri.</p>
                </li>
                <li className="border border-gray-700 p-3 md:p-4 rounded-md">
                  <h3 className="font-semibold text-base md:text-lg text-white">21 Nisan</h3>
                  <p className="text-gray-400">Atölye çalışmaları ve grup tartışmaları.</p>
                </li>
                <li className="border border-gray-700 p-3 md:p-4 rounded-md">
                  <h3 className="font-semibold text-base md:text-lg text-white">22 Nisan</h3>
                  <p className="text-gray-400">Sonuç bildirgesi sunumu ve kapanış etkinlikleri.</p>
                </li>
              </ul>
            </div>
          </section>

          <section id="contact" className="py-12 px-4 md:py-16 md:px-6">
            <div className="container mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8">İletişim</h2>
              <p className="text-center text-sm md:text-base max-w-lg mx-auto text-gray-400">
                Daha fazla bilgi için bize ulaşın: <br />
                <a
                  href="mailto:info@?.com"
                  className="text-white underline hover:text-gray-400 transition"
                >
                  info@?.com
                </a>
              </p>
            </div>
          </section>
        </main>

        <footer className="bg-black text-gray-500 py-3 md:py-4">
          <div className="container mx-auto text-center">
            <p className="text-xs md:text-sm">© 2025 EKO Gençlik Çalıştayı. Tüm hakları saklıdır.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
