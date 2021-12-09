import styled from "styled-components";

export default function BasketItem(props){
    const {id ,name , price, quantity, incrementQuantity,decrementQuantity} = props
    return(
        <Content className={'collection-item'}>
            {name} x{quantity} = {price*quantity}
            <span className={' secondary-content'} onClick={()=>props.deleteFromBasket(id)}>
                <i className={'material-icons red-text icon'}>delete</i>
            </span>
            <span className={'secondary-content plus-minus'}>
                <span className={' secondary-content'} onClick={()=>incrementQuantity(id)}>
                    <i className={'material-icons red-text icon'}>add</i>
                </span>
                <span className={' secondary-content'} >
                    <i className={'material-icons red-text icon'} onClick={()=>decrementQuantity(id)}>remove</i>
                </span>
            </span>

        </Content>
    )
}
const Content = styled.a`
  cursor: pointer;
  transition: all .4s;
  &:hover .icon{
    color:white!important; ;
  }
  &:hover {
    background: rgba(255, 255, 0, 0.7)!important;
    color:white!important;
  }
  .plus-minus{
    margin-right: 20px;
    span{
      margin-right: 5px;
    }
  }
`