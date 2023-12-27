import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface MenuItemsProps {
   menuItems: {
      menuItemIconSrc: string
      menuItemText: string
      menuItemPath: string
   }[]
}

export const MenuItems = ({ menuItems }: MenuItemsProps) => {
   const { expanded } = useSidebar()

   return (
      <div
         className={`flex flex-col mb-auto gap-6 
            ${expanded ? 'items-start max-md:' : 'items-center max-md:hidden'}
         `}
      >
         {menuItems.map((menuItem) => (
            <a
               key={menuItem.menuItemText}
               className={`w-fit flex items-center gap-2 group h-8`}
               href={menuItem.menuItemPath}
            >
               <img
                  src={menuItem.menuItemIconSrc}
                  className="w-8 h-8 p-1 rounded-lg bg-white text-[#2a6d89] group-hover:bg-[#e9e9e9] transition-colors duration-200"
                  alt={menuItem.menuItemText}
               />
               {expanded ? (
                  <div
                     className={` text-[#2F2F2F] text-lg whitespace-nowrap font-medium`}
                  >
                     {menuItem.menuItemText}
                  </div>
               ) : (
                  ''
               )}
            </a>
         ))}
      </div>
   )
}
