import React, { useContext } from 'react';
import {Container} from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);
    return (
        <Container>
            Hello World

            <Switch offColor={colors.primary} onColor={colors.secondary} height={ 10 } width={30} handleDiameter={20} onChange={toggleTheme} checked={title === "dark"} checkedIcon={false} uncheckedIcon={false}/>
        </Container>
    );
}

export default Header;