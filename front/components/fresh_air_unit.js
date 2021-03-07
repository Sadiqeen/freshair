import {
    Row,
    Col,
    Image
} from "react-bootstrap";
import ItemList from './item_list'
import Fade from 'react-reveal/Fade';

export default function () {
    return (
        <div className="mt-5">
            <Fade bottom>
                <h2 className="h1">FRESH AIR UNIT</h2>
            </Fade>

            <Image src="/fresh_air_preview_wva0nk.webp" fluid className="w-100"></Image>

            <Fade bottom>
                <h3 className="mt-5">Fresh Air Unit เติมอากาศสะอาดในบ้านเพื่อคนที่คุณรัก </h3>
            </Fade>

            <div className="bottom-line mt-3"></div>

            <Fade bottom>

                <div className="mt-3 d-flex align-item-center">
                    <Image src="/สร้างห้องความดันบวก_ad8mmt.webp" fluid width="35" className="mr-4"></Image>
                    <p>สร้างห้องความดันบวก</p>
                </div>

                <div className="mt-3 d-flex align-item-center">
                    <Image src="/เติมอากาศสะอาดผ่าน_HEPA_FILTER_mpudhq.webp" fluid width="35" className="mr-4"></Image>
                    <p>เติมอากาศสะอาดผ่าน HEPA FILTER สามารถกรองอนุภาคขนาดเล็กได้ถึง 0.3 ไมครอน ที่ประสิทธิภาพ 99.99%</p>
                </div>

                <div className="mt-3 d-flex align-item-center">
                    <Image src="/ป้องกัน_PM_2.5_และมลพิษจากภายนอก_dsjogq.webp" fluid width="35" className="mr-4"></Image>
                    <p>ป้องกัน PM 2.5 และมลพิษจากภายนอก</p>
                </div>

                <div className="mt-3 d-flex align-item-center">
                    <Image src="/ปริมาณลมสูงสุด_210_CMH_h1sd16.webp" fluid width="35" className="mr-4"></Image>
                    <p>ปริมาณลมสูงสุด 210 CMH</p>
                </div>
            </Fade>

            <Image src="/fresh_air_system_ur6e0r.webp" fluid className="w-100 mt-5"></Image>

        </div>
    )
}