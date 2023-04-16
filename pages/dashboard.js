import React from 'react'
import Layout from '../components/layout'
import { Card, Col, Row, Table } from 'reactstrap'
import pp from "../src/images/Capture.jpg";
import Image from 'next/image';
import PiechartComp from '../components/PiechartComp';
import AreachartComp from '../components/AreachartComp';
import fb from "../src/images/fb.png";
import tw from "../src/images/tw.png";
import ig from "../src/images/ig.png";
import tk from "../src/images/tk.png";
export default function dashboard() {
    const recentPost = [
        {
            logo: fb,
            time: '2hrs ago',
            title: 'Post title, post...'
        },
        {
            logo: tw,
            time: '2hrs ago',
            title: 'Post title, post...'
        },
        {
            logo: ig,
            time: '2hrs ago',
            title: 'Post title, post...'
        },
        {
            logo: tk,
            time: '2hrs ago',
            title: 'Post title, post...'
        }
    ]
    const recentActivities = []
    return (
        <div>
            <Layout>
                {/* <h5>Dashboard</h5> */}
                <div className='mb-3' style={{ display: "flex", alignItems: 'center', gap: 10 }}>
                    <Image src={pp} width={40} style={{ borderRadius: '50%' }} />
                    <h5>Hello Yasir Yakasai</h5>
                </div>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col md={8}>
                                <Card className='app_main_card shadow p-3' style={{ height: '38vh' }}>
                                    <h6>Recent Posts</h6>
                                    <Row>
                                        {recentPost.map((post) => (
                                            <Col md={6} className=''>
                                                <Card className='p-2 m-1'>
                                                    <div className='d-flex' style={{ alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <Image src={post.logo} alt='fb' width={30} />
                                                        <p style={{ margin: 0, fontSize: 12 }}>{post.time}</p>
                                                    </div>
                                                    <b>{post.title}</b>
                                                </Card>
                                            </Col>
                                        ))}
                                        <hr className='mt-3' />
                                    </Row>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card style={{ height: '18vh' }} className='app_main_card shadow mb-3 p-3'>
                                    <p className='m-0'>Total Posts</p>
                                    <p className='dashboard_fig'>200</p>
                                </Card>
                                <Card style={{ height: '18vh' }} className='app_main_card shadow p-3'>
                                    <p className='m-0'>Total Comments</p>
                                    <p className='dashboard_fig'>3,000</p>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <Card className='app_main_card shadow p-3' style={{ height: '38vh' }}>
                            <h6>Recent Activities</h6>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>
                                        </th>
                                        <th>
                                        </th>
                                        <th>
                                        </th>
                                        <th>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='dashboard_p'>
                                            <span className='t_indx'>
                                                1
                                            </span>
                                        </td>
                                        <td className='dashboard_p'>
                                            You created a post on cygio app page
                                        </td>
                                        <td className='dashboard_p'>
                                            12/12/2022
                                        </td>
                                        <td className='dashboard_p'>
                                            <button className='dashboard_child_btn'>View</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='dashboard_p'>
                                            <span className='t_indx'>
                                                1
                                            </span>
                                        </td>
                                        <td className='dashboard_p'>
                                            You created a post on cygio app page
                                        </td>
                                        <td className='dashboard_p'>
                                            2 hrs ago
                                        </td>
                                        <td className='dashboard_p'>
                                            <button className='dashboard_child_btn'>View</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='dashboard_p'>
                                            <span className='t_indx'>
                                                1
                                            </span>
                                        </td>
                                        <td className='dashboard_p'>
                                            You replied to a twitter comment
                                        </td>
                                        <td className='dashboard_p'>
                                            5 hrs ago
                                        </td>
                                        <td className='dashboard_p'>
                                            <button className='dashboard_child_btn'>View</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='dashboard_p'>
                                            <span className='t_indx'>
                                                1
                                            </span>
                                        </td>
                                        <td className='dashboard_p'>
                                            You replied to a twitter comment
                                        </td>
                                        <td className='dashboard_p'>
                                            5 hrs ago
                                        </td>
                                        <td className='dashboard_p'>
                                            <button className='dashboard_child_btn'>View</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card className='mt-3 app_main_card shadow p-3' style={{ height: '45vh' }}>
                            <h6>Engagements Chart</h6>
                            <AreachartComp />
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className='mt-3 app_main_card shadow p-3' style={{ height: '45vh' }}>
                            <h6>Followers Chart</h6>
                            <PiechartComp />
                        </Card>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}
