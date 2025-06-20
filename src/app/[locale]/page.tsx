"use client"

import AboutSection from '@/components/aboutSection';
import Avatanges from '@/components/avatanges';
import HowItWork from '@/components/howItWork';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';


export default function HomePage() {

  const router = useRouter();
  const aboutRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const howItWorkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        const offsetTop = element.offsetTop - 60;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }, [router]);

  return (
    <div>
      <div className=''>
        <div
          className='m-auto'
          id="about" 
          ref={aboutRef}
        >
          <AboutSection />
        </div>

        <div 
          className='m-auto bg-[#F0F1EF]' 
          id='advantage' 
          ref={advantagesRef}
        >
          <Avatanges />
        </div>

        <div 
          className='m-auto' 
          id='howItWork' 
          ref={howItWorkRef}
        >
          <HowItWork />
        </div>

      </div>

    </div>

  );
}