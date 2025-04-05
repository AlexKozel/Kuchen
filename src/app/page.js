// app/page.js
import Header from '@/app/components/Header/Header'
import HeroBanner from '@/app/components/HeroBanner/HeroBanner'
import QuoteForm from '@/app/components/QuoteForm/QuoteForm'
import Gallery from '@/app/components/Gallery/Gallery'
import Footer from '@/app/components/Footer/Footer'

export default function Home() {
    return (
        <div className="font-sans">
            <Header />
            <HeroBanner />
            <QuoteForm />
            <Gallery />
            <Footer />
        </div>
    )
}