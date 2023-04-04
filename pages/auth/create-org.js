import { primaryColor } from '@/components/src/colors'
import React, { useState } from 'react'
import icon from "../../src/images/cygio-icon.png";
import logo from "../../src/images/cygio-logo.png";
import Image from "next/image";
import { Card, Col, Form, Row } from 'reactstrap';

export default function CreateOrganization() {
  const orgForm =
  {
    name: '',
    number_of_employees: '',
    location: '',
    preferred_language: '',
  }

  const [org, setOrg] = useState(orgForm)

  const handleChange = ({ target: { name, value } }) => {
    setOrg((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(org)
  };

  return (
    <div className=''>
      {/* {JSON.stringify(org)} */}
      <div className='d-flex justify-content-center mt-3'>
        <div>
          <div
            className="text-center"

          >
            <Image src={icon} width={50} alt="cygio-icon" />
            <Image src={logo} width={120} alt="cygio-logo" />
          </div>
          <p className="auth_heading mt-3 text-center" style={{ color: primaryColor }}>
            Create Organization
          </p>
          <div className=''>
            <Card className="shadow p-4 org_card">
              <Form onSubmit={handleSubmit}>
                <div>
                  <label className="input_label">Name</label>
                  <input
                    className="auth_field mb-2"
                    type="name"
                    name="name"
                    value={org.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="input_label">Number of Employees</label>
                  <input
                    className="auth_field mb-2"
                    type="number"
                    name="number_of_employees"
                    value={org.number_of_employees}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="input_label">Location</label>
                  <input
                    className="auth_field mb-2"
                    type="text"
                    name="location"
                    value={org.location}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="input_label">Preferred Language</label>
                  <input
                    className="auth_field mb-3"
                    type="text"
                    name="preferred_language"
                    value={org.preferred_language}
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <button className="auth_btn mb-3">Create</button>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
