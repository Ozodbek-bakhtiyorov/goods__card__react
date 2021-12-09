import styled from "styled-components";
import GoodItem from "./GoodItem";
import NotFound from "./NotFound";
export default function GoodList({products = [], addToBasket}){
    return(
        <Content>
            {!products.length
                ?
                <NotFound/>
                :
                products.map(item=>(
                    <GoodItem
                        key={item.id}
                        {...item}
                        addToBasket={addToBasket}
                    />
                ))}
        </Content>
    )
}
const Content = styled.div`
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: ${({products = []})=>(
      !products.length 
              ?
              'repeat(auto-fill,minmax(300px,1fr))' 
              :
              'auto'
  )};
`