import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <React.StrictMode>

            <footer id="footer" className="footer bg-dark">
                <div className="footer-body">
                    © 2020 Copyright: eSims. Created by <div className="text-highlight">Valentin Stamate</div>
                </div>
            </footer>

        </React.StrictMode>
    );
}

export default Footer;
