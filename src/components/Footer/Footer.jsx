import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__main">
                <div className="footer__categories">
                    <div className="footer__categories_column">
                        <p>Разделы</p>
                        <li>Фильмы</li>
                        <li>Сериалы</li>
                        <li>Подборки</li>
                        <li>Титр</li>
                        <li>Трейлеры</li>
                    </div>
                    <div className="footer__categories_column">
                        <p>Устройства</p>
                        <li>Android</li>
                        <li>iPhone/iPad/iPod</li>
                        <li>LG Smart TV</li>
                        <li>Samsung Smart TV</li>
                        <li>Apple TV</li>
                    </div>
                    <div className="footer__categories_column">
                        <p>О нас</p>
                        <li>О компании</li>
                        <li>Размещение рекламы</li>
                        <li>Активация сертификата</li>
                        <li>Вакансии</li>
                        <li>Партнёрам</li>
                    </div>
                    <div className="footer__categories_column">
                        <p>Поддержка</p>
                        <li>test@email.com</li>
                        <li>8 999 999-99-99 Бесплатно по России</li>
                        <li>8 000 000-00-00 Для Москвы</li>
                        <li>Вопросы и ответы</li>
                        <li>Telegram</li>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom_content">
                    <div className="footer__bottom_left_side">
                        <p>Присоединяйтесь: </p>
                        <div className="footer__icons">
                            <FacebookIcon style={{color: '#c2bfcf'}}/>
                            <TwitterIcon style={{color: '#c2bfcf'}}/>
                            <InstagramIcon style={{color: '#c2bfcf'}}/>
                        </div>
                    </div>
                    <div className="footer__bottom-right_side">
                        <div className="footer__title">
                            <p>© 2021 ООО «Иви.ру»</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
};

export default Footer;