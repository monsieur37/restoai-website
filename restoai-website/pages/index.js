import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>RestoAI - Assistant IA pour Restaurants</title>
        <meta name="description" content="RestoAI automatise les réponses à vos avis Google via WhatsApp. Gagnez du temps, améliorez votre réputation en ligne." />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </Head>
      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .hero-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      <div className="font-sans">
        {/* Navigation */}
        <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-2xl font-bold text-gray-900">
                    🍽️<span className="text-blue-600">RestoAI</span>
                  </h1>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Fonctionnalités</a>
                  <a href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Tarifs</a>
                  <a href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Contact</a>
                  <a href="#demo" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Démo</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="gradient-bg hero-pattern pt-20 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Répondez à vos avis Google<br/>
                <span className="text-yellow-300">directement sur WhatsApp</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                RestoAI utilise l'intelligence artificielle pour générer des réponses personnalisées à vos avis clients. 
                Approuvez en un clic depuis WhatsApp. Fini la corvée des avis !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition">
                  <i className="fab fa-whatsapp mr-2"></i>
                  Essai gratuit 30 jours
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                  <i className="fas fa-play mr-2"></i>
                  Voir la démo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                RestoAI s'intègre parfaitement dans votre quotidien via WhatsApp
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-star text-blue-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Détection automatique</h3>
                <p className="text-gray-600">
                  Dès qu'un client laisse un avis sur Google, RestoAI le détecte automatiquement et vous envoie une notification WhatsApp.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-brain text-green-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IA personnalisée</h3>
                <p className="text-gray-600">
                  Notre IA analyse l'avis et génère une réponse adaptée au ton de votre restaurant : chaleureux, professionnel ou décontracté.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="fab fa-whatsapp text-yellow-600 text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Validation 1-clic</h3>
                <p className="text-gray-600">
                  Recevez la réponse suggérée sur WhatsApp avec des boutons : Approuver, Modifier ou Ignorer. Simple et rapide !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">🍽️ RestoAI</h3>
              <p className="text-gray-400 mb-4">
                L'assistant IA qui révolutionne la gestion d'avis pour les restaurants.
              </p>
              <div className="border-t border-gray-800 mt-8 pt-8">
                <p className="text-gray-400">&copy; 2026 RestoAI. Tous droits réservés. Développé avec ❤️ en France.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}