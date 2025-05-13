import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

const MainSection = () => {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMsg, setResponseMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post(
        `http://localhost:8000/api/${i18n.language}/contact-form`,
        formData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      setResponseMsg(res.data.message);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      if (err.response?.data?.message) {
        setErrorMsg(err.response.data.message);
      } else if (err.response?.data?.errors) {
        // جمع رسائل التحقق من Laravel إن وجدت
        const errors = Object.values(err.response.data.errors).flat().join(" ");
        setErrorMsg(errors);
      } else {
        setErrorMsg("An error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-primary mb-8">
          {t("get_in_touch")
            .split(" ")
            .map((word, index) =>
              word === "touch" || word === "معنا" ? (
                <span key={index} className="text-secondary">
                  {word}
                </span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t("name")}
              className="mt-1 p-3 w-full border border-gray-300 bg-primary placeholder:text-secondary rounded-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t("email")}
              className="mt-1 p-3 w-full border border-gray-300 bg-primary placeholder:text-secondary rounded-none"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder={t("subject")}
              className="mt-1 p-3 w-full border border-gray-300 bg-primary placeholder:text-secondary rounded-none"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t("message")}
            className="mt-1 p-3 w-full h-64 border border-gray-300 bg-primary placeholder:text-secondary rounded-none"
          />

          {responseMsg && (
            <p className="text-green-600 font-semibold text-center">
              {responseMsg}
            </p>
          )}
          {errorMsg && (
            <p className="text-red-600 font-semibold text-center">{errorMsg}</p>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="px-10 py-3 bg-transparent text-secondary font-semibold border border-primary hover:bg-primary hover:text-white focus:outline-none rounded-none"
            >
              {t("submit")}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-12 w-full">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0868022303445!2d-122.41941568468137!3d37.77492977975911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df4bb0a7%3A0x7c4d9023e0c42a03!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1617162026335!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default MainSection;
