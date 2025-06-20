import Service from '@/components/service/service';
import { useTranslations } from 'next-intl';
import React from 'react'

function TotoPage() {

  const t = useTranslations('Service');

  return (
    <section
      className="bg-service-bg px-10 py-5 my-5 w-4/5 m-auto max-w-7xl shadow-xl"
    >
      <div>
        <div className="text-title	text-2xl font-medium">
          {t("title")}
        </div>
        <span className="w-full bg-minibar h-[2px] block my-5"></span>
      </div>
      <div className="text-text font-light">
        <Service
          positionImage='left'
          image="/images/b2b.jpg"
          icon="/icons/achat.png"
          title={t("purchasing.title")}
          c1={t("purchasing.content.c1")}
          c2={t("purchasing.content.c2")}
          c3={t("purchasing.content.c3")}
          c4={t("purchasing.content.c4")}
        />
        <Service
          positionImage='right'
          image="/images/conseil.jpg"
          icon="/icons/soutien-technique.png"
          title={t("technicalAdvice.title")}
          c1={t("technicalAdvice.content.c1")}
          c2={t("technicalAdvice.content.c2")}
          c3={t("technicalAdvice.content.c3")}
        />

        <Service
          positionImage='left'
          image="/images/suivi.jpg"
          icon="/icons/controle.png"
          title={t("monitoringControl.title")}
          c1={t("monitoringControl.content.c1")}
          c2={t("monitoringControl.content.c2")}
          c3={t("monitoringControl.content.c3")}
        />

        <Service positionImage='right'
          image="/images/Mail-sent.jpg"
          icon="/icons/processus.png"
          title={t("sendingProcess.title")}
          c1={t("sendingProcess.content.c1")}
          c2={t("sendingProcess.content.c2")}
          c3={t("sendingProcess.content.c3")}
          c4={t("sendingProcess.content.c4")} 
        />
      </div>
    </section>
  )
}

export default TotoPage
