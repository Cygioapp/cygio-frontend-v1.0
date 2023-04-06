import React from 'react'
import Sidebar from './sidebar'
import { Col, Row } from 'reactstrap'

export default function Layout({ children }) {
    return (
        <div>
            <Row className='m-0'>
                <Col md={2} className='sidebar_'>
                    <Sidebar />
                </Col>
                <Col md={10} className='bg-danger content_'>
                    <div>
                        {children}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
