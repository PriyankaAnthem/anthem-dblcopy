"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import AlbumItemTwo from "./AlbumItemTwo";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import Loader from "../Loader/Loader";

const AlbumGallery = ({ classOption }) => {
  const [loading, setLoading] = useState(true);
  const [visibleData, setVisibleData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
 const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_GalleryIMAGE_BASE_URL;


const allImages = [
  {image: `${CLOUD}/congrats_ogoaxl.webp`,title: "Positive Upwork feedback praising Hemant for delivering great work on time."},
  {image: `${CLOUD}/netupwork_un8iet.webp`,title: "Upwork client confirming that all assigned work was completed perfectly."},
  {image: `${CLOUD}/15hr_awxsrc.webp`,title: "Celebration of completing 15,000 successful working hours on Upwork."},
  {image: `${CLOUD}/ceo_vy6k3x.webp`,title: "Mr. Hemant Gupta, Chief Executive Officer, Anthem Infotech Pvt. Ltd."},
  { image: `${CLOUD}/clients_upsiw0.webp`, title: "Our Clients" },
  { image: `${CLOUD}/15thaug_nuv6ar.webp`, title: "15th August Celebration" },
  { image: `${CLOUD}/trip_tygdqy.webp`, title: "Team Trip" },
  { image: `${CLOUD}/snow_iytvs4.webp`, title: "Snow Trip Moments" },
  { image: `${CLOUD}/diwali-1_ydzphw.webp`, title: "Diwali Celebration 2025" },
  { image: `${CLOUD}/diwali-2_p1irwo.webp`, title: "Diwali Celebration 2025" },
  { image: `${CLOUD}/old-ofc_eiqp2o.webp`, title: "Old Office View" },
  { image: `${CLOUD}/oldofc-1_mf55z1.webp`, title: "Old Office Memories" },
  { image: `${CLOUD}/memories_uptfv6.webp`, title: "Team Memories" },
  { image: `${CLOUD}/techstack_kx5fli.webp`, title: "Our Tech Stack" },
  { image: `${CLOUD}/Services_ocoayu.webp`, title: "Our Services" },
  { image: `${CLOUD}/ai_wovtey.webp`, title: "AI Solutions" },
  { image: `${CLOUD}/dev-services_aq2ldz.webp`, title: "Development Services" },
  { image: `${CLOUD}/chatbot_lrx3st.webp`, title: "Chatbot Development" },
  { image: `${CLOUD}/meet_tpuytd.webp`, title: "Meeting Requirements" },
  { image: `${CLOUD}/need_gkfexm.webp`, title: "Client Requirements Discussion" },
];
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });

    setTimeout(() => {
      setVisibleData(allImages.slice(0, 6));
      setLoading(false);
    }, 1000);
  }, []);

  const loadMoreData = () => {
    if (visibleData.length >= allImages.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setVisibleData(prev => allImages.slice(0, prev.length + 3));
    }, 600);
  };

  const openModal = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % visibleData.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? visibleData.length - 1 : prev - 1
    );
  };
  useEffect(() => {
    const handleKey = (e) => {
      if (!modalOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalOpen]);

useEffect(()=>{
 console.log("here is the env var",CLOUD);
 console.log("Full image URL:", `${CLOUD}/v1765517753/trip_tygdqy.webp`);
},[]);
  
  return (
    <div className={`section section-padding-t90-b100 ${classOption}`}style={{paddingTop:"20px",paddingBottom:"20px"}}>
      <div className="container">
     
        {/* <div className="row align-items-center">
          <div className="col-lg-5">
            <SectionTitleTwo title="Our Gallery" />
          </div>
        </div> */}

        {loading ? (
          <Loader />
        ) : (
          <InfiniteScroll
            dataLength={visibleData.length}
            next={loadMoreData}
            hasMore={hasMore}
            loader={
              <div className="d-flex justify-content-center w-100">
                <BeatLoader color="#0a507a" />
              </div>
            }
            endMessage={
              <div className="d-flex justify-content-center w-100">
                <p className="text-primary fw-bold">
                  You have reached the end of this section.
                </p>
              </div>
            }
          >
            {/* 🔥 Masonry Container */}
            <div className="masonry">
              {visibleData.map((item, index) => (
                <div key={index} className="masonry-item" data-aos="fade-up">
                  <AlbumItemTwo
                    data={item}
                    onPreview={() => openModal(index)}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>

      {/* Modal Viewer */}
      {modalOpen && (
        <div
          className="gallery-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(4px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "20px",
              right: "30px",
              fontSize: "28px",
              color: "#fff",
              background: "transparent",
              border: "none",
            }}
          >
            ✕
          </button>

          <button
            onClick={prevImage}
            style={{
              position: "absolute",
              left: "20px",
              fontSize: "40px",
              color: "#fff",
              background: "transparent",
              border: "none",
            }}
          >
            ❮
          </button>

          <img
            src={visibleData[activeIndex].image}
            style={{
              maxWidth: "85%",
              maxHeight: "85%",
              borderRadius: "10px",
              objectFit: "contain",
            }}
          />

          <button
            onClick={nextImage}
            style={{
              position: "absolute",
              right: "20px",
              fontSize: "40px",
              color: "#fff",
              background: "transparent",
              border: "none",
            }}
          >
            ❯
          </button>
        </div>
      )}

      {/* Masonry CSS */}
      <style>{`
        .masonry {
          column-count: 3;
          column-gap: 20px;
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 20px;
        }
        @media (max-width: 992px) {
          .masonry {
            column-count: 2;
          }
        }
        @media (max-width: 576px) {
          .masonry {
            column-count: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AlbumGallery;
