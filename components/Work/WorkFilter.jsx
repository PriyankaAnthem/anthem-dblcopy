// "use client";

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { slugify } from "../../utils";
// import Link from "next/link";

// const WorkFilter = ({ categories, classOption, handleProjectWithCategory }) => {
//   const [activeCategory, setActiveCategory] = useState("All");

//   const handleCategoryClick = (category) => {
//     setActiveCategory(category);
//     handleProjectWithCategory(category);
//   };

//   return (
//     <div >

//  <div className={`messonry-button ${classOption}`} >
//       <button
//         data-filter="*"
//         className={activeCategory === "All" ? "is-checked" : ""}
//         onClick={() => handleCategoryClick("All")}
//       >
//         <span className="filter-text">All</span>
//       </button>
//       {categories.map((cat, idx) => (
//         <button
//           key={idx}
//           data-filter={`.${slugify(cat)}`}
//           className={activeCategory === cat ? "is-checked" : ""}
//           onClick={() => handleCategoryClick(cat)}
//         >
//           <span className="filter-text">{cat}</span>
//         </button>
        
//       ))}
   
            

//             </div>
//   <button
     
     
//       className="btn btn-bottom"
//       data-hover="Skills"
//       style={{ background: "#0e6497" }}
//     >
//     Skills
//     </button>
//     </div>
   
    
//   );
// };

// WorkFilter.propTypes = {
//   categories: PropTypes.array,
//   classOption: PropTypes.string,
//   handleProjectWithCategory: PropTypes.func,
// };

// WorkFilter.defaultProps = {
//   classOption: "text-lg-end text-start mb-lg-13 mb-md-13 mb-6",
// };

// export default WorkFilter;




"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { slugify } from "../../utils";
import Link from "next/link";

const WorkFilter = ({ categories, classOption, handleProjectWithCategory }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    handleProjectWithCategory(category);
  };

  return (
    <>
   

    
     <div className={`d-flex align-items-center ${classOption}`}>
  {/* Left side: Category buttons */}
  <div className="messonry-button d-flex flex-wrap gap-2 flex-grow-1 justify-content-start">
    <button
      data-filter="*"
      className={activeCategory === "All" ? "is-checked" : ""}
      onClick={() => handleCategoryClick("All")}
    >
      <span className="filter-text">All</span>
    </button>
    {categories.map((cat, idx) => (
      <button
        key={idx}
        data-filter={`.${slugify(cat)}`}
        className={activeCategory === cat ? "is-checked" : ""}
        onClick={() => handleCategoryClick(cat)}
      >
        <span className="filter-text">{cat}</span>
      </button>
    ))}
  </div>

  {/* Right side: Skills button */}
 
 <Link href="/technologies">
  <button
    className="btn btn-bottom ms-3"
    data-hover="Skills"
    style={{ background: "#0e6497" }}
  >
    Skills
  </button>
</Link>
</div>
     <div className=" mt-4">
    
      <strong>
        Explore our portfolio of web development, AI solutions, and custom software
        projects delivered for clients across multiple industries. Our work
        includes scalable web applications, enterprise software, AI-powered tools,
        and modern digital platforms designed to improve business efficiency,
        performance, and growth.
      </strong>
    </div>
    </>
   


  );
};

WorkFilter.propTypes = {
  categories: PropTypes.array,
  classOption: PropTypes.string,
  handleProjectWithCategory: PropTypes.func,
};

WorkFilter.defaultProps = {
  classOption: "mb-lg-13 mb-md-13 mb-6",
};

export default WorkFilter;
