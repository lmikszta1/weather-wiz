import Card from 'react-bootstrap/Card'
import "./ConditionCard.css"
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 991 })
    return isMobile ? children : null
}

export default function ConditionCard({condition}){
    return (
        <>
            <Desktop>
                <Card style={{ width: '8rem', height: '8rem'}} bg="primary" border="dark">
                    <Card.Body>
                        <Card.Title className={condition.text.includes('thunder') ? 'fw-bold fs-8' : 'fw-bold fs-6'}>{condition.text}</Card.Title>
                        <Card.Text>
                            <img alt="condition icon" src={condition.icon}/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Desktop>
            <Mobile>
                <Card style={{ width: '100px', height: '100px'}} bg="info-subtle" border="dark">
                    <Card.Body>
                        <Card.Text className='d-flex align-items-center justify-content-center'>
                            <img alt="condition icon" src={condition.icon} className='w-75'/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Mobile>
        </>
    )
}

