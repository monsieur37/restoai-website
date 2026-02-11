import Head from 'next/head'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Conditions Générales d'Utilisation - DishReply</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="mb-8">
            <Link href="/" className="text-blue-600 hover:underline">&larr; Retour à l'accueil</Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 mb-6">Dernière mise à jour : 9 février 2026</p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Objet</h2>
            <p className="text-gray-700 mb-6">
              DishReply est un service SaaS d'assistance IA pour restaurants, permettant la gestion 
              automatisée des avis Google via WhatsApp Business.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Tarification</h2>
            <p className="text-gray-700 mb-6">
              Les tarifs sont disponibles sur notre site. Le paiement s'effectue par carte bancaire 
              via Stripe. L'abonnement est renouvelé automatiquement sauf résiliation avant échéance.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Contact</h2>
            <p className="text-gray-700">
              Pour toute question : 
              <a href="mailto:support@restoai.fr" className="text-blue-600"> support@restoai.fr</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}