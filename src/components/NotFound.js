import styled from "styled-components";

const NotFound = ()=>{
    return(
        <Content id={'app'}>
            <h1>OOPS! </h1>
            <h3>404 Nothing Not Found</h3>
            <button type='submit' className='btn wave-light'>Try Again</button>
        </Content>
    )
}
const Content = styled.form`
  h1{
    font-size: 150px;
  }
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export default NotFound;