"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Loader/Loader";
import { getClients } from "../../services/clientsservice";
import { getToken } from "../../services/tokenservice";

const ClientGallery = ({ classOption }) => {
  const [token, setToken] = useState(null);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const BASE_URL =
    process.env.NEXT_PUBLIC_URL_CONTENT + "/ClientImages";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    getToken().then(res => setToken(res.token));
  }, []);

  useEffect(() => {
    if (!token) return;

    const fetchClients = async () => {
      const data = await getClients();

      const formatted = data.map(c => ({
        image: `${BASE_URL}/${c.logo1}`,
        name: c.clientName,
        website: c.websiteAddress,
      }));

      setClients(formatted);   // ✅ ALL DATA
      setLoading(false);
    };

    fetchClients();
  }, [token]);

  if (loading) return <Loader />;

  return (
 
    <section
  className={`section ${classOption} custom-background-2`}
  style={{ paddingBottom: "10px", paddingTop: "30px" }}
>
  <div className="container">
    <div className="masonry">
      {clients.map((item, index) => (
        <div key={index} className="masonry-item" data-aos="fade-up">
          <div className="client-card">
            <img src={item.image} alt={item.name} loading="lazy" />

            {/* Hover content */}
            <div className="hover-content">
              <h6>{item.name}</h6>
              {item.website && (
                <a
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-btn"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* 🎨 Styles */}
 <style>{`
  

  /* ✅ GRID LAYOUT: auto-fit based on screen width */
  .masonry {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  .masonry-item {
    margin-bottom: 20px;
  }

  .client-card {
    position: relative;
    background: #fff;
    padding: 20px;
    border-radius: 14px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }

  .client-card img {
    width: 100%;
    height:80px;
    object-fit: contain;
  }

  .hover-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 14px;
    background: #ffffff;
    text-align: center;
    transform: translateY(100%);
    transition: 0.3s ease;
    border-top: 1px solid #eee;
  }

  .client-card:hover .hover-content {
    transform: translateY(0);
  }

  .hover-content h6 {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 600;
    color: #0a507a;
  }

  .visit-btn {
    font-size: 13px;
    padding: 6px 14px;
    border-radius: 20px;
    background: #0a507a;
    color: #fff;
    text-decoration: none;
    display: inline-block;
  }

  .visit-btn:hover {
    background: #083f60;
  }

  /* ADJUST GRID AT BREAKPOINTS */
  @media (max-width: 992px) {
    .masonry {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
  }

  @media (max-width: 768px) {
    .masonry {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }

  @media (max-width: 576px) {
    .masonry {
      grid-template-columns: 1fr;
    }
  }
`}</style>

</section>

  );
};

export default ClientGallery;
