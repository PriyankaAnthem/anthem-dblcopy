import PropTypes from "prop-types";
import React from 'react';
import { Link } from "react-router-dom";

const BlogItem = ({ data }) => {
    // function stripHtml(html) {
    //     const tempDiv = document.createElement("div");
    //     tempDiv.innerHTML = html;
    //     return tempDiv.textContent || tempDiv.innerText || "";
    // }

    // function sliceAfterWordComplete(text, maxLength) {
    //     if (text.length <= maxLength) {
    //         return text;
    //     }

    //     // Find the last space within the slicing limit
    //     const lastSpaceIndex = text.lastIndexOf(" ", maxLength);

    //     // If there's no space, slice at maxLength
    //     if (lastSpaceIndex === -1) {
    //         return text.slice(0, maxLength) + "...";
    //     }

    //     // Slice at the last space and add "..."
    //     return text.slice(0, lastSpaceIndex) + "...";
    // }
    // const plainTextDescription = sliceAfterWordComplete(stripHtml(data.description), 120);
    return (
        // <div className="blog">
        //     <div className="thumbnail">
        //         {/* <Link to={process.env.PUBLIC_URL + `/blog-details/${data.projectID}`} className="image"> */}
        //         <Link to={process.env.PUBLIC_URL + `/ViewProject/${data.projectID}`} className="image">

        //             <img src={`https://www.antheminfotech.com/PortfolioImages/` + data.projectImage} alt="Blog Image" height={"300px"} width={"500px"} />
        //         </Link>
        //     </div>
        //     <div className="info">
        //         <Link to={process.env.PUBLIC_URL + `/blog-details/${data.projectID}`}>
        //             <h3 className="title">
        //                 {data.projectName.slice(0, 25) + "..."}
        //             </h3>
        //             <p className="desc">{plainTextDescription}</p>

        //         </Link>
        //         <br />
        //         <Link to={process.env.PUBLIC_URL + `/blog-details/${data.projectID}`} className="link"> <mark>Read More</mark> </Link>
        //     </div>
        // </div>
        <div className="blog">
            <div className="thumbnail">
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`} className="image"><img src={process.env.REACT_APP_PUBLIC_URL + "/" + data.image} alt="Blog Image" loading="lazy" /></Link>
            </div>
            <div className="info">
                <ul className="meta">
                    <li><i className="far fa-calendar"></i>{data.date}</li>
                    <li><i className="far fa-eye"></i>{data.view}</li>
                </ul>
                <h3 className="title"><Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{data.title}</Link></h3>
                <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`} className="link"> <mark>Read More</mark> </Link>
            </div>
        </div>
    )
}

BlogItem.propTypes = {
    data: PropTypes.object
};

export default BlogItem
