

function AboutPage() {
  return (
    <>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            <div className="max-w-3xl bg-white p-8 rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Hakkımızda</h1>
                <p className="text-gray-600 text-lg">
                    Bu proje, kullanıcıların kütüphanelerini sanal ortama taşımasını olanak sağlamaktadır. Bu sayede sahip olduğu kitapları yazarları kolayca bulabilir.
                </p>

                <h2 className="text-2xl font-semibold text-gray-700 mt-6">Özellikler</h2>
                <ul className="text-gray-600 text-lg list-disc text-left mt-2 mx-auto w-3/4">
                    <li>Kitap, yazar, yayınevi, kategori ve alıntı ekleme.</li>
                    <li>Kitap listesi ve detay sayfası</li>
                    <li>Yazar bilgileri ve eserleri</li>
                    <li>Arama ve filtreleme özellikleri</li>
                    <li>Kullanıcı profili ve çıkış yapma</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-700 mt-6">Amacımız</h2>
                <p className="text-gray-600 text-lg">
                    Kütüphanenizi online platforma taşımak.
                </p>
            </div>
        </div>
    </>
  )
}

export default AboutPage
