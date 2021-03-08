import {
    Container,
    Table,
    Navbar,
    Image
} from "react-bootstrap";
import Head from "next/head";
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from '../../axios.config'

export default function Contact() {
    const router = useRouter()
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
        <>
            <Head>
                <title>Contact list</title>
            </Head>

            <Navbar bg="white" expand="lg" className="my-0 py-0 nav-padding">
                <Navbar.Brand href="#" onClick={() => router.push('/')}>
                    <Image src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_256,q_auto/tectony/Logo_air_ql74ln.psd" fluid width="80" />
                </Navbar.Brand>
            </Navbar>

            <Container className="my-5">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ชื่อ</th>
                            <th>อีเมล</th>
                            <th>หัวข้อ</th>
                            <th>ข้อความ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contact.length > 0 ?
                            contact.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            ))
                            : <tr>
                                <td colSpan="4" className="text-center">ไม่มีข้อมูลการติดต่อเข้ามา</td>
                            </tr>}

                    </tbody>
                </Table>
            </Container>
        </>
    )
}