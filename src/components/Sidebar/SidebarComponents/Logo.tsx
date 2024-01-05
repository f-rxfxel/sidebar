import { useSidebar } from '../../../hooks/isSidebarOpenContext'

export interface LogoProps {
   logoText: string
   logoPath: string
}

export const Logo = ({ logoText, logoPath }: LogoProps) => {
   const { expanded } = useSidebar()

   return (
      <a
         href={logoPath}
         className={`
            absolute text-[#2AADD4] font-bold mt-8 text-center 
            transition-all duration-200
            ${expanded ? 'text-5xl max-md:text-4xl' : 'text-3xl pr-2 max-md:text-4xl max-md:pr-0'}
            max-md:left-[50%] max-md:-translate-x-[50%] max-md:-mt-6
         `}
      >
         {logoText}
      </a>
   )
}
