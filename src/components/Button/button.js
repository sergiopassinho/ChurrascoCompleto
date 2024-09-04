import React from 'react'
import { colors, buttonSizes } from '../../styles/theme.js';
import './button.css'

const Button = ({ children, onClick, variant = 'primary', size = 'medium'}) => {
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
            {children}
        </button>
    );
};

export default Button;