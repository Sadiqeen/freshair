import {
    Row,
    Col,
    Image
} from "react-bootstrap";

export default function(props) {
    return (
        <Row className="mt-3">
            <Col md="2" xs="3">
                <Image className="px-md-3" fluid src={props.imageSrc} />
            </Col>
            <Col md="10" xs="9">
                <span className="font-weight-bold">{props.title}</span><br />
                <span>{props.desc}</span>
            </Col>
        </Row>
    );
}
