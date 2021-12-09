import styled from "styled-components";
import {useState,useEffect} from "react";
import {API_KEY, API_URL} from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Card from "./Card";
import BasketLIst from "./BasketLIst";
import {toast} from "react-toastify";

const Shop = ()=>{
    const [goods, setGoods] = useState([]);
    const [loading,setLocading] = useState(true);
    const [order,setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false)
    const incrementQuantity = (itemId)=>{
        toast.success('Added successfully!');
        const newOrder = order.map(el=>{
            if(el.id===itemId){
                const newQuantity = el.quantity+1;
                return {
                    ...el,
                    quantity: newQuantity
                }
            }
            else{
                return el;
            }
        })
        setOrder(newOrder);
    }
    const decrementQuantity = (itemId)=>{
        toast.error('Removed successfully!');
        const newOrder = order.map(el=>{

            if(el.id===itemId){
                const newQuantity = el.quantity-1;
                return {
                    ...el,
                    quantity: newQuantity >0 ? newQuantity:0
                }
            }
            else{
                return el;
            }
        })
        setOrder(newOrder);
    }

    const addToBasket = (item)=>{
        toast.success('Goods added to basket successfully!');
        const itemIndex = order.findIndex(orderItem=>orderItem.id === item.id);
        console.log(item)
        console.log(order)
        if(itemIndex < 0 ){
            const newItem = {
                ...item,
                quantity:1
            }
            setOrder([...order,newItem]);
        }
        else{
            const newOrder = order.map((orderItem, index)=>{
                console.log(orderItem.quantity)
                if(index === itemIndex){
                    return{
                        ...orderItem,
                        quantity:orderItem.quantity+1
                    }
                }
                else
                    return orderItem
                   ;
            });
            setOrder(newOrder);
            console.log(order)
        }

    }
    const deleteFromBasket = (id)=>{
        const newOrder = order.filter(item=>item.id!==id);
        setOrder(newOrder)
        toast.error('Goods deleted from basket successfully!');
    }
    const handleBasketShow=()=>{
        setBasketShow(!isBasketShow);
        document.body.style.overflow= `${!isBasketShow ? 'hidden':'auto'}`;
    }
    useEffect(()=>{
        fetch(API_URL,{
            headers:{
                'Authorization':API_KEY
            },
        }).then(res=>res.json())
            .then(data=>{
                data.featured && setGoods(data.featured);
                setLocading(false);
            })
            .catch(error=>console.log(error))
    },[])
    return(
        <>
            <ShopContent>
                {
                    isBasketShow && <BasketLIst
                    order={order}
                    handleBasketShow={handleBasketShow}
                    deleteFromBasket={deleteFromBasket}
                    decrementQuantity={decrementQuantity}
                    incrementQuantity={incrementQuantity}
                />
                }
                <Card quantity={order.length} handleBasketShow={handleBasketShow}/>
                {loading ? <Loader/>: <GoodList products={goods} addToBasket={addToBasket} />}
            </ShopContent>
        </>

    )
}
const ShopContent = styled.div`
  width: 100%;
  min-height: calc(100vh - 134px);
  //display: grid;
  //grid-gap: 30px;
  //grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
`
export  default Shop;