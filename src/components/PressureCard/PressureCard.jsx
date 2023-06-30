import Card from "react-bootstrap/Card"
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 })
    return isMobile ? children : null
}

export default function PressureCard({pressure}){
    return (
        <>
            <Desktop>
                <Card style={{ width: '8rem', height: '8rem'}} bg="primary" border="dark">
                    <Card.Body>
                        <Card.Title className='fw-bold fs-5'>Pressure</Card.Title>
                        <Card.Text className="fw-semibold fs-6">
                            <p className="mt-4">{pressure}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Desktop>
            <Mobile>
            <Card style={{ width: '100px', height: '100px'}} bg="info-subtle" border="dark">
                    <Card.Body>
                        <Card.Title className='fw-bold fs-8'>Pressure</Card.Title>
                        <Card.Text className="fw-semibold fs-8 mt-3">
                            <p>{pressure}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Mobile>
        </>
    )
}

