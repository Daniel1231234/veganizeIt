import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';

export function FormWrapper(props) {
  return (
    <Form onSubmit={props.submit} className="" >
 
        <Form.Label>{props.label}</Form.Label>
        <Form.Control  size="sm" type="search"  ref={props.getRef} placeholder={props.placeholder} />
        <Form.Text className="text-muted">
          {props.muted}
        </Form.Text>

      <Button  size="sm" variant="success" type="submit" aria-expanded={props.openUl}  aria-controls="collapse" onClick={props.btnClick}>
        חפש
      </Button>
    </Form>
  );
}

