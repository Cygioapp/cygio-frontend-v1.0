import { GoDashboard } from 'react-icons/go'
import { HiOutlinePencilSquare } from 'react-icons/hi'
import { GrAnalytics } from 'react-icons/gi'
import React, { useMemo } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Sidebar() {
    const menuItems = [
        { id: 1, label: 'Dashboard', icon: <GoDashboard />, link: '/dashboard' },
        { id: 2, label: 'Publish', icon: <HiOutlinePencilSquare />, link: '/publish' },
        { id: 3, label: 'Analytics', icon: <GrAnalytics />, link: '/analytics' }
    ];

    const router = useRouter()
    const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname), [router.pathname])

    const getNavItemClasses = (menu) => {
        return (
            activeMenu?.id === menu.id

        )
    }
    return (
        <div className='sidebar'>
            {menuItems.map(({ ...menu }) => {
                const classes = getNavItemClasses(menu)
                return (
                    <div className={classes}>
                        <Link className='sidebar_item' href={menu.link}>
                            <div className='d-flex'>
                                <div>
                                    dd
                                </div>
                                <span>
                                    {menu.label}
                                </span>
                            </div>
                        </Link>
                    </div>
                )
            })}


        </div>
    )
}
