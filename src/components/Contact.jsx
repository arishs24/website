import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_f8fcdjw", "template_3pkzg9b", {
      from_name: form.name,
      to_name: "Arish",
      from_email: form.email,
      to_email: "arish.shahab1@gmail.com",
      message: form.message,
    }, "kRNZqCBtACCz1AxIZ").then(() => {
      setLoading(false);
      alert("Thank you. I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    }, (error) => {
      setLoading(false);
      console.error(error);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <div>
      <p className="text-[#b0aeac] text-[15px] leading-[1.85] mb-14">
        For research collaborations, project inquiries, or anything else.{" "}
        <a href="mailto:arish.shahab1@gmail.com"
          className="text-[#c8c2b8] hover:opacity-60 transition-opacity">
          arish.shahab1@gmail.com
        </a>
      </p>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <label className="text-[#505050] text-[11px] tracking-widest">Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange}
            placeholder="your name"
            className="bg-transparent border-b border-[#2e2c2a] text-[#c8c2b8] placeholder:text-[#363432] py-3 text-[15px] focus:outline-none focus:border-[#2e2e2e] transition-colors" />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[#505050] text-[11px] tracking-widest">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange}
            placeholder="your@email.com"
            className="bg-transparent border-b border-[#2e2c2a] text-[#c8c2b8] placeholder:text-[#363432] py-3 text-[15px] focus:outline-none focus:border-[#2e2e2e] transition-colors" />
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[#505050] text-[11px] tracking-widest">Message</label>
          <textarea rows={5} name="message" value={form.message} onChange={handleChange}
            placeholder="your message"
            className="bg-transparent border-b border-[#2e2c2a] text-[#c8c2b8] placeholder:text-[#363432] py-3 text-[15px] focus:outline-none focus:border-[#2e2e2e] transition-colors resize-none" />
        </div>

        <button type="submit"
          className="w-fit text-[13px] text-[#8a8886] hover:text-[#c8c2b8] transition-colors duration-200">
          {loading ? "Sending..." : "Send →"}
        </button>
      </form>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
