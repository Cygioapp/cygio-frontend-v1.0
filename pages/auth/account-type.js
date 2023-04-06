import { primaryColor } from '@/components/src/colors'
import React from 'react'
import icon from "../../src/images/cygio-icon.png";
import logo from "../../src/images/cygio-logo.png";
import { MdOutlineBrandingWatermark } from 'react-icons/md'
import { CiUser } from 'react-icons/ci'
import { RiUserStarLine, RiUserLine } from 'react-icons/ri'
import Image from "next/image";
import { useRouter } from 'next/router';
import { Card, Col, Row } from 'reactstrap';
import Head from 'next/head';

export default function AccountType() {
  const router = useRouter()
  const accountTypes = [
    {
      icon: <MdOutlineBrandingWatermark className='account_type_icon' />,
      text: 'Brand',
      link: '/auth/create-org'
    },
    {
      icon: <RiUserStarLine className='account_type_icon' />,
      text: 'Creator',
      link: '/auth/create-org'
    },
    {
      icon: <RiUserLine className='account_type_icon' />,
      text: 'Personal',
      link: '/auth/create-org'
    }
  ]
  return (
    <div className=''>
      <Head>
        <title>Cygio - Choose account type</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='d-flex justify-content-center mt-5'>
        <div>
          <div
            className="text-center"

          >
            <Image src={icon} width={50} alt="cygio-icon" />
            <Image src={logo} width={120} alt="cygio-logo" />
          </div>
          <p className="auth_heading mt-3 text-center" style={{ color: primaryColor }}>
            Choose account type
          </p>
          <div className='d-flex text-center' style={{ gap: 20 }}>
            {accountTypes.map((item, index) => (

              <Card className='account_card shadow p-3' onClick={() => router.push(item.link)}>
                <div>
                  {item.icon}
                </div>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
