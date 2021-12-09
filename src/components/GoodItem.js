import styled from "styled-components";

export default function GoodItem(props){
    const {id ,name, description, price, full_background, addToBasket} = props;
    return(
        <Content className="card black " id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={full_background}/>
            </div>
            <div className="card-content">
                <span className="card-title activator white-text ">{name}<i
                    className="material-icons right">more_vert</i></span>
                <div className="buy">
                    <p ><button
                        style={{display:'flex',alignItems:'center'}}
                        className={' btn blue darken-3 '}
                        onClick={()=>addToBasket({id,name,price})}
                    >Buy <i style={{marginLeft:'10px'}} className={'material-icons white-text '}>shopping_cart</i></button></p>
                    <p className={'col s6'} ><span>{price}$</span></p>
                </div>
            </div>
            <div className="card-reveal green darken-2">
                <span className="card-title white-text text-lighten-1">{name}<i
                    className="material-icons right blue-text text-lighten-5">close</i></span>
                <p className={'blue-text text-lighten-5'}>{description}</p>
            </div>
        </Content>

)
}
const Content = styled.div`
  .card-content{
    margin-top: 10px;
    font-size: 30px;
    .buy{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      padding: 20px 0;
    }
  }
`