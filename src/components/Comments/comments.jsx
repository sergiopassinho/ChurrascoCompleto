import './comments.css';
import React from 'react';
import { colors, typography } from '../../styles/theme.js';
import stars from '../../assets/stars.svg';

const Comments = () => {
    return (
        <section className='container' style={{background: colors.tertiary}}> 
            <div>
                <div className='comments-title'>
                    <h2 style={{
                            color: colors.neutralPrimary,
                            fontWeight: typography.headingPrimary.fontWeight,
                            fontFamily: typography.fontFamily,
                            fontSize: 40
                        }}>
                            Luiz Henrique
                    </h2>
                    <p style={{color: colors.secondary, fontWeight: typography.paragraphPrimary.fontWeight}}>Engenheiro</p>
                </div>

                <div className='comments-content'>
                    <h2 style={{
                            color: colors.neutralPrimary,
                            fontWeight: typography.headingPrimary.fontWeight,
                            fontFamily: typography.fontFamily,
                            fontSize: 40
                        }}
                    >
                        "As carnes são de uma qualidade excepcional, e o atendimento é sempre atencioso!"
                    </h2>
                    <img src={stars} alt='cinco estrelas'/>   
                </div>
            </div>
        </section>
    );
};

export default Comments;