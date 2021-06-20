import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <HomeContainer>
                <HomePostContainer>
dfg
                </HomePostContainer>
           </HomeContainer>
        </>
    )
}

export default Home
const HomeContainer = styled.div`
	background-color: red;
	width: 100%;
	height: calc(100% - 50px);
    display:flex;
    align-items: center;
    flex-direction: column;
    padding: 5px;
	@media (max-width: 450px) {
		height: calc(100% - 100px);
	}
`;
const HomePostContainer = styled.div`
width: 70vw;
background-color: aqua;

`;