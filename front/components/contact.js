import { useState,useRef } from 'react';
import {
    Form,
    Col,
    Button,
} from "react-bootstrap";
import axios from '../axios.config'
import swal from 'sweetalert';

function contact_layout() {
    const formRef = useRef(null);

    const [form, setForm] = useState({
        name : '',
        email : '',
        title : '',
        body : '',
    });

    const handleFormChange = (e) => {
        let local_form = {...form}
        local_form[e.target.name] = e.target.value
        setForm(local_form)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('/contact', form);

        if (res.data.status === "success") {
            swal("สำเร็จ!", "เราได้รับข้อมูลของคุณแล้ว", "success");
            setForm({
                name : '',
                email : '',
                title : '',
                body : '',
            });
            formRef.current.reset();
        } else {
            swal("Opss!", "มีบางอย่างผิดพลาด", "error");
        }
    }

    return (
        <Form className="mt-5" ref={formRef} onSubmit={handleFormSubmit}>

            <h2 className="h1 text-center">ติดต่อเรา</h2>

            <Form.Row>
                <Form.Group as={Col} md="6">
                    <Form.Label>ชื่อ</Form.Label>
                    <Form.Control type="text" name="name" value={form.name} onInput={handleFormChange} required/>
                </Form.Group>

                <Form.Group as={Col} md="6">
                    <Form.Label>อีเมล</Form.Label>
                    <Form.Control type="email" name="email" value={form.email} onInput={handleFormChange} required/>
                </Form.Group>
            </Form.Row>

            <Form.Group>
                <Form.Label>หัวข้อ</Form.Label>
                <Form.Control type="text" name="title" value={form.title} onInput={handleFormChange} required/>
            </Form.Group>

            <Form.Group>
                <Form.Label>รายละเอียด</Form.Label>
                <Form.Control as="textarea" name="body" rows={3} value={form.body} onInput={handleFormChange} required/>
            </Form.Group>

            <div className="d-flex">
                <Button type="submit" variant="success" className="mx-auto">ส่งข้อมูล</Button>
            </div>
        </Form>
    )
}

export default contact_layout;