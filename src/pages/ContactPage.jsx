import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export function ContactPage() {
  const [status, setStatus] = useState("שלח");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("שולח...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(details);
    if (!res) setStatus("נסה שוב");
    setTimeout(() => {
      setStatus("שלח");
    }, 2000);
    setStatus("נשלח בהצלחה!");
  };

  return (
    <div className="contact-page">
      <div className="modal-container">
        <div className="desc">
          <h5 className="text-center p-3 bottom-divider">דברו איתי</h5>
        </div>
        <Form className="contact-form simple-form" onSubmit={submit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>שם:</Form.Label>
            <input type="text" id="name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>אימייל:</Form.Label>
            <input type="email" id="email" />
            <Form.Text className="text-muted">
              לא תקבלו הודעות ספאם! אולי רק סרטונים של בואו לאכול איתי
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>מה חסר לכם במאגר?</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button type="submit">{status}</Button>
        </Form>
        <Link to="/">חזרה לדף הבית</Link>
      </div>
    </div>
  );
}
