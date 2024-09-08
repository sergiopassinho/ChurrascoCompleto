import React, { useState } from 'react';
import './productsCard.css';
import { colors, typography, fontColors } from '../../styles/theme';

const products = [
  { name: 'Picanha', price: 'R$ 40,00 /KG', image: 'picanha.jpg' },
  { name: 'Patinho', price: 'R$ 40,00 /KG', image: 'patinho.jpg' },
  { name: 'Fraldinha', price: 'R$ 40,00 /KG', image: 'fraldinha.jpg' },
  { name: 'Costela', price: 'R$ 40,00 /KG', image: 'costela.jpg' },
  { name: 'Coxão Mole', price: 'R$ 40,00 /KG', image: 'coxaomole.jpg' },
  { name: 'Produto 6', price: 'R$ 00,00 /KG', image: 'produto6.jpg' },
  { name: 'Produto 7', price: 'R$ 00,00 /KG', image: 'produto7.jpg' },
  { name: 'Produto 8', price: 'R$ 00,00 /KG', image: 'produto8.jpg' },
  { name: 'Produto 9', price: 'R$ 00,00 /KG', image: 'produto9.jpg' },
  { name: 'Produto 10', price: 'R$ 00,00 /KG', image: 'produto10.jpg' },
  { name: 'Produto 11', price: 'R$ 00,00 /KG', image: 'produto11.jpg' },
  { name: 'Produto 12', price: 'R$ 00,00 /KG', image: 'produto12.jpg' },
];

const ProductsCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleProducts = products.slice(startIndex, endIndex);

  const nextSlide = () => {
      setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % totalPages
      );
  };

  const prevSlide = () => {
      setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
      );
  };

  return (
    <div className='carousel'>
      <button className='carousel-button' onClick={prevSlide}>
        &#10094;
      </button>

      <div className="product-container">
        {visibleProducts.map((product, index) => (
          <div key={index} className="product-card" style={{background: colors.neutralPrimary}}>
            <img src={`path/to/${product.name.toLowerCase()}.jpg`} alt={product.name} />
            <h2 style={{
                        color: fontColors.headingFont,
                        fontWeight: typography.headingPrimary.fontWeight,
                        fontFamily: typography.fontFamily,
                        fontSize: 25
                    }}>{product.name}</h2>
            <p style={{
                  color: colors.tertiary,
                  fontWeight: typography.headingPrimary.fontWeight
                }}
            >
              {product.price}
            </p>
          </div>
        ))}
      </div>

      <button className='carousel-button' onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};
  
export default ProductsCard;