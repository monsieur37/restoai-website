import Head from 'next/head'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service - DishReply</title>
        <meta name="description" content="DishReply Terms of Service - Under Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF3366" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <style jsx>{`
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
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
                  <a href="/" className="text-3xl font-bold text-gray-900">
                    🍽️<span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">DishReply</span>
                  </a>
                </div>
              </div>
              
              {/* Desktop Menu */}
              <div className="hidden md:block">
                <div className="ml-12 flex items-center space-x-8">
                  <a href="/#pourquoi" className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-semibold transition-colors">Pourquoi</a>
                  <a href="/#fonctionnement" className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-semibold transition-colors">Comment ça marche</a>
                  <a href="/#pricing" className="text-gray-700 hover:text-orange-500 px-4 py-2 text-sm font-semibold transition-colors">Tarifs</a>
                  <a href="/#contact" className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold hover-lift shadow-lg">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-24 min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Terms of Service
              </h1>
              
              {/* Under Construction Badge */}
              <div className="inline-flex items-center bg-yellow-100 border border-yellow-400 rounded-full px-6 py-3 mb-8">
                <i className="fas fa-hard-hat text-yellow-600 mr-3"></i>
                <span className="text-yellow-800 font-semibold">Under Construction - Drafting in Progress</span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <i className="fas fa-file-contract text-6xl text-green-500 mb-8"></i>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Terms of Service
                </h2>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  This page is currently being updated for DishReply. 
                  Our legal team is finalizing comprehensive terms of service 
                  that clearly outline user rights, responsibilities, and service conditions.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    <i className="fas fa-info-circle mr-2"></i>
                    Service Information
                  </h3>
                  <p className="text-green-700">
                    For any questions about our service terms, billing, or usage policies, 
                    please contact us at <a href="mailto:legal@dishreply.com" className="font-bold underline">legal@dishreply.com</a>
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-500">
                  <div>
                    <i className="fas fa-handshake text-blue-500 mb-2 text-lg"></i>
                    <p className="font-medium">Fair Terms</p>
                  </div>
                  <div>
                    <i className="fas fa-balance-scale text-green-500 mb-2 text-lg"></i>
                    <p className="font-medium">Legal Compliance</p>
                  </div>
                  <div>
                    <i className="fas fa-clock text-purple-500 mb-2 text-lg"></i>
                    <p className="font-medium">Coming Soon</p>
                  </div>
                </div>

                {/* Quick Service Overview */}
                <div className="mt-12 bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Service Overview</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">✅ What we provide:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI-powered review responses</li>
                        <li>• WhatsApp integration</li>
                        <li>• Google Business Profile sync</li>
                        <li>• 19€/month pricing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">🔒 Your commitments:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Valid restaurant business</li>
                        <li>• Accurate account information</li>
                        <li>• Responsible service usage</li>
                        <li>• Monthly subscription payment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

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
                  <li><a href="/#fonctionnement" className="hover:text-orange-400 transition-colors font-medium">Comment ça marche</a></li>
                  <li><a href="/#pricing" className="hover:text-orange-400 transition-colors font-medium">Tarifs</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-lg">Legal</h4>
                <ul className="space-y-3 text-gray-300">
                  <li><a href="/privacy" className="hover:text-orange-400 transition-colors font-medium">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-orange-400 transition-colors font-medium text-orange-400">Terms of Service</a></li>
                  <li><a href="/#contact" className="hover:text-orange-400 transition-colors font-medium">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 text-lg">Contact</h4>
                <p className="text-gray-300">
                  <a href="mailto:legal@dishreply.com" className="hover:text-orange-400 transition-colors">
                    legal@dishreply.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-10 text-center">
              <p className="text-gray-300 text-lg font-medium">
                &copy; 2026 DishReply. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}