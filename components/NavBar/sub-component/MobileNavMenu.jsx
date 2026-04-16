import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import {
    getClosest,
    getSiblings,
    slideToggle,
    slideUp,
} from '../../../utils';

const MobileNavMenu = ({ onClose }) => {


 const handleLinkClick = () => {
    if (onClose) onClose(); 
  };

    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains('menu-toggle') ||
            target.classList.contains('menu-toggle')
        ) {
            const element = target.classList.contains('icon') ? parentEl : target;
            const parent = getClosest(element, 'li');
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === 'UL') {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === 'UL') {
                    slideToggle(child, 1000);
                }
            });
        }
    };

    return (
        <nav className="site-mobile-menu">
            <ul>
                <li>
                    <Link href="/"><span className="menu-text" onClick={handleLinkClick}>Home</span></Link>
                </li>
                <li className="has-children">
                    <Link href="/services"><span className="menu-text" onClick={handleLinkClick}>Services</span></Link>
                    <span className="menu-toggle" onClick={onClickHandler}>
                        <i className="icon fa fa-angle-down"></i>
                    </span>
                    <ul className="sub-menu">
                        <li><Link href="/services/Custom-Software"><span className="menu-text" onClick={handleLinkClick}>Custom Software</span></Link></li>
                        <li><Link href="/services/Web-Mobile-Apps"><span className="menu-text"  onClick={handleLinkClick}>Web & Mobile Apps</span></Link></li>
                        <li><Link href="/services/AI-Powered-Solutions"><span className="menu-text"  onClick={handleLinkClick}>AI-Powered Solutions</span></Link></li>
                        <li><Link href="/services/Marketing-Automation"><span className="menu-text"  onClick={handleLinkClick}>Marketing Automation</span></Link></li>
                        <li><Link href="/services/MVP-Development"><span className="menu-text"  onClick={handleLinkClick}>MVP Development</span></Link></li>
                        <li><Link href="/services/Enterprise-Software"><span className="menu-text"  onClick={handleLinkClick}>Enterprise Software</span></Link></li>
                        <li><Link href="/services/Data-Analysis-ETL"><span className="menu-text"  onClick={handleLinkClick}>Data Analysis & ETL</span></Link></li>
                        <li><Link href="/services/UI-UX-Design"><span className="menu-text"  onClick={handleLinkClick}>UI/UX Design</span></Link></li>
                        <li><Link href="/services/On-Demand-Dedicated-Talent"><span className="menu-text"  onClick={handleLinkClick}>On-Demand Dedicated Talent</span></Link></li>
                    </ul>
                </li>
                <li className="has-children">
                    <Link href="/Home/Industries"><span className="menu-text"  onClick={handleLinkClick}>Industries</span></Link>
                    <span className="menu-toggle" onClick={onClickHandler}>
                        <i className="icon fa fa-angle-down"></i>
                    </span>
                    <ul className="sub-menu">
                        <li><Link href="/Home/Industries?Industrytype=Workforce-Compliance-Solutions"><span className="menu-text"  onClick={handleLinkClick}>Workforce Compliance Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Publishing-Rights-Management"><span className="menu-text"  onClick={handleLinkClick}>Publishing Rights Management</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Financial-Audit-Compliance"><span className="menu-text"  onClick={handleLinkClick}>Financial Audit Compliance</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Food-Ordering-Solutions"><span className="menu-text"  onClick={handleLinkClick}>Food Ordering Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Information-Technology-Solutions"><span className="menu-text"  onClick={handleLinkClick}>Information Technology Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Business-Promotion-Solutions"><span className="menu-text"  onClick={handleLinkClick}>Business Promotion Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=HOA-Automation-Solutions"><span className="menu-text"  onClick={handleLinkClick}>HOA Automation Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Logistics-and-Supply-Chain-Management"><span className="menu-text"  onClick={handleLinkClick}>Logistics & Supply Chain Management</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Construction-Industry-Software"><span className="menu-text"  onClick={handleLinkClick}>Construction Industry Software</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Healthcare-and-Medical-Solutions"><span className="menu-text"  onClick={handleLinkClick}>Healthcare & Medical Solutions</span></Link></li>
                        <li><Link href="/Home/Industries?Industrytype=Tourism-and-Travel-Solutions"><span className="menu-text"  onClick={handleLinkClick}>Tourism & Travel Solutions</span></Link></li>
                    </ul>
                </li>
                <li><Link href="/careers"><span className="menu-text" onClick={handleLinkClick}>Career</span></Link></li>
                <li >
                    <Link href="/OurWork"><span className="menu-text" onClick={handleLinkClick}>Portfolio</span></Link>
                  
                </li>
                <li className="has-children">
                    <Link href="/about-us"><span className="menu-text"  onClick={handleLinkClick}>About Us</span></Link>
                    <span className="menu-toggle" onClick={onClickHandler}><i className="icon fa fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><Link href="/faqs"><span className="menu-text"  onClick={handleLinkClick}>FAQs</span></Link></li>
                        <li><Link href="/our-clients"><span className="menu-text" onClick={handleLinkClick}>Our Clients</span></Link></li>
                        <li><Link href="/testimonials"><span className="menu-text" onClick={handleLinkClick}>Testimonials</span></Link></li>
                         <li><Link href="/gallery"><span className="menu-text" onClick={handleLinkClick}>Gallery</span></Link></li>
                    </ul>
                </li>
                   <li><Link href="/request-a-quote"><span className="menu-text" onClick={handleLinkClick}>Get a Quote</span></Link></li>
                <li><Link href="/contact-us"><span className="menu-text" onClick={handleLinkClick}>Contact Us</span></Link></li>
            </ul>
        </nav>
    );
};

export default MobileNavMenu;
