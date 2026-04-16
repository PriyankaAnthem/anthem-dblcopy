"use client";

import React, { useEffect, useState, useCallback } from "react";
import "aos/dist/aos.css";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import WorkItemTwo from "../../components/Work/WorkItemTwo";
import WorkFilter from "../../components/Work/WorkFilter";
import SectionTitleTwo from "../../components/SectionTitles/SectionTitleTwo";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
import { getToken } from "../../services/tokenservice";
import { getProjects } from "../../services/projectsservices";
import Loader from "../Loader/Loader";
import { useParams } from "next/navigation";


const WorkContainer = ({ classOption }) => {
  const [token, setToken] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [categoryMap, setCategoryMap] = useState({});
  const [visibleData, setVisibleData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  const params = useParams();
  const slug = params?.slug;



  useEffect(() => {
    const AOS = require("aos");   // ← require fixes SSR issue

    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const data = await getToken();
        setToken(data.token);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchProjects = async () => {
        try {
          setLoading(true);
          const allProjects = await getProjects();
          console.log("fetched projcts before filterig:", allProjects)
          setProjects(allProjects);

          let filtered = allProjects;
// if (slug) {
//   const normalize = (str) =>
//     str
//       ?.toLowerCase()
//       .trim()
//       .replace(/[.\-_#+]/g, " ")  // convert . - _ # + → spaces
//       .replace(/\s+/g, " ");       // collapse multiple spaces
//   const slugTerm = normalize(slug);
//   const slugWords = slugTerm.split(" "); // ["node","js"]

//   filtered = allProjects.filter((project) => {
//     // normalize all fields before searching
//     const name = normalize(project.projectName || "");
//     const category = normalize(project.projectCategory || "");
//     const tech = normalize(project.technolgies || "");
//     const desc = normalize(project.description || "");
//     const subCat = normalize(project.projectSubCategory || "");
//     const smallDesc = normalize(project.smallDesciption || "");

//     const fullString = `${name} ${category} ${tech} ${desc} ${subCat} ${smallDesc}`;

//     // Check every slug word inside fullString
//     return slugWords.every((w) => fullString.includes(w));
//   });
// }


 
const normalize = (str = "") =>
  str
    .toLowerCase()
    .replace(/<[^>]*>/g, " ")    
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()+]/g, " ") 
    .replace(/\s+/g, " ")
    
    .trim();

if (slug) {


  const slugWords = normalize(slug).split(" ");

  filtered = allProjects.filter((project) => {
    const searchableText = normalize(`
      ${project.projectName}
      ${project.projectCategory}
      ${project.projectSubCategory}
      ${project.smallDesciption}
      ${project.description}
    `);

    const technologies = (project.technolgies || "")
      .split(",")
      .map(t => normalize(t));

    // ✅ loose + accurate match
    return slugWords.some(word =>
      searchableText.includes(word) ||
      technologies.some(tech => tech.includes(word))
    );
  });
}


          setFilterProjects(filtered);

          const categoryMap = filtered.reduce((acc, project) => {
            const { projectCategory } = project;
            if (!acc[projectCategory]) acc[projectCategory] = [];
            acc[projectCategory].push(project);
            return acc;
          }, {});
          setCategories(Object.keys(categoryMap));
          setCategoryMap(categoryMap);

          setVisibleData(filtered.slice(0, itemsToShow));
          setHasMore(filtered.length > itemsToShow);
        } catch (error) {
          console.error("Error fetching projects:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchProjects();
    }
  }, [token, slug, itemsToShow]);

  // DEBUG: Check which projects match the slug
  useEffect(() => {
    if (!projects.length || !slug) return;

    console.log("🔍 SLUG FOUND:", slug);

    const term = slug.toLowerCase();

    projects.forEach((project) => {
      const fullString = JSON.stringify(project).toLowerCase();

      if (fullString.includes(term)) {
        console.log("--------------------------------------------------");
        console.log("✔ MATCHED PROJECT:", project.projectName);

        if (project.projectName?.toLowerCase().includes(term))
          console.log("  → Found in: projectName");

        if (project.projectCategory?.toLowerCase().includes(term))
          console.log("  → Found in: projectCategory");

        if (project.technolgies?.toLowerCase().includes(term))
          console.log("  → Found in: technologies");

        if (project.description?.toLowerCase().includes(term))
          console.log("  → Found in: description");

        if (project.projectSubCategory?.toLowerCase().includes(term))
          console.log("  → Found in: projectSubCategory");

        if (project.smallDesciption?.toLowerCase().includes(term))
          console.log("  → Found in: smallDescription");
      }
    });
  }, [projects, slug]);

  const handleProjectWithCategory = useCallback(
    (category) => {
      const filteredProjects =
        category === "All" ? projects : categoryMap[category] || [];
      setFilterProjects(filteredProjects);
      setVisibleData(filteredProjects.slice(0, itemsToShow));
      setHasMore(filteredProjects.length > itemsToShow);
    },
    [categoryMap, projects, itemsToShow]
  );

  const loadMoreData = () => {
    if (visibleData.length >= filterProjects.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setVisibleData((prev) =>
        filterProjects.slice(0, prev.length + 3)
      );
    }, 500);
  };

  const toTitleCase = (str) =>
    str
      .split(" ")
      .map((word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
const cleanSlug = slug?.replace(/-/g, " ");
  return (
    <div className={`section section-padding-t90 ${classOption}`} style={{paddingTop:"20px",paddingBottom:"20px"}}>
      <div className="container">
        
        <div className="row align-items-center">
          <div className="col-lg-5">
            {/* <SectionTitleTwo
              subTitle={`${slug ? `<span class='fw-bold'>(${toTitleCase(cleanSlug)})</span>` : ""
                }`}
              title="Our Work"
            /> */}
          </div>
          <div className="col-lg-12" data-aos="fade-up">
            <WorkFilter
              categories={categories}
              handleProjectWithCategory={handleProjectWithCategory}
            />
          </div>
        </div>

        {loading ? (
          <Loader />
        ) : filterProjects.length === 0 ? (
          <div className="text-center py-5">
            <h3 className="text-danger fw-bold">No projects found for this technology.</h3>
            <p className="text mt-2">
              Please explore our other case studies and services.
            </p>
<a
  href="/OurWork"
  className="btn btn btn-bottom mt-xl-12 mt-lg-8 mt-md-6 mt-4"
   data-hover=" View All Projects"
  style={{ background: "#0e6497" }}
>
  View All Projects
</a>

           
          </div>
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
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-n6 mt-6">
              {visibleData.map((single, index) => (
                <div key={index} className="col mb-6" data-aos="fade-up">
                  <WorkItemTwo classOption="box-border" data={single} />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default WorkContainer;
