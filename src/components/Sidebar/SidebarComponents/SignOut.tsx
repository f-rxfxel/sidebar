import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface SignOutProps {
   SignOutIconSrc: string
   SignOutText: string
   SignOutPath: string
}

export const SignOut = ({
   SignOutIconSrc,
   SignOutText,
   SignOutPath,
}: SignOutProps) => {
   const { expanded } = useSidebar()

   return (
      <div className={`flex flex-col mb-auto bg-white`}>
         <a
            className={`flex items-center gap-2 h-8 group max-md:my-10 ${
               expanded ? 'justify-start' : 'justify-center max-md:hidden'
            }`}
            href={SignOutPath}
         >
            <img
               className="w-8 h-8 p-1 rounded-lg bg-white text-[#02384F] group-hover:bg-[#e9e9e9] transition-colors duration-200"
               src={SignOutIconSrc}
               alt={SignOutText}
            />
            {expanded ? (
               <div
                  className={` text-[#2F2F2F] text-lg whitespace-nowrap font-medium`}
               >
                  {SignOutText}
               </div>
            ) : (
               ''
            )}
         </a>
      </div>
   )
}
