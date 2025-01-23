import { committees } from "../data/committees";

const Committees = () => {
    return (
        <section id="committees" className="relative py-20 px-4 md:px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[url('/images/background/pattern.png')] opacity-[0.03]"></div>
            <div className="container relative mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#004A81] to-[#FD6B00]">
                    Çalıştay Komiteleri
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {committees.map((committee, index) => (
                        <div key={index} className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                            <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">{committee.title}</h3>
                            <p className="text-[#E6F3F3] mb-4">{committee.description}</p>
                            <ul className="text-[#E6F3F3] list-disc list-inside space-y-2">
                                {committee.topics.map((topic, topicIndex) => (
                                    <li key={topicIndex}>{topic}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Committees; 