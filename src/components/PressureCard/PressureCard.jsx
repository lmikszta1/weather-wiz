import Card from "react-bootstrap/Card"
export default function PressureCard({pressure}){
    return (
        <>
            <Card style={{ width: '8rem', height: '8rem'}} bg="primary" border="dark">
                <Card.Body>
                    <Card.Title className='fw-bold fs-5'>Pressure</Card.Title>
                    <Card.Text className="fw-semibold fs-6">
                        <p className="mt-4">{pressure}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

