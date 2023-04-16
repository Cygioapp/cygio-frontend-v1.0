import React from 'react'
import Layout from '../components/layout'
import { Card, Col, Row } from 'reactstrap'

export default function publish() {
    return (
        <div>
            <Layout>
                <Card className='app_main_card shadow p-3' style={{ height: '95vh' }}>
                    <Row>
                        <Col md={6}>
                            <h5>Published Posts</h5>
                        </Col>
                        <Col md={6}>
                            <div className='' style={{ float: 'right' }}>
                                <button className='dashboard_parent_btn' style={{ marginRight: 10 }}>Drafts</button>
                                <button className='dashboard_parent_btn'>New Publication</button>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Layout>
        </div>
    )
}
