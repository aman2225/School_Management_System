// import React from 'react';
import { Navbar, 
    Logo, 
    NavigationLinks,  
    ButtonsContainer, 
    NavLink, 
    LoginButton, 
    GuestButton, 
    HomeContainer, 
    SchoolInfo, 
    SchoolImage, 
    Title, 
    LoremTextContainer,
    AdminRegisterLink
} from '../styles/styles';
import {LoremIpsum} from 'lorem-ipsum';
import bg2 from '../assets/bg2.png';
import bg1 from '../assets/bg1.png';
import {  useNavigate } from 'react-router-dom';
// import ChooseUser from './ChooseUser';

const lorem = new LoremIpsum();

const Home =() => {
    const navigate =useNavigate();
    const LoremText =lorem.generateParagraphs(1);

    const handleLoginClick = () => {
        // navigate('/ChooseUser');
        navigate('/choose-user');
    };

    return (
        <>
            <Navbar>
                <Logo src={bg1} alt='Logo' />
                <NavigationLinks>
                    <NavLink href ='#'>About Us</NavLink>
                    <NavLink href ='#'>Products</NavLink>
                    <NavLink href ='#'>Contact Us</NavLink>
                </NavigationLinks>
                <ButtonsContainer>
                    <LoginButton onClick={handleLoginClick }>Sign In</LoginButton>
                    <GuestButton onClick={handleLoginClick }>Guest Mode</GuestButton>
                </ButtonsContainer>
            </Navbar>
            <HomeContainer>
                <SchoolInfo>
                    <Title>NEW MODERN INTERNATIONAL SCHOOL</Title>
                    <LoremTextContainer>
                        <p> {LoremText} </p>
                    </LoremTextContainer>
                    <AdminRegisterLink>Admin Register</AdminRegisterLink>

                </SchoolInfo>
                <SchoolImage src = {bg2} alt ="Pupils"/>
            </HomeContainer>
        </>
    )
};

export default Home;