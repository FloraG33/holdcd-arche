'use client';

import { useEffect, useState, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const languages = [
  {
    code: 'en',
    label: 'English',
    icon: '/icons/eng.svg',
  },
  {
    code: 'fr',
    label: 'Français',
    icon: '/icons/fr.svg',
  },
  {
    code: 'es',
    label: 'Spanish',
    icon: '/icons/es.svg',
  },
  {
    code: 'pt',
    label: 'Português',
    icon: '/icons/pt.svg',
  },
];

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  const [selectedLang, setSelectedLang] = useState(localActive);

  // useEffect(() => {
  //   console.log("mande mande");

  //   const savedLang = localStorage.getItem('selectedLang');
  //   if (savedLang && savedLang !== localActive) {
  //     setSelectedLang(savedLang);
  //     startTransition(() => {
  //       router.replace(`/${savedLang}${pathname}`, { scroll: false });
  //     });
  //   } else {
  //     setSelectedLang(localActive);
  //   }
  // }, [localActive, pathname, router]);

  const handleSelect = (lang: string) => {
    if (lang !== selectedLang) {
      setSelectedLang(lang);
      localStorage.setItem('selectedLang', lang);

      window.location.href = `/${lang}${pathname}`;
    }
  };

  // const handleSelect = (lang: string) => {
  //   if (lang !== selectedLang) {
  //     setSelectedLang(lang);
  //     localStorage.setItem('selectedLang', lang);

  //     startTransition(() => {
  //       router.replace(`/${lang}${pathname}`, { scroll: false });
  //     });
  //   }
  // };

  return (
    <div className="relative flex gap-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSelect(lang.code)}
          aria-label={lang.label}
          className={`w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 ${
            lang.code === selectedLang
              ? 'border-primary ring-2 ring-primary'
              : 'border-transparent hover:border-primary grayscale'
          }`}
          disabled={isPending}
        >
          <Image className="object-cover" src={lang.icon} alt={lang.label} width={30} height={30} />
        </button>
      ))}
    </div>
  );
}
