import './location.css';
import React from 'react';
import Map from '../Map/map';
import location from '../../assets/location.svg';
import store from '../../assets/store.svg';
import clock from '../../assets/clock.svg';
import { colors, fontColors, typography} from '../../styles/theme';

const Localizacao = () => {
    return (
        <section className='section-location'>
            <div style={{textAlign: 'center'}}>
                <h2 style={{color: colors.tertiary}}>
                    Visite Nossa Loja
                </h2>
                <h1 style={{
                        color: fontColors.headingFont,
                        fontWeight: typography.headingPrimary.fontWeight,
                        fontFamily: typography.fontFamily,
                        fontSize: 40
                    }}
                >
                    O Sabor Do Churrasco Perfeito Começa Aqui
                </h1>
            </div>

            <div className='container-location'>
                <div className='map-location'>
                    <Map />
                </div>

                <div className='info-location'>
                    <div className='info-location-content'>
                        <img src={location} />
                        <div className='info-location-descriptions'>
                            <h3 style={{color: colors.tertiary}}>Nossa Localização</h3>
                            <p style={{color: fontColors.paragraphFont, fontWeight: typography.paragraphPrimary.fontWeight}}>Av. Principal, 54 - Vila Cafeteira, São José de Ribamar - MA</p>
                        </div>
                    </div>

                    <div className='info-location-content'>
                        <img src={store} />
                        <div className='info-location-descriptions'>
                            <h3 style={{color: colors.tertiary}}>Funcionamento</h3>
                            <p style={{color: fontColors.paragraphFont, fontWeight: typography.paragraphPrimary.fontWeight}}>De terça-feira a domingo</p>
                        </div>
                    </div>

                    <div className='info-location-content'>
                        <img src={clock} />
                        <div className='info-location-descriptions'>
                            <h3 style={{color: colors.tertiary}}>Horários</h3>
                            <p style={{color: fontColors.paragraphFont, fontWeight: typography.paragraphPrimary.fontWeight}}>Das 07:00 às 13:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Localizacao;