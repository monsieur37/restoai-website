import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>RestoAI - Gérez vos avis Google depuis WhatsApp</title>
        <meta name="description" content="RestoAI automatise la gestion de vos avis Google via WhatsApp. L'IA génère des réponses, vous validez d'un clic. Fini la corvée des avis !" />
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
                  <a href="#pourquoi" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pourquoi</a>
                  <a href="#fonctionnement" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Comment ça marche</a>
                  <a href="#pricing" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Tarifs</a>
                  <a href="#temoignages" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">Témoignages</a>
                  <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="gradient-bg hero-pattern pt-20 pb-16 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero Text */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Gérez vos avis Google<br/>
                  <span className="text-yellow-300">depuis WhatsApp</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0">
                  L'IA génère des réponses personnalisées à vos avis clients. 
                  Vous validez d'un clic depuis WhatsApp. Simple, rapide, efficace.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition">
                    <i className="fab fa-whatsapp mr-2"></i>
                    Essai gratuit 30 jours
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                    <i className="fas fa-play mr-2"></i>
                    Voir la démo
                  </button>
                </div>
              </div>
              
              {/* Hero Image Placeholder */}
              <div className="relative">
                <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="bg-gray-200 rounded-xl h-80 lg:h-96 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <i className="fas fa-image text-4xl mb-4"></i>
                      <p className="text-lg font-medium">Image/Vidéo Hero</p>
                      <p className="text-sm">Screenshot WhatsApp flow</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi Section */}
        <section id="pourquoi" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vous perdez du temps sur vos avis Google ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                En moyenne, un restaurateur passe <strong>2h par semaine</strong> à gérer ses avis Google. 
                Et pourtant, 73% des avis restent sans réponse...
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-clock text-red-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Chronophage</h3>
                <p className="text-gray-600">
                  Vous devez checker Google My Business, lire les avis, réfléchir à une réponse adaptée, la taper...
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-exclamation-triangle text-orange-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Facile d'oublier</h3>
                <p className="text-gray-600">
                  Entre le service, la cuisine et la gestion, difficile de penser à vérifier vos nouveaux avis chaque jour.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-star-half-alt text-yellow-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact sur la réputation</h3>
                <p className="text-gray-600">
                  73% des consommateurs font plus confiance à un business qui répond à ses avis. Vous ratez des clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnement Section */}
        <section id="fonctionnement" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comment ça marche ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                RestoAI s'occupe de tout. Vous n'avez qu'à valider depuis WhatsApp.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Détection automatique</h3>
                <p className="text-gray-600">
                  Dès qu'un client laisse un avis sur Google, RestoAI le détecte et vous envoie une notification WhatsApp.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">IA génère la réponse</h3>
                <p className="text-gray-600">
                  Notre IA analyse l'avis et génère une réponse personnalisée selon le ton de votre restaurant.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-yellow-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vous validez en 1 clic</h3>
                <p className="text-gray-600">
                  Trois boutons : ✅ Publier, ✏️ Modifier ou ❌ Ignorer. RestoAI s'occupe du reste !
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Voyez RestoAI en action
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez comment RestoAI transforme la gestion de vos avis en quelques secondes.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-100 rounded-2xl p-8 md:p-16 text-center">
                <div className="bg-gray-200 rounded-xl h-64 md:h-80 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-500">
                    <i className="fas fa-video text-5xl mb-4"></i>
                    <p className="text-xl font-medium">Vidéo de démonstration</p>
                    <p className="text-sm">À venir - Flow WhatsApp complet</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
                  <i className="fas fa-play mr-2"></i>
                  Lancer la démo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Un tarif simple et transparent
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Pas de surprises, pas de frais cachés. Un prix fixe pour tous les restaurants.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-2xl p-8 text-center text-gray-900 shadow-xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">RestoAI Essentiel</h3>
                  <p className="text-gray-600">Gestion d'avis Google avec IA</p>
                </div>
                
                <div className="mb-8">
                  <span className="text-5xl font-bold text-blue-600">19€</span>
                  <span className="text-xl text-gray-500">/mois</span>
                  <p className="text-sm text-gray-500 mt-2">Sans engagement</p>
                </div>

                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Détection automatique des avis Google</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Réponses générées par IA</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Validation 1-clic via WhatsApp</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>3 tons de réponse (Chaleureux/Pro/Décontracté)</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-3"></i>
                    <span>Support par WhatsApp</span>
                  </li>
                </ul>

                <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition mb-4">
                  <i className="fab fa-whatsapp mr-2"></i>
                  Commencer l'essai gratuit
                </button>
                <p className="text-sm text-gray-500">30 jours d'essai · Aucune carte requise</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">Pourquoi choisir RestoAI ?</p>
              <div className="grid md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
                <div>
                  <span className="text-yellow-400 font-bold text-lg">vs 200€+/mois</span>
                  <p className="text-sm text-gray-400">concurrents comme Malou</p>
                </div>
                <div>
                  <span className="text-yellow-400 font-bold text-lg">100% WhatsApp</span>
                  <p className="text-sm text-gray-400">zéro dashboard complexe</p>
                </div>
                <div>
                  <span className="text-yellow-400 font-bold text-lg">5 min setup</span>
                  <p className="text-sm text-gray-400">prêt en quelques clics</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages Section */}
        <section id="temoignages" className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ils utilisent déjà RestoAI
              </h2>
              <p className="text-lg text-gray-600">
                Plus de 50 restaurants indépendants nous font confiance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-blue-600">MG</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Marc Girard</h4>
                    <p className="text-sm text-gray-500">Le Petit Bistrot, Paris</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-600">
                  "Je gagne 2h par semaine ! Les réponses de l'IA sont parfaites, 
                  je n'ai presque jamais besoin de les modifier."
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-green-600">SL</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sophie Laurent</h4>
                    <p className="text-sm text-gray-500">Chez Sophie, Lyon</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-600">
                  "Génial ! Plus besoin d'ouvrir Google My Business. 
                  Tout se passe sur WhatsApp, c'est tellement pratique !"
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-purple-600">AD</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Antoine Dubois</h4>
                    <p className="text-sm text-gray-500">La Table d'Antoine, Marseille</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-600">
                  "Mes clients apprécient d'avoir une réponse rapide à leurs avis. 
                  Ma note Google est passée de 4,2 à 4,7 !"
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600">50+</span>
                  <p className="text-gray-600">Restaurants actifs</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600">2 000+</span>
                  <p className="text-gray-600">Avis traités</p>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-600">4,8/5</span>
                  <p className="text-gray-600">Satisfaction client</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Prêt à automatiser vos avis ?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Rejoignez les 50+ restaurants qui économisent déjà du temps avec RestoAI
              </p>
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  🎉 Offre de lancement
                </h3>
                <p className="text-xl mb-6">
                  <strong>30 jours gratuits</strong> + 50% de réduction les 3 premiers mois
                </p>
                <p className="text-lg opacity-90">
                  Profitez-en, cette offre est limitée aux 100 premiers restaurants !
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <button className="w-full bg-green-500 text-white py-4 rounded-lg text-xl font-semibold hover:bg-green-600 transition">
                  <i className="fab fa-whatsapp mr-3"></i>
                  Démarrer maintenant sur WhatsApp
                </button>
                <p className="text-sm text-gray-500">
                  Envoyez "DEMO" au <strong>+33 6 XX XX XX XX</strong>
                </p>
              </div>

              <div className="border-t pt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Questions ? Contactez-nous</h3>
                <div className="flex justify-center space-x-6 text-sm">
                  <a href="mailto:hello@restoai.fr" className="text-blue-600 hover:text-blue-700 flex items-center">
                    <i className="fas fa-envelope mr-2"></i>
                    hello@restoai.fr
                  </a>
                  <a href="tel:+33XXXXXXXXX" className="text-blue-600 hover:text-blue-700 flex items-center">
                    <i className="fas fa-phone mr-2"></i>
                    +33 6 XX XX XX XX
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">🍽️ RestoAI</h3>
                <p className="text-gray-400">
                  L'assistant IA qui révolutionne la gestion d'avis pour les restaurants indépendants.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Produit</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#fonctionnement" className="hover:text-white">Comment ça marche</a></li>
                  <li><a href="#pricing" className="hover:text-white">Tarifs</a></li>
                  <li><a href="#demo" className="hover:text-white">Démo</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#contact" className="hover:text-white">Contact</a></li>
                  <li><a href="/legal/mentions" className="hover:text-white">Mentions légales</a></li>
                  <li><a href="/legal/privacy" className="hover:text-white">Confidentialité</a></li>
                  <li><a href="/legal/terms" className="hover:text-white">CGU</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Suivez-nous</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400">
                &copy; 2026 RestoAI. Tous droits réservés. 
                Développé avec ❤️ en France par <a href="https://github.com/monsieur37" className="text-blue-400 hover:text-blue-300">Adrien</a>.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}