import { MenuItemType } from "./menu-item.types"

export type SubMenus = {
    item: MenuItemType
    activeMenuItems?: string
    className?: string
    menuActive?: boolean
    onClick?: () => void
  }
  