import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface MenuCollapseBtnProps {
   openMenuIconSrc: string
   closeMenuIconSrc: string
}

export const MenuCollapseBtn = ({
   openMenuIconSrc,
   closeMenuIconSrc,
}: MenuCollapseBtnProps) => {
   const { expanded, setExpanded } = useSidebar()
   return (
      <button
         onClick={() => setExpanded((curr) => !curr)}
         className={`
            absolute top-8 bg-white right-[-1rem]
            max-md:top-3 max-md:left-[1rem] max-md:bg-transparent
         `}
      >
         <div
            className={`
               flex items-center justify-center rounded-full w-8 h-8 shadow-md
               ${expanded ? 'pr-0.5' : 'pl-0.5'}
               max-md:w-10 max-md:h-10 max-md:shadow-none
            `}
         >
            {expanded ? (
               <img src={openMenuIconSrc} alt="Open Menu" />
            ) : (
               <img src={closeMenuIconSrc} alt="Close Menu" />
            )}
         </div>
      </button>
   )
}
