"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "../../../container/Breadcrumb/Breadcrumb";
import BreadcrumbSchema from "@/components/BreadCrumbSchema";
import WorkDetailsContainer from "../../../container/Work/WorkDetailsContainer";
import WorkData from "../../../data/work/workDetails.json";
import { getProjectByID } from "../../../services/projectsservices.js";
import { getToken } from "../../../services/tokenservice.js";

const WorkDetails = () => {
  let { id } = useParams();
  const projectid = parseInt(id);
  const data = WorkData.filter((work) => work.id === projectid);

  //new implementation
  const [token, setToken] = useState(null);
  const [projects, setProject] = useState({});
  const [loading, setLoading] = useState(true);

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
    const fetchProject = async () => {
      if (token && projectid) {
        try {
          const projectDetails = await getProjectByID(projectid);
          setProject(projectDetails);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchProject();
  }, [token, projectid]);

  return (
    <>
    <BreadcrumbSchema
    items={[
      {
        name: "Home",
        url: "https://antheminfotech.com/",
      },
      {
        name: "ViewProject",
        url: `https://antheminfotech.com/ViewProject/${projectid}`,
      },
    ]}
  /> 
   
      <Breadcrumb
        image="images/bg/breadcrumb-bg-two.webp"
        title={projects.data?.projectName}
        content="Home"
        contentTwo="OurWork"
        contentThree="View Project"
      />
      <WorkDetailsContainer
        projects={projects}
        loading={loading}
        classOption="bg-white"
      />
     
    </>
  );
};

export default WorkDetails;





