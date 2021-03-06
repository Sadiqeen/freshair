import {
    Row,
    Col,
    Image
} from "react-bootstrap";
import Property from '../components/property_item_list'
import Fade from 'react-reveal/Fade';

export default function () {
    return (
        <Row className="mt-5">
            <Col lg="4" className="d-flex">
                <Image src="/hcu_profduct_scscko.webp" className="mt-4 max-width-200 m-auto" />
            </Col>
            <Col lg="8" className="mt-5 mt-lg-0">
                <Fade bottom>
                    <h2>เครื่องกรองอากาศควบคุมเชื้อ</h2>
                    <div className="bottom-line mt-3"></div>

                    <Property
                        imageSrc="/ป้องกัน_COVID-19_หมุนเวียนอากาศสะอาด_go7ux7.webp"
                        title="หมุนเวียนอากาศสะอาดผ่าน HEPA FILTER"
                        desc="ประสิทธิภาพการกรอง 99.999% on 0.3 micron"
                    ></Property>

                    <Property
                        imageSrc="/ป้องกัน_COVID-19_หมุนเวียนอากาศสะอาด_go7ux7.webp"
                        title="ติดตั้ง HEPA FILTER Class H14 EN 1822:2009"
                        desc="ผ่านการทดสอบ Installation Leak Test (ISO14644-3(2005))"
                    ></Property>

                    <Property
                        imageSrc="/ป้องกัน_COVID-19_หมุนเวียนอากาศสะอาด_go7ux7.webp"
                        title="ออกแบบสอดคล้องตามมาตรฐาน"
                        desc="การออกแบบสอดคล้องตามมาตรฐาน กองแบบแผนกระทรวงสาธารณสุข เอกสารเลขที่ ก.45/เม.ย./63"
                    ></Property>

                    <Property
                        imageSrc="/ป้องกัน_COVID-19_หมุนเวียนอากาศสะอาด_go7ux7.webp"
                        title="ปริมาณลมสูง 1,000 CFM"
                        desc="อัตราหมุนเวียนอากาศ 50 ACH (ห้องขนาดมาตรฐาน 3m x 4m x 2.8m)"
                    ></Property>

                    <Property
                        imageSrc="/ป้องกัน_COVID-19_หมุนเวียนอากาศสะอาด_go7ux7.webp"
                        title="เสียงเงียบ"
                        desc="เสียงเบา ไม่เกิน 10 dB (เทียบกับขณะตอนปิดเครื่อง)"
                    ></Property>

                    <Property
                        imageSrc="/ป้องกัน_COVID-19_หมุนเวียนอากาศสะอาด_go7ux7.webp"
                        title="กรองฝุ่น PM 2.5"
                        desc="ป้องกันวัณโรค แบคทีเรีย เชื้อไวรัส Covid-19 "
                    ></Property>
                </Fade>
            </Col>
        </Row>

    );
}