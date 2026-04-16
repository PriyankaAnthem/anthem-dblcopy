"use client";

import Link from "next/link";
import React from "react";

const FooterLinkItem = ({ data }) => {
  if (!data) return null; // safety check

  return (
    

<><div className="footer-widget">
            <h4 className="footer-widget-title">{data.title}</h4>
            <div className="footer-widget-content">
                <ul>
                    {data.list.map((single,key) =>(
                        <li key={key}>
                            <Link href={single.url}>{single.text} {single?.badge && <span className="ft-badge">{single.badge}</span>} </Link>
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
        <style jsx>{`
 

  .footer-widget-content ul li:global(a){
    color: #34cccf !important;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-widget-content ul li:global(a):hover {
    color:#34cccf;
  }

  .ft-badge {
    background-color:#34cccf;
    color: #ffffff;
    
  }
`}</style>

        </>
     
  );
};

export default FooterLinkItem;
