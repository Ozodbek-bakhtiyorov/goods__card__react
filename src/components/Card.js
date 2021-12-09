import styled from "styled-components";

const Card = ({quantity=0,handleBasketShow = Function.prototype})=>{
    return(
        <Content className='btn btn-lg waves-light blue darken-3' onClick={handleBasketShow}>
            <i className='material-icons text-white card-icon'>add_shopping_cart</i>
            {quantity ? <span className='card-quantity'>{quantity}</span>:null}
        </Content>
    )
}
const Content = styled.button`
  width: 70px;
  height:70px;
  position: fixed;
 top: 3rem;
  right: 2rem;
    border-radius: 5px;
    box-shadow: 0 0 5px white!important;
  z-index: 5;
  .card-quantity,.card-icon{
    color: white!important;
  }
`
export default Card;