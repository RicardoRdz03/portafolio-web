import React, { useState } from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_sal290j",
        "template_bm8dvrh",
        templateParams,
        "YOUR_USER_ID"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Correo enviado exitosamente");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Hubo un error al enviar el correo");
        }
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center my-2 mx-6">
        <Input
          clearable
          underlined
          fullWidth
          label="Nombre"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-center my-2 mx-6">
        <Input
          clearable
          underlined
          fullWidth
          label="Correo Electrónico"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-center my-2 mx-6">
        <Textarea
          name="message"
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-center mt-4">
        <Button type="submit" variant="ghost" color="warning">
          Enviar
          <i className="fi fi-ss-paper-plane-top pt-1"></i>
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
