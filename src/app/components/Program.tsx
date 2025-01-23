import { program } from "../data/program";

const Program = () => {
    return (
        <section id="program" className="relative py-20 px-4 md:px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[url('/images/background/pattern.png')] opacity-[0.03]"></div>
            <div className="container relative mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#004A81] to-[#FD6B00]">
                    Program Akışı
                </h2>
                <div className="space-y-8">
                    {program.map((day, index) => (
                        <div key={index} className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl">
                            <h3 className="text-xl font-semibold mb-4 text-[#FD6B00]">{day.day}</h3>
                            <ul className="space-y-3 text-[#E6F3F3]">
                                {day.schedule.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item.time} - {item.activity}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Program; 