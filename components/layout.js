import React from 'react'
import Sidebar from './sidebar'
import { Col, Row } from 'reactstrap'

export default function Layout({ children }) {
    return (
        <div>
            <Row className='m-0'>
                <Col md={2} className='p-0 m-0'>
                    <Sidebar />
                </Col>
                <Col md={10} className='m-0 p-0'>
                    <div className='content_div p-3'>
                        {children}
                    </div>
                </Col>
            </Row>
        </div>
    )
}
