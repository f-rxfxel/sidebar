import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface HiUserProps {
   userName: string
   userNamePath: string
}

const stylesheet = {
   container: 'w-fit mt-24 flex items-center gap-4 group max-md:mt-12',
   userIcon: 'h-10 w-10 max-md:h-8 max-md:w-8 flex justify-center items-center rounded-full bg-green-user text-2xl max-md:text-xl text-white pb-0.5 group-hover:h-11 group-hover:w-11 transition-all duration-200',
   userText: 'whitespace-nowrap overflow-hidden text-green-user text-xl font-semibold',
   hidden: 'max-md:hidden'
}

export const HiUser = ({ userName, userNamePath }: HiUserProps) => {
   const { expanded } = useSidebar()

   return (
      <a 
         className={`${stylesheet.container} ${expanded ? '' : stylesheet.hidden}`} 
         href={userNamePath}
      >
         <div className={`${stylesheet.userIcon} ${expanded ? '' : stylesheet.hidden}`}>
            {userName.charAt(0)}
         </div>
         {expanded ? (
            <div className={`${stylesheet.userText} ${expanded ? '' : `w-0 ${stylesheet.hidden}`}`}>
               Hi, {userName.split(' ')[0]}
            </div>
         ) : (
            ''
         )}
      </a>
   )
}
