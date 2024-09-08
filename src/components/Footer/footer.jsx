import './footer.css';
import React from 'react';
import logoFooter from '../../assets/logoFooter.svg';
import logoClubTI from '../../assets/logoClubTI.svg';
import { colors, typography } from '../../styles/theme';

const Footer = () => {
    return (
        <footer className='footer-main-container' style={{background: colors.primary}}>
            <div className='footer-container' >
                <div className='footer-infos'>
                    <img src={logoFooter} alt='Logo Churrasco Completo' />
                    <nav>
                        <div style={{color: colors.neutralPrimary, fontFamily: typography.fontFamily}}>
                            <a>Quem Somos</a>
                            <span>|</span>
                            <a>Produtos</a>
                            <span>|</span>
                            <a>Nossa Localização</a>
                        </div>
                    </nav>
                </div>
            </div>

            <div className='footer-clubti-info'>
                <div className='footer-clubti-descriptions' style={{color: colors.neutralPrimary, fontFamily: typography.fontFamily}}>
                    <p>Churrasco Completo © 2024 Todos os direitos reservados</p>
                    <span>|</span>
                    <p>Desenvolvido por ClubTI</p>
                </div>
                <img src={logoClubTI} alt='Logo Club TI'/>
            </div>
        </footer>
        
    );
};

export default Footer;