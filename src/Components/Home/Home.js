import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <HomeContainer>
                sd
           </HomeContainer>
        </>
    )
}

export default Home
const HomeContainer = styled.div`
background-color: red;
width:100%;
min-height:calc(100% - 60px);
@media(max-width:450px){
    margin-top: 50px;
}
`;