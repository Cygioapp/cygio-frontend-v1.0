import React, { useState } from 'react'
import Layout from '../components/layout'
import { Card, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap'
import fb from "../src/images/fb.png";
import tw from "../src/images/tw.png";
import ig from "../src/images/ig.png";
import tk from "../src/images/tk.png";
import Image from 'next/image';
import { BsTrash } from 'react-icons/bs';
import Link from 'next/link';
export default function SocialAccounts() {
    const profiles = [{
        icon: fb,
        name: 'Yasir Yakasai'
    },
    {
        icon: tw,
        name: 'Yasir Yakasai'
    },
    {
        icon: tk,
        name: 'Yasir Yakasai'
    },
    {
        icon: ig,
        name: 'Yasir Yakasai'
    }]
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <div>
            <Layout>
                <Card className='app_main_card shadow p-3' style={{ height: '95vh' }}>

                    <Row>
                        <Col md={6}>
                            <h5>Social Accounts</h5>
                        </Col>
                        <Col md={6}>
                            <div className='' style={{ float: 'right' }}>
                                <Dropdown style={{color:'red'}} isOpen={dropdownOpen} toggle={toggle}>
                                    <DropdownToggle caret>Add New Account</DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>Some Action</DropdownItem>
                                        <DropdownItem divider />
                                    </DropdownMenu>
                                </Dropdown>
                            </div>

                        </Col>
                    </Row>
                    {/* <Row>
                        <div>
                            {profiles.map((profile) => (
                                <Row className='mb-1'>
                                    <Col md={10} style={{ display: "flex", alignItems: 'center', gap: 10 }}>
                                        <Image src={profile.icon} width={30} style={{ borderRadius: '50%' }} />
                                        <h6 className='m-0'>{profile.name}</h6>
                                    </Col>
                                </Row>
                            ))}
                        </div>
                    </Row> */}
                    <Row className='mt-3'>
                        {profiles.map((profile) => (
                            <Col md={3} className=''>
                                <Card className='account_card shadow p-4' style={{ width: '100%' }}>
                                    <div className='' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Image src={profile.icon} width={30} style={{ borderRadius: '50%' }} />
                                        <BsTrash className='trash' />
                                    </div>
                                    <h6 className='m-0 mt-3'>{profile.name}</h6>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Card>
            </Layout>
        </div>
    )
}
