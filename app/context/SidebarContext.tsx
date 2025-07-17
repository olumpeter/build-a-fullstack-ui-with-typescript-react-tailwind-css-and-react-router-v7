import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

type SidebarContextType = {
  isSidebarOpen: boolean
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
)

export function SidebarProvider({
  children,
}: {
  children: ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error(
      'useSidebar must be used within a SidebarProvider'
    )
  }

  return context
}
