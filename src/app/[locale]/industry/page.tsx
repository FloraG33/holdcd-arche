import React from "react";
import Image from "next/image";
import { industries } from "../../data/industryLists";
import { useTranslations } from "next-intl";

const IndustryPage = () => {
  const t = useTranslations("Industry");

  return (
    <div className="px-5 py-5 md:px-16 md:py-5 ">
      <section className="px-0 py-5 md:px-20 md:py-5 mt-0 m-auto">
        <div className="max-w-7xl m-auto ">
          <div className="flex flex-col shadow-xl">
            <div className="px-10">
              <div className="text-title	text-2xl font-medium">
                {t("title.industry")}
              </div>
              <span className="w-full bg-minibar h-[2px] block my-5"></span>
            </div>
            <div className="px-6 sm:px-14 pt-6 text-text flex flex-col gap-4">
              <p>{t('paraph1')}</p>
              <p>{t('paraph2')}</p>
              <p>{t('paraph3')}</p>
            </div>
            {industries.map((industry: any, index: number) => (
              <div
                key={index}
                className={`flex flex-col-reverse md:flex-row w-full p-6 md:p-14 gap-10 md:gap-24 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Section Texte */}
                <div className="w-full md:w-1/2">
                  <div className="text-xl md:text-2xl font-bold text-title">
                    { t("title." + industry.name) }
                  </div>
                  <div className="mt-4">
                    <div className="bg-primary text-white py-2 px-4 rounded-md">
                      Exemples d'équipements inclus
                    </div>
                    <div className="border border-primary flex items-center justify-center p-4 mt-2 rounded-md">
                      <ul className="list-disc list-inside space-y-2">
                        {industry.equipments.map(
                          (equipment: string, eqIndex: number) => (
                            <li key={eqIndex} className="text-text">
                              { t("equipement." + equipment) }
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section Image */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <Image
                    src={industry.image}
                    alt={`${industry.name} image`}
                    width={500}
                    height={90}
                    style={{ width: "auto", height: "auto" }}
                    className="rounded-3xl"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
