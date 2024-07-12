import './compcss.css';
import logo from '/src/assets/logo.jpg'; 
import { Link } from 'react-router-dom';


function Footer(){

    return(
        <>
        <footer className='the-articles-footer-layout'>
                <div className='footer-column'>
                    <Link to="/" >
                    <img src={logo} alt="Logo" className='footer-logo-image'/>
                    </Link>
                </div>
                <div className='footer-column'>
                    <h4>ABOUT</h4>
                    <br/>
                    
                        <li>Know More</li>
                        <li>Get Info</li>
                        
                    
                </div>
                <div className='footer-column'>
                    <h4>SUPPORT</h4>
                    <br/>
                    
                        <li>...</li>
                        <li><a href="mailto:anuragkundu0926@gmail.com">Contact</a></li>
                        <li>...</li>
                    
                </div>
                <div className='footer-column'>
                   <h4>LEGAL</h4>
                   <br/>
                    
                        <li>Terms</li>
                        <li>Conditions</li>
                        <li>Policy</li>
                    
                </div>
            </footer>
            © 2024 The-Articles (created by - ANURAG KUNDU)
        </>
    )
}


export default Footer;
