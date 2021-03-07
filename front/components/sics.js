import {
    Image
} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

export default function () {
    return (
        <div className="mt-5">

            <Fade bottom>
                <h2 className="h1 text-center mb-3">Smart Infection Control System</h2>
            </Fade>

            <Image src="/Image_from_iOS_1_1_1_runihv.webp" fluid className="w-100 mt-3"></Image>

            <h2 className="my-4">HEPA Circulation Unit</h2>

            <p className="font-smaller">&emsp;&emsp;ระบบสร้างอากาศบริสุทธิ์สำหรับทันตกรรม การออกแบบสอดคล้องกับคำแนะนำตามมาตรฐานกองแบบแผน กระทรวงสาธารณสุข ตามเอกสารเลขที่ ก.45/เม.ย./63 โดยมุ่งเน้นไปที่ส่วนสำคัญ 2 ส่วนหลักคือ</p>
            <p className="font-smaller">&emsp;&emsp;1. เติมอากาศบริสุทธิ์จากภายนอก ซึ่งผ่านการกรองด้วย <span className="text-primary">HEPA Filter class H13</span> เข้ามาภายในห้อง <span className="text-primary">3 ACH</span></p>
            <p className="font-smaller">&emsp;&emsp;2. หมุนเวียนอากาศภายในห้องให้บริสุทธิ์ โดยกรองผ่าน <span className="text-primary">HEPA Filter class H14 : EN1822 (2009)</span> เมื่อขณะทำงาน ระบบในห้องสามารถสร้างอากาศสะอาดอยู่ที่ <span className="text-primary">21 ACH</span> และเมื่อเสร็จงาน การทำงานช่วงพักห้องระบบสามารถสร้างอากาศสะอาดสูงสุดที่ <span className="text-primary">50 ACH</span> ด้วยการออกแบบระบบนี้ จึงสามารถทำความสะอาดในห้องให้สะอาด <span className="text-primary">99.9%</span> ภายในระยะเวลา <span className="text-primary">8 นาที</span> ซึ่งลดระยะเวลาการพักห้อง และสามารถรับเคสต่อไปได้เร็วขึ้น</p>
        
            <p className="border-left border-primary border-3px pl-3 my-4">8 MINS FOR REMOVAL WITH 99.9% EFFICIENCY<br/>(50 ACH @ standard Room size 3(w)x4(l)x2.8(h))</p>
        </div>
    )
}