
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const Intro = ({ data }) => {
  // Extract the image name from the path
  const imageName = data.backgroundImage;
  const backgroundImage = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}${imageName.startsWith('/') ? imageName : '/' + imageName}`;


  return (
    <div className="intro-section overlay section">
      <style>
        {`
          .intro-section {
            position: relative;
            z-index: 9;
            display: flex;
            align-items: center;
            height: 100vh;
            padding: 50px 0;
          }
          .intro-section .container {
            z-index: 9;
          }
          .overlay::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to right,
              rgba(3, 15, 39, 0.7),
              rgba(3, 15, 39, 0)
            );
            z-index: 0;
          }
          .hero-bg-img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }

           /* Mobile only */
  @media (max-width: 768px) {
    .intro-section {
    padding: 60px 0 20px;  /* reduce top & bottom padding */
      height: auto;      /* optional: reduces extra space */
      min-height: 70vh;  /* keeps hero visible */
    }
  }
        `}
      </style>

      <Image
        src={backgroundImage}
        alt="Hero Section"
        className="hero-bg-img"
        fill
        style={{ objectFit: "cover", zIndex: -1 }}
        priority
      />

      <div className="container">
        <div className="row row-cols-lg-1 row-cols-1">
          <div className="col align-self-center">
            <div className="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8">
              <h1
                className="title"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <div className="desc">
                <p>{data.desc}</p>
              </div>
              <Link href="/request-a-quote" className="btn btn-bottom" data-hover="Get Started">
                Get Started
              </Link>

              <Link href="/services" className="btn btn-bottom" data-hover="Learn More">
                Learn More
                <span className="sr-only"> about our services</span>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Intro.propTypes = {
  data: PropTypes.object,
};

export default Intro;
