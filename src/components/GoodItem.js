import styled from "styled-components";

export default function GoodList(props){
    const {id ,name, description, price, full_background} = props;
    return(
        <div className="card" id={id}>
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={full_background}/>
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{name}<i
                    className="material-icons right">more_vert</i></span>
                <p><a href="#">Buy <i className={'material-icons'}>shop</i></a></p>
                <p><span>{price}</span></p>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{name}<i
                    className="material-icons right">close</i></span>
                <p>{description}</p>
            </div>
        </div>

)
}
const Content = styled.div`
  
`

