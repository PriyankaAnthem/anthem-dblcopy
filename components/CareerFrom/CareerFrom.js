"use client";

import axios from "axios";
import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const CareerForm = () => {
  const [token, setToken] = useState(null);
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const handleFileClick = () => fileInputRef.current?.click();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (file && allowedTypes.includes(file.type)) {
      setFileName(file.name);
    } else {
      setFileName("");
      Swal.fire({
        title: "Invalid file type!",
        text: "Only PDF, DOC or DOCX allowed.",
        icon: "error",
      });
      e.target.value = ""; // reset invalid file
    }
  };



  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef();

  const onRecaptchaChange = (token) => setRecaptchaToken(token);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: "onBlur" });
  const onSubmit = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    if (!recaptchaToken) {
      Swal.fire({ title: "Please complete the ReCAPTCHA", icon: "error" });
      setIsSubmitting(false);
      return;
    }

    // const expText = data.experienceyear || "";

    // const yearsMatch = expText.match(/(\d{1,2})\s*(year|years|yr|yrs)/i);
    // const monthsMatch = expText.match(/(\d{1,2})\s*(month|months|mo|mos)/i);

    // const experienceYear = yearsMatch ? Number(yearsMatch[1]) : 0;
    // const experienceMonth = monthsMatch ? Number(monthsMatch[1]) : 0;
    const expText = data.experienceyear || "";

// match decimal or whole years
const yearMatch = expText.match(/(\d+(\.\d+)?)\s*(year|years|yr|yrs)/i);
const monthMatch = expText.match(/(\d{1,2})\s*(month|months|mo|mos)/i);

let experienceYear = 0;
let experienceMonth = 0;

if (yearMatch) {
  const yearValue = parseFloat(yearMatch[1]);
  experienceYear = Math.floor(yearValue);
  experienceMonth += Math.round((yearValue - experienceYear) * 12);
}

if (monthMatch) {
  experienceMonth += Number(monthMatch[1]);
}

// normalize overflow months
experienceYear += Math.floor(experienceMonth / 12);
experienceMonth = experienceMonth % 12;

    const joiningDays = data.selectjoining
      ? `${parseInt(data.selectjoining, 10)} days`
      : "";
    const formData = new FormData();
    formData.append("file", fileInputRef.current?.files[0]);
    formData.append("Name", data.name);
    formData.append("Email", data.email);
    formData.append("Number", data.contactnumber);
    formData.append("ExpYears", experienceYear);
    formData.append("ExpMonth", experienceMonth);
    formData.append("TextArea", data.message);
    formData.append("LastEmployedAt", data.lastemployedat);
    formData.append("uploadresume", data.uploadresume);
    formData.append("SelectJoining", joiningDays);
    formData.append("PostApply", data.postapply);
    try {
      if (token && recaptchaToken) {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/Career/ApplyforJobCareer`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.status === 200) {
          Swal.fire({ title: res.data.msg, icon: "success" });
          reset();
          recaptchaRef.current.reset();
          fileInputRef.current.value = "";
          setFileName("");
          setRecaptchaToken(null);
        }
      }
    } catch (err) {
      console.error("Error submitting form:", err);

      let errorMessage = "Something went wrong. Please try again later.";

      if (err.response) {
        errorMessage =
          err.response.data?.msg ||
          err.response.data?.message ||
          "Failed to submit the application.";
      } else if (err.request) {
        errorMessage = "Network error. Please check your internet connection.";
      }

      Swal.fire({
        title: "Submission Failed",
        text: errorMessage,
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  //   const onSubmit = async (data) => {
  //     if (isSubmitting) return;
  //     setIsSubmitting(true);

  //     if (!recaptchaToken) {
  //       Swal.fire({ title: "Please complete the ReCAPTCHA", icon: "error" });
  //       setIsSubmitting(false);
  //       return;
  //     }
  // const expText = data.experienceyear || "";

  // const yearsMatch = expText.match(/(\d{1,2})\s*(year|years|yr|yrs)/i);
  // const monthsMatch = expText.match(/(\d{1,2})\s*(month|months|mo|mos)/i);

  // const experienceYear = yearsMatch ? Number(yearsMatch[1]) : 0;
  // const experienceMonth = monthsMatch ? Number(monthsMatch[1]) : 0;

  // const formData = new FormData();
  // formData.append("file", fileInputRef.current?.files[0]);
  // formData.append("Name", data.name);
  // formData.append("Email", data.email);
  // formData.append("Number", data.contactnumber);
  // formData.append("ExpYears", experienceYear);
  // formData.append("ExpMonth", experienceMonth);
  // formData.append("TextArea", data.message);
  // formData.append("LastEmployedAt", data.lastemployedat);
  // formData.append("uploadresume", data.uploadresume);
  // formData.append("SelectJoining", data.selectjoining);
  // formData.append("PostApply", data.postapply);


  //     try {
  //       if (token && recaptchaToken) {
  //         const res = await axios.post(
  //           `${process.env.NEXT_PUBLIC_API_URl}/api/Career/ApplyforJobCareer`,
  //           formData,
  //           { headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${token}` } }
  //         );

  //         if (res.status === 200) {
  //           Swal.fire({ title: res.data.msg, icon: "success" });
  //           reset();
  //           recaptchaRef.current.reset();
  //           fileInputRef.current.value = "";
  //           setFileName("");
  //           setRecaptchaToken(null);
  //         }
  //       }
  //     } catch (err) {
  //       console.error("Error submitting form:", err);
  //       Swal.fire({ title: "Submission failed", icon: "error" });
  //     } finally {
  //       setIsSubmitting(false);
  //     }
  //   };
  return (
    <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-n6">
          <div className="col-md-6 col-12 mb-6">
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              type="text"
              placeholder="Enter Name"
              maxLength={50}
              className="textbox-border"
              {...register("name", {
                required: "Name is required.",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Name should contain only letters and spaces.",
                },
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters.",
                },
                maxLength: {
                  value: 50,
                  message: "Name must not exceed 50 characters.",
                },
              })}
            />
            {errors?.name && <p className="text-danger">{errors.name.message}</p>}
          </div>
          {/* Email */}
          <div className="col-md-6 col-12 mb-6">
            <label htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              className="textbox-border"
              {...register("email", {
                required: "Email is required.",
                minLength: {
                  value: 3,
                  message: "Email must be at least 3 characters.",
                },
                maxLength: {
                  value: 100,
                  message: "Email must not exceed 100 characters.",
                },
                // ❌ No regex restriction → allows all domains
              })}
            />
            {errors?.email && <p className="text-danger">{errors.email.message}</p>}
          </div>
          <div className="col-md-6 col-12 mb-6">
            <label htmlFor="contactnumber">Contact Number *</label>
            <input
              id="contactnumber"
              type="text"
              placeholder="Enter Contact Number"
              className="textbox-border"
              maxLength={13}  // stop typing more than 13 digits
              onInput={(e) => {
                // Allow only digits
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              {...register("contactnumber", {
                required: "Contact Number is required.",
                pattern: {
                  value: /^[0-9]{10,13}$/,
                  message: "Contact Number must be between 10 to 13 digits.",
                },
              })}
            />

            {errors?.contactnumber && (
              <p className="text-danger">{errors.contactnumber.message}</p>
            )}
          </div>

          <div className="col-md-6 col-12 mb-6">
            <label htmlFor="lastemployedat">Last Employed At *</label>
            <input
              id="lastemployedat"
              type="text"
              placeholder="e.g. Company Name or Fresher"
              className="textbox-border"
              {...register("lastemployedat", {
                required: "Last employed field is required. Enter company name or Fresher.",
              })}
            />
          </div>
          <div className="col-md-6 col-12 mb-6">
            <label htmlFor="experienceyear">Total Experience *</label>
            {/* <input
              id="experienceyear"
              type="text"
              placeholder="e.g., 1 Year 2 Months"
              className="textbox-border"
              maxLength={20}
              onInput={(e) => {
                // Convert value to lowercase and remove invalid characters
                let value = e.target.value.toLowerCase();

                // Allow only digits, spaces, and letters
                value = value.replace(/[^0-9a-z\s]/g, "");

                // Replace multiple spaces with one
                value = value.replace(/\s+/g, " ");

                // Remove invalid repeated numbers like 000000 or 99999
                if (/(\d)\1{3,}/.test(value)) {
                  value = value.replace(/(\d)\1{3,}/g, "$1");
                }

                e.target.value = value;
              }}
              {...register("experienceyear", {
                required: "Total Experience is required.",
                pattern: {
                  value: /^(\d{1,2}\s*(year|years|yr|yrs))?\s*(\d{1,2}\s*(month|months|mo|mos))?$/i,
                  message: "Invalid format. Example: 1 Year 2 Months",
                },
                validate: (value) => {
                  const years = value.match(/(\d{1,2})\s*(year|years|yr|yrs)/i);
                  const months = value.match(/(\d{1,2})\s*(month|months|mo|mos)/i);

                  const y = years ? parseInt(years[1], 10) : 0;
                  const m = months ? parseInt(months[1], 10) : 0;

                  if (y === 0 && m === 0) {
                    return "Please enter valid experience.";
                  }
                  if (y < 0 || y > 20) {
                    return "Years must be between 0 to 20.";
                  }
                  if (m < 0 || m > 11) {
                    return "Months must be between 0 to 11.";
                  }
                  return true;
                },
              })}
            /> */}
<input
  id="experienceyear"
  type="text"
  placeholder="e.g., 1.5 years or 1y 6m"
  className="textbox-border"
  maxLength={14}
  onInput={(e) => {
    let value = e.target.value.toLowerCase();

    // allow digits, decimal, space, letters
    value = value.replace(/[^0-9.a-z\s]/g, "");

    // normalize shortcuts
    value = value
      .replace(/\byrs?\b/g, " year")
      .replace(/\by\b/g, " year")
      .replace(/\bmos?\b/g, " month")
      .replace(/\bm\b/g, " month");

    // remove extra spaces
    value = value.replace(/\s+/g, " ").trim();

    e.target.value = value;
  }}
  {...register("experienceyear", {
    required: "Total Experience is required.",
    validate: (value) => {
      // match decimal or whole years
      const yearMatch = value.match(/(\d+(\.\d+)?)\s*year/i);
      const monthMatch = value.match(/(\d{1,2})\s*month/i);

      let years = 0;
      let months = 0;

      if (yearMatch) {
        const yearValue = parseFloat(yearMatch[1]);
        years = Math.floor(yearValue);
        months += Math.round((yearValue - years) * 12);
      }

      if (monthMatch) {
        months += Number(monthMatch[1]);
      }

      // normalize months overflow
      years += Math.floor(months / 12);
      months = months % 12;

      if (years === 0 && months === 0) {
        return "Enter experience like 1.5 years or 1y 6m";
      }

      if (years > 20) {
        return "Years cannot exceed 20";
      }

      if (months > 11) {
        return "Months must be between 0–11";
      }

      return true;
    },
  })}
/>


            {errors?.experienceyear && (
              <span className="text-danger">{errors.experienceyear.message}</span>
            )}
          </div>


          {/* <div className="col-md-6 col-12 mb-6">
  <label htmlFor="experiencemonths">Experience Months (Optional)</label>
  <input
    id="experiencemonths"
    type="text"
    placeholder="Experience Months (Optional)"
    className="textbox-border"
    {...register("experiencemonths", {
      pattern: {
        value: /^[0-9]*$/,
        message: "Invalid experience months.",
      },
      validate: (value) => {
        if (!value) return true; // allow empty
        const num = parseInt(value, 10);
        return (
          (num >= 0 && num <= 12) ||
          "Experience Months must be between 0 to 12."
        );
      },
    })}
  />
  <span className="text-danger">
    {errors?.experiencemonths && (
      <p>{errors.experiencemonths?.message}</p>
    )}
  </span>
</div> */}

          <div className="col-md-6 col-12 mb-6">
            <label htmlFor="postapply">Apply for? *</label>
            <input
              id="postapply"
              type="text"
              placeholder="e.g., Software Engineer"
              className="textbox-border"
              onInput={(e) => {
                // Remove any characters that are not letters or spaces
                e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
              }}
              {...register("postapply", {
                required: "Apply for is required.",
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum 50 characters",
                },
              })}
            />

            <span className="text-danger">
              {errors?.postapply && <p>{errors.postapply?.message}</p>}
            </span>
          </div>

          <div className="col-md-6 col-12 mb-6">
            <label htmlFor="selectjoining">
              In how many days can you join? <span className="text-danger">*</span>
            </label>

            <input
              id="selectjoining"
              type="text"
              placeholder="0 – 99"
              className="textbox-border"
              maxLength={2}
              inputMode="numeric"     // mobile numeric keyboard
              onInput={(e) => {
                // Allow only digits
                e.target.value = e.target.value.replace(/\D/g, "");
              }}
              {...register("selectjoining", {
                required: "Joining availability is required.",
                validate: (value) => {
                  const num = Number(value);

                  if (isNaN(num)) return "Please enter a number.";
                  if (value.length > 2) return "Maximum 2 digits allowed.";
                  if (num < 0 || num > 99)
                    return "Joining days must be between 0 and 99.";

                  return true;
                },
              })}
            />

            {errors?.selectjoining && (
              <p className="text-danger">{errors.selectjoining.message}</p>
            )}
          </div>


          <div className="col-md-6 col-12 mb-6">
            <label htmlFor="uploadresume">Upload Resume (PDF / DOC / DOCX) *</label>

            <input
              type="text"
              placeholder="Upload Resume *"
              className="textbox-border"
              value={fileName}
              onClick={handleFileClick}
              readOnly
              {...register("uploadresume", {
                required: "Upload Resume is required.",
                validate: {
                  isValidFile: () => {
                    const file = fileInputRef.current?.files?.[0];
                    if (!file) return "Upload Resume is required.";

                    const allowedTypes = [
                      "application/pdf",
                      "application/msword",
                      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    ];

                    return (
                      allowedTypes.includes(file.type) ||
                      "Only PDF, DOC or DOCX files are allowed."
                    );
                  },
                },
              })}
            />

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              style={{ display: "none" }}
            />

            <span className="text-danger">
              {errors?.uploadresume && <p>{errors.uploadresume?.message}</p>}
            </span>
          </div>

          <div className="col-12 mb-6">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message *"
              className="textbox-border"
              {...register("message", {
                required: "Message is required.",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters.",
                },
                maxLength: {
                  value: 500,
                  message: "Message cannot exceed 500 characters.",
                },
              })}
            ></textarea>

            <span className="text-danger">
              {errors?.message && <p>{errors.message?.message}</p>}
            </span>
          </div>

          <div className="row align-items-center mb-6">




            {/* <div className="col-12 col-md-6 mb-6"> */}
            <div className="col-12 col-md-6 d-flex justify-content-start">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}//
                onChange={onRecaptchaChange}
              />
            </div>
            {/* <div className="col-12 col-md-6 text-center mb-6"> */}
            <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start mt-3 mt-md-0 pe-0">
              <button
                type="submit"
                className="btn btn btn-bottom"
                data-hover="Send Application"
                disabled={isSubmitting}
                style={{ background: "#0e6497" }}
              >
                {isSubmitting ? "Submitting..." : "Send Application"}
              </button>

            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;