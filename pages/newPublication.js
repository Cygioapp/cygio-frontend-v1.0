import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import Layout from '../components/layout'
import { MdEmojiEmotions, MdLocationPin, MdPhotoCamera } from 'react-icons/md'
import { InstagramPreview } from './InstagramPreview'
import FacebookPreview from './FacebookPreview'
import TiktokPreview from './TiktokPreview'
import fb from "../src/images/fb.png";
import tw from "../src/images/tw.png";
import ig from "../src/images/ig.png";
import tk from "../src/images/tk.png";
import TwitterPreview from './TwitterPreview'
import Image from 'next/image'
export default function newPublication() {
    // const pubForm =
    // {
    //     caption: '',
    //     image_video: '',

    // }

    // const [publish, setPublish] = useState(pubForm)

    // const handleChange = ({ target: { name, value } }) => {
    //     setPublish((p) => ({ ...p, [name]: value }))
    // }
    const [preview, setPreview] = useState('1')
    const profiles = [{
        icon: fb,
        name: 'Yasir Yakasai',
        action: <input type='checkbox' style={{ float: 'right' }} />
    },
    {
        icon: tw,
        name: 'Yasir Yakasai',
        action: <input type='checkbox' style={{ float: 'right' }} />
    },
    {
        icon: tk,
        name: 'Yasir Yakasai',
        action: <input type='checkbox' style={{ float: 'right' }} />
    },
    {
        icon: ig,
        name: 'Yasir Yakasai',
        action: <input type='checkbox' style={{ float: 'right' }} />
    }]

    return (
        <div>
            <Layout>
                <Card className='app_main_card shadow p-3' style={{ height: '95vh' }}>
                    {/* {publish} */}
                    <Row>
                        <Col md={6}>
                            <h5>Publish Post</h5>
                        </Col>
                        <Col md={6}>
                            <div className='' style={{ float: 'right' }}>
                                <button className='dashboard_parent_btn'>Publish Now</button>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col md={6} >
                            <div>
                                <p style={{ fontSize: 13 }} className='m-0'>Select the Profile(s) you want to publish to :</p>
                                <div className='profiles_div mt-2 mb-3'>
                                    {profiles.map((profile) => (
                                        <Row className='mb-1'>
                                            <Col md={10} style={{ display: "flex", alignItems: 'center', gap: 10 }}>
                                                <Image src={profile.icon} width={30} style={{ borderRadius: '50%' }} />
                                                <h6 className='m-0'>{profile.name}</h6>
                                            </Col>
                                            <Col md={2} style={{ display: "flex", alignItems: 'center' }}>
                                                {profile.action}
                                            </Col>
                                        </Row>
                                    ))}
                                </div>
                            </div>
                            <div className='text_area_div'>
                                <textarea
                                    rows='10'
                                    className='text_area'
                                    placeholder='write here...'
                                >
                                </textarea>
                                <div className='p-2'>
                                    <MdEmojiEmotions className='pub_icon' size='1.5rem' style={{ marginRight: 10 }} />
                                    <MdPhotoCamera className='pub_icon' size='1.5rem' style={{ marginRight: 10 }} />
                                    <MdLocationPin className='pub_icon' size='1.5rem' />
                                </div>
                            </div>
                            <div className='mt-3' style={{ display: 'flex', gap: 10 }}>
                                <button className='dashboard_parent_btn'>Publish now</button>
                                <button className='dashboard_child_btn'>Schedule for later</button>
                                <button className='dashboard_child_btn'>Auto schedule</button>
                            </div>
                        </Col>
                        <Col md={6} >
                            <Card className='right_pub_pane p-3'>
                                <b>Preview</b>
                                <div className='mb-3 mt-3'>
                                    <button onClick={() => setPreview('1')} className={preview === '1' ? 'preview_btn' : 'inactive_btn'}>Instagram</button>
                                    <button onClick={() => setPreview('2')} className={preview === '2' ? 'preview_btn' : 'inactive_btn'}>Facebook</button>
                                    <button onClick={() => setPreview('3')} className={preview === '3' ? 'preview_btn' : 'inactive_btn'}>Twitter</button>
                                    <button onClick={() => setPreview('4')} className={preview === '4' ? 'preview_btn' : 'inactive_btn'}>Tiktok</button>
                                </div>
                                {preview === '1' ? <InstagramPreview /> : ''}
                                {preview === '2' ? <FacebookPreview /> : ''}
                                {preview === '3' ? <TiktokPreview /> : ''}
                                {preview === '4' ? <TwitterPreview /> : ''}
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Layout>
        </div>
    )
}
