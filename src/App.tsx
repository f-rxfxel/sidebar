import { Content } from './components/Content/Content'
import { Sidebar } from './components/Sidebar/Sidebar'
import { SidebarProvider } from './hooks/isSidebarOpenContext'

const App = () => {
   return (
      <div className={`
         h-screen bg-white flex
     `}>
         <SidebarProvider>
            <Sidebar />
         </SidebarProvider>
         <Content />
      </div>
   )
}

export default App
