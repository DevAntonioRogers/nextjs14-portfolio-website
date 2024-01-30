"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { pending } = useFormStatus();

  const sendEmail = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "",
        "template_ow6w1jd",
        form.current!,
        "E3Mxy6-_5s96rYNfR"
      )
      .then((result) => {
        console.log(result.text);
        form.current?.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };
  return <div>ContactForm</div>;
};

export default ContactForm;
