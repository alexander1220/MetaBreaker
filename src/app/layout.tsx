import './pico.min.css';
import './global.css';
import ThemeProvider from './components/theming/theme-provider';
import HTMLBody from './components/html-body';
import Navbar from './components/navbar/navbar';
import Script from 'next/script';
import Providers from './components/providers';
import RulesModal from './components/modals/rules';

const title = 'MetaBreaker – Generate Unique Item Builds for League of Legends Champions';
const description = 'Break the meta with MetaBreaker! Our website allows you to generate off-meta item builds for your favorite champions in League of Legends. Give it a try and see what kind of surprises you can come up with!';
export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
  icons: {
    icon: '/favicon/favicon-32x32.ico',
    apple: '/apple-touch-icon-72x72.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <HTMLBody>
        <Navbar />
        {children}
        <RulesModal />
      </HTMLBody>
    </Providers>
  )
}
