import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_v6kdf06";
const TEMPLATE_ID = "template_4c53386";
const USER_ID = "Qmyr4e4b7RrPEDXZB";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div id="Contact" className="contact-section">
      <h2>Contact</h2>
      <div className="contact-form">
        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="user_email"
            placeholder="Email here."
            required
            icon="mail"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Name"
            name="user_name"
            placeholder="Name here."
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="user_message"
            placeholder="Message here."
            required
          />
          <Button type="submit" color="green">
            Submit
          </Button>
        </Form>
      </div>
      <div className="contact-info">
        <p>
          <a href="emailto:jessiesgalindo@gmail.com" title="Email Me">
            <i className="fa-solid fa-envelope fa-2xl"></i>
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/jessie-galindo-09418092/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin-in fa-2xl" alt="LinkedIn"></i>
          </a>
        </p>
        <p>
          <a
            href="https://github.com/MrMessyFace"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fa-brands fa-github fa-2xl" alt="GitHub"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
