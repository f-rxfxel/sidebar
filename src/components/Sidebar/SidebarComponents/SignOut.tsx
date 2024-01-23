import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface SignOutProps {
   SignOutIconSrc: string
   SignOutText: string
   SignOutPath: string
}

const stylesheet = {
   container: 'flex flex-col mb-auto bg-white',
   link: 'flex items-center gap-2 h-8 group max-md:my-10',
   expanded: 'justify-start',
   contracted: 'justify-center max-md:hidden',
   image: 'w-8 h-8 p-1 rounded-lg bg-white text-black-03 group-hover:bg-light transition-colors duration-200',
   text: 'text-black-03 text-lg whitespace-nowrap font-medium'
}

export const SignOut = ({
   SignOutIconSrc,
   SignOutText,
   SignOutPath,
}: SignOutProps) => {
   const { expanded } = useSidebar()

   return (
      <div className={stylesheet.container}>
         <a
            className={`${stylesheet.link} ${expanded ? stylesheet.expanded : stylesheet.contracted}`}
            href={SignOutPath}
         >
            <img
               className={stylesheet.image}
               src={SignOutIconSrc}
               alt={SignOutText}
            />
            {expanded ? (
               <div
                  className={stylesheet.text}
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
