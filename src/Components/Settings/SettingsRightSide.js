import React, { lazy } from 'react';
import styled from 'styled-components';
import { useData } from '../../Context/DataProvider';
import Edit from './SettingContent/Edit';
const Verify=lazy(()=>import('./SettingContent/Verify'))
// import Avatar from './Avatar';

const SettingsRightSide = () => {
	const SettingComponents = () => {
		const { change } = useData();
		switch (change) {
			case 'Edit':
				return <Edit />;
			case 'Verify':
				return <Verify/>;
			case 'Password':
				return 'Password';
			case 'Delete':
				return 'Delete';
			default:
				return <Edit />;
		}
	};
	return (
		<>
			<SettingDeatils>{SettingComponents()}</SettingDeatils>
		</>
	);
};

export default SettingsRightSide;
const SettingDeatils = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
