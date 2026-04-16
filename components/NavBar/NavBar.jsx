"use client";

import React from 'react';
import Link from 'next/link';

const NavBar = ({ showServices, showIndustries }) => {
  return (
    <nav className="site-main-menu">
      <ul>
        <li>
          <Link href="/"><span className="menu-text">Home</span></Link>
        </li>

        <li className="has-children">
          <Link href="/services"><span className="menu-text">Services</span></Link>
          <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
          <ul className="sub-menu">
            <li><Link href="/services/custom-software"><span className="menu-text">Custom Software</span></Link></li>
            <li><Link href="/services/seo"><span className="menu-text">Digital Marketing (SEO)</span></Link></li>
            <li><Link href="/services/mobile-app"><span className="menu-text">Mobile & App</span></Link></li>
            <li><Link href="/services/software-maintenance"><span className="menu-text">Software Maintenance</span></Link></li>
            <li><Link href="/services/ui-ux"><span className="menu-text">UI/UX</span></Link></li>
            <li><Link href="/services/website-design"><span className="menu-text">Website Design</span></Link></li>
          </ul>
        </li>

        <li className="has-children">
          <Link href="/industries"><span className="menu-text">Industries</span></Link>
          <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
          <ul className="sub-menu">
            <li><Link href="/industries?Industrytype=Business Promotions"><span className="menu-text">Business Promotions</span></Link></li>
            <li><Link href="/industries?Industrytype=Construction"><span className="menu-text">Construction</span></Link></li>
            <li><Link href="/industries?Industrytype=Financial Advisory"><span className="menu-text">Financial Advisory</span></Link></li>
            <li><Link href="/industries?Industrytype=Food Ordering"><span className="menu-text">Food Ordering</span></Link></li>
            <li><Link href="/industries?Industrytype=Health & Medicines"><span className="menu-text">Health & Medicines</span></Link></li>
            <li><Link href="/industries?Industrytype=HOA Automation"><span className="menu-text">HOA Automation</span></Link></li>
            <li><Link href="/industries?Industrytype=Information Technology"><span className="menu-text">Information Technology</span></Link></li>
            <li><Link href="/industries?Industrytype=Logistics"><span className="menu-text">Logistics</span></Link></li>
            <li><Link href="/industries?Industrytype=Tourism"><span className="menu-text">Tourism</span></Link></li>
            <li><Link href="/industries?Industrytype=Travel"><span className="menu-text">Travel</span></Link></li>
          </ul>
        </li>

        <li>
          <Link href="/career"><span className="menu-text">Career</span></Link>
        </li>
        <li>
          <Link href="/our-work"><span className="menu-text">Portfolio</span></Link>
        </li>
        <li>
          <Link href="/brochure/mobile/index.html"><span className="menu-text">Brochure</span></Link>
        </li>
        <li>
          <Link href="/about"><span className="menu-text">About Us</span></Link>
        </li>
        <li>
          <Link href="/contact"><span className="menu-text">Contact Us</span></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
