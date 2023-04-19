const { Card } = require("reactstrap")
import Image from "next/image";
import pp from "../src/images/Capture.jpg";
import img_ from "../src/images/cygio-icon.png";
import { FiMessageCircle } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

export const InstagramPreview = () => {
    return (
        <div style={{ width: '100%' }}>
          
            <Card className="prev_card">
                <div className='mb-3' style={{ display: "flex", alignItems: 'center', gap: 10 }}>
                    <Image src={pp} width={40} style={{ borderRadius: '50%' }} />
                    <h5 className="m-0">Yasir Yakasai</h5>
                </div>
                <div>
                    <Image src={img_} width={''} style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="mt-2" style={{ display: 'flex', gap: 20 }}>
                    <AiOutlineHeart size='1.9rem' />
                    <FiMessageCircle size='1.9rem' />
                    <FiSend size='1.9rem' />
                </div>
            </Card>
        </div>
    )
}