import Image from 'next/image';

const Message = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/3">
                    <Image
                        src="/images/team/ilgaz.jpeg"
                        alt="Başkan"
                        width={300}
                        height={400}
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl font-bold mb-4">Başkanın Mesajı</h2>
                    <p className=" whitespace-pre-line">
                        Sevgili Arkadaşlarım,

                        İzmir Ekonomi Üniversitesi Gençlik Çalıştayı olarak, sizlerin enerjisiyle şekillenen bu önemli sürecin bir parçası olmaktan büyük onur duyuyorum. Geleceği kuracak olan siz gençlerin fikirlerine, hayallerine ve üretkenliğine yürekten inanıyorum. Bu çalıştay, sadece sorunları tartıştığımız değil, aynı zamanda çözüm ürettiğimiz, birlikte güçlendiğimiz ve değişimin öncüsü olduğumuz bir platformdur.

                        Yapacağımız her çalışma, gençliğin potansiyeline duyduğumuz inancın bir yansıması olacak. Bizler, gençlerin sadece geleceğin değil, bugünün de söz sahibi olduğunu biliyor ve bu anlayışla hareket ediyoruz. Katılımınız, fikirleriniz ve emeğinizle bu süreci hep birlikte daha anlamlı kılacağız.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Message;
