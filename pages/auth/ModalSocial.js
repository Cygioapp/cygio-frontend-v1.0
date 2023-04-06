import Image from 'next/image'
import { Card, Col, Modal, Row } from 'reactstrap'

export const ModalSocial = ({ toggle, isOpen, modalHead, modalSubHead, modalDesc, modalAcs, btnText, imgAlt, imgSrc, width, onClick }) => {
    return (
        <div>
            <Modal toggle={toggle} isOpen={isOpen}>
                <div className='p-3'>
                    <div className='d-flex align-items-center' style={{ justifyContent: 'space-between' }}>
                        <div>
                            <p className='modal_heading m-0'>{modalHead}</p>
                        </div>
                        <div>
                            <Image src={imgSrc} alt={imgAlt} width={width} />
                        </div>
                    </div>
                    <hr />
                    <p className='modal_sub_h'>{modalSubHead}</p>
                    <p className='modal_desc'>{modalDesc}</p>
                    <Card className='p-3 social_desc_card'>
                        <p className='modal_desc'>{modalAcs}</p>
                    </Card>
                    <button className='auth_btn mt-3' onClick={onClick}>{btnText}</button>
                </div>
            </Modal>
        </div>
    )
}
