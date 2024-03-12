import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AutProvider from '@/contexts/AutProvider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Ohabolana',
  description: 'Ohabolana Malagasy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <AutProvider>
          <div className='bg-gray-50 flex h-screen flex-col'>
            <Navbar />
              <main className="flex-1">
                {children}
              </main>
            <Footer />
          </div>
        </AutProvider>
      </body>
    </html>
  )
}
