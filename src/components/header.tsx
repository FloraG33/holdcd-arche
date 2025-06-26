"use client";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import LocalSwitcher from './local-switcher';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from '@/types/menu';


export default function Header() {
  const [sticky, setSticky] = useState(false);
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  const t = useTranslations('Navigation');

  const usePathName = usePathname();
  const router = useRouter();

  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    menuItem: Menu
  ) => {
    e.preventDefault();
    const { sectionId, path } = menuItem;
    setNavbarOpen(false);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (usePathName === '/' && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 60;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    } else {
      // Précharger la page en arrière-plan (mais pas besoin de "await")
      router.prefetch(path);

      // Naviguer immédiatement
      router.push(path);
    }
  };


  useEffect(() => {
    if (usePathName === '/' || usePathName === '/contact' || usePathName === '/service' || usePathName === '/industry' || usePathName === '/supplier') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setNavbarOpen(false)
    }
  }, [usePathName]);


  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });


  const menuData: Menu[] = [
    {
      id: 1,
      title: t('home'),
      path: "/",
      newTab: false,
      submenu: [ // Ajout des sous-menus
        {
          id: 2,
          title: t('about'),
          path: "/#about",
          sectionId: "about",
          newTab: false,
        },
        {
          id: 3,
          title: t('advantage'),
          path: "/#advantage",
          sectionId: "advantage",
          newTab: false,
        },
        {
          id: 4,
          title: t('howItWork'),
          path: "/#howItWork",
          sectionId: "howItWork",
          newTab: false,
        },
      ],
    },
    {
      id: 5,
      title: t('service'),
      path: "/service",
      newTab: false,
    },
    {
      id: 6,
      title: t('industry'),
      path: "/industry",
      newTab: false,
    },
    {
      id: 7,
      title: t('supplier'),
      path: "/supplier",
      newTab: false,
    },
    {
      id: 8,
      title: t('contact'),
      path: "/contact",
      newTab: false,
    },
  ];


  return (
    <header
      className={`header h-16 left-0 top-0 z-40 flex w-full items-center bg-[#1A2665] ${sticky
        ? "fixed z-[9999] shadow-sticky backdrop-blur-sm transition "
        : "absolute"
        }`}
    >
      <div className="w-full mx-0 md:mx-10">
        <div className="relative  flex items-center justify-between">
          <div className="flex items-center text-white  max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block ${sticky ? "py-5 xl:py-2" : "py-8"} `}

            >
              <Image
                src="/images/logo-web-white.png"
                alt=" logo"
                width={100}
                height={10}
                style={{ width: "auto", height: "auto" }}
                className=""
              />
            </Link>


          </div>

          <div className="flex w-full items-center justify-end px-4">
            <div>
              <div className='absolute right-20 top-1/2 translate-y-[-50%] block xl:hidden'>
                <LocalSwitcher />
              </div>

              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-xl px-3 py-[6px] ring-primary focus:ring-2 xl:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px]  transition-all duration-300 bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px]  transition-all duration-300 bg-white ${navbarOpen ? "opacity-0 " : " "
                    }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                />
              </button>

              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-full rounded border-[.5px] border-body-color/50  px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 
                    ${navbarOpen
                    ? "visibility top-full opacity-80 bg-primary flex flex-col items-center"
                    : "invisible top-[120%] opacity-0"
                  }
                `}
              >

                <ul className="block xl:flex xl:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      <Link

                        href={menuItem.path}
                        onClick={(e) => menuItem.sectionId && handleScrollToSection(e, menuItem)}
                        className={`flex py-2 text-base xl:mr-0 xl:inline-flex xl:px-0 xl:py-6 justify-center
                          ${usePathName === menuItem.path
                            ? "text-secondary hover:text-white"
                            : (sticky || navbarOpen ? "text-white hover:text-secondary" : "text-white hover:text-secondary")
                          }`}
                      >
                        {menuItem.title}
                      </Link>

                      {menuItem.submenu && (
                        <ul
                          className={`${
                            navbarOpen ? "block xl:flex xl:space-x-6" : "hidden"
                          } xl:absolute xl:left-0 xl:top-full xl:-mt-2 xl:w-48 xl:bg-white xl:shadow-lg xl:rounded-md xl:group-hover:block xl:opacity-0 xl:group-hover:opacity-100 xl:transition-all xl:duration-300 xl:ease-in-out xl:group-hover:translate-y-2`}
                        >
                          {menuItem.submenu.map((subItem) => (
                            <li key={subItem.id} className="border-b border-gray-200 last:border-none">
                              <Link

                                href={subItem.path}
                                onClick={(e) => subItem.sectionId && handleScrollToSection(e, subItem)}
                                className="block px-4 py-2 text-sm text-center text-white xl:text-black hover:bg-primary hover:text-white transition-all duration-200 ease-in-out"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

              </nav>
            </div>
          </div>

          <div className='pl-8 hidden xl:block'>
            <LocalSwitcher />
          </div>

        </div>
      </div>
    </header>
  );
}
