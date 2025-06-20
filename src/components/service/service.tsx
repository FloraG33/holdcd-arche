import React from 'react'
import Image from "next/image";
import { useTranslations } from 'next-intl';


function Service({
    positionImage,
    image,
    icon,
    title,
    c1,
    c2,
    c3,
    c4
}: {
    positionImage: string,
    image: string,
    icon: string,
    title: string,
    c1: string,
    c2: string,
    c3: string,
    c4?: string
}) {

    const t = useTranslations('Service');

    return (
        <div className=''>
            {
                positionImage == 'left' ?
                    <div className='flex flex-col items-center justify-start md:flex-row md:justify-between gap-8 mt-9'>
                        <div className='w-full flex justify-center md:w-1/3'>
                            <Image
                                src={image}
                                alt="logo"
                                width={300}
                                height={200}
                                style={{ width: "auto", height: "auto" }}
                            />
                        </div>
                        <div className='w-full mb-20 md:w-2/3 md:mb-0'>
                            <div className='flex items-center gap-3 mb-2'>
                                <Image
                                    src={icon}
                                    alt="logo"
                                    width={24}
                                    height={24}
                                    style={{ width: "auto", height: "auto" }}
                                />
                                <div className='text-xl text-title font-semibold'>{title}</div>
                            </div>
                            <div>
                                <ul className="text-base list-disc ml-5">
                                    <li>{c1}</li>
                                    <li>{c2}</li>
                                    <li>{c3}</li>
                                    {
                                        c4 &&
                                        <li>{c4}</li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col-reverse items-center justify-start md:flex-row md:justify-between gap-8 mt-9'>
                        <div className='w-full mb-20 md:w-2/3 md:mb-0'>
                            <div className='flex items-center gap-5 mb-2'>
                                <Image
                                    src={icon}
                                    alt="logo"
                                    width={24}
                                    height={24}
                                    style={{ width: "auto", height: "auto" }}
                                />
                                <div className='text-xl text-title font-semibold'>{title}</div>
                            </div>
                            <div>
                                <ul className="text-base list-disc ml-5">
                                    <li>{c1}</li>
                                    <li>{c2}</li>
                                    <li>{c3}</li>
                                    {
                                        c4 &&
                                        <li>{c4}</li>
                                    }
                                </ul>
                            </div>                    </div>
                        <div className='w-full flex justify-center md:w-1/3'>
                            <Image
                                src={image}
                                alt="logo"
                                width={300}
                                height={200}
                                style={{ width: "auto", height: "auto" }}
                            />
                        </div>
                    </div>
            }
        </div>
    )
}

export default Service
