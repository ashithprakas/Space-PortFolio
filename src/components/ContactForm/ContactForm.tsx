import { FormEvent, useState } from "react";
import {
  ContactFormDetails,
  FormSubmissionStatus,
} from "../../models/ContactForm.models";
import { Col, Container, Row } from "react-bootstrap";
import { ContactImage } from "../../assets/images";
import { ContactFormFields } from "../../enumerations/ContactForm.enums";
import "./ContactForm.css";

const ContactForm = () => {
  const initalFormState: ContactFormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(initalFormState);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({} as FormSubmissionStatus);

  const onFormUpdate = (field: ContactFormFields, value: string) => {
    setFormDetails({
      ...formDetails,
      [field]: value,
    });
  };
  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setButtonText("Sending.....");

    //TODO:Setup Mail Server
    setTimeout(() => {
      setButtonText("Send");
      setStatus({ success: false, message: "SET THE EMAIL SERVER !!!" });
    }, 5000);
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col md={6}>
            <img src={ContactImage} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Send Me An Email</h2>
            <form onSubmit={onFormSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) =>
                      onFormUpdate(ContactFormFields.FIRSTNAME, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) =>
                      onFormUpdate(ContactFormFields.LASTNAME, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) =>
                      onFormUpdate(ContactFormFields.EMAIL, e.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) =>
                      onFormUpdate(ContactFormFields.PHONE, e.target.value)
                    }
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <textarea
                    rows={6}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) =>
                      onFormUpdate(ContactFormFields.MESSAGE, e.target.value)
                    }
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col sm={12} className="px-1">
                    <p
                      className={
                        status.success === false
                          ? "error-message py-4"
                          : "success-message message py-4"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactForm;
