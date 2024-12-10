import { Scissors } from 'lucide-react'

import { Link } from 'react-router-dom'
import { ThemeToggle } from './theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Scissors className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link to="/">
            Dashboard
          </Link>
          <Link to="/services">
            Serviços
          </Link>
        </nav>

        <div className="ml-auto flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
