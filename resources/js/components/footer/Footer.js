import './Footer.css'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import logo from './logo.jpg'

function Footer() {
    return (
        <section className="footer">

            <div className="box-container">
                <div className="box">
                    <h3><i>About Us</i></h3>
                    <p>Our website offers you shfrn Hotel and our services, the most important of which is online
                        reservation.</p>
                </div>

                <div class="box">
                    <h3><i>quick links</i></h3>
                    <HashLink smooth to="#cover">home </HashLink>
                    <HashLink smooth to="#cover">Services </HashLink>
                    <HashLink smooth to="#activity">Activities </HashLink>
                    <HashLink smooth to="#our_prices">Prices </HashLink>
                    <HashLink smooth to="#contact_us">Contact </HashLink>
                </div>
                <div class="box">
                    <h3><i>My App</i></h3>
                    <div className="app">
                        <img className='app_logo' src={logo} />
                        <label>For Parentes</label>
                    </div>
                    <div className="app">
                        <img className='app_logo' src={logo} />
                        <label>For Teacher</label>
                    </div>
                </div>

                <div className="box">
                    <h3><i>Support</i></h3>
                    <HashLink smooth to="#Location"><i className="fas fa-map-marker-alt"></i> Damascus in syria</HashLink>
                    <a href="#"><i className="fas fa-phone"></i>
                        +9630949376648</a>
                    <a href="#"><i className="fas fa-envelope"></i>kg_ms@gmail.com</a>
                </div>


            </div>

        </section>
    )
}

export default Footer;
