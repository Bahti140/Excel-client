'use client'
import React from 'react'
import Heading from '../../utils/Heading'
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar"
import AdminProtected from '../../hooks/adminProtected'
import DashboardHero from '../../components/Admin/sidebar/DashboardHero';
import AllUsers from '@/app/components/Admin/Users/AllUsers'

type Props = {
    
}

const page = (props: Props) => {
    return (
        <div>
           <AdminProtected>
           <Heading
              title='Elearning - Admin'
              description='Elearning is a platform to learn and get help from teachers'  
              keywords='Programming, Mern, Redux, Machine Learning'
            
            />
            <div className="flex h-[200vh]">
                <div className="1500px:w-[16%] w-1/5">
                    <AdminSidebar />
                </div>
                <div className='w-[85%]'>
                    <DashboardHero />
                    <AllUsers isTeam={true} />
                </div>
            </div>
           </AdminProtected>
        </div>
    )
}

export default page
