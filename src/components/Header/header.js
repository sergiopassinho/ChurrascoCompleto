import './header.css';
import React from 'react';
import logoHeader from '../../assets/logoHeader.svg';
import cartHeader from '../../assets/cartHeader.svg';
import monitorHeader from '../../assets/monitorHeader.svg';
import Button from '../Button/button';
import Navbar from '../NavBar/navBar';
import { colors } from '../../styles/theme';

const Header = () => {
    return (
      <header className='custom-header' style={{background: colors.neutralPrimary}}> 
        <div className='custom-header-logo'>
            <div>
                <img src={logoHeader} alt="Logo do Projeto"  />
            </div>
            <div className='header-buttons'>
                <Button variant='secondary' size='large' icon={monitorHeader}>
                    Acesso ao Sistema
                </Button>
                <Button variant='secondary' size='large' icon={cartHeader}>
                    Faça seu pedido
                </Button>
            </div>
        </div>
        <div style={{background: colors.primary}}>
            <div className='nav-bar'>
                <Navbar />
                <div className="navbar-icon">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
      </header>
    );
  };
  
  export default Header;