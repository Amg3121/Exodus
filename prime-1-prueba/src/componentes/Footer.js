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
        <section class="contacto" id="contacto">
            <div class="container">
                <div class="row container-count">
                    <div class="col-md-4 mb-3 mb-md-0">
                      <div class="card card-body shadow-sm h-100 text-white background-azul">
                        <div class="display-4 contacto-count  mb-3" >150</div>
                        <div class="contacto-count-text">Los mejores destinos nacionales</div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0 ">
                      <div class="card card-body shadow-sm h-100 text-white background-azul-morado">
                        <div class="display-4 contacto-count  mb-3" >2,500</div>
                        <div class="contacto-count-text">Destinos internacionales somos especialistas</div>
                      </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0 ">
                      <div class="card card-body shadow-sm h-100 text-white background-azul-cafe">
                        <div class="display-4 contacto-count  mb-3" >365</div>
                        <div class="contacto-count-text">Salidas todo el año, decidete hoy</div>
                      </div>
                    </div>
          
                  </div>
            </div>



  



            <div class="container-template">
                
                <h3 class="title-section-black">Quiero recibir asesoria</h3>
                <h4 class="subtitle-section-black">Envianos tus datos y un ejecutivo se pondra en contacto contigo </h4>
                
                <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-9 col-xl-8">

                    <form method="POST" onSubmit={handleOnSubmit}>
                    <div class="form-row">
                   <div class="col-sm">
                            <div class="form-group">
                              <label class="label-contacto" for="contact-name">Nombre</label>
                              
                              <input type="text" name="name" class="form-control input-contacto" placeholder="Nombre*" required/>
                              
                            </div>
                          </div>
                          <div class="col-sm">
                            <div class="form-group">
                              <label class="label-contacto" for="contact-name">Email</label>
                              
                              <input type="email" name="email" class="form-control input-contacto" placeholder="Email*" required/>
                              
                            </div>
                          </div>
                          </div>
                          <div class="form-row">
                          <div class="col-sm">
                            <div class="form-group">
                              <label class="label-contacto" for="contact-email">Asunto</label>
                              <input type="text" name="affair" class="form-control input-contacto" placeholder="Asunto*" required/>
                              
                            </div>
                          </div>
                          <div class="col-sm">
                            <div class="form-group">
                              <label class="label-contacto" for="contact-phone">Teléfono</label>
                              <input type="text" name="phone" class="form-control input-contacto" placeholder="Telefono*" required/>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="label-contacto" for="contact-message">Mensaje</label>
                          <textarea rows="10" name="comments" class="form-control" required></textarea>
                   
                        </div>
                        <div class="form-row">
                        <input type="hidden" name="agency_mail" value={user.agency_mail} />
							<input type="hidden" name="agency_url" value={user.url} />
							<input type="hidden" name="recaptcha_response" id="recaptchaResponse"></input>
                        </div>
                        <div class="form-row">
                          <div class="col">
                            
                            <div class="d-flex justify-content-end">
                              <button class="btn-contacto btn-back-azul-cafe" type="submit" data-loading-text="Sending">
                             <span>Enviar información</span>
                                
                              </button>
                             
                            </div>
                          </div>
                        </div>
                </form>
                    
                    </div>
                  </div>
            
            </div>    
        </section>
           <footer>
        <section class="mapa background-azul">
            <div class="container-fluid padding-mapa">
                <section class="row no-gutters p-0">
                    <div class="col-lg-6">
                      <section>
                        <div class="container">
                          <div class="row justify-content-center">
                            <div class="col col-md-10 col-xl-9 text-center text-lg-left">
                              <h1 class="mapa-title mb-2 mt-5">Contactanos</h1>
                              
                                <p class="mapa-text">Teléfono: <a href={'tel:'+user.phone}>{user.phone}</a></p>
                              <p class="mapa-text">Teléfono: <a href={'tel:'+user.other_phone}>{user.other_phone}</a></p> 
                               
                                <p class="mapa-text">
                                    <a href={'mailto:'+user.agency_mail} target="_blank">{user.agency_mail}</a><br/>
                                    <a href={'mailto:'+user.other_agency_mail} target="_blank">{user.other_agency_mail}</a>
                                </p>
                            
                              <div class="d-flex flex-column justify-content-center justify-content-lg-start">
                                <div class="mx-3 mx-lg-0 mr-lg-5 mb-4">
                                  <h5 class="mapa-title mb-2 mt-5">Direccion</h5>
                                  <p class="mapa-text">{user.address} No. {user.outdoor_number} {user.interior_number} <br/>Col. {user.suburb} - C.P. {user.postal_code} <br/>{user.city_name}, {user.state_name}</p>
                                
                              <h5 class="mapa-title mb-2 mt-5">Direccion Sucursal</h5>
                                  <p class="mapa-text">Carril a Morillotla No. 5 <br/>Col. Emiliano Zapata - C.P. 72824 <br/>Puebla, Puebla</p>
                                </div>
                                
                              </div>

                              <div class="mt-3 mt-lg-0">

                                <ul class="list-unstyled d-flex mb-5">
                                { user.facebook == null ? '': <li class="mr-2">
                                    <a href={'https://www.facebook.com/'+user.facebook}  target="_blank">
                                    <i class="fab fa-facebook"></i>
                                    </a>
                                  </li> }
                                { user.twitter == null ? '': <li class="mr-2">
                                    <a href={'https://twitter.com/'+user.twitter} target="_blank" >
                                    <i class="fab fa-twitter"></i>
                                    </a>
                                  </li> }
                                
                                { user.instagram == null ? '': <li class="mr-2">
                                    <a href={'http://instagram.com/'+user.instagram} target="_blank" >
                                    <i class="fab fa-instagram"></i>
                                    </a>
                                  </li> }
                                { user.whatsapp == null ? '':<li class="mr-2"> 
                                <a href={'https://api.whatsapp.com/send?phone=+52'+user.whatsapp+'&amp;text='+user.name_agency+''} target="_blank" >
                                <i class="fab fa-whatsapp"></i></a> </li> }

                                { user.messenger == null ? '':  <li class="mr-2"> 
                                <a href={'https://m.me/'+user.messenger} target="_blank" >
                                  <i class="fab fa-facebook-messenger" aria-hidden="true">
                                    </i></a> </li> }
                                  
                                  
                                  
                                </ul>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                    <div class="col-lg-6">
                      <div class="divider divider-side d-none d-lg-block transform-flip-y background-azul"></div>
                      <iframe src={user.google_map} width="100%" height="100%" frameborder="0" class="footeriframe" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                  </section>
            </div>    
        </section>
        <section class="footer background-azul-cafe">
            <p class="meca text-center">
               Sitio desarrollado por <a href="https://www.meca.mx/" target="_blank">MECA</a> Agencia digital y diseño web (c) 2021
            </p>
        </section>

        </footer>
        </>
    )
}

export default Footer
