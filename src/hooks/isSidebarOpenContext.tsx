import {
   Dispatch,
   ReactNode,
   SetStateAction,
   createContext,
   useContext,
   useState,
} from 'react'

interface SidebarContextType {
   expanded: boolean
   setExpanded: Dispatch<SetStateAction<boolean>>
}

const SidebarContext = createContext<SidebarContextType>({
   expanded: true,
   setExpanded: () => {},
})

const SidebarProvider = ({ children }: { children: ReactNode }) => {
   const [expanded, setExpanded] = useState(true)

   return (
      <SidebarContext.Provider value={{ expanded, setExpanded }}>
         {children}
      </SidebarContext.Provider>
   )
} 

const useSidebar = () => useContext(SidebarContext)

export { useSidebar, SidebarProvider }
