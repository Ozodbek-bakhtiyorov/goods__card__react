import styled from "styled-components";
import BasketItem from "./BasketItem";
const BasketLIst = ({order=[], handleBasketShow, deleteFromBasket, decrementQuantity,incrementQuantity})=>{
    const totalPrice = order.reduce((sum,p)=>sum+=p.price*p.quantity, 0);
    return(
        <Content onClick={handleBasketShow}>
            <div className="collection" onClick={e=>e.stopPropagation()} >
                <span className='btn gray darken-3 close' onClick={handleBasketShow}><i className='material-icons white-text'>close</i></span>
                <h1  className="collection-item">Basket</h1>
                <h4 className="collection-item">Total Cost:{totalPrice} </h4>
                <div className={'all-items'}>
                    {order.length ? order.map(item=>(
                        <BasketItem
                            key={item.id}
                            {...item}
                            deleteFromBasket={deleteFromBasket}
                            decrementQuantity={decrementQuantity}
                            incrementQuantity={incrementQuantity}
                        />
                    )):<h4 className="collection-item red-text">Basket Is Empty</h4>}
                </div>

            </div>
        </Content>
    )
}
const Content = styled.div`
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
 cursor: pointer;
  .collection {
    max-height:600px!important;
    position: relative;
    .close{
      position: absolute;
      right: 10px;
      top: 20px;
      cursor: pointer;
    }
   .all-items{
     max-height: 500px;
     overflow-y: auto;
   }
    background: #18181a;
    border-radius: 10px;
    border: none;
    .collection-item {
      background: transparent;
      margin-top: 20px;
    }
    
    h1 {
      padding: 20px 10px;
      text-align: center;
    }
    min-width: 400px;
    padding: 20px 10px;
  }
  @media screen and (max-width: 420px){
    &{
      .collection{
        min-width: 300px;
      }
    }
  }
`
export default BasketLIst;