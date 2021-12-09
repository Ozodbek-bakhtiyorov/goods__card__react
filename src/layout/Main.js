import Header from "./Header";
import Footer from "./Footer";
import Shop from "../components/Shop";
import Loader from '../components/Loader';
const Main = ()=>{
    return(
        <div className={'container'}>
            <Header/>
            <Shop/>
            <Footer/>
        </div>
    )
}

export default Main;
