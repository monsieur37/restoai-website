import Head from 'next/head'
import Link from 'next/link'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité - DishReply</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="mb-8">
            <Link href="/" className="text-blue-600 hover:underline">&larr; Retour à l'accueil</Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 mb-6">Dernière mise à jour : 9 février 2026</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des données</h2>
            <p className="text-gray-700 mb-6">
              DishReply collecte uniquement les données nécessaires au fonctionnement du service : 
              informations de contact du restaurant, avis Google publics, et messages WhatsApp échangés 
              dans le cadre du service.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Utilisation des données</h2>
            <p className="text-gray-700 mb-6">
              Vos données sont utilisées exclusivement pour fournir le service DishReply : 
              génération de réponses aux avis, amélioration de notre IA, et communication via WhatsApp.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Partage des données</h2>
            <p className="text-gray-700 mb-6">
              DishReply ne vend ni ne partage vos données personnelles avec des tiers, 
              sauf obligation légale ou pour les services techniques nécessaires (OpenAI, WhatsApp Business API).
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant cette politique : 
              <a href="mailto:privacy@restoai.fr" className="text-blue-600"> privacy@restoai.fr</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}