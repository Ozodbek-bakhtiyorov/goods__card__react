import styled from "styled-components";

const Loader = ()=>{
    return(
        <LoaderContent>
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        </LoaderContent>
    )
}
const LoaderContent = styled.div`
  width: 100%;
`
export  default Loader;