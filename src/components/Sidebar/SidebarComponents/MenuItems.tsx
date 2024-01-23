import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface MenuItemsProps {
   menuItems: {
      menuItemIconSrc: string
      menuItemText: string
      menuItemPath: string
   }[]
}

const stylesheet = {
   item: {
      container: 'flex flex-col mb-auto gap-4',
      expanded: 'items-start',
      contracted: 'items-center max-md:hidden',
      link: 'w-fit flex items-center gap-2 group h-8',
      image: 'w-8 h-8 p-1 rounded-lg bg-white text-black-03 group-hover:bg-[#e9e9e9] transition-colors duration-200',
      text: 'text-black-03 text-lg whitespace-nowrap font-medium',
   } 
}

export const MenuItems = ({ menuItems }: MenuItemsProps) => {
   const { expanded } = useSidebar()

   return (
      <div className={`${stylesheet.item.container} ${expanded ? stylesheet.item.expanded : stylesheet.item.contracted}`}>
         {menuItems.map((menuItem) => (
            <a
               key={menuItem.menuItemText}
               className={stylesheet.item.link}
               href={menuItem.menuItemPath}
            >
               <img
                  src={menuItem.menuItemIconSrc}
                  className={stylesheet.item.image}
                  alt={menuItem.menuItemText}
               />
               {expanded ? (
                  <div className={stylesheet.item.text}>
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
