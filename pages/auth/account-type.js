import { primaryColor } from '@/components/src/colors'
import React from 'react'

export default function AccounType() {
  return (
    <div>
      <div className='d-flex justify-content-center align-items-center'>
        <div>
          <p className="auth_heading" style={{ color: primaryColor }}>
            Choose account type
          </p>
        </div>
      </div>
    </div>
  )
}
