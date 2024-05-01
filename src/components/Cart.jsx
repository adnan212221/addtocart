import React from 'react'
import '../style/cart.scss'
import { AiFillDelete } from 'react-icons/ai'
import img1 from '../assets/img1.jpg'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const {cartItems, Subtotal, total, tax} = useSelector(state=> state.cart);
  const dispatch = useDispatch();

  const increment = (id) => {
   dispatch({
    type: 'ADD_TO_CART',
    payload:  {id},
   })
   dispatch({
    type: 'calculateprice'
  })
  }

  const decrement = (id) =>{
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    })
    dispatch({
      type: 'calculateprice'
    })

  }

  const deletehandler = (id) => {
    dispatch({
      type: 'deletefroncart',
      payload: id
    })
    dispatch({
      type: 'calculateprice'
    })
  }
  


  return (
    <div className='maincart1'>
      <div className="maincart2">
      {
        cartItems.length > 0 ? (cartItems.map(i => (
          <Cartitem img={i.img} name={i.name} price={i.price} qty={i.quantity}  increment={increment} decrement={decrement} deletehandler={deletehandler} id={i.id} key={i.id} />
        )) ): <h1>no item</h1>
      }
      </div>


      <aside>
      <div className="summary">
          <h3>Sub Total :  {Subtotal}</h3>
          <h3>Tax : {tax}</h3>
          <h3>Total : {total}</h3>
        </div>
      </aside>
    </div>
  )
}

const Cartitem = ({img, id, name, price, qty, increment, decrement, deletehandler}) =>(
<div className="maincart">
        <div className="cart">
          <img src={img} alt="" />
          <h3>{name}</h3>
          <h3>{price}</h3>
          <div className="inc">
          <button className='btn' onClick={()=> increment(id)} >+</button>
          <span>{qty}</span>
          <button className='btn' onClick={()=>decrement(id)}>-</button>
          <button className='btn' onClick={()=>deletehandler(id)}> <AiFillDelete/> </button>
          </div>

        </div>
        
      </div>
)

export default Cart