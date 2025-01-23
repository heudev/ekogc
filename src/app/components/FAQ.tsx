"use client";
import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqItems: FAQItem[] = [
    {
        question: "Çalıştaya kimler katılabilir?",
        answer: "18-30 yaş arası, Türkiye'nin geleceğine dair fikirlerini paylaşmak isteyen tüm gençler katılabilir."
    },
    {
        question: "Başvuru için son tarih ne zaman?",
        answer: "Başvurular 1 Nisan 2025 tarihine kadar devam edecektir. Kontenjan sınırlıdır."
    },
    {
        question: "Katılım belgesi verilecek mi?",
        answer: "Evet, çalıştay sonunda tüm katılımcılara dijital ve basılı katılım belgesi verilecektir."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-12 px-4 md:py-16 md:px-6">
            <div className="container mx-auto max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">Sıkça Sorulan Sorular</h2>
                <div className="space-y-4">
                    {faqItems.map((item, index) => (
                        <div key={index} className="border border-gray-700 rounded-lg overflow-hidden">
                            <button
                                className="w-full px-6 py-4 text-left bg-gray-900 hover:bg-gray-800 transition-colors duration-200 flex justify-between items-center"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-white font-medium">{item.question}</span>
                                <span className="text-white transform transition-transform duration-200">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 bg-black">
                                    <p className="text-gray-400">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ; 