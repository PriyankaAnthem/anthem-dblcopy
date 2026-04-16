
'use client';

import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [token] = useState(typeof window !== "undefined" ? localStorage.getItem("token") : null);

    // color body 
    useEffect(() => {
        function updateTheme() {
            const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
                "dark" :
                "light";
            document.querySelector("html")?.setAttribute("data-bs-theme", colorMode);
        }

        updateTheme();

        const listener = () => updateTheme();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);

        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', listener);
        };
    }, []);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const recaptchaRef = useRef();

    function onRecaptchaChange(token) {
        setRecaptchaToken(token);
    }
const onSubmit = async (data) => {
  if (isSubmitting) return;
  setIsSubmitting(true);

  try {
    if (!recaptchaToken) {
      Swal.fire({
        title: "Please complete the ReCAPTCHA",
        icon: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("Name", data.name);
    formData.append("Email", data.email);
    formData.append("Number", data.contactnumber);
    formData.append("Message", data.message);

    if (token && recaptchaToken) {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/ContactUs/ContactUs`,
        formData,
        {
          headers: {
             "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // ✅ no Content-Type here
          },
        }
      );

      if (response.status === 200) {
        Swal.fire({
          title: response.data.msg || "Submitted successfully",
          icon: "success",
        });
        setRecaptchaToken(null);
        recaptchaRef.current.reset();
        reset();
      }
    } else {
      Swal.fire({
        title: "Authentication error",
        text: "Token is not available.",
        icon: "error",
      });
    }
  } catch (error) {
    console.error("Error in onSubmit:", error);

    let errorMessage = "Something went wrong. Please try again.";

    if (error.response) {
      errorMessage =
        error.response.data?.msg ||
        error.response.data?.message ||
        "Submission failed.";
    } else if (error.request) {
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

    // const onSubmit = async (data) => {
    //     if (isSubmitting) return;

    //     setIsSubmitting(true);
    //     try {
    //         if (!recaptchaToken) {
    //             Swal.fire({
    //                 title: "Please complete the ReCAPTCHA",
    //                 icon: "error",
    //             });
    //             setIsSubmitting(false);
    //             return;
    //         }

    //         const formData = new FormData();
    //         formData.append("Name", data.name);
    //         formData.append("Email", data.email);
    //         formData.append("Number", data.contactnumber);
    //         formData.append("Message", data.message);

    //         if (token && recaptchaToken) {
    //             const response = await axios.post(
    //                 `${process.env.NEXT_PUBLIC_API_URL}/api/ContactUs/ContactUs`,
    //                 formData,
    //                 {
    //                     headers: {
    //                         "Content-Type": "application/json",
    //                         Authorization: `Bearer ${token}`,
    //                     },
    //                 }
    //             );

    //             if (response.status === 200) {
    //                 Swal.fire({
    //                     title: response.data.msg,
    //                     icon: "success",
    //                 });
    //                 setRecaptchaToken(null);
    //                 recaptchaRef.current.reset();
    //                 reset();
    //             }
    //         } else {
    //             console.error("Token is not available");
    //         }
    //     } catch (error) {
    //         console.error("Error in onSubmit: ", error);
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    return (
        <div className="contact-form" data-aos="fade-up" data-aos-delay="300" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-n6">
                    <div className="col-md-6 col-12 mb-6">
  <label className="form-label">
    Name <span className="text-danger">*</span>
  </label>
  <input
    type="text"
    className="textbox-border"
    placeholder="Enter Name"
    {...register("name", {
      required: "Name is required.",
      minLength: {
        value: 3,
        message: "Name must be at least 3 characters.",
      },
      maxLength: {
        value: 50,
        message: "Name cannot exceed 50 characters.",
      },
    })}
  />
  {errors?.name && <p className="text-danger">{errors.name.message}</p>}
</div>


                   <div className="col-md-6 col-12 mb-6">
  <label className="form-label">
    Email <span className="text-danger">*</span>
  </label>
  <input
    type="email"
    className="textbox-border"
    placeholder="Enter Email"
    {...register("email", {
      required: "Email is required.",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address.",
      },
    })}
    style={{ backgroundColor: '#fff' }}
  />
  {errors?.email && <p className="text-danger">{errors.email.message}</p>}
</div>

                   <div className="col-md-12 col-12 mb-6">
  <label className="form-label">
    Contact Number <span className="text-danger">*</span>
  </label>
  <input
    type="tel"
    className="textbox-border"
    placeholder="Enter contact number"
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

                 <div className="col-12 mb-6">
  <label className="form-label">
    Message <span className="text-danger">*</span>
  </label>
  <textarea
    className="textbox-border"
    placeholder="Enter your message"
    {...register("message", {
      required: "Message is required.",
      minLength: {
        value: 10,
        message: "Message must be at least 10 characters.",
      },
    })}
  />
  {errors?.message && <p className="text-danger">{errors.message.message}</p>}
</div>

   

                    <div className="row align-items-center mb-6">
  {/* Captcha – left aligned */}
  <div className="col-12 col-md-6 d-flex justify-content-start">
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA}
      onChange={onRecaptchaChange}
    />
  </div>

  {/* Button – right aligned */}
  <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start mt-3 mt-md-0 pe-0">
    <button
      type="submit"
      disabled={isSubmitting}
      className="btn btn-bottom"
      data-hover="Contact Us"
      style={{ background: "#0e6497" }}
    >
      {isSubmitting ? "Submitting..." : "Contact Us"}
    </button>
  </div>
</div>

                </div>
            </form>
        </div>
    );
};

export default ContactForm;
