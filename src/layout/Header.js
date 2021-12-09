import styled from "styled-components";


export default function Header (){
    return(
        <HeaderContent>
            <nav className={'green lighten-2 p'}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Shopping Card</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">React</a></li>
                        <li><a href="#">Styled Components</a></li>
                        <li><a href="#">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        </HeaderContent>
    )
}
const HeaderContent = styled.div`
  nav{
    padding: 0 10px;
  }
`