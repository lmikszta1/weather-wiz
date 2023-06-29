import Card from "react-bootstrap/Card"
export default function HumidityCard({humidity}){
    return (
        <>
            <Card style={{ width: '8rem', height: '8rem'}} bg="primary" border="dark">
                <Card.Body>
                    <Card.Title className='fw-bold fs-5'>Humidity</Card.Title>
                    <Card.Text className="fw-semibold fs-6">
                        <p className="mt-4">{humidity} %</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

