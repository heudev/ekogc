import Image from 'next/image';

interface TeamMember {
    name: string;
    role: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Ilgaz Yaman",
        role: "Çalıştay Başkanı",
        image: "https://media.licdn.com/dms/image/v2/D5603AQFtY6KdqyvmTQ/profile-displayphoto-shrink_800_800/B56ZVgotjMHEAc-/0/1741083043908?e=1746662400&v=beta&t=nGcmJIQAq_9iaKpysQNWzLlB51g3qgh7CF5tAhN2iV8"
    },
    {
        name: "Eray Kaytancı",
        role: "Başkan Yardımcısı",
        image: "/images/team/member3.jpg"
    },
    {
        name: "Enes Uysal",
        role: "IT Sorumlusu",
        image: "https://enes.run/_next/image?url=%2Fimages%2Fprofile%2Fenes1.jpg&w=3840&q=75"
    },
    {
        name: "Diğer kişiler",
        role: "Organizasyon Sorumluları",
        image: "/images/team/member2.jpg"
    }
];

const Team = () => {
    return (
        <section id="team" className="relative py-16 sm:py-20 px-4 md:px-6">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-[url('/images/background/pattern.png')] opacity-[0.03]"></div>
            <div className="container relative mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#004A81] to-[#FD6B00]">
                    Yönetim Ekibi
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-black/90 to-gray-900/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-[#004A81]/20 hover:border-[#FD6B00]/30 transition duration-300 shadow-lg hover:shadow-xl text-center transform hover:scale-105"
                        >
                            <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#004A81] to-[#FD6B00] p-1">
                                    <div className="rounded-full overflow-hidden w-full h-full">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-[#FD6B00] mb-1 sm:mb-2">{member.name}</h3>
                            <p className="text-sm sm:text-base text-[#E6F3F3]">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team; 