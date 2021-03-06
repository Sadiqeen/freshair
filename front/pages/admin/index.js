import {
    Container,
    Table
} from "react-bootstrap";
import { useEffect, useState } from 'react'
import axios from '../../axios.config'

export default function Contact() {
    const [contact, setContact] = useState([]);

    useEffect(async () => {
        const res = await axios.get('/contact');
        let data = []
        for (let index = 0; index < res.data.length; index++) {
            data[index] = res.data[index]
        }
        setContact(data)
    }, [])

    return !contact ? (<div>Loading</div>) : (
        <Container className="my-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ชื่อ</th>
                        <th>อีเมล</th>
                        <th>หัวข้อ</th>
                    </tr>
                </thead>
                <tbody>
                    {contact.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.title}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}