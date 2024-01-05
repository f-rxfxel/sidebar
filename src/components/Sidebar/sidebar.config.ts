import { LogoProps } from './SidebarComponents/Logo'
import { HiUserProps } from './SidebarComponents/HiUser'
import { MenuItemsProps } from './SidebarComponents/MenuItems'
import { SignOutProps } from './SidebarComponents/SignOut'
import { SidebarFooterProps } from './SidebarComponents/SidebarFooter'
import { MenuCollapseBtnProps } from './SidebarComponents/MenuCollapseBtn'

const MenuCollapseBtnConfig: MenuCollapseBtnProps = {
   openMenuIconSrc: 'src/components/Sidebar/SidebarIcons/FiChevronLeft.svg',
   closeMenuIconSrc: 'src/components/Sidebar/SidebarIcons/FiChevronRight.svg',
}

const LogoConfig: LogoProps = {
   logoText: 't+t',
   logoPath: '#',
}

const HiUserConfig: HiUserProps = {
   userName: 'Brunno Romero',
   userNamePath: '#',
}

const MenuItemsConfig: MenuItemsProps = {
   menuItems: [
      {
         menuItemIconSrc: 'src/components/Sidebar/SidebarIcons/FiFileText.svg',
         menuItemText: 'Your Conversations',
         menuItemPath: '#',
      },
      {
         menuItemIconSrc: 'src/components/Sidebar/SidebarIcons/FiSettings.svg',
         menuItemText: 'Settings',
         menuItemPath: '#',
      },
      {
         menuItemIconSrc: 'src/components/Sidebar/SidebarIcons/FiYoutube.svg',
         menuItemText: 'Tutorial',
         menuItemPath: '#',
      },
      {
         menuItemIconSrc: 'src/components/Sidebar/SidebarIcons/FiUser.svg',
         menuItemText: 'Profile',
         menuItemPath: '#',
      },
   ],
}

const SignOutConfig: SignOutProps = {
   SignOutIconSrc: 'src/components/Sidebar/SidebarIcons/MdLogout.svg',
   SignOutText: 'Sign Out',
   SignOutPath: '#',
}

const SidebarFooterConfig: SidebarFooterProps = {
   sidebarFooterItems: [
      {
         sidebarItemName: 'Terms of Use',
         sidebarItemPath: '#',
      },
      {
         sidebarItemName: 'Privacy Police',
         sidebarItemPath: '#',
      },
   ],
}

interface SidebarType {
   MenuCollapseBtnConfig: MenuCollapseBtnProps
   LogoConfig: LogoProps
   HiUserConfig: HiUserProps
   MenuItemsConfig: MenuItemsProps
   SignOutConfig: SignOutProps
   SidebarFooterConfig: SidebarFooterProps
}

export const SidebarConfig: SidebarType = {
   HiUserConfig,
   LogoConfig,
   MenuCollapseBtnConfig,
   MenuItemsConfig,
   SignOutConfig,
   SidebarFooterConfig,
}
