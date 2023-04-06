import { primaryColor } from '@/components/src/colors'
import React, { useEffect, useState } from 'react'
import icon from "../../src/images/cygio-icon.png";
import logo from "../../src/images/cygio-logo.png";
import fb from "../../src/images/fb.png";
import tw from "../../src/images/tw.png";
import ig from "../../src/images/ig.png";
import tk from "../../src/images/tk.png";
import { MdOutlineBrandingWatermark } from 'react-icons/md'
import { CiUser } from 'react-icons/ci'
import { RiUserStarLine, RiUserLine } from 'react-icons/ri'
import Image from "next/image";
import { useRouter } from 'next/router';
import { Card, Col, Modal, Row } from 'reactstrap';
import Head from 'next/head';
import { ModalSocial } from './ModalSocial';

export default function ConnectType() {
  const router = useRouter()
  const [modal, setModal] = useState(false)
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [fbData, setFbData] = useState('')
  const openModal = () => {
    setModal(!modal)
  }
  const openModal1 = () => {
    setModal1(!modal1)
  }
  const openModal2 = () => {
    setModal2(!modal2)
  }
  const openModal3 = () => {
    setModal3(!modal3)
  }
  const accountTypes = [
    {
      icon: <MdOutlineBrandingWatermark className='account_type_icon' />,
      text: 'Facebook',
      link: fb,
      openM: openModal
    },
    {
      icon: <RiUserStarLine className='account_type_icon' />,
      text: 'Instagram',
      link: ig,
      openM: openModal1
    },
    {
      icon: <RiUserLine className='account_type_icon' />,
      text: 'Twitter',
      link: tw,
      openM: openModal2
    },
    {
      icon: <RiUserLine className='account_type_icon' />,
      text: 'TikTok',
      link: tk,
      openM: openModal3
    }
  ]
  // useEffect(() => {
  //   fetch(`https://graph.facebook.com/me?access_token=EAAKpggIlDXMBALrzwQnJtw8EYtGnM3heqmSauDQIsVWu6Hilynu4w4WxApZAhAAQwyTXkxGV0tMB6b1HMTipU3CMcph2gPlKeRbRzrmTaDH5N8tmgEl6diBjh3t2GZCXek8NSaLIgGE7cPK6M61DshwGfZB9AZAKmHEuT7DFyr3fppJGzAZCsZBHNRUUEz9730PA1zhRGf8gZDZD`)
  //     .then(raw => raw.json())
  //     .then(resp => {
  //       console.log(resp)
  //       setFbData(resp)
  //     })
  //     .catch(e => {
  //       console.log(e)
  //     })
  // }, [])
  return (
    <div className=''>
      {/* {JSON.stringify(fbData)} */}
      <Head>
        <title>Cygio - Connect your social accounts</title>
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
            Connect your social accounts
          </p>
          <div className='d-flex text-center' style={{ gap: 20 }}>
            {accountTypes.map((item, index) => (
              <Card className='account_card shadow p-4' onClick={item.openM}>
                <div>
                  <Image src={item.link} width={80} />
                </div>
                <p>{item.text}</p>
                {/* <button className='connect_btn'>Connect</button> */}
              </Card>
            ))}
          </div>
        </div>
      </div>

      <ModalSocial
        imgSrc={fb}
        imgAlt={'facebook_logo'}
        width={50}
        toggle={openModal}
        isOpen={modal}
        modalHead={'Connect your Facebook account'}
        modalSubHead={`Cygio needs to access your Facebook account`}
        modalDesc={`We are transferring you to Facebook to request 
        permission. Remember that you might need to sign out of one 
        account and then switch to the one you want to link.`}
        modalAcs={`To access and post something to Facebook on 
        your behalf, we must have your consent. You must be the 
        page admin for your company's Facebook page in order to 
        grant authorization.`}
        btnText={'Connect to Facebook'} />

      <ModalSocial
        imgSrc={ig}
        imgAlt={'ig_logo'}
        width={50}
        toggle={openModal1}
        isOpen={modal1}
        modalHead={'Connect your Instagram account'}
        modalSubHead={`Cygio needs to access your Instagram account`}
        modalDesc={`We are transferring you to Instagram to request 
        permission. Remember that you might need to sign out of one 
        account and then switch to the one you want to link.`}
        modalAcs={`To access and post something to Instagram on 
        your behalf, we must have your consent. You must be the 
        page admin for your company's Instagram page in order to 
        grant authorization.`}
        btnText={'Connect to Instagram'} />

      <ModalSocial
        imgSrc={tw}
        imgAlt={'twitter_logo'}
        width={50}
        toggle={openModal2}
        isOpen={modal2}
        modalHead={'Connect your Twitter account'}
        modalSubHead={`Cygio needs to access your Twitter account`}
        modalDesc={`We are transferring you to Twitter to request 
        permission. Remember that you might need to sign out of one 
        account and then switch to the one you want to link.`}
        modalAcs={`To access and post something to Twitter on 
        your behalf, we must have your consent. You must be the 
        page admin for your company's Twitter page in order to 
        grant authorization.`}
        btnText={'Connect to Twitter'} />

      <ModalSocial
        imgSrc={tk}
        imgAlt={'tiktok_logo'}
        width={50}
        toggle={openModal3}
        isOpen={modal3}
        modalHead={'Connect your Tiktok account'}
        modalSubHead={`Cygio needs to access your Tiktok account`}
        modalDesc={`We are transferring you to Tiktok to request 
        permission. Remember that you might need to sign out of one 
        account and then switch to the one you want to link.`}
        modalAcs={`To access and post something to Tiktok on 
        your behalf, we must have your consent. You must be the 
        page admin for your company's Tiktok page in order to 
        grant authorization.`}
        btnText={'Connect to Tiktok'} />
    </div>
  )
}

