export type Menu = {
    id: number;
    title: string;
    path: string;
    newTab: boolean;
    sectionId?: string;
    submenu?: Menu[]; // Ajout de la gestion des sous-menus
  };
  