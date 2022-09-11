import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});
const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);
      fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          setIsLoading(false);
          setSuccessMessage(`Thanks for connecting with me. I would appreciate your time to
                visit my website.`);
        });
    },
  });
  return (
    <section className="my-5 container" id="contact-us-form">
      <h2 className="h1-responsive font-weight-bold text-center my-4 contact-us">
        Connect With Me
      </h2>
      <p className="text-center w-responsive mx-auto my-5">
        Do you have any questions? Please do not hesitate to contact me
        directly. I will try my best to contact you.
        {/* Simple emoji */}
        <br />
        Happy Learning{" "}
        <span role="img" aria-label="emoji">
          🙏
        </span>
      </p>

      <div className="row">
        <div className="col-md-12 mb-md-0 mb-5">
          <form
            id="contact-form"
            name="contact-form"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            <div className="row mb-2">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    required
                    placeholder="Your name"
                    className={
                      formik.errors.name && formik.touched.name
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                  />
                  <label htmlFor="name" className="mt-1">
                    Your name
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className={
                      formik.errors.email && formik.touched.email
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    placeholder="Your email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    required
                  />
                  <label htmlFor="email" className="mt-1">
                    Your email
                  </label>
                </div>
              </div>
            </div>

            <div className="row  mb-2">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={
                      formik.errors.subject && formik.touched.subject
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    placeholder="Subject"
                    onChange={formik.handleChange}
                    value={formik.values.subject}
                    required
                  />
                  <label htmlFor="subject" className="mt-1">
                    Subject
                  </label>
                </div>
              </div>
            </div>

            <div className="row  mb-2">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="4"
                    onChange={formik.handleChange}
                    value={formik.values.message}
                    placeholder="Anything You can ask!"
                    className={
                      formik.errors.message && formik.touched.message
                        ? "is-invalid form-control"
                        : "form-control"
                    }
                    required
                  ></textarea>
                  <label htmlFor="message" className="mt-2">
                    Your message
                  </label>
                </div>
              </div>
            </div>
            {successMessage && (
              <div className="md-2 text-center">
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              </div>
            )}
            <div className="text-center text-md-left">
              {isLoading ? (
                <button className="btn btn-primary" type="button" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Connect
                </button>
              )}
            </div>
          </form>
          <div className="status"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
