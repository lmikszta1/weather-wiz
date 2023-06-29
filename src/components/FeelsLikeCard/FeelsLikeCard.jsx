import Card from "react-bootstrap/Card"
export default function FeelsLikeCard({feelsLike}){
    return (
        <>
            <Card style={{ width: '8rem', height: '8rem'}} bg="primary" border="dark">
                <Card.Body>
                    <Card.Title className='fw-bold fs-5'>Feels Like</Card.Title>
                    <Card.Text className="fw-semibold fs-6">
                        <p>{feelsLike} °F</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}