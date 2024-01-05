import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface HiUserProps {
   userName: string
   userNamePath: string
}

export const HiUser = ({ userName, userNamePath }: HiUserProps) => {
   const { expanded } = useSidebar()

   return (
      <a
         className={`
            w-fit mt-32 flex items-center gap-4 group max-md:mt-12
            ${expanded ? '' : 'max-md:hidden'}
         `}
         href={userNamePath}
      >
         <div
            className={`
            h-10 w-10 max-md:h-8 max-md:w-8 flex justify-center items-center rounded-full bg-[#014D64] text-2xl max-md:text-xl text-white pb-0.5
            group-hover:h-11 group-hover:w-11 transition-all duration-200
            ${expanded ? '' : 'max-md:hidden'}
         `}
         >
            {userName.charAt(0)}
         </div>
         {expanded ? (
            <div
               className={`whitespace-nowrap overflow-hidden text-[#2F2F2F] text-xl font-semibold ${
                  expanded ? '' : 'w-0 max-md:hidden'
               }`}
            >
               Hi, {userName.split(' ')[0]}
            </div>
         ) : (
            ''
         )}
      </a>
   )
}
