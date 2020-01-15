import React, { useState } from "react";
import "./Contact.css";
import { Icon } from "antd";
import emailjs from "emailjs-com";
import { Button, Form, FormGroup, Input } from "reactstrap";

const ContactForm = props => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    let templateParams = {
      from_name: values.name,
      user_email: values.email,
      subject: values.subject,
      message: values.message
    };
    emailjs
      .send(
        "default_service",
        "template_QgwnQKbu",
        templateParams,
        "user_Lo9YgEokWTQHVXgT4fAPS"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    resetForm();
  };
  const resetForm = () => {
    setValues({ name: "", email: "", subject: "", message: "" });
  };
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <div>
      <h2 className="Contact-header"> Email Me </h2>
      <Form className="contact-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            id="Name"
            placeholder="NAME"
            className="contact-form__input"
            value={values.name}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            id="ContactFormEmail"
            placeholder="EMAIL"
            className="contact-form__input"
            value={values.email}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="subject"
            id="Subject"
            placeholder="SUBJECT"
            className="contact-form__input"
            value={values.subject}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="message"
            id="ContactFormText"
            placeholder="MESSAGE"
            className="contact-form__input"
            value={values.message}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </Form>
      <div className="phonecontainer">
        <div className="phonenumber">
          <h1>Give Me A Call</h1>
        </div>
        <div className="phones">
          <h3>
            <Icon type="phone" theme="twoTone" />
            347-748-3900
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

{
  /* //   return (
//     <div>
//       <div className="Contact">
//         <h2 className="Contact-header"> Contact </h2>

//         <p className="Contact-email">Email: RaymondNwambuonwo@gmail.com</p>
//         <a */
}
{
  /* //           href="mailto:RaymondNwambuonwo@gmail.com"
//           title="click to email me"
//           rel="noopener noreferrer"
//           className="Contact-icon-link"
//         >
//           <div>
//             <Icon type="mail" theme="twoTone" />
//           </div>
//         </a> */
}
{
  /* //         <p className="Contact-phone">Mobile Phone: (347)-748-3900</p>
//       </div> */
}
{
  /* //     </div> */
}
{
  /* //   );
// } */
}
