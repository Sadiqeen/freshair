import { useState } from 'react';
import {
    Form,
    Col,
    Button,
} from "react-bootstrap";
import axios from '../axios.config'

function contact_layout() {

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
    }

    return (
        <Form className="mt-5" onSubmit={handleFormSubmit}>

            <h2 className="h1 text-center">ติดต่อเรา</h2>

            <Form.Row>
                <Form.Group as={Col} md="6">
                    <Form.Label>ชื่อ</Form.Label>
                    <Form.Control type="text" name="name" value={form.name} onInput={handleFormChange} required/>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="formGridEmail">
                    <Form.Label>อีเมล</Form.Label>
                    <Form.Control type="email" name="email" value={form.email} onInput={handleFormChange} required/>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridPassword">
                <Form.Label>หัวข้อ</Form.Label>
                <Form.Control type="text" name="title" value={form.title} onInput={handleFormChange} required/>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
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