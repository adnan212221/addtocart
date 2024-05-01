import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toast  from 'react-hot-toast';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import '../style/Home.scss'
import { useDispatch } from 'react-redux';


 const Home = () => {

    const produclist = [
        {
            name : 'macbook',
            price: 12000,
            id: 'adn',
            img: img1,
        },
        {
            name: 'shoes',
            price: 2000,
            id: 'shk',
            img: img2
        },
       
   
    
    ]

    const dispatch = useDispatch();

  const addtocart = (option) => {
        console.log(option);
        toast.success('Added to cart'); 
        dispatch({
          type: 'ADD_TO_CART',
          payload: option
        })
        dispatch({
          type: 'calculateprice'
        })
    }

  return (
    <div className='maincard'>
{
    produclist.map(i=>
        (<BasicExample key={i.id} name={i.name} id={i.id} img={i.img} price={i.price} handler={addtocart} />
    ))
}
    </div>
  )
}


function BasicExample({name, img, price, id , handler}) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {price}
          </Card.Text>
          <Button variant="primary" onClick={()=> handler({id, price, name, quantity : 1, img})}>Add to Cart</Button>
        </Card.Body>
      </Card>
    );
  }


export default Home;



