import {
    Image
} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

export default function () {
    return (
        <div className="mt-5">
            <Fade bottom>
                <h2 className="h1 text-center mt-5">Our Partner</h2>
            </Fade>

            <div className="text-center">
                <Image src="/dark2_xvo1ep.webp" fluid className="mt-3" width="250"></Image>
            </div>
        </div>
    )
}