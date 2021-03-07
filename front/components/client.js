import {
    Row,
    Col,
    Image
} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

export default function () {
    return (
        <div className="mt-5">
            <Fade bottom>
                <h2 className="h1 text-center mt-5">Our Clients</h2>
            </Fade>

            <div className="text-center">
                <Image src="/2png_omx0qp.webp" fluid className="mt-3"></Image>
            </div>
        </div>
    )
}