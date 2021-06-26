import React from 'react'
import styled from 'styled-components'
import SettingsLeftSide from '../Components/Settings/SettingsLeftSide'
import SettingsRightSide from '../Components/Settings/SettingsRightSide'
import { HomeContainer } from './Home'
const Settings = () => {
  
    return (
        <>
            <SettingContanier>
                <SettingBox>
                    <SettingsLeftSide />
                    <SettingsRightSide/>
                </SettingBox>
            </SettingContanier>
        </>
    )
}

export default Settings
const SettingContanier = styled(HomeContainer)``;
const SettingBox = styled.div`
width:100%;
height:100%;
display: flex;
align-items: center;
`;