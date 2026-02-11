import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>DishReply - Gérez vos avis Google depuis WhatsApp</title>
        <meta name="description" content="DishReply automatise la gestion de vos avis Google via WhatsApp. L'IA génère des réponses, vous validez d'un clic. Fini la corvée des avis !" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF3366" />
        <meta property="og:title" content="DishReply - Automatisez vos réponses aux avis Google" />
        <meta property="og:description" content="DishReply automatise la gestion de vos avis Google via WhatsApp. L'IA génère des réponses, vous validez d'un clic." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dishreply.com" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <style jsx>{`
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #FF6B35 0%, #FF3366 50%, #007AFF 100%);
        }
        .hero-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .hover-lift {
          transition: all 0.2s ease;
        }
        .hover-lift:hover {
          transform: translateY(-2px);
        }
      `}</style>

      <div className="font-sans">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="text-3xl font-bold text-gray-900">
                    🍽️<span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">DishReply</span>
                  </h1>
                </div>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-12 flex items-center space-x-8">
                  <a href="#pourquoi" className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-semibold transition-colors">Pourquoi</a>
                  <a href="#fonctionnement" className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-semibold transition-colors">Comment ça marche</a>
                  <a href="#pricing" className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-semibold transition-colors">Tarifs</a>
                  <a href="#temoignages" className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-semibold transition-colors">Témoignages</a>
                  <a href="#contact" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold hover-lift shadow-lg">Contact</a>
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button 
                  onClick={() => {
                    const menu = document.getElementById('mobile-menu');
                    menu.classList.toggle('hidden');
                  }}
                  className="text-gray-700 hover:text-orange-500 p-3 rounded-xl"
                >
                  <i className="fas fa-bars text-xl"></i>
                </button>
              </div>
            </div>
            
            {/* Mobile Menu */}
            <div id="mobile-menu" className="md:hidden hidden">
              <div className="px-4 pt-4 pb-6 space-y-3 bg-white/90 backdrop-blur-md border-t border-gray-100">
                <a href="#pourquoi" className="text-gray-700 hover:text-orange-500 block px-4 py-3 text-base font-semibold">Pourquoi</a>
                <a href="#fonctionnement" className="text-gray-700 hover:text-orange-500 block px-4 py-3 text-base font-semibold">Comment ça marche</a>
                <a href="#pricing" className="text-gray-700 hover:text-orange-500 block px-4 py-3 text-base font-semibold">Tarifs</a>
                <a href="#temoignages" className="text-gray-700 hover:text-orange-500 block px-4 py-3 text-base font-semibold">Témoignages</a>
                <a href="#contact" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white block px-4 py-3 rounded-xl text-base font-bold mx-4 mt-6 text-center">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="gradient-bg hero-pattern pt-24 pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Hero Text */}
              <div className="text-center lg:text-left">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
                  Gérez vos avis Google<br/>
                  <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">depuis WhatsApp</span>
                </h1>
                <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  L'IA génère des réponses personnalisées à vos avis clients. 
                  Vous validez d'un clic depuis WhatsApp. Simple, rapide, efficace.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <a href="https://restoai-zeta.vercel.app/api/auth/google" className="bg-white text-gray-900 px-10 py-5 rounded-full text-xl font-bold hover-lift shadow-2xl inline-block">
                    <i className="fab fa-whatsapp mr-3 text-green-500"></i>
                    Commencer maintenant
                  </a>
                  <button className="glass text-white px-10 py-5 rounded-full text-xl font-bold hover-lift">
                    <i className="fas fa-play mr-3"></i>
                    Voir la démo
                  </button>
                </div>
              </div>
              
              {/* Hero Image Placeholder */}
              <div className="relative">
                <div className="glass rounded-3xl p-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl h-80 lg:h-96 flex items-center justify-center shadow-inner">
                    <div className="text-center text-gray-600">
                      <i className="fas fa-mobile-alt text-6xl mb-6 text-orange-500"></i>
                      <p className="text-xl font-bold">Image/Vidéo Hero</p>
                      <p className="text-base opacity-75">Screenshot WhatsApp flow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Section */}
        <section id="pourquoi" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Vous perdez du temps sur vos avis Google ?
              </h2>
              <p className="text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
                En moyenne, un restaurateur passe <span className="text-orange-500 font-bold">2h par semaine</span> à gérer ses avis Google. 
                Et pourtant, <span className="text-pink-500 font-bold">73% des avis</span> restent sans réponse...
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl hover-lift">
                  <i className="fas fa-clock text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Chronophage</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Vous devez checker Google My Business, lire les avis, réfléchir à une réponse adaptée, la taper...
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl hover-lift">
                  <i className="fas fa-exclamation-triangle text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Facile d'oublier</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Entre le service, la cuisine et la gestion, difficile de penser à vérifier vos nouveaux avis chaque jour.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl hover-lift">
                  <i className="fas fa-star-half-alt text-white text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact sur la réputation</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-900">73%</span> des consommateurs font plus confiance à un business qui répond à ses avis. Vous ratez des clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnement Section */}
        <section id="fonctionnement" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Comment ça marche ?
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                DishReply s'occupe de tout. Vous n'avez qu'à valider depuis WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl hover-lift">
                  <span className="text-3xl font-extrabold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Détection automatique</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Dès qu'un client laisse un avis sur Google, DishReply le détecte et vous envoie une notification WhatsApp.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl hover-lift">
                  <span className="text-3xl font-extrabold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">IA génère la réponse</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Notre IA analyse l'avis et génère une réponse personnalisée selon le ton de votre restaurant.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl hover-lift">
                  <span className="text-3xl font-extrabold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Vous validez en 1 clic</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Trois boutons : <span className="font-semibold">✅ Publier</span>, <span className="font-semibold">✏️ Modifier</span> ou <span className="font-semibold">❌ Ignorer</span>. DishReply s'occupe du reste !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Voyez DishReply en action
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                Découvrez comment DishReply transforme la gestion de vos avis en quelques secondes.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-12 md:p-20 text-center shadow-2xl">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-72 md:h-96 flex items-center justify-center mb-10 shadow-inner">
                  <div className="text-center text-gray-600">
                    <i className="fas fa-video text-6xl mb-6 text-blue-500"></i>
                    <p className="text-2xl font-bold mb-2">Vidéo de démonstration</p>
                    <p className="text-lg opacity-75">À venir - Flow WhatsApp complet</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-5 rounded-full text-xl font-bold hover-lift shadow-xl">
                  <i className="fas fa-play mr-3"></i>
                  Lancer la démo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                Un tarif simple et transparent
              </h2>
              <p className="text-2xl text-white/80 max-w-3xl mx-auto font-medium">
                Pas de surprises, pas de frais cachés. Un prix fixe pour tous les restaurants.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="bg-white rounded-3xl p-12 text-center text-gray-900 shadow-2xl relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    POPULAIRE
                  </span>
                </div>
                
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">DishReply Essentiel</h3>
                  <p className="text-lg text-gray-600">Gestion d'avis Google avec IA</p>
                </div>
                
                <div className="mb-10">
                  <span className="text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">19€</span>
                  <span className="text-2xl text-gray-500 font-semibold">/mois</span>
                  <p className="text-base text-gray-500 mt-3 font-medium">Sans engagement</p>
                </div>

                <ul className="text-left space-y-4 mb-12 text-lg">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
                    <span className="font-medium">Détection automatique des avis Google</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
                    <span className="font-medium">Réponses générées par IA</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
                    <span className="font-medium">Validation 1-clic via WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
                    <span className="font-medium">3 tons de réponse personnalisables</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-4 text-xl"></i>
                    <span className="font-medium">Support par WhatsApp</span>
                  </li>
                </ul>

                <a href="https://restoai-zeta.vercel.app/api/auth/google" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-5 rounded-full text-xl font-bold hover-lift shadow-xl mb-6 inline-block text-center">
                  <i className="fab fa-whatsapp mr-3"></i>
                  Commencer maintenant
                </a>
                <p className="text-base text-gray-500 font-medium">50% de réduction les 3 premiers mois</p>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-white/70 mb-8 text-xl font-medium">Pourquoi choisir DishReply ?</p>
              <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
                <div className="text-center">
                  <span className="text-yellow-300 font-bold text-2xl">vs 200€+/mois</span>
                  <p className="text-white/70 text-lg mt-2">concurrents comme Malou</p>
                </div>
                <div className="text-center">
                  <span className="text-green-300 font-bold text-2xl">100% WhatsApp</span>
                  <p className="text-white/70 text-lg mt-2">zéro dashboard complexe</p>
                </div>
                <div className="text-center">
                  <span className="text-blue-300 font-bold text-2xl">5 min setup</span>
                  <p className="text-white/70 text-lg mt-2">prêt en quelques clics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Bientôt disponible
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                DishReply évolue constamment. Voici ce qui arrive prochainement !
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Q2 2026
                  </span>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <i className="fas fa-language text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Traduction de menus</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Traduisez automatiquement vos menus en <span className="font-semibold text-blue-600">anglais, espagnol, italien, allemand</span> via WhatsApp. 
                  Perfect pour les zones touristiques !
                </p>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Photo de menu → Traduction instantanée</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>5 langues européennes</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Format PDF prêt à imprimer</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    Q3 2026
                  </span>
                </div>
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <i className="fas fa-calendar-check text-white text-3xl"></i>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Gestion de réservations</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Vos clients réservent directement via WhatsApp. Vous confirmez d'un clic. 
                  <span className="font-semibold text-green-600">Fini les appels téléphoniques !</span>
                </p>
                <ul className="text-left space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Réservation via lien WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Gestion des créneaux automatique</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Rappels automatiques clients</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  🎯 Accès prioritaire pour nos early adopters
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  Les restaurants qui s'abonnent maintenant auront accès en avant-première aux nouvelles fonctionnalités. 
                  <span className="text-orange-600 font-bold">Sans surcoût pendant 6 mois !</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages Section */}
        <section id="temoignages" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Ils utilisent déjà DishReply
              </h2>
              <p className="text-2xl text-gray-700 font-medium">
                Plus de 50 restaurants indépendants nous font confiance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-5">
                    <span className="font-bold text-white text-lg">MG</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Marc Girard</h4>
                    <p className="text-gray-600">Le Petit Bistrot, Paris</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-xl"></i>
                  ))}
                </div>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  "Je gagne <span className="text-orange-500 font-bold">2h par semaine</span> ! Les réponses de l'IA sont parfaites, 
                  je n'ai presque jamais besoin de les modifier."
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mr-5">
                    <span className="font-bold text-white text-lg">SL</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Sophie Laurent</h4>
                    <p className="text-gray-600">Chez Sophie, Lyon</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-xl"></i>
                  ))}
                </div>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  "Génial ! Plus besoin d'ouvrir Google My Business. 
                  Tout se passe sur <span className="text-green-500 font-bold">WhatsApp</span>, c'est tellement pratique !"
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-5">
                    <span className="font-bold text-white text-lg">AD</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">Antoine Dubois</h4>
                    <p className="text-gray-600">La Table d'Antoine, Marseille</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400 text-xl"></i>
                  ))}
                </div>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  "Mes clients apprécient d'avoir une réponse rapide. 
                  Ma note Google est passée de <span className="text-blue-500 font-bold">4,2 à 4,7</span> !"
                </p>
              </div>
            </div>

            <div className="text-center mt-20">
              <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                <div className="text-center">
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">50+</span>
                  <p className="text-xl text-gray-700 font-semibold mt-2">Restaurants actifs</p>
                </div>
                <div className="text-center">
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">2 000+</span>
                  <p className="text-xl text-gray-700 font-semibold mt-2">Avis traités</p>
                </div>
                <div className="text-center">
                  <span className="text-5xl font-extrabold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">4,8/5</span>
                  <p className="text-xl text-gray-700 font-semibold mt-2">Satisfaction client</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Prêt à automatiser vos avis ?
              </h2>
              <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
                Rejoignez les 50+ restaurants qui économisent déjà du temps avec DishReply
              </p>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-12 text-white mb-12 shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">
                  🎉 Offre de lancement
                </h3>
                <p className="text-2xl mb-8 font-medium">
                  <span className="bg-white text-purple-600 px-4 py-2 rounded-full font-bold">50% de réduction</span> les 3 premiers mois
                </p>
                <p className="text-xl opacity-95 font-medium">
                  Réduction limitée aux 100 premiers restaurants !
                </p>
              </div>

              <div className="space-y-6 mb-12">
                <a href="https://restoai-zeta.vercel.app/api/auth/google" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-6 rounded-full text-2xl font-bold hover-lift shadow-xl inline-block text-center">
                  <i className="fab fa-whatsapp mr-4"></i>
                  Démarrer maintenant sur WhatsApp
                </a>
                <p className="text-lg text-gray-600 font-medium">
                  Envoyez <span className="font-bold text-gray-900">"DEMO"</span> au <span className="font-bold text-gray-900">+33 6 XX XX XX XX</span>
                </p>
              </div>

              <div className="border-t border-gray-200 pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Questions ? Contactez-nous</h3>
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <a href="mailto:hello@dishreply.com" className="flex items-center justify-center text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-blue-600"></i>
                    </div>
                    hello@dishreply.com
                  </a>
                  <a href="tel:+33XXXXXXXXX" className="flex items-center justify-center text-lg font-semibold text-green-600 hover:text-green-700 transition-colors">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-green-600"></i>
                    </div>
                    +33 6 XX XX XX XX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div>
                <h3 className="text-3xl font-bold mb-6">🍽️ <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">DishReply</span></h3>
                <p className="text-gray-300 text-lg font-medium leading-relaxed">
                  L'assistant IA qui révolutionne la gestion d'avis pour les restaurants indépendants.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-lg">Produit</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#fonctionnement" className="hover:text-orange-400 transition-colors font-medium">Comment ça marche</a></li>
                  <li><a href="#pricing" className="hover:text-orange-400 transition-colors font-medium">Tarifs</a></li>
                  <li><a href="#demo" className="hover:text-orange-400 transition-colors font-medium">Démo</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-lg">Support</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="#contact" className="hover:text-orange-400 transition-colors font-medium">Contact</a></li>
                  <li><a href="/legal/mentions" className="hover:text-orange-400 transition-colors font-medium">Mentions légales</a></li>
                  <li><a href="/legal/privacy" className="hover:text-orange-400 transition-colors font-medium">Confidentialité</a></li>
                  <li><a href="/legal/terms" className="hover:text-orange-400 transition-colors font-medium">CGU</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-lg">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-orange-500 transition-all hover-lift">
                    <i className="fab fa-twitter text-lg"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all hover-lift">
                    <i className="fab fa-linkedin text-lg"></i>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-pink-500 transition-all hover-lift">
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-10 text-center">
              <p className="text-gray-300 text-lg font-medium">
                &copy; 2026 DishReply. Tous droits réservés. 
                Développé avec <span className="text-red-400">❤️</span> en France par <a href="https://github.com/monsieur37" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">Adrien</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}