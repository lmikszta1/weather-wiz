import Card from 'react-bootstrap/Card'

export default function ConditionCard({condition}){
    return (
        <>
            <Card style={{ width: '8rem', height: '8rem'}} bg="primary" border="dark">
                <Card.Body>
                    <Card.Title className='fw-bold fs-5'>{condition.text}</Card.Title>
                    <Card.Text>
                        <img alt="condition icon" src={condition.icon}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

