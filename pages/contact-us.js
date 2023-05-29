import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Image } from "react-bootstrap";
import uploadIcon from "/public/images/Home-resources/Upload File.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import client from "@/src/apollo/client";
import { ContactQuery } from "@/src/queries/contactQuery";
import Review from "@/src/components/review";
import Head from "next/head";
import contectMap from "../public/images/contect-map.png";
import Layout from "@/src/components/layouts";
import { FooterQuery } from "@/src/queries/footerQuery";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
  budget: "",
  attachment: "",
};

const signUpSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  phoneNumber: Yup.number().required("Please enter your phone number"),
  message: Yup.string().required("Please enter your message"),
  budget: Yup.string().required("Please select any option"),
  attachment: Yup.mixed(),
});

const ContactUs = (contactData) => {
  const inputRef = useRef(null);
  const captcha = useRef(null);
  console.log("contactData", contactData)
  const [file, setFile] = useState();
  const [message, setMessage] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState();
  const [captchaValue, setCaptchaValue] = useState(null);

  const handle = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    console.log("fileObj", fileObj);
    setFile(fileObj);
    if (!fileObj) {
      return;
    }
  };

  const notifySuccess = () =>
    toast.success("Form submited successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  const notifyError = () => {
    toast.error("Something went wrong!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const {
    values,
    errors,
    touched,
    dirty,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: async (values, action) => {
      values.phoneNumber =
        values.phoneNumber * 1; /* converted string into number */
      try {
        let res = await fetch(
          `${process.env.NEXT_PUBLIC_API_HOST_DEV}/contact`,
          {
            // let res = await fetch(
            //   `https://projects.theglobalwebdev.com/brainsapte/wp-json/brainsapte/v1/contact`,
            //   {
            method: "POST",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        let resJson = await res.json();
        if (res.status === 200) {
          setMessage("Form submited successfully");
          setFile(null);
          notifySuccess();
          captcha.current.reset();
        } else {
          setMessage("Some error occured");
          notifyError();
        }
      } catch (err) {
        console.log(err);
      }
      action.resetForm();
    },
  });

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_API_HOST}/page/621`
  //     );
  //     if (!response.ok) {
  //       throw new Error(
  //         `This is an HTTP error: The status is ${response.status}`
  //       );
  //     } else {
  //       let actualData = await response.json();
  //       setData(actualData);
  //       console.log(actualData);
  //       setError(null);
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //     setData(null);
  //   }
  // };

  useEffect(() => {
    // fetchData();
  }, []);

  const onChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    // <!-- Header -->
    <>
      <Layout data={contactData.footerData}>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico"></link>
          <title>{contactData?.data?.page.contactPage.seoSection.title}</title>
          <meta
            name="description"
            content={contactData?.data?.page.contactPage.seoSection.metaDescription}
          ></meta>
        </Head>
        <div className="get-in-touch contact-us">
          <Container>
            <div className="get-in-touch-inner d-flex flex-wrap">
              <div className="contact-form-sec w-80">
                <div className="contact-form-inner">
                  <div className="main-title res-tab">
                    <h1>
                      <span>Get In Touch</span> With Us
                    </h1>
                    <div className="sub-title">
                      Get answers of your queries by filling this form with all
                      the details requested.
                    </div>
                  </div>

                  <form
                    className="form-field"
                    onSubmit={handleSubmit}
                    method="post"
                    // enctype="multipart/form-data"
                    id="formElem"
                  >
                    <div className="floating-form">
                      <div className="floating-label">
                        <div className="">
                          <input
                            className="floating-input"
                            type="name"
                            autoComplete="off"
                            placeholder=" "
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-label">Name</label>
                        </div>
                        {errors.name && touched.name ? (
                          <p className="field-error">{errors.name}</p>
                        ) : null}
                      </div>

                      <div className="floating-label">
                        <div className="">
                          <input
                            className="floating-input"
                            type="email"
                            placeholder=" "
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-label">Email</label>
                        </div>
                        {errors.email && touched.email ? (
                          <p className="field-error">{errors.email}</p>
                        ) : null}
                      </div>

                      <div className="floating-label">
                        <div className="">
                          <input
                            className="floating-input"
                            type="tel"
                            name="phoneNumber"
                            placeholder=" "
                            value={values.phoneNumber}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <label className="form-label">Phone Number</label>
                        </div>
                        {errors.phoneNumber && touched.phoneNumber ? (
                          <p className="field-error">{errors.phoneNumber}</p>
                        ) : null}
                      </div>

                      <div className="floating-label">
                        <div className={values.budget == "" ? "test" : ""}>
                          <select
                            className="select select-arrow"
                            name="budget"
                            id="budget"
                            value={values.budget}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          >
                            <option value="" className="form-label">
                              Select Budget
                            </option>
                            <option value="$1000-$2000">$1000-$2000</option>
                            <option value="$2000-$5000">$2000-$5000</option>
                            <option value="$5000-$10000">$5000-$10000</option>
                            <option value="$10000+">$10000+</option>
                          </select>
                        </div>
                        {errors.budget && touched.budget ? (
                          <p className="field-error">{errors.budget}</p>
                        ) : null}
                      </div>

                      <div className="floating-label">
                        <div className="">
                          <textarea
                            className="floating-input"
                            name="message"
                            placeholder=" "
                            value={values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          ></textarea>
                          <label>Message</label>
                        </div>
                        {errors.message && touched.message ? (
                          <p className="field-error">{errors.message}</p>
                        ) : null}
                      </div>

                      <div className="form-content d-flex flex-wrap">
                        <ReCAPTCHA
                          sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
                          // sitekey="6LeES7YlAAAAANvD_dQDAIbjiVuQDIHyJ53Gwe1I"
                          onChange={onChange}
                          ref={captcha}
                        />
                        <div className="upload">
                          <input
                            style={{ display: "none" }}
                            ref={inputRef}
                            type="file"
                            name="attachment"
                            // value="attechment"
                            onChange={(event) => {
                              let reader = new FileReader();
                              reader.onload = () => {
                                if (reader.readyState === 2) {
                                  setFieldValue("attachment", reader.result);
                                }
                              };
                              reader.readAsDataURL(event.target.files[0]);
                              const fileObj =
                                event.target.files && event.target.files[0];
                              setFile(fileObj);
                              if (!fileObj) {
                                return;
                              }
                            }}
                            accept=".jpg, .png, .pdf"
                            onBlur={handleBlur}
                          />
                          <div className="upload-btn" onClick={handle}>
                            <span>
                              {file && file ? file.name : "Upload File"}
                            </span>
                            <Image
                              src={uploadIcon.src}
                              alt="Picture of the author"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="floating-button">
                      <input
                        type="submit"
                        name="submit"
                        className="submit-btn"
                        // disabled={!dirty}
                      />
                    </div>
                    <ToastContainer />
                  </form>
                </div>
              </div>
              <div className="contact-detail">
                <div className="content-us-inner">
                  <h2 className="white-text">Contact Us</h2>
                  <ul>
                    <li className="contact-us-loction">
                      <h3 className="white-text">
                        {
                          contactData?.data?.page.contactPage
                            .contactDetailsSection.countryTitle
                        }
                      </h3>
                      <div className="contect-address">
                        <p>
                          {
                            contactData?.data?.page.contactPage
                              .contactDetailsSection.addAddress
                          }
                        </p>
                      </div>
                    </li>
                    <li className="contact-us-number">
                      <a
                        href={
                          "tel:" +
                          contactData?.data?.page.contactPage
                            .contactDetailsSection.addNumber
                        }
                      >
                        {
                          contactData?.data?.page.contactPage
                            .contactDetailsSection.addNumber
                        }
                      </a>
                    </li>
                    <li className="contact-us-email">
                      <a
                        href={
                          "mailto:" +
                          contactData?.data?.page.contactPage
                            .contactDetailsSection.addEmail
                        }
                      >
                        {
                          contactData?.data?.page.contactPage
                            .contactDetailsSection.addEmail
                        }
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="contect-img">
                  <Image src={contectMap.src} alt="contectMap" />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="review">
          <Review
            data={
              contactData?.data.generalSettings.acfGeneralSettings
                .ourClientsSection
            }
          />
        </div>
      </Layout>
    </>
  );
};

export default ContactUs;

export async function getStaticProps(context) {
  const {
    data: contactData,
    loading,
    networkStatus,
  } = await client.query({
    query: ContactQuery,
  });

  const { data: footerData } = await client.query({
    query: FooterQuery,
  });

  return {
    props: {
      data: contactData,
      footerData: footerData,
    },
    revalidate: 10,
  };
}
