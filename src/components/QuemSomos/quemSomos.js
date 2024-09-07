import './quemSomos.css';
import React from 'react';
import quemSomos from '../../assets/quemSomos.png';
import grill from '../../assets/grill.svg';
import avatar from '../../assets/avatar.svg';
import barcode from '../../assets/barcode.svg'
import car from '../../assets/car.svg'
import store from '../../assets/store.svg'
import { colors, fontColors, typography} from '../../styles/theme';

const QuemSomos = () => {
    return (
        <section>
            <div className='welcome-message'>
                <h3 style={{
                        color: colors.tertiary, 
                        fontWeight: typography.headingPrimary.fontWeight, 
                        fontFamily: typography.fontFamily,
                        fontSize: 30
                    }}
                >
                        Bem-Vindos Ao Churrasco Completo
                </h3>
                <h1 style={{
                        color: fontColors.headingFont,
                        fontWeight: typography.headingPrimary.fontWeight,
                        fontFamily: typography.fontFamily,
                        fontSize: 40
                    }}
                >
                    Destino Ideal Para Prepara O Seu Churrasco
                </h1>
            </div>
         
            <div className='description'>
                <img className='img' src={quemSomos} alt='Imagem de uma carne temperada'/>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <p style={{color: fontColors, fontWeight: typography.headingSecondary.fontWeight, fontSize: '16'}}>Somos o frigorífico e comercio onde você encontra tudo para o seu churrasco. <br />
                        Oferecemos carnes nobres e uma variedade de produtos essenciais para preparar uma refeição completa. 
                        Combinamos qualidade e conveniência em um só lugar, para que você tenha a melhor experiência. 
                    </p>            
                    <div className="benefits">
                        <img src={grill} alt='Icone de churrasqueira' />
                        <div className='benefits-descriptions'>
                            <h3 style={{
                                    color: colors.tertiary,
                                    fontWeight: typography.headingPrimary.fontWeight
                                }}
                            >
                                Super Qualidade
                            </h3>
                            <p style={{color: fontColors, fontWeight: typography.paragraphPrimary.fontWeight}}>Cada corte de carne é rigorosamente selecionado para garantir frescor, maciez e sabor incomparável para garantir o mais alto padrão.</p>
                        </div>
                        
                        <img src= {avatar} />
                        <div className='benefits-descriptions'>
                            <h3 
                                style={{
                                    color: colors.tertiary}}
                            >
                                Clientes Satisfeitos
                            </h3>
                            <p style={{color: fontColors.paragraphFont, fontWeight: typography.paragraphPrimary.fontWeight}}>Oferecemos produtos de qualidade, com um atendimento excepcional e uma experiência de compra que supera as expectativas.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='characteristics'>
                <div className='characteristics-descriptions'>
                    <img src={barcode} alt='Icone código de barras'/>
                    <h3 style={{color: colors.tertiary, fontWeight: typography.headingSecondary.headingPrimary}}>Pedidos Online</h3>
                    <p style={{color: fontColors.paragraphFont, fontWeight: typography.paragraphPrimary.fontWeight}}>Faça seu pedido via WhatsApp. Basta enviar uma mensagem, escolher seus cortes e produtos preferidos</p>
                </div>

                <div className='characteristics-descriptions'>
                    <img src={car} alt='Icone caminhão fazendo entrega'/>
                    <h3 style={{color: colors.tertiary}}>Entrega Rápida</h3>
                    <p style={{color: fontColors.paragraphFont, fontWeight: typography.paragraphPrimary.fontWeight}}>Para sua conveniência, garantindo que seus produtos cheguem frescos e prontos para o preparo.</p>
                </div>

                <div className='characteristics-descriptions'>
                    <img src={store} alt='Icone mercado' />
                    <h3 style={{color: colors.tertiary}}>Loja Física</h3>
                    <p style={{color: fontColors.paragraphFont, fontWeight: typography.paragraphPrimary.fontWeight}}>Visite nossa loja física, onde você pode escolher pessoalmente entre uma vasta seleção de carnes e produtos.</p>
                </div>
            </div>
        
        </section>
    );
};

export default QuemSomos;