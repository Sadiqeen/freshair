import {
    Row,
    Col,
    Image
} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

export default function () {
    return (
        <div className="mt-5">

            <h2 className="h2 text-center mb-4">เติมอากาศสะอาดผ่าน Pre Filter และ HEPA Filter</h2>

            <p>・ HEPA FILTER สามารถกรองอนุภาคขนาดเล็กได้ถึง 0.3 ไมครอน ที่ประสิทธิภาพ 99.99%</p>
            <p>・ สามารถป้องกัน PM 2.5 และมลพิษจากภายนอกได้</p>
            <p>・ สามารถป้องกันการปนเปื้อนของเชื้อไวรัส โควิด-19 จากภายนอกได้</p>

            <Image src="/parimanrom_nzxpsu.webp" fluid className="w-100 mt-3"></Image>
            <p className="text-center my-2">4.5 ACH ที่ 16 ตร.ม. - 1 ACH ที่ 64 ตร.ม. ที่ความสูงเพดาน 2.7 ม.</p>

        </div>
    )
}