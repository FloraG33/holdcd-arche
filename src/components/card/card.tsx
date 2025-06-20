import React from 'react'
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import useIsMobile from '@/hooks/UseIsMobile';


function Card({
    image,
    title,
    c1,
    c2
}: {
    image: string,
    title: string,
    c1: string,
    c2?: string
}) {

    const cardVariants: Variants = {
        offscreen: {
            y: 500,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.2
            }
        }
    };

    const isMobile = useIsMobile();
    
    return (
        <motion.div
            className="card w-96 shadow-xl bg-primary"
            initial={isMobile ? "onscreen" : "offscreen"}  // Commence en mode statique pour mobile
            animate="onscreen"                            // Passe à l'état "onscreen" une fois visible
            variants={cardVariants}                       // Utilise les variantes définies
            viewport={{ once: true, amount: 0.8 }}        // Assurez-vous que l'animation ne se déclenche qu'une fois
        >
            <figure>
                <div style={{ height: "256px", width: "100%" }}>
                    <Image
                        src={image}
                        alt="My Image Description"
                        width={500}
                        height={300}
                        sizes="(max-width: 600px) 100vw, 50vw"
                        priority={true}
                       
                    />
                </div>
            </figure>
            <div className="card-body text-text md:h-96 lg:h-64 h-60">
                <h2 className="card-title justify-center text-center text-secondary text-xl md:text-xl">
                    {title}
                </h2>
                <div className="text-minibar md:text-sm xl:text-base">
                    {/* <ul className="text-minibar md:text-sm xl:text-lg"> */}
                    <div className='text-center'>{c1}</div>
                    <div className='text-center mt-3'>{c2}</div>
                    {/* </ul> */}
                </div>
            </div>
        </motion.div>
    )
}

export default Card
