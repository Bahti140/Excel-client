'use client'
import React from "react"
import AdminSidebar from "../../components/Admin/sidebar/AdminSidebar"
import Heading from "../../../app/utils/Heading"
import UsersAnalytics from "../../components/Admin/Analytics/UsersAnalytics"
import DashboardHeader from "../../../app/components/Admin/sidebar/DashboardHeader"

type Props = {}

const page = (props: Props) => {
    return (
        <div>
        <Heading
            title='Elearning - Admin'
            description='Elearning is a platform to learn and get help from teachers'  
            keywords='Programming, Mern, Redux, Machine Learning'
        />
        <div className="flex">
            <div className="1500px:w-[16%] w-1/5">
                <AdminSidebar />
            </div>
            <div className="w-[85%]">
                <DashboardHeader />
                <UsersAnalytics />
            </div>
        </div>
    </div>
    )
}

export default page