'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

type BreadcrumbItem = {
  title: string;
  link: string;
};

// This allows to add custom title as well
const routeMapping: Record<string, BreadcrumbItem[]> = {
  '/': [{ title: 'Dashboard', link: '/' }],
  '/users': [
    { title: 'Dashboard', link: '/' },
    { title: 'Users', link: '/users' },
  ],
  '/users/[id]': [
    { title: 'Dashboard', link: '/' },
    { title: 'Users', link: '/users' },
    { title: 'User', link: '/users/[id]' },
  ],
  '/companies': [
    { title: 'Dashboard', link: '/' },
    { title: 'Companies', link: '/companies' },
  ],
  '/companies/[id]': [
    { title: 'Dashboard', link: '/' },
    { title: 'Companies', link: '/companies' },
    { title: 'Company', link: '/companies/[id]' },
  ],
  '/tasks': [
    { title: 'Dashboard', link: '/' },
    { title: 'Tasks', link: '/tasks' },
  ],
};

export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split('/').filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path,
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
