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
	width: 100%;
	height: calc(100% - 50px);
	@media (max-width: 450px) {
		height: calc(100% - 100px);
	}
`;