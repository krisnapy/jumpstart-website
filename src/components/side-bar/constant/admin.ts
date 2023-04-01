import { MenuItemType } from './menu-item.types'

export const AdminMenu: MenuItemType[] = [
  {
    key: 'title',
    label: 'Main menu',
    isTitle: true,
  },
  {
    key: 'users',
    label: 'Users',
    url: '/users',
    icon: 'mdi mdi-account',
  },
  {
    key: 'products',
    label: 'Products',
    url: '/products',
    icon: 'mdi mdi-basket',
    children: [
      {
        key: 'categories',
        label: 'Categories',
        parentKey: 'products',
        url: 'categories',
      },
      {
        key: 'brands',
        label: 'Brands',
        parentKey: 'products',
        url: 'brands',
      },
    ],
  },
]
