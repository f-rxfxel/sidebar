import { MenuItems } from './SidebarComponents/MenuItems'
import { Logo } from './SidebarComponents/Logo'
import { HiUser } from './SidebarComponents/HiUser'
import { SignOut } from './SidebarComponents/SignOut'
import { SidebarFooter } from './SidebarComponents/SidebarFooter'
import { MenuCollapseBtn } from './SidebarComponents/MenuCollapseBtn'
import { SidebarConfig } from './sidebar.config'
import { useSidebar } from '../../hooks/isSidebarOpenContext'

const stylesheet = {
   container: 'h-screen fixed bg-white ease-in-out duration-300 max-md:h-10 max-md:w-screen',
   expanded: 'w-64 max-md:h-fit',
   contracted: 'w-18 max-md:h-8',
   nav: {
      container: 'h-full py-8 px-4 flex flex-col justify-between shadow-xl',
      expanded: 'px-8 max-md:px-4',
   },
   header: 'h-fit w-fit',
   ul: 'flex flex-col gap-8 mt-8 max-md:items-center',
   footer: 'h-1/4 flex flex-col justify-end'
}

export const Sidebar = () => {
   const { expanded, setExpanded } = useSidebar()

   return (
      <aside
         className={`${stylesheet.container}           
         ${expanded ? stylesheet.expanded : stylesheet.contracted}
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
            className={`${stylesheet.nav.container} 
            ${expanded ? stylesheet.nav.expanded : ''}
            `}
         >
            <header
               className={stylesheet.header}
            >
               <Logo {...SidebarConfig.LogoConfig} />
               <HiUser {...SidebarConfig.HiUserConfig} />
               <ul className={stylesheet.ul}>
                  <MenuItems {...SidebarConfig.MenuItemsConfig} />
               </ul>
            </header>

            <footer className={stylesheet.footer}>
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
