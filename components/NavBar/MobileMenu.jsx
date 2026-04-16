import React,{useEffect} from 'react';
import PropTypes from "prop-types"
import Logo from '../../components/logo/Logo';
import MobileNavMenu from './sub-component/MobileNavMenu';

const MobileMenu = ({ show, onClose }) => {
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 992 && show) {
                onClose(); // Auto-hide mobile menu
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [show, onClose]);
    return (
        <div id="site-main-mobile-menu" className={`site-main-mobile-menu ${show ? "active" : ""}`}>
            <div className="site-main-mobile-menu-inner">
                <div className="mobile-menu-header">
                    <div className="mobile-menu-logo">
                        <Logo image={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + "/images/logo/logo.webp"} alt="anthem infotech logo" />
                    </div>
                    <div className="mobile-menu-close">
                        <button className="toggle" onClick={onClose} aria-label="Close menu">
                            <i className="icon-top"></i>
                            <i className="icon-bottom"></i>
                        </button>
                    </div>
                </div>
                <div className="mobile-menu-content">
                    <MobileNavMenu onClose={onClose}  />
                </div>
            </div>
        </div>
    )
}

MobileMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func
}

export default MobileMenu;
