
"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@/types/menu';
import { usePathname, useRouter } from "next/navigation";

export default function Footer() {
  const tn = useTranslations('Navigation');

  const router = useRouter();

  const menuData: Menu[] = [
    {
      id: 1,
      title: tn('home'),
      path: "/",
      newTab: false,
    },
    {
      id: 2,
      title: tn('about'),
      path: "/#about",
      newTab: false,
      sectionId: "about"
    },
    {
      id: 3,
      title: tn('advantage'),
      path: "/#advantage",
      newTab: false,
      sectionId: "advantage"
    },
    {
      id: 4,
      title: tn('howItWork'),
      path: "/#howItWork",
      newTab: false,
      sectionId: "howItWork"
    },
    {
      id: 5,
      title: tn('service'),
      path: "/service",
      newTab: false,
    },
    {
      id: 6,
      title: tn('industry'),
      path: "/industry",
      newTab: false,
    },
    {
      id: 7,
      title: tn('supplier'),
      path: "/supplier",
      newTab: false,
    },
    {
      id: 8,
      title: tn('contact'),
      path: "/contact",
      newTab: false,
    },
  ]

  const usePathName = usePathname();

  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, menuItem: Menu) => {
    e.preventDefault();
    const { sectionId, path } = menuItem;

    if (usePathName === '/' && sectionId) {
      if (sectionId) {
        // Scroll to the section if sectionId is provided
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 60;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      } else {
        // Scroll to the top if no sectionId is provided
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // If on a different page, navigate to the correct page first
      if (path) {
        router.push(path);
      }
    }
  };


  return (
    <div className='px-10 md: py-3 text-center bg-primary'>
      <div className='w-full'>
        <div className='flex justify-center p-5'>
          <Image
            src="/images/logo-web-white.png"
            alt="logo"
            width={110}
            height={10}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className='flex justify-center'>
          <ul className="block lg:flex lg:space-x-12">
            {
              menuData.map((menuItem, index) => (
                <li key={index} className="group relative">
                  <Link
                    href={menuItem.path}
                    onClick={(e) => menuItem.sectionId && handleScrollToSection(e, menuItem)}
                    className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 justify-center
                            ${usePathName === menuItem.path
                        ? "text-secondary hover:text-white"
                        : "text-white hover:text-secondary"
                      }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className='flex justify-center gap-10 py-5'>
          <Link href="https://www.linkedin.com/company/holdcd/">
            <Image
              src="/images/reseau_sociaux/linkedin.png"
              alt="logo"
              width={40}
              height={40}
              style={{ width: "40px", height: "auto" }}
              className=""
            />
          </Link>
        </div>
        <div className='py-5 text-white'>
          <p> © Copyright  {currentYear} </p>
        </div>
      </div>
    </div>
  );
}