import ListGroup from 'react-bootstrap/ListGroup';

const ItemList = ({ items }) => {
    console.log(items)
  return (
    <ListGroup style={{overflow:'auto', maxHeight:'300px'}}>
        {items.map((item) => <ListGroup.Item key={item._id}><strong>{item.name}</strong></ListGroup.Item>)}
    </ListGroup>
  )
};

export default ItemList;
