// src/app/[locale]/page.js (Адаптированный)
import { useTranslations } from 'next-intl';
// Импортируйте ваши компоненты (убедитесь, что алиас @/ настроен в jsconfig.json)
import Header from '@/app/components/Header/Header';
import HeroBanner from '@/app/components/HeroBanner/HeroBanner';
import Gallery from '@/app/components/Gallery/Gallery';
import Footer from '@/app/components/Footer/Footer';
import Testimonials from "@/app/components/Testimonials/Testimonials";
import FeedbackForm from "@/app/components/FeedbackForm";
import WorkWithUs from "@/app/components/WorkWithUs/WorkWithUs";


export default function Home() {
    // Укажите неймспейс, который вы использовали в JSON (например, 'HomePage')
    const t = useTranslations('HomePage');

    return (
        <div className="font-sans">
            {/* Header будет адаптирован позже для переключателя */}
            <Header />
            <h1>{t('title')}</h1> {/* Используем перевод */}
            <HeroBanner />
            <Gallery />
            <WorkWithUs />
            <Testimonials />
            <FeedbackForm />
            <Footer />
        </div>
    );
}