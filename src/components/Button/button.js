import './button.css';
import React from 'react';
import { colors, buttonSizes } from '../../styles/theme.js';

const Button = ({ children, onClick, variant = 'primary', size = 'medium', icon}) => {
    const getButtonStyle = () => {
        const sizeStyles = buttonSizes[size];
      
        let backgroundColor;
        switch (variant) {
            case 'primary':
                backgroundColor = colors.primary;
            break;
            case 'secondary':
                backgroundColor = colors.secondary;
            break;
            case 'tertiary':
                backgroundColor = colors.tertiary;
            break;
            default:
                backgroundColor = colors.primary;
        }
    
        return {
            ...sizeStyles,
            backgroundColor
        };
    };

    return (
        <button
            className='custom-button'
            onClick={onClick}
            style={getButtonStyle()}
        >
            {icon && <img src={icon} alt="Ícone" />}
            {children}
        </button>
    );
};

export default Button;