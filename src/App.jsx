import { Separator } from './components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import Header from './header'
import Sidebar from './sidebar'
import Sidebar_inset from './sidebar_inset'
import PieChart from './pie_chart'
import BarChart from './bar_chart'
import Calender from './calender'

import logo from './assets/grefin_logo.png'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChevronRight, CircleArrowDown, CircleArrowRight, Ellipsis, Footprints, Forklift, Gift, Leaf, Plane, Radio, Square, Tag, TrendingDown, TrendingUp, Wifi, Zap } from 'lucide-react'
import { Button } from './components/ui/button'





function App() {
  return (
    <div>
      <div className="font-Gabarito">
        <SidebarProvider>
           <Sidebar />
           <Sidebar_inset />

        </SidebarProvider>
      </div>
    </div>    
  )
}

export default App
