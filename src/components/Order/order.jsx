import './order.css';
import React from 'react';
import Button from '../Button/button';
import order from '../../assets/order.png';
import { colors, typography } from '../../styles/theme';

const Order = () => {
    return (
        <section className='order-container'>
            <div className='order-content'>
                <div className='order-content-descriptions'>
                    <h2 style={{color: colors.tertiary}}>Garanta O Melhor Para O Seu Churrasco</h2>
                    <h1 style={{
                            color: colors.headingFont,
                            fontWeight: typography.headingPrimary.fontWeight,
                            fontFamily: typography.fontFamily,
                            fontSize: 40
                        }}
                    >
                        Clique e Faça Seu Pedido pelo WhatsApp!
                        </h1>
                    <Button variant='secondary' size='large'>
                        Compre Agora
                    </Button>
                </div>

                <div>
                    <img src={order} />
                </div>
            </div>

        </section>
    );
};

export default Order;