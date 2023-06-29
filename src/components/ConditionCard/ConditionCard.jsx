import Card from 'react-bootstrap/Card'
import "./ConditionCard.css"

export default function ConditionCard({condition}){
    return (
        <>
            <Card style={{ width: '8rem', height: '8rem'}} bg="primary" border="dark">
                <Card.Body>
                    <Card.Title className={condition.text.includes('thunder') ? 'fw-bold fs-8' : 'fw-bold fs-6'}>{condition.text}</Card.Title>
                    <Card.Text>
                        <img alt="condition icon" src={condition.icon}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

