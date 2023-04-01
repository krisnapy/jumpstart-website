export type MenuItemType = {
  key: string
  label: string
  isTitle?: boolean
  icon?: string
  url?: string
  parentKey?: string
  target?: string
  children?: MenuItemType[]
}
