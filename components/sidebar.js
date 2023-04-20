import { GoDashboard } from 'react-icons/go'
import { TbBrandGoogleAnalytics } from 'react-icons/tb'
import { BsPencilSquare } from 'react-icons/bs'
import { FaUsersCog } from 'react-icons/fa'
import { BiBriefcaseAlt } from 'react-icons/bi'
import React, { useMemo } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import icon from "../src/images/cygio-icon.png";
import logo from "../src/images/cygio-logo.png";
import Image from 'next/image';
export default function Sidebar() {

    const menuItems = [
        { id: 1, label: 'Dashboard', icon: GoDashboard, link: '/dashboard', },
        { id: 2, label: 'Publish', icon: BsPencilSquare, link: '/publish' },
        { id: 3, label: 'Analytics', icon: TbBrandGoogleAnalytics, link: '/analytics' },
        { id: 4, label: 'Social Accounts', icon: FaUsersCog, link: '/SocialAccounts' },
        { id: 5, label: 'Organization', icon: BiBriefcaseAlt, link: '/' }
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
            {/* <Image src={icon} width={50} alt="cygio-icon" /> */}
            <Image src={logo} width={120} alt="cygio-logo" className='mt-2' style={{ marginLeft: 10 }} />
            <p className='items_head mt-3'>SOCIAL MEDIA MANAGEMENT</p>
            {menuItems.map(({ ...menu }) => {
                const classes = getNavItemClasses(menu)
                return (
                    <div className={classes}>
                        <Link className='sidebar_item' href={menu.link}>
                            <div className='d-flex'>
                                <span className={`sidebar_item_ ${router.pathname === menu.link && "active_sidebar_item"
                                    }`}>
                                    <menu.icon size='1.2rem' className='sidebar_icon' />{menu.label}
                                </span>
                            </div>
                        </Link>
                    </div>
                )
            })}


        </div>
    )
}
