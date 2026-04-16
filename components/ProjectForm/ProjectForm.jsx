import React, { Fragment } from 'react';
import { useForm } from "react-hook-form";

const ProjectForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const onSubmit = data => console.log(data);

    return (
        <>
     <form onSubmit={handleSubmit(onSubmit)}>
  <div className="row mb-n4" >

    {/* Name */}
    <div className="col-md-12 col-12 mb-4">
      <label htmlFor="name">
        Your Name <span className="text-danger">*</span>
      </label>
      <input
        id="name"
        type="text"
        placeholder="Your Name"
        maxLength={40}
        style={{ backgroundColor: "#fff", color: "#000" }}
        onFocus={(e) => (e.target.style.backgroundColor = "#fff")}
        onBlur={(e) => (e.target.style.backgroundColor = "#fff")}
        {...register("name", {
          required: "Name is required.",
        })}
      />
      {errors?.name && (
        <p className="text-danger">{errors.name.message}</p>
      )}
    </div>

    {/* Email */}
   <div className="col-md-12 col-12 mb-4">
  <label htmlFor="email">
    Email <span className="text-danger">*</span>
  </label>
  <input
    id="email"
    type="email"
    placeholder="Email"
    style={{ backgroundColor: "#fff", color: "#000" }}
    onFocus={(e) => (e.target.style.backgroundColor = "#fff")}
    onBlur={(e) => (e.target.style.backgroundColor = "#fff")}
    {...register("email", {
      required: "Email is required.",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address.",
      },
    })}
  />
  {errors?.email && (
    <p className="text-danger">{errors.email.message}</p>
  )}
</div>

    {/* Message */}
    <div className="col-12 mb-6">
      <label htmlFor="message">
        Message <span className="text-danger">*</span>
      </label>
      <textarea
        id="message"
        placeholder="Message"
        style={{ backgroundColor: "#fff", color: "#000" }}
        onFocus={(e) => (e.target.style.backgroundColor = "#fff")}
        onBlur={(e) => (e.target.style.backgroundColor = "#fff")}
        {...register("message", {
          required: "Message is required.",
        })}
      />
      {errors?.message && (
        <p className="text-danger">{errors.message.message}</p>
      )}
    </div>

    {/* Submit */}
    <div className="col-12 text-center mb-4">
      <button
        type="submit"
        className="btn btn-bottom"
        data-hover="Get a Free Consultation"
        style={{ background: "#0e6497" }}
      >
        Get a free consultation
      </button>
    </div>

  </div>
</form>


<p className="form-messege"></p>

        </>
    )
}

export default ProjectForm;
