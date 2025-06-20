'use client'
import { useTranslations } from 'next-intl';
import React from 'react'
import Card from './card/card';
import { motion } from "framer-motion";
import useIsMobile from '@/hooks/UseIsMobile';

function Avatanges() {
    const t = useTranslations('Advantage');
    const isMobile = useIsMobile();

    return (
        <section className='px-10 py-5 md:px-20 md:py-5 '>
            <div className='max-w-7xl m-auto'>
                <div>
                    <div className="text-title text-2xl font-medium">
                        {t("title")}
                    </div>
                    <span className="w-full bg-minibar h-[2px] block my-5"></span>
                </div>
                <motion.div 
                    className='flex flex-col items-center md:flex-row md:justify-evenly gap-14 mt-8'
                    initial={isMobile ? undefined : "offscreen"}
                    whileInView={isMobile ? undefined : "onscreen"}
                    viewport={isMobile ? undefined : { once: true, amount: 0.8 }}
                >
                    <Card image='/images/cardImage/simplicite.jpg' title={t("card.simplicity.title")}  c1={t("card.simplicity.content.c1")} c2={t("card.simplicity.content.c2")}/>
                    <Card image='/images/cardImage/reability.jpg' title={t("card.reability.title")}  c1={t("card.reability.content.c1")} c2={t("card.reability.content.c2")}/>
                    <Card image='/images/cardImage/time.png' title={t("card.costTimeSaving.title")}  c1={t("card.costTimeSaving.content.c1")} />
                </motion.div>
                <div className='text-title text-center mt-6 text-lg font-semibold'>
                    {t('card.resume')}
                </div>
            </div>
        </section>
    )
}

export default Avatanges
