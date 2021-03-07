import Head from "next/head";
import {
    Navbar,
    Image
} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

// Component
import ArSection from '../components/ar_section'
import Property from '../components/property'
import FreshAirUnit from '../components/fresh_air_unit'
import Contact from '../components/contact'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar bg="white" expand="lg" className="my-0 py-0 nav-padding">
                    <Navbar.Brand href="#home">
                        <Image src="https://res.cloudinary.com/callmebunbun/f_auto,c_limit,w_256,q_auto/tectony/Logo_air_ql74ln.psd" fluid width="80" />
                    </Navbar.Brand>
                </Navbar>

                <div className="ar-container mx-auto">
                    <ArSection></ArSection>

                    <Fade bottom>
                        <h1 className="text-center">
                            <span className="h2 font-weight-bold">HEPA CIRCULATION UNIT: HCU</span><br/>
                            <span className="h4">เครื่องกรองอากาศควบคุมเชื้อ</span><br/>
                            <span className="h6">สะอาดปลอดภัย หายใจได้เต็มปอด</span></h1>
                        <div className="bottom-line mt-3 mx-auto"></div>
                    </Fade>

                    <Image src="/huc_preview_yuyfzk.webp" className="mt-4" fluid />

                    <Property></Property>
                    
                    <FreshAirUnit></FreshAirUnit>

                    <Contact></Contact>
                </div>
            </main>
        </div>
    );
}
