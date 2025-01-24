import { Separator } from './components/ui/separator'
import { SidebarInset, SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import Header from './header'
import Sidebar from './sidebar'
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
           <SidebarInset>
             <Header />
             <Separator className="bg-slate-400"/>

          <div className='flex'>

            <div className="flex flex-1 flex-col p-4 pt-0 bg-slate-200 w-3/4">
              <div className='rounded-xl mt-4 flex items-center '>
                <div className='flex flex-col'>
                  <span className='text-xl'>Dashboard</span>
                  <span className='text-gray-500 -mt-1 text-sm'>Get the overview of your green score and track your progress</span>
                </div>
                {/*<Calender />*/}
                
              </div>
              <div className=' py-4 grid grid-cols-3 gap-4'>                
               <Card className='p-4 bg-green-950 text-white'>                 
                 <CardDescription className="flex items-center gap-2">
                  <Radio className='text-red-800' />
                  Update
                 </CardDescription>                 
                 <CardContent className="flex flex-col py-5 -ml-4">
                   <span className='text-xs opacity-50'>Feb 12th 2024</span>
                   <span className='text-xl text-gray-300 '>Carbon Footprint decreased 40% in 1 week</span>
                 </CardContent>
                 <CardFooter className="pb-0">
                   <span className='text-xs opacity-50 font-light'>See Statistics</span>
                   <ChevronRight className='opacity-50 ml-auto'/>
                 </CardFooter>
               </Card>

               <Card className="p-4">                 
                  <CardDescription className="flex items-center gap-2">
                    <span>Green Coins</span>
                    <Ellipsis className='ml-auto text-black' />
                  </CardDescription>                 
                 <CardContent className="flex items-center gap-3 justify-center py-5 mr-7 mb-3">
                   <img src={logo} alt="green_coin" className='w-6'/>
                   <span className='text-6xl'>193</span>
                 </CardContent>
                 <CardFooter className="pb-0 gap-1 ">
                   <TrendingUp className='text-green-600 -ml-3'/>
                   <span className='text-sm opacity-50 ml-2 '>+35%</span>
                   <span className='text-sm ml-1 opacity-70'>from last month</span>
                 </CardFooter>
               </Card>

               <Card className="p-4">                 
                  <CardDescription className="flex items-center gap-2">
                    <span>Carbon Footprint</span>
                    <Ellipsis className='ml-auto text-black' />
                  </CardDescription>                 
                 <CardContent className="flex items-center gap-3 justify-center py-5 mr-7 mb-3">
                   <Footprints className='text-blue-900' />
                   <span className='text-6xl'>32</span>
                 </CardContent>
                 <CardFooter className="pb-0 gap-1 ">
                   <TrendingDown className='text-red-600 -ml-3'/>
                   <span className='text-sm opacity-50 ml-2 '>-24%</span>
                   <span className='text-sm ml-1 opacity-70'>from last month</span>
                 </CardFooter>
               </Card>
              </div>


              <div className="grid grid-cols-2 gap-4 min-h-[70vh]" >

                  <div className=''>
                    <Card className="h-full p-4">
                    <CardDescription className="flex items-center gap-2">
                      <span className='font-bold text-green-500 text-lg'>Transactions</span>
                      <Ellipsis className=' ml-auto' />
                    </CardDescription> 
                      <CardContent className="p-0">
                        <div className="flex items-center gap-8 mt-6 p-0">
                          <Zap className='w-12 text-blue-800' />
                          <div className='flex flex-col gap-1'>
                            <span className='text-green-500'> Electricity and Utilities </span>
                            <span className='text-xs opacity-60'>Jul 12th 2024</span>                          
                          </div>
                          <div className="flex flex-col text-sm text-right gap-1 ml-9 opacity-60">
                            <span>Completed</span>
                            <span>OJWEJS7ISNC</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 mt-6 p-0">
                          <Wifi className='w-12 text-blue-800' />
                          <div className='flex flex-col gap-1'>
                            <span className='text-green-500 '> Internet Comms Services </span>
                            <span className='text-xs opacity-60'>Jul 12th 2024</span>                          
                          </div>
                          <div className="flex flex-col text-sm text-right gap-1 ml-9 opacity-60">
                            <span>Completed</span>
                            <span>OJWEJS7ISNC</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 mt-6 p-0">
                          <Square className='w-12 text-blue-800' />
                          <div className='flex flex-col gap-1'>
                            <span className='text-green-500'> Office Supplies bought </span>
                            <span className='text-xs opacity-60'>Jul 12th 2024</span>                          
                          </div>
                          <div className="flex flex-col text-sm text-right gap-1 ml-9 opacity-60">
                            <span>Completed</span>
                            <span>OJWEJS7ISNC</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 mt-6 p-0">
                          <Plane className='w-12 text-blue-800' />
                          <div className='flex flex-col gap-1'>
                            <span className='text-green-500'> Travel and Accommodation </span>
                            <span className='text-xs opacity-60'>Jul 12th 2024</span>                          
                          </div>
                          <div className="flex flex-col text-sm text-right gap-1 ml-9 opacity-60">
                            <span>Completed</span>
                            <span>OJWEJS7ISNC</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 mt-6 p-0">
                          <Forklift className='w-12 text-blue-800' />
                          <div className='flex flex-col gap-1'>
                            <span className='text-green-500'> Logistics and Transportation </span>
                            <span className='text-xs opacity-60'>Jul 12th 2024</span>                          
                          </div>
                          <div className="flex flex-col text-sm text-right gap-1 ml-9 opacity-60">
                            <span>Completed</span>
                            <span>OJWEJS7ISNC</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 mt-6 p-0">
                          <Gift className='w-12 text-blue-800' />
                          <div className='flex flex-col gap-1'>
                            <span className='text-green-500'> Corporate Gift and Events </span>
                            <span className='text-xs opacity-60'>Jul 12th 2024</span>                          
                          </div>
                          <div className="flex flex-col text-sm text-right gap-1 ml-9 opacity-60">
                            <span>Completed</span>
                            <span>OJWEJS7ISNC</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 mt-6 p-0">
                          <Leaf className='w-12 text-blue-800' />
                          <div className='flex flex-col gap-1'>
                            <span className='text-green-500'> Utilities for Green Initiatives </span>
                            <span className='text-xs opacity-60'>Jul 12th 2024</span>                          
                          </div>
                          <div className="flex flex-col text-sm text-right gap-1 ml-9 opacity-60">
                            <span>Completed</span>
                            <span>OJWEJS7ISNC</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className='grid gap-4'>
                  <Card className='p-4 h-96'>
                    <CardDescription className="flex items-center gap-2 mb-3">
                      <span className='font-bold text-lg '>Statistics</span>
                    </CardDescription> 
                      <Separator />  
                      <div className=' flex flex-col h-80'>
                      <div className=' flex items-center gap-3 justify-center py-5 mt-3 mr-7 mb-3'>
                        <img src={logo} alt="" className='w-6'/>
                        <span className='text-5xl'>193</span>
                        <span className='flex items-center '>
                        <TrendingUp className='text-green-600 ml-9 mr-2'/>
                        <span className='text-sm opacity-50  '>+35%</span>
                        <span className='text-sm ml-1 opacity-70'>from last month</span>
                        </span>
                      </div>     
                      <div className=''>
                       <BarChart className="" />                      
                      </div>                   
                      </div> 
                  </Card>
                  <Card className="bg-green-200">
                    <CardHeader className="pb-2 pt-4">
                      <CardTitle className="text-xl text-green-500">Grefin Market</CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-3">
                      <div className='flex flex-col gap-3'>
                      <img src="https://www.delogue.com/hubfs/AdobeStock_562145128.jpeg" alt=""  className='w-56 rounded-xl'/>
                      <Button className="w-56 rounded-2xl text-green-700 bg-green-400 transition-transform duration-300 hover:scale-105" >
                        Buy Now
                      </Button>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <div className='flex flex-col'>
                          <span className='text-2xl text-green-700 font-bold'>Eco-friendly Fashion</span>
                          <span className='text-xs opacity-60'>Sustainable fashion is not a trend but the future</span>
                        </div>
                        <Button className="flex h-28 rounded-3xl bg-green-400 text-green-700 transition-transform duration-300 hover:scale-105">                          
                          <span className='text-lg font-bold '>Shop More</span>                         
                          <CircleArrowRight className=' w-32' />                         
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  </div>

                </div>
            </div>


            <Separator orientation="vertical" className="bg-slate-400"/>


            <div className='bg-slate-200 grid gap-2 w-1/4 p-4'>
              <div className='flex'>
                <PieChart />
              </div>
              <div className=''>
                <Card className="h-full bg-green-200">                  
                  <CardContent className="h-full flex flex-col p-4 h-24" >
                    <div className="flex mb-3 ">
                    <div className=' flex flex-col w-3/4 gap-1' >
                      <div className=' text-2xl text-gray-600'>
                      Level up your Green Score managing to the next level.
                      </div>
                      <div className=' text-xs opacity-60'>
                      An any way to increase your Green Score with care and precision.
                      </div>
                      <div className=' flex text-2xl gap-3 font-bold items-center text-gray-600'>
                      Try Premium
                      <CircleArrowDown />
                      </div>
                    </div>
                    <div className='w-1/4 '>
                      <Tag className='w-20 opacity-70' />
                    </div>
                    </div>
                    <div>
                      <Button className="w-full rounded-2xl bg-green-500 text-green-800 transition-transform duration-300 hover:scale-105">
                        Upgrade to Grefin+
                      </Button>
                    </div>
                  </CardContent>                  
                </Card>
              </div>
            </div>
 

          </div>
           </SidebarInset>
        </SidebarProvider>
      </div>
    </div>    
  )
}

export default App
