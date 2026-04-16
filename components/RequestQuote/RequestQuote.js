"use client";
import axios from "axios";
import React, { useRef, useState,useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const RequestQuote = () => {
  const [token, setToken] = useState(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef();

  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      console.log("Retrieved token from localStorage:", storedToken);
      setToken(storedToken);
    }
  }, []);

  function onRecaptchaChange(token) {
    setRecaptchaToken(token);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      if (!recaptchaToken) {
        Swal.fire({
          title: "Please complete the ReCAPTCHA",
          icon: "error",
        });
        setIsSubmitting(false);
        return;
      }
      if (token && recaptchaToken) {
        const jsonData = {
          name: data.name,
          email: data.email,
          number: data.contactnumber,
          // website: data.website,
        website: data.website?.trim() || "",
          message: data.message,
          goal: data.goal.join(","),
        };

        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/ContactUs/RequestQuote`,
          jsonData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
       console.log("Response from API:", response);
        if (response.status === 200) {
          Swal.fire({
            title: response.data.msg,
            icon: "success",
          });
          setRecaptchaToken(null);
          recaptchaRef.current.reset();
          reset();
        }
      } else {
        console.error("Token is not available");
      }
    } catch (error) {
  console.error("Error in onSubmit: ", error);

  let errorMessage = "Something went wrong. Please try again later.";

  // API responded with an error
  if (error.response) {
    errorMessage =
      error.response.data?.msg ||
      error.response.data?.message ||
      "Failed to submit the form. Please try again.";
  }
  // Network / no response
  else if (error.request) {
    errorMessage = "Network error. Please check your internet connection.";
  }

  Swal.fire({
    title: "Submission Failed",
    text: errorMessage,
    icon: "error",
  });
}
 finally {
      setIsSubmitting(false);
    }
  };


  return (
   <>
<div className="contact-form" data-aos="fade-up" data-aos-delay="300" >
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="row mb-n6">
      <div className="col-md-6 col-12 mb-6">
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          type="text"
          placeholder="Enter Name *"
          name="name"
          className="textbox-border"
          {...register("name", {
            required: "Name is required.",
            validate: (value) => {
              return (
                (value.length >= 3 && value.length <= 50) ||
                "Name must be between 3 and 50 characters."
              );
            },
          })}
        />
        <span className="text-danger">
          {errors?.name && <p>{errors.name?.message}</p>}
        </span>
      </div>

     <div className="col-md-6 col-12 mb-6">
  <label htmlFor="email">Email *</label>
  <input
    id="email"
    type="email"
    placeholder="Enter Email *"
    name="email"
    className="textbox-border"
    {...register("email", {
      required: "Email is required.",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address.",
      },
      validate: (value) =>
        (value.length >= 3 && value.length <= 50) ||
        "Email must be between 3 and 50 characters.",
    })}
  />
  <span className="text-danger">
    {errors?.email && <p>{errors.email?.message}</p>}
  </span>
</div>


      <div className="col-md-6 col-12 mb-6">
  <label htmlFor="contactnumber">
    Contact Number <span className="text-danger">*</span>
  </label>

  <input
    id="contactnumber"
    type="tel"
    placeholder="Enter contact number"
    className="textbox-border"
    maxLength={13}
    {...register("contactnumber", {
      required: "Contact number is required.",
      pattern: {
        value: /^[0-9]{10,13}$/,
        message: "Contact number must contain 10 to 13 digits.",
      },
    })}
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }}
  />

  {errors?.contactnumber && (
    <p className="text-danger">{errors.contactnumber.message}</p>
  )}
</div>


    <div className="col-md-6 col-12 mb-6">
  <label htmlFor="website">
    Website <span>(Optional)</span>
  </label>

  <input
    id="website"
    type="text"
    placeholder="https://example.com"
    className="textbox-border"
    {...register("website", {
      validate: (value) => {
        if (!value) return true; // optional field

        const urlPattern =
          /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;

        return (
          urlPattern.test(value) ||
          "Please enter a valid website URL."
        );
      },
    })}
  />

  {errors?.website && (
    <p className="text-danger">{errors.website.message}</p>
  )}
</div>


    <div className="col-12 mb-6">
  <label htmlFor="message">
    How can we help you <span className="text-danger">*</span>
  </label>

  <textarea
    id="message"
    placeholder="How can we help you?"
    className="textbox-border"
    rows={4}
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
      validate: (value) =>
        value.trim().length > 0 || "Message cannot be empty.",
    })}
  ></textarea>

  {errors?.message && (
    <p className="text-danger">{errors.message.message}</p>
  )}
</div>

     {/* New Checkbox Section for Goals */}
<div className="col-12 mb-6">
  <label className="mb-2 d-block">What is your goal? *</label>

  <div className="goal-checkbox-grid">
    {[
      "Web Development",
      "Web Applications",
      "Mobile App Development",
      "On-Demand Dedicated Talent",
      "Design",
      "Digital Marketing",
      "QA and Testing",
      "Not sure",
    ].map((item) => (
      <label key={item} className="goal-checkbox">
        <input type="checkbox" value={item} {...register("goal")} />
        <span className="custom-checkbox"></span>
        <span className="label-text">{item}</span>
      </label>
    ))}
  </div>

  {/* ✅ Style JSX */}
  <style jsx>{`
    .goal-checkbox-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px 24px;
    }

    .goal-checkbox {
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;
      font-size: 14px;
      user-select: none;
    }

    .goal-checkbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    /* Checkbox box */
    .custom-checkbox {
      width: 16px;
      height: 16px;
      background-color: #fff;
      border: 2px solid #000;
      margin-right: 8px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    /* Tick */
    .goal-checkbox input:checked + .custom-checkbox::after {
      content: "";
      width: 8px;
      height: 4px;
      border-left: 2px solid #000;
      border-bottom: 2px solid #000;
      transform: rotate(-45deg);
      margin-bottom: 2px;
    }

    .label-text {
      line-height: 1.3;
    }

    /* Tablet */
    @media (max-width: 992px) {
      .goal-checkbox-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* Mobile */
    @media (max-width: 576px) {
      .goal-checkbox-grid {
        grid-template-columns: 1fr;
      }
    }
  `}</style>
</div>

  <div className="row align-items-center mb-6"> <div className="col-12 col-md-6 d-flex justify-content-start">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
          onChange={onRecaptchaChange}
        />
      </div>

      <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start mt-3 mt-md-0 pe-0">
        <button
          type="submit"
          className="btn btn btn-bottom"
          data-hover="Request A Quote"
          disabled={isSubmitting}
          style={{ background: "#0e6497" }}
        >
          {isSubmitting ? "Submitting..." : "Request A Quote"}
        </button>
      </div></div>
      
    </div>
  </form>
</div>
</>

  );
};

export default RequestQuote;
