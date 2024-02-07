import React from 'react'
function Footer({ user }) {
    return (
        <>
            <footer>
                <section className="seccionfooter back_planificar_verde">
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