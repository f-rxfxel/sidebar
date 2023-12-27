import { MenuItems } from './SidebarComponents/MenuItems'
import { Logo } from './SidebarComponents/Logo'
import { HiUser } from './SidebarComponents/HiUser'
import { SignOut } from './SidebarComponents/SignOut'
import { SidebarFooter } from './SidebarComponents/SidebarFooter'
import { MenuCollapseBtn } from './SidebarComponents/MenuCollapseBtn'
import { SidebarConfig } from './sidebar.config'
import { useSidebar } from '../../hooks/isSidebarOpenContext'

export const Sidebar = () => {
   const { expanded, setExpanded } = useSidebar()

   return (
      <aside
         className={`
            h-screen fixed bg-white
            ease-in-out duration-300
            ${expanded ? 'w-64' : 'w-18'}
            ${expanded ? 'max-md:h-fit' : 'max-md:h-screen'}
            max-md:h-10 max-md:w-screen
         `}
         onMouseEnter={() => {
            setExpanded(true)
         }}
         onMouseLeave={() => {
            setExpanded(false)
         }}
      >
         <MenuCollapseBtn {...SidebarConfig.MenuCollapseBtnConfig} />
         <nav
            className={`
               h-full py-8 px-4 flex flex-col justify-between shadow-xl
               ${expanded ? 'px-8' : ''}
               ${expanded ? 'max-md:px-4' : ''}
            `}
         >
            <header
               className={`h-fit w-fit`}
            >
               <Logo {...SidebarConfig.LogoConfig} />
               <HiUser {...SidebarConfig.HiUserConfig} />
               <ul className={`flex flex-col gap-10 mt-10 max-md:items-center`}>
                  <MenuItems {...SidebarConfig.MenuItemsConfig} />
               </ul>
            </header>

            <footer className="h-1/4 flex flex-col justify-end">
               <SignOut {...SidebarConfig.SignOutConfig} />
               {expanded ? (
                  <SidebarFooter {...SidebarConfig.SidebarFooterConfig} />
               ) : (
                  ''
               )}
            </footer>
         </nav>
      </aside>
   )
}
