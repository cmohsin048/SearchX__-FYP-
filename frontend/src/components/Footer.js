import React from 'react'
import FooterLogo from '../footer_logo.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-info'>
                <img src={FooterLogo} alt='logo' />
                <span className='info'>
                    <p>Copyright: © 2023 Made in <span style={{color:'#f57024',fontWeight:600}}>Pakistan</span>. All Rights Reserved.</p>
                </span>
            </div>
            <div className='footer-company'>
             <p>Company</p>
             <ul className='company-list'>
                <li>crawler </li>
                <li>hunt</li>
                <li>contact</li>
             </ul>
             

            </div>
        </div>
    )
}

export default Footer