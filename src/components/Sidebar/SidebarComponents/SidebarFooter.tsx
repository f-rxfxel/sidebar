import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface SidebarFooterProps {
   sidebarFooterItems: {
      sidebarItemName: string
      sidebarItemPath: string
   }[]
}

export const SidebarFooter = ({ sidebarFooterItems }: SidebarFooterProps) => {
   const { expanded } = useSidebar()

   return (
      <div
         className={`
            h-fit whitespace-nowrap ${
               expanded ? '' : 'invisible'
            } flex flex-col text-[#2F2F2F] gap-2 mb-9 max-md:mb-0 max-md:flex-row max-md:justify-evenly
         `}
      >
         {sidebarFooterItems.map((SidebarFooterItem, index) => (
            <a
               className="w-fit font-semibold transition-all duration-500 hover:underline"
               key={index}
               href={SidebarFooterItem.sidebarItemPath}
            >
               {SidebarFooterItem.sidebarItemName}
            </a>
         ))}
      </div>
   )
}
