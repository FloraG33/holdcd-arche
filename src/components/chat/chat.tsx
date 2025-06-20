"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";


function Chat() {

    const [show, setShow] = useState<boolean>(false);

    const handleShow = () => {
        setShow(prev => !prev)
    }

    return (
        <div>
            {
                show ?
                    <motion.div
                        className='fixed bottom-24 right-6 z-30'
                        style={{
                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                            borderRadius: 5
                        }}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className='w-64 bg-whatsapp-color h-16 rounded-t-lg flex justify-center items-center text-white font-medium'>
                            Chat on WhatsApp
                        </div>
                        <div className='w-64 bg-white h-24 rounded-b-lg flex justify-center items-center'>
                            <div className='flex items-center text-primary  bg-minibar border-l-2 border-whatsapp-color h-16 px-4 cursor-pointer hover:bg-fondContact'>
                                <Link
                                    href="https://wa.me/33671940740"
                                    className="flex items-center gap-4"
                                    target="_blank"
                                >
                                    <Image
                                        src="/icons/whatsapp.png"
                                        alt="whatsapp"
                                        width={30}
                                        height={10}
                                        style={{ width: "30px", height: "auto" }}
                                        className=""
                                    />
                                    <p>+33 6 71 94 07 40</p>
                                </Link >
                            </div>
                        </div>
                    </motion.div>
                    : <></>
            }
            <div
                className='px-4 py-2 rounded-md fixed bottom-6 right-4 z-30 flex items-center cursor-pointer'
                onClick={handleShow}
            >
                {
                    show ?
                        <motion.button
                            className='bg-whatsapp-color p-3 rounded-full'
                            animate={{ rotate: 90  }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <Image
                                src="/icons/closeWhite.png"
                                alt="whatsapp"
                                width={30}
                                height={10}
                                className=""
                            />
                        </motion.button>
                        :
                        <motion.button
                            className='bg-whatsapp-color p-3 rounded-full'
                        >
                            <Image
                                src="/icons/whatsapp.png"
                                alt="whatsapp"
                                width={30}
                                height={10}
                                style={{ width: "100%", height: "auto" }}
                                className=""
                            />
                        </motion.button>
                }

            </div>
        </div>
    )
}

export default Chat
