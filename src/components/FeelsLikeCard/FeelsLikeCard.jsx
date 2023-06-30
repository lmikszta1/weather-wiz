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

export default function FeelsLikeCard({feelsLike}){
    return (
        <>
            <Desktop>
                <Card style={{ width: '8rem', height: '8rem'}} bg="primary" border="dark">
                    <Card.Body>
                        <Card.Title className='fw-bold fs-5'>Feels Like</Card.Title>
                        <Card.Text className="fw-semibold fs-6">
                            <p>{feelsLike} °F</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Desktop>
            <Mobile>
                <Card style={{ width: '100px', height: '100px'}} bg="info-subtle" border="dark">
                    <Card.Body>
                        <Card.Title className='fw-bold fs-6'>Feels Like</Card.Title>
                        <Card.Text className="fw-semibold fs-8 mt-3">
                            <p>{feelsLike} °F</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Mobile>
        </>
    )
}