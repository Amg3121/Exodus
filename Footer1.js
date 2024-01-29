import React from 'react'

function Footer({user}) {
  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {};
    //setLoading(true)
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });

   // console.log(formData);
    const respuesta = await fetch(`https://www.envios.exodus.mx/api/exodus`,
    {   
        
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            'Accept' : 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOGEyNmU4OGU1OWZhZjg2OGFkMTk5MjZlODI4YjI5NjA2Mzc4ZDk1MTk3YWE4NTc4MzdkMGRmMDllY2VlYjNjNTc1ZjJiNDA1MWM5MGU4YzgiLCJpYXQiOjE2NDE4Mzk3MjUuNjQ4MDA1LCJuYmYiOjE2NDE4Mzk3MjUuNjQ4MDExLCJleHAiOjE2NzMzNzU3MjUuNTMxMzYyLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.mwMdFMMRG2d-rQyB47RkFCxHjXYGfcNjnjnasueI6hEgTs0k0wMBCeKXShD0LnZ6ncqW1Eesueh5httoFPuC4-4Uo_A9quIT-v8SAoidyOKXYWnIRsK0oc5bIlHqSYyivEvr-ytW1vyFWQ22OUt_yw4bssSjwhnjFzRTi0wGN4amqk_wB8SGTKiV7rnk9140sOFBIRE2vNG5T2Wxaz0U9wP2X2nEgtFvy-yNctlE4f4fGUVR18WjIS-VfkN3SwWTh3z_thdxwtfLj5n7s2IejBzCq-MgAEtJwTMyoUS3xwJMjDfLizvbwY96lnXg5T-dh0ABx91ld9k2_lXqMBP7PyqmW1mpA7xjH94AXIkRvx8Tr5575tr6slFsWi1S7ysT3iFuw0xlv-mHecKdgsI1FnBV6H16TmEsajNUEOpuJ5sMP4AXGlaggrwQB7EFyW_esNb5RmhcvUvtXrytt05OXb-_hKsDX1gRcJCfqwtKAwn8qNCGrVmf5hO5jWntjpRuSRh-fdlN3l-Pd54kFOpsNJ3kdepX3O-u8PNLiK2hXGGrYWObuVXwBpT9UbiWI40NFrAmkWbpwClznbeP-M2e_QG2G1cGgsucyL67Bigawm-oF8jPdM-uW_RRsRdu608RchWz0t3Z9HaAbvGCUKdJhj3ZbDVQyn7CIuO5ogEIRhk',
            'Content-Type': 'application/json',
            "X-Requested-With": "XMLHttpRequest",
        },
    })
    const data = await respuesta.json()
    console.log(data)
   /* const dataSearch = await fetch("/api/search/", {
      method: "POST",
      body: JSON.stringify(formData),
    });*/

    /*const mydata = await dataSearch.json();
    setFetchedData2(mydata);
    console.log(mydata)
    setLoading(false)*/
    
  }
    return (

        <>
        <section className="contacto" id="contacto">
            <div className="container">
                <div className="row container-count">
                    <div className="col-md-4 mb-3 mb-md-0">
                      <div className="card card-body shadow-sm h-100 text-white background-azul">
                        <div className="display-4 contacto-count  mb-3" >150</div>
                        <div className="contacto-count-text">Los mejores destinos nacionales</div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0 ">
                      <div className="card card-body shadow-sm h-100 text-white background-azul-morado">
                        <div className="display-4 contacto-count  mb-3" >2,500</div>
                        <div className="contacto-count-text">Destinos internacionales somos especialistas</div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0 ">
                      <div className="card card-body shadow-sm h-100 text-white background-azul-cafe">
                        <div className="display-4 contacto-count  mb-3" >365</div>
                        <div className="contacto-count-text">Salidas todo el año, decidete hoy</div>
                      </div>
                    </div>
          
                  </div>
            </div>



  



            <div className="container-template">
                
                <h3 className="title-section-black">Quiero recibir asesoria</h3>
                <h4 className="subtitle-section-black">Envianos tus datos y un ejecutivo se pondra en contacto contigo </h4>
                
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-9 col-xl-8">

                    <form method="POST" onSubmit={handleOnSubmit}>
                    <div className="form-row">
                   <div className="col-sm">
                            <div className="form-group">
                              <label className="label-contacto" for="contact-name">Nombre</label>
                              
                              <input type="text" name="name" className="form-control input-contacto" placeholder="Nombre*" required/>
                              
                            </div>
                          </div>
                          <div className="col-sm">
                            <div className="form-group">
                              <label className="label-contacto" for="contact-name">Email</label>
                              
                              <input type="email" name="email" className="form-control input-contacto" placeholder="Email*" required/>
                              
                            </div>
                          </div>
                          </div>
                          <div className="form-row">
                          <div className="col-sm">
                            <div className="form-group">
                              <label className="label-contacto" for="contact-email">Asunto</label>
                              <input type="text" name="affair" className="form-control input-contacto" placeholder="Asunto*" required/>
                              
                            </div>
                          </div>
                          <div className="col-sm">
                            <div className="form-group">
                              <label className="label-contacto" for="contact-phone">Teléfono</label>
                              <input type="text" name="phone" className="form-control input-contacto" placeholder="Telefono*" required/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="label-contacto" for="contact-message">Mensaje</label>
                          <textarea rows="10" name="comments" className="form-control" required></textarea>
                   
                        </div>
                        <div className="form-row">
                        <input type="hidden" name="agency_mail" value={user.agency_mail} />
							<input type="hidden" name="agency_url" value={user.url} />
							<input type="hidden" name="recaptcha_response" id="recaptchaResponse"></input>
                        </div>
                        <div className="form-row">
                          <div className="col">
                            
                            <div className="d-flex justify-content-end">
                              <button className="btn-contacto btn-back-azul-cafe" type="submit"  >
                               
                                <span>Enviar información</span>
                              </button>
                            </div>
                          </div>
                        </div>
                </form>
                    {/*  <form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php" className="form-contacto">
                        <div className="form-row">
                          <div className="col-sm">
                            <div className="form-group">
                              <label className="label-contacto" for="contact-name">Email</label>
                              
                              <input type="email" name="email" className="form-control input-contacto" placeholder="Email*" required/>
                              
                            </div>
                          </div>
                          <div className="col-sm">
                            <div className="form-group">
                              <label className="label-contacto" for="contact-email">Asunto</label>
                              <input type="text" name="asunto" className="form-control input-contacto" placeholder="Asunto*" required=""/>
                              
                            </div>
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col-sm">
                            <div className="form-group">
                              <label className="label-contacto" for="contact-phone">Teléfono</label>
                              <input type="text" name="telefono" className="form-control input-contacto" placeholder="Telefono*" required=""/>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="label-contacto" for="contact-message">Mensaje</label>
                          <textarea rows="10" name="mensaje" className="form-control" required=""></textarea>
                   
                        </div>
                        <div className="form-row">
                        <input type="hidden" name="agencia" value={user.agency_mail} />
							<input type="hidden" name="url" value={user.url} />
							<input type="hidden" name="recaptcha_response" id="recaptchaResponse"></input>
                        </div>
                        <div className="form-row">
                          <div className="col">
                            
                            <div className="d-flex justify-content-end">
                              <button className="btn-contacto btn-back-azul-cafe" type="submit" data-loading-text="Sending">
                               
                                
                                <span>Enviar información</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>*/} 
                    </div>
                  </div>
            
            </div>    
        </section>
           <footer>
        <section className="mapa background-azul">
            <div className="container-fluid padding-mapa">
                <section className="row no-gutters p-0">
                    <div className="col-lg-6">
                      <section>
                        <div className="container">
                          <div className="row justify-content-center">
                            <div className="col col-md-10 col-xl-9 text-center text-lg-left">
                              <h1 className="mapa-title mb-2 mt-5">Contactanos</h1>
                              
                                <p className="mapa-text">Teléfono: <a href={'tel:'+user.phone}>{user.phone}</a></p>
                              <p className="mapa-text">Teléfono: <a href={'tel:'+user.other_phone}>{user.other_phone}</a></p> 
                               
                                <p className="mapa-text">
                                    <a href={'mailto:'+user.agency_mail} target="_blank">{user.agency_mail}</a><br/>
                                    <a href={'mailto:'+user.other_agency_mail} target="_blank">{user.other_agency_mail}</a>
                                </p>
                            
                              <div className="d-flex flex-column justify-content-center justify-content-lg-start">
                                <div className="mx-3 mx-lg-0 mr-lg-5 mb-4">
                                  <h5 className="mapa-title mb-2 mt-5">Direccion</h5>
                                  <p className="mapa-text">{user.address} No. {user.outdoor_number} {user.interior_number} <br/>Col. {user.suburb} - C.P. {user.postal_code} <br/>{user.city_name}, {user.state_name}</p>
                                
                              <h5 className="mapa-title mb-2 mt-5">Direccion Sucursal</h5>
                                  <p className="mapa-text">Carril a Morillotla No. 5 <br/>Col. Emiliano Zapata - C.P. 72824 <br/>Puebla, Puebla</p>
                                </div>
                                
                              </div>

                              <div className="mt-3 mt-lg-0">

                                <ul className="list-unstyled d-flex mb-5">
                                { user.facebook == null ? '': <li className="mr-2">
                                    <a href={'https://www.facebook.com/'+user.facebook}  target="_blank">
                                    <i class="fab fa-facebook"></i>
                                    </a>
                                  </li> }
                                { user.twitter == null ? '': <li className="mr-2">
                                    <a href={'https://twitter.com/'+user.twitter} target="_blank" >
                                    <i class="fab fa-twitter"></i>
                                    </a>
                                  </li> }
                                
                                { user.instagram == null ? '': <li className="mr-2">
                                    <a href={'http://instagram.com/'+user.instagram} target="_blank" >
                                    <i class="fab fa-instagram"></i>
                                    </a>
                                  </li> }
                                { user.whatsapp == null ? '':<li className="mr-2"> 
                                <a href={'https://api.whatsapp.com/send?phone=+52'+user.whatsapp+'&amp;text='+user.name_agency+''} target="_blank" >
                                <i class="fab fa-whatsapp"></i></a> </li> }

                                { user.messenger == null ? '':  <li className="mr-2"> 
                                <a href={'https://m.me/'+user.messenger} target="_blank" >
                                  <i className="fab fa-facebook-messenger" aria-hidden="true">
                                    </i></a> </li> }
                                  
                                  
                                  
                                </ul>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div className="col-lg-6">
                      <div className="divider divider-side d-none d-lg-block transform-flip-y background-azul"></div>
                      <iframe src={user.google_map} width="100%" height="100%" frameborder="0" className="footeriframe" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                  </section>
            </div>    
        </section>
        <section className="footer background-azul-cafe">
            <p className="meca text-center">
               Sitio desarrollado por <a href="https://www.meca.mx/" target="_blank">MECA</a> Agencia digital y diseño web (c) 2021
            </p>
        </section>

        </footer>
        </>
    )
}

export default Footer
