import React from 'react'
function Footer({ user }) {
    return (
        <>
            <footer>
                <section className="seccionfooter back__footer_negro">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <a href="/" className="logo__footer"> <img src={user.logo} alt="" /></a>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="footer__title-h3">Agencia de viajes en {user.city_name}, {user.state_name}: {user.name_agency}</h3>
                                        <p className="footer__p">
                                            {user.address}, {user.outdoor_number}, {user.suburb} CP. {user.postal_code}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/**footer para atentas viajes 
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="footer__title-h3">MATRIZ</h3>
                                        <p className="footer__p">
                                            Esquina Calle 30 Norte, C. 32 Nte, S/N <br/>
                                            Col: Azteca - CP. 72310<br/>
                                            Puebla, Puebla<br/>
                                            Tel. Oficina: <a href='tel:2222366743'>2222366743</a><br/>
                                            <a href='mailto:viajesatenas@yahoo.com.mx'>viajesatenas@yahoo.com.mx</a>
                                        </p>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="footer__title-h3">SUCURSAL CHOLULA</h3>
                                        <p className="footer__p">
                                            {user.address}, {user.outdoor_number}<br/>
                                            Col: {user.suburb} - CP. {user.postal_code}<br/>
                                            {user.city_name}, {user.state_name}<br/>
                                            Tel. Oficina:: <a href={'tel:' + user.phone}>{user.phone}</a><br/>
                                            <a href={'mailto:' + user.agency_mail}>{user.agency_mail}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            */}
                            <div className="col-md-6">
                                <ul className="list-inline text-center list__ul-footer">
                                    {user.facebook != null ? <li className="list-inline-item">
                                        <a href={'https://www.facebook.com/' + user.facebook} target="_blank" className="link__networks-footer"><i className="fab fa-facebook"></i></a>
                                    </li> : ''}
                                    {user.whatsapp != null ? <li className="list-inline-item">
                                        <a href={'https://api.whatsapp.com/send?phone=52' + user.phone + '&amp;text=' + user.name_agency + ''} target="_blank" className="link__networks-footer"><i className="fab fa-whatsapp"></i></a>
                                    </li> : ''}
                                    {user.twitter != null ? <li className="list-inline-item">
                                        <a href={'https://twitter.com/' + user.twitter} target="_blank" className="link__networks-footer"><i className="fab fa-twitter"></i></a>
                                    </li> : ''}
                                    {user.instagram != null ? <li className="list-inline-item">
                                        <a href={'https://www.instagram.com/' + user.instagram} target="_blank" className="link__networks-footer"><i className="fab fa-instagram"></i></a>
                                    </li> : ''}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
export default Footer