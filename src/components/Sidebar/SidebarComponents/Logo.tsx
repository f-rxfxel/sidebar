import { useSidebar } from '../../../hooks/isSidebarOpenContext'
import LogoImg from '../../../assets/Logo.svg'

export interface LogoProps {
   logoPath: string
}

const stylesheet = {
   logoContainer: 'absolute mt-4 text-center transition-all duration-200 max-md:left-[50%] max-md:-translate-x-[50%] max-md:-mt-6',
   expanded: 'text-5xl max-md:text-4xl',
   contracted: 'text-3xl pr-2 max-md:text-4xl max-md:pr-0'
}

export const Logo = ({ logoPath }: LogoProps) => {
   const { expanded } = useSidebar()

   return (
      <a 
         href={logoPath} 
         className={`${stylesheet.logoContainer} ${expanded ? stylesheet.expanded : stylesheet.contracted }`}
      >
         <img src={LogoImg} ></img>
      </a>
   )
}
