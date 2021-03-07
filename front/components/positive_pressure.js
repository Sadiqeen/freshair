import {
    Row,
    Col,
    Image
} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

export default function () {
    return (
        <div className="mt-4">

            <Fade bottom>
                <h2 className="h2 text-center mb-3">ปกป้องห้องสำคัญด้วย Positive Pressure</h2>
            </Fade>

            <Image src="/positive_pressure2_oal38x.webp" fluid className="w-100 mt-3"></Image>
            <p className="my-4 font-smaller"><span className="font-weight-bold">หลักการ Positive Pressure</span> คือ การทำให้ภายในห้องมีความดันอากาศมากกว่าภายนอกห้อง ความดันในห้องที่มากกว่าจะป้องกันการรั่วไหลของของอากาศภายนอกผ่านรอยรั่วของห้อง เช่น ร่องประตู,ขอบหน้าต่าง,ขอบฝ้าเพดาน และรอยร้าวของผนัง เป็นต้น</p>

        </div>
    )
}