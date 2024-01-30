import React from 'react'
function Footer({ user }) {
    return (
        <>
            <section className="contacto" id="contacto">
                <div className="container-contacto">
                    <div className="contactanos">
                        <h4 className="title-contactanos">Contáctanos</h4>
                       {/*  <p className="parrafo-direccion"><span className="h3-title">Telefonos: </span>
                            <a href={'tel:' + user.phone} className="parrafo-direccion"> {user.phone}</a>, 
                            <a href={'tel:' + user.other_phone} className="parrafo-direccion"> {user.other_phone}</a>,
                            <a href='tel:4426904173' className="parrafo-direccion"> 4426904173</a>
                        </p>
                        <p className="parrafo-direccion"><span className="h3-title">Celular:</span> 
                            <a href='tel:4421578710' className="parrafo-direccion"> 4421578710</a>,
                            <a href='tel:4422703939' className="parrafo-direccion"> 4422703939</a>
                        </p>*/}
                    </div>
                    <div className="direccion">
                        <h4 className="title-direccion">Dirección</h4>
                        <p className="parrafo-direccion">{user.address} {user.outdoor_number}, Col. {user.suburb} CP. {user.postal_code}, {user.city_name}, {user.state_name} </p>
                        {/*<p className="parrafo-direccion"><span className="h3-title">MATRIZ:</span> {user.address} {user.outdoor_number}, Col. {user.suburb} CP. {user.postal_code}, {user.city_name}, {user.state_name} </p>
                        <p className="parrafo-direccion"><span className="h3-title">SUCURSAL:</span> Camino Real de Carretas 350-C, Col: Milenio III CP. 76060, {user.city_name}, {user.state_name}</p>*/}
                    </div>
                    <div className="formulario">
                        <form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php" className="formulario-form">
                            <input type="email" name="email" className="formulario-text" placeholder="Email*" required />
                            <input type="text" name="asunto" className="formulario-text" placeholder="Asunto*" required />
                            <input type="text" name="telefono" className="formulario-text" placeholder="Telefono / Celular*" required />
                            <input type="text" name="mensaje" className="formulario-text" placeholder="Mensaje*" required />
                            <input type="hidden" name="agencia" value={user.agency_mail} />
                            <input type="hidden" name="url" value={user.url} />
                            <input type="hidden" name="recaptcha_response" id="recaptchaResponse" />
                            <div className="container-button">
                                <button className="formulario-button " type="submit">
                                    <span className="formulario-span"><img className="formulario-imagen" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB2klEQVRIia3UO2gVQRTG8d9GTQQxQWz0BitBECGd2Bhja6M2PkAQH5WghZ1YKUawU7ARjJDSB0HQUrARLVSICgoSBQu1UFBDiI/4GIu7q5u92b2zufngsMyZc+Z/ZvbM0KFCCKWGQTzAm045ZYD1uIWQ2tSCgrAal/ErBwkYXxAQluMMpguAzG50ylmCo/hQWPhPYXx2voAEu/BKa/VP8KPgOzgfyBY8nAMQcAUTc/gH6wA24HYJIOB4xfyqGEADI1o7KbMZ7MapkvmptGFK1YthfK3YxSSGsL0iZrwM1I1j+FiRHPAWA1iXAsvixoqgBHvwug0g4DnWaN6fF21iz+VBW/EoAhBwDyvSwm5GxB/OQNcjAQFjWJoWdzIyZygDxRxVwEUsSiHb8Dsyrz8D9WCn5nv0vST4hP9ai8+RkOncgztLfTiEu5rv1Qz25+aX4VmNo35aBsqrHxtz4wTXakD+tXYIweIK0LvUMg1gU2VprZqoGa8n/SbYjEv4JLK12x1dXudxH0ewMvV1Y4fm9fhWAhqqC7qQS/6p2eqQLdKHA7hjdts3Yv5RmbpwNe8IIUxiFKNJkjSwF70hhPd1F8/vaLgAibKumsDHOF23SkSDXuIL9mn+o9r6CxUSpdRZAPRqAAAAAElFTkSuQmCC" alt="" /></span>enviar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mapa">
                        <iframe className="map" src={user.google_map} width="100%" height="515" aria-hidden="false"></iframe>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container-footer">
                    <div className="footer-logo">
                        <ul className="footer-logo-ul">
                            <li className="footer-logo-li"><a href="" className="footer-logo-a">
                                <img className="footer-logo-img" src={user.logo} alt="" /></a></li>
                            <li className="footer-logo-li">
                            <p className="footer-logo-p"> {user.address}, {user.outdoor_number} {user.suburb} CP. {user.postal_code} {user.city_name}, {user.state_name}</p>
                                {/*<p className="footer-logo-p"><span className="h4-title">MATRIZ:</span> {user.address}, {user.outdoor_number} {user.suburb} CP. {user.postal_code} {user.city_name}, {user.state_name}</p>
                                <p className="footer-logo-p"><span className="h4-title">sucursal:</span> Camino Real de Carretas 350-C, Col: Milenio III CP. 76060, {user.city_name}, {user.state_name}</p>*/}
                            </li>
                        </ul>
                    </div>
                    <div className="footer-redes">
                        <ul className="footer-redes-ul">
                            {user.facebook != null ? <li className="footer-redes-li">
                                <a href={'https://www.facebook.com/' + user.facebook} target="_blank" className="footer-redes-a">
                                    <img className="footer-redes-img" src="https://exodus.b-cdn.net/exodus/geo/japon/img/footer/facebook.png" alt="" />
                                </a>
                            </li> : ''}
                            {user.twitter != null ? <li className="footer-redes-li">
                                <a href={'https://twitter.com/' + user.twitter} target="_blank" className="footer-redes-a">
                                    <img className="footer-redes-img" src="https://exodus.b-cdn.net/exodus/geo/japon/img/footer/twitter.png" alt="" />
                                </a>
                            </li> : ''}
                            {user.instagram != null ? <li className="footer-redes-li">
                                <a href={'https://www.instagram.com/' + user.instagram} target="_blank" className="footer-redes-a">
                                    <img className="footer-redes-img" src="https://exodus.b-cdn.net/exodus/geo/japon/img/footer/instagram.png" alt="" />
                                </a>
                            </li> : ''}
                        </ul>
                    </div>
                </div>
            </footer>
            <section className="social ">
                <div className="container-social">
                    <div className="contactar">
                        <p className="contactar-parrafo">
                            contactar a {user.name_agency}
                        </p>
                        <a href={'tel:' + user.phone} className="contactanos-a contactanos-a--phone">
                            <span className="contactanos-span">
                                <img className="contactanos-img" src="https://exodus.b-cdn.net/exodus/geo/japon/img/footer/telefono.png" alt="" />
                            </span> {user.phone}
                        </a>
                        {user.other_phone != null ?
                            <a href={'tel:' + user.other_phone} className="contactanos-a contactanos-a--phone">
                                <span className="contactanos-span">
                                    <img className="contactanos-img" src="https://exodus.b-cdn.net/exodus/geo/japon/img/footer/telefono.png" alt="" />
                                </span> {user.other_phone}
                            </a>
                            : ''}
                        <a href={'mailto:' + user.agency_mail} target="_blank" className="contactanos-a contactanos-a--email">
                            <span className="contactanos-span">
                                <img className="contactanos-img" src="https://exodus.b-cdn.net/exodus/geo/japon/img/footer/correo.png" alt="" />
                            </span> {user.agency_mail}
                        </a>
                        {user.other_agency_mail != null ?
                            <a href={'mailto:' + user.other_agency_mail} target="_blank" className="contactanos-a contactanos-a--email">
                                <span className="contactanos-span">
                                    <img className="contactanos-img" src="https://exodus.b-cdn.net/exodus/geo/japon/img/footer/correo.png" alt="" />
                                </span> {user.other_agency_mail}
                            </a>
                            : ''}
                        {user.whatsapp != null ?
                            <a href={'https://api.whatsapp.com/send?phone=52' + user.whatsapp + '&amp;text=' + user.name_agency + ''} target="_blank" className="redes-a">
                                <img className="redes-img" src="https://exodus.b-cdn.net/exodus/geo/japon/img/video-quienes-somos/whatsapp-black.png" alt="" /></a>
                            : ''}
                        {user.messenger != null ?
                            <a href={'https://m.me/' + user.messenger + ''} target="_blank" className="redes-a">
                                <img className="redes-img" src="https://exodus.b-cdn.net/exodus/geo/japon/img/video-quienes-somos/messenger-black.png" alt="" />
                            </a>
                            : ''}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer