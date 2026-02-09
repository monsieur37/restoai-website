import Head from 'next/head'
import Link from 'next/link'

export default function Mentions() {
  return (
    <>
      <Head>
        <title>Mentions Légales - RestoAI</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto py-12 px-4">
          <div className="mb-8">
            <Link href="/" className="text-blue-600 hover:underline">&larr; Retour à l'accueil</Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
          
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Éditeur</h2>
            <p className="text-gray-700 mb-6">
              <strong>RestoAI SARL</strong><br/>
              Capital social : 1 000 €<br/>
              SIRET : 123 456 789 00012<br/>
              Code APE : 6201Z
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Directeur de publication</h2>
            <p className="text-gray-700 mb-6">
              Adrien Martin, Gérant
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hébergeur</h2>
            <p className="text-gray-700 mb-6">
              Vercel Inc.<br/>
              340 S Lemon Ave #4133<br/>
              Walnut, CA 91789, United States
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700">
              Email : <a href="mailto:contact@restoai.fr" className="text-blue-600">contact@restoai.fr</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}