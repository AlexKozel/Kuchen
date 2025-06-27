// src/app/[locale]/datenschutz/page.jsx
'use client'
import { useTranslations } from 'next-intl';
import Footer from "@/app/components/Footer/Footer";

export default function DatenschutzPage() {
  // Используем 'privacyPolicy' как пространство имен для переводов
  const t = useTranslations('privacyPolicy');

  return (
      <>
        <main className="bg-white text-gray-900">
          <section className="py-16 px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {t('title')}
            </h1>

            <p className="mb-6 text-lg leading-relaxed">
              {t('intro')}
            </p>

            {/* 1. Verantwortlicher */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t('sections.responsible.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('sections.responsible.text')}
              <br />
              Komastil
              <br />
              Platz der Republik 1, 11011 Berlin, Deutschland
              <br />
              +49 (176) 20432013
              <br />
              info@komastil.de
            </p>

            {/* 2. Zugriffsdaten */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t('sections.accessData.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('sections.accessData.text')}
            </p>

            {/* 3. Erhebung personenbezogener Daten über das Kontaktformular */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t('sections.contactForm.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('sections.contactForm.text')}
            </p>

            {/* 4. Einsatz von Meta Pixel (Facebook Pixel) */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t('sections.metaPixel.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('sections.metaPixel.text1')}
              <br />
              {t('sections.metaPixel.text2')}
              <br />
              {t('sections.metaPixel.text3')}
            </p>

            {/* 5. Verwendung von Cookies */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t('sections.cookies.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('sections.cookies.text1')}
              <br />
              {t('sections.cookies.text2')}
            </p>

            {/* 6. Rechtsgrundlagen der Verarbeitung */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t('sections.legalBasis.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('sections.legalBasis.text')}
            </p>

            {/* 7. Ihre Rechte */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t('sections.yourRights.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('sections.yourRights.text')}
            </p>

            {/* 8. Dauer der Speicherung */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t('sections.dataRetention.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('sections.dataRetention.text')}
            </p>

            {/* 9. Änderungen dieser Datenschutzerklärung */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {t('sections.changes.title')}
            </h2>
            <p className="mb-4 text-gray-700">
              {t('sections.changes.text')}
            </p>
          </section>
        </main>
        <Footer />
      </>
  );
}