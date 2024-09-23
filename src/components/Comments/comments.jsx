import './comments.css';
import React, { useState } from 'react';
import { colors, typography } from '../../styles/theme.js';
import stars from '../../assets/stars.svg';

const Comments = () => {
    const [selectedProfile, setSelectedProfile] = useState(1);

    const profiles = [
        { id: 1, name: 'Luiz Henrique', title: 'Engenheiro', imgSrc: 'profile1.jpg', quote: 'As carnes são de uma qualidade excepcional, e o atendimento é sempre atencioso!' },
        { id: 2, name: 'Maria Silva', title: 'Nutricionista', imgSrc: 'profile2.jpg', quote: 'Produtos frescos e com ótimo atendimento!' },
        { id: 3, name: 'João Pereira', title: 'Chef de Cozinha', imgSrc: 'profile3.jpg', quote: 'Sempre encontro o que preciso, e a qualidade é incrível.' }
    ];

    const currentProfile = profiles.find(profile => profile.id === selectedProfile);

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
                            {currentProfile.name}
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
                        "{currentProfile.quote}"
                    </h2>
                    <img src={stars} alt='cinco estrelas'/>   
                </div>

                <div className="testimonial-images">
                    {profiles.map(profile => (
                        <img
                        key={profile.id}
                        src={profile.imgSrc}
                        alt={profile.name}
                        className={`testimonial-profile ${profile.id === selectedProfile ? 'selected' : ''}`}
                        onClick={() => setSelectedProfile(profile.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Comments;