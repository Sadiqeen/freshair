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
                <h2 className="h1 text-center mb-3">ตัวอย่างการติดตั้ง</h2>
            </Fade>

            <Image src="/Cafe_lrjf0t.webp" fluid className="w-100 mt-3"></Image>

            <Fade bottom>
                <h2 className="h1 mt-4 my-1">Cafe</h2>
            </Fade>

            <Image src="/Classroom_e0dn8p.webp" fluid className="w-100 mt-3"></Image>

            <Fade bottom>
                <h2 className="h1 text-right mt-4 my-1">Classroom</h2>
            </Fade>

            <Image src="/Fitness3_gglzv1.webp" fluid className="w-100 mt-3"></Image>

            <Fade bottom>
                <h2 className="h1 mt-4 my-1">Fitness</h2>
            </Fade>

            <Image src="/Office_owlopv.webp" fluid className="w-100 mt-3"></Image>

            <Fade bottom>
                <h2 className="h1 text-right mt-4 my-1">Office</h2>
            </Fade>

            <Image src="/review_product_nhf94f.webp" fluid className="w-100 mt-3"></Image>

            <Image src="/review_300_ycxikr.webp" fluid className="w-100 mt-3"></Image>

            <Fade bottom>
                <h2 className="h1 mt-4 my-1">คลินิกทันตกรรม โรงพยาบาลอู่ทอง</h2>

            </Fade>

            <Fade bottom>
                <h2 className="h1 text-center my-3">Fresh Air Solution</h2>
            </Fade>

            <Image src="/dark_kcrs5n.webp" fluid className="w-100 mt-3"></Image>
        </div>
    )
}