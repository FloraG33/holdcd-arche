import { useTranslations } from 'next-intl';
import React from 'react'

function AboutSection() {

  const t = useTranslations('About');

  const nameVariables = [
      {
        name: "vaste",
        variable: '$vaste'
      },
      {
        name: "infos",
        variable: '$infos'
      },
      {
        name: "ctarifaires",
        variable: '$ctarifaires'
      },
  ]

  let paraph2 = t('content.paraph2');

  // Appliquer chaque remplacement séquentiellement
  nameVariables.forEach(nv => {
    paraph2 = paraph2.replace(nv.variable, `<b>${t(`content.bold.${nv.name}`)}</b>`);
  });

  const paraph3 = t('content.paraph3').replace('$rationaliser', `<b>${t('content.bold.rationaliser')}</b>`)
  const li1 = t('content.li1').replace('$transmission', `<b>${t('content.bold.transmission')}</b>`)
  const li2 = t('content.li2').replace('$disponibility', `<b>${t('content.bold.disponibility')}</b>`)
  const li3 = t('content.li3').replace('$rentability', `<b>${t('content.bold.rentability')}</b>`)
  const paraph4 = t('content.paraph4').replace('$une_seul', `<b>${t('content.bold.une_seul')}</b>`)
  
  return (
    <section className="bg-[#F9F8F8] px-10 py-5 md:px-20 md:py-5 mt-0 m-auto">
      <div className='max-w-7xl m-auto'>
        <div>
          <div className="text-title	text-2xl font-medium">
            {t("title")}
          </div>
          <span className="w-full bg-minibar h-[2px] block my-5"></span>
        </div>
        <div className="text-base text-text font-light">
          {t("content.paraph1")} <br></br><br></br>
          <p dangerouslySetInnerHTML={{ __html: paraph2 }} /> <br></br><br></br>
          <p dangerouslySetInnerHTML={{ __html: paraph3 }} />
          <ul className="list-disc ml-10">
            <li><p dangerouslySetInnerHTML={{ __html: li1 }} /></li>
            <li><p dangerouslySetInnerHTML={{ __html: li2 }} /></li>
            <li><p dangerouslySetInnerHTML={{ __html: li3 }} /></li>
            <li>{t("content.li4")}</li>
          </ul>
          <br></br>
          <p dangerouslySetInnerHTML={{ __html: paraph4 }} />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
