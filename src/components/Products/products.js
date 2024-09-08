import './products.css';
import React from 'react';
import Button from '../Button/button';
import meatsBackground from '../../assets/meatsBackground.png';
import { colors, typography } from '../../styles/theme.js';
import ProductsCard from '../ProductsCard/productsCard.js';

const Products = () => {
    return (
        <section className='theme-products'>
            <img className='image' src={meatsBackground} />
            <div className='content'>
                <h2 style={{color: colors.tertiary}}>Explore Nossa Seleção De Produtos</h2>
                <div className='button-whatsapp-line'>
                    <h1 style={{
                        color: colors.neutralPrimary,
                        fontWeight: typography.headingPrimary.fontWeight,
                        fontFamily: typography.fontFamily,
                        fontSize: 40
                    }}
                    >
                        Cortes Nobres e Itens Essenciais
                    </h1>
                    <Button variant='tertiary' size='medium'>
                        Pedido no WhatsApp
                    </Button>
                </div>

                <div>
                    <ProductsCard />
                </div>
            </div>
        </section>
    );
};

export default Products;