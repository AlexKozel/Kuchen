// app/page.js
import Header from '@/app/components/Header/Header'
import HeroBanner from '@/app/components/HeroBanner/HeroBanner'
import QuoteForm from '@/app/components/QuoteForm/QuoteForm'
import Gallery from '@/app/components/Gallery/Gallery'
import Footer from '@/app/components/Footer/Footer'
import Testimonials from "@/app/components/Testimonials/Testimonials";
import FeedbackForm from "@/app/components/FeedbackForm";
import WorkWithUs from "@/app/components/WorkWithUs/WorkWithUs";

export default function Home() {
    return (
        <div className="font-sans">
            <Header />
            <HeroBanner />
            <Gallery />
            <WorkWithUs />
            <Testimonials />
            {/*<QuoteForm />*/}
            <FeedbackForm />
            <Footer />
        </div>
    )
}