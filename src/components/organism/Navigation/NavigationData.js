import { routes } from 'routes';

export const NavigationData = [
  {
    title: 'Strona główna',
    path: routes.dashboard,
  },
  {
    title: 'Raport z kamer',
    path: routes.raport,
  },
  {
    title: 'Dostępne kamery',
    path: routes.avaibleCamera,
  },
  { title: 'Wszyscy uzytkownicy', path: routes.allUser },
  {
    title: 'Ustawienia',
    path: routes.settings,
  },
];
