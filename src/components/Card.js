import styled from "styled-components";

const Cart = ({quantity=0})=>{
    return(
        <Content>
            <i className='material-icons'>add_shopping_cart</i>
            {quantity && <span className='card-quantity'>{quantity}</span>}
        </Content>
    )
}
const Content = styled.div`
  
`