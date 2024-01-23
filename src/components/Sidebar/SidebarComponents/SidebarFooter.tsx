import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface SidebarFooterProps {
   sidebarFooterItems: {
      sidebarItemName: string
      sidebarItemPath: string
   }[]
}

const stylesheet = {
   container: 'h-fit whitespace-nowrap flex flex-col text-black-03 gap-2 mb-4 max-md:mb-0 max-md:flex-row max-md:justify-evenly',
   expanded: '',
   contracted: 'invisible',
   items: 'w-fit font-semibold transition-all duration-500 hover:underline'
}

export const SidebarFooter = ({ sidebarFooterItems }: SidebarFooterProps) => {
   const { expanded } = useSidebar()

   return (
      <div
         className={`${stylesheet.container} ${expanded ? stylesheet.expanded : stylesheet.contracted}`}
      >
         {sidebarFooterItems.map((SidebarFooterItem, index) => (
            <a
               className={stylesheet.items}
               key={index}
               href={SidebarFooterItem.sidebarItemPath}
            >
               {SidebarFooterItem.sidebarItemName}
            </a>
         ))}
      </div>
   )
}
