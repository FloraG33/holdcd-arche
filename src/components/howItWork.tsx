import React from 'react'
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import VideoPlayer from './videoPlayer/VideoPlayer';

function HowItWork() {

    const localActive = useLocale()
    const t = useTranslations('howItWork');

    return (
        <section  className="bg-[#FFF] px-10 py-5 md:px-20 md:py-5  m-auto ">
            <div className=' m-auto max-w-7xl'>
                <div>
                    <div className="text-title	text-2xl font-medium">
                        {t('title')}
                    </div>
                    <span className="w-full bg-minibar h-[2px] block my-5"></span>
                </div>
                <div className=''>
                    {/* <h3 className=' mt-1 text-sm md:text-lg border-b-2 text-title font-semibold inline-block'>{t('processus_standart')}</h3> */}
                    <div className='w-full flex justify-center'>
                        <Image
                            src={localActive == "fr" ? "/images/Frame49.png" : "/images/Frame48.png"}
                            alt="fiable"
                            width={1200}
                            height={0}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                    <div className='flex justify-end w-full text-sm sm:text-lg pr-0 sm:pr-44 text-text'>
                        {t('morethan')}
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='py-7 text-title text-lg font-semibold'>
                        {t('video-title')}
                    </div>
                    <VideoPlayer
                        src={ localActive === "fr" ? "/video/holdcdVdFR.mp4" : localActive === "pt" ? "/video/holdcdVdPT.mp4" : localActive === "es" ? "/video/holdcdVdES.mp4" : "/video/holdcdVdEN.mp4" } // fallback}
                    />

                </div>

            </div>
        </section>
    )
}

export default HowItWork
