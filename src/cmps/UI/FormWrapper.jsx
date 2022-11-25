import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { AutoComplete } from './AutoComplete';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


export function FormWrapper(props) {
  
    const handleOnSelect = (item) => {
      // console.log('item => ', item)
      props.onSelect(item)
  }


  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
      </>
    )
  }

  return (
    <Form onSubmit={props.submit} className="" >
 
      <Form.Label>{props.label}</Form.Label>
      <ReactSearchAutocomplete
        items={props.items}
        autoFocus
        formatResult={formatResult}
        onSelect={handleOnSelect}
        placeholder={props.placeholder}
        onSearch={props.handleInputVal} />
        <Form.Text className="text-muted">
          {props.muted}
        </Form.Text>
    </Form>
  );
}

