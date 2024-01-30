import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Main({user}) {
	// -- Slide 1 -- //
	const slides1 = {
		dots: false,
		infinite: true,
		autoplay:true,
		autoplayTimeout:100,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll:1,
				  infinite: true,
				  dots: false
				}
			  },
			  {
				breakpoint: 600,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  initialSlide: 1
				}
			  },
			  {
				breakpoint: 480,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1
				}
			  }
			]
		  };
	// Api
	
	const [carousel1, setCarrousel1] = useState([]);

    useEffect(() => {

    axios.get('https://www.megatravel.com.mx/developers/cafe-carousel/carrousel-main').then(res => {
		
		const carousel1 = res.data.collection;
		setCarrousel1(carousel1);
		
    });
	
	}, [])
	// -- Cierre Slide 1 -- //

	// -- Slide 2 -- //
	const slides2 = {
		dots: false,
		infinite: true,
		autoplay:true,
		autoplayTimeout:100,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 900,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	// Api
	const [title2, setTitle2] = useState([]);
	const [carousel2, setCarrousel2] = useState([]);

    useEffect(() => {

    axios.get('https://www.megatravel.com.mx/developers/cafe-carousel/megaofertas').then(res => {
		const title2 = res.data.title;
		const carousel2 = res.data.collection;
		setCarrousel2(carousel2);
		setTitle2(title2);
		
    });
	
	}, [])
	// -- Cierre Slide 2 -- //


	// -- Slide 3 -- //
	const slides3 = {
		dots: false,
		infinite: true,
		autoplay:true,
		autoplayTimeout:100,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 900,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	// Api
	const [title3, setTitle3] = useState([]);
	const [carousel3, setCarrousel3] = useState([]);

    useEffect(() => {

    axios.get('https://www.megatravel.com.mx/developers/cafe-carousel/favoritos').then(res => {
		const title3 = res.data.title;
		const carousel3 = res.data.collection;
		setTitle3(title3);
		setCarrousel3(carousel3);
    });
	
	}, [])
	// -- Cierre Slide 3 -- //


	// -- Slide 4 -- //
	const slides4 = {
		dots: false,
		infinite: true,
		autoplay:true,
		autoplayTimeout:100,
		slidesToShow: 5,
		slidesToScroll: 5,
		initialSlide: 0,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 900,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	// Api
	const [title4, setTitle4] = useState([]);
	const [carousel4, setCarrousel4] = useState([]);

    useEffect(() => {

    axios.get('https://www.megatravel.com.mx/developers/cafe-carousel/temporada').then(res => {
		const title4 = res.data.title;
		const carousel4 = res.data.collection;
		setTitle4(title4);
		setCarrousel4(carousel4);
    });
	
	}, [])
	// -- Cierre Slide 4 -- //


	// -- Slide 5 -- //
	const slides5 = {
		dots: false,
		infinite: true,
		autoplay:true,
		autoplayTimeout:100,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 900,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };
	// Api
	const [title5, setTitle5] = useState([]);
	const [carousel5, setCarrousel5] = useState([]);

    useEffect(() => {

    axios.get('https://www.megatravel.com.mx/developers/cafe-carousel/bloqueos').then(res => {
		const carousel5 = res.data.collection;
		setCarrousel5(carousel5);
		const title5 = res.data.title;
        setTitle5(title5);
    });
	
	}, [])
	// -- Cierre Slide 5 -- //

	// -- Mega traveler -- //
	const [traveler, setTraveler] = useState([]);

    useEffect(() => {

    axios.get('https://www.megatravel.com.mx/developers/cafe-carousel/revista-magazine').then(res => {
		const traveler = res.data;
		
		setTraveler(traveler);
    });
	
	}, [])
	// -- Fin Mega traveler -- //

	// -- Mega en Vivo -- //
	
	const [megatitle, setTitle] = useState([]);
	const [megatv, setMegatv] = useState([]);

    useEffect(() => {

    axios.get('https://www.megatravel.com.mx/developers/cafe-carousel/megatv').then(res => {
		const megatv = res.data.collection;
		setMegatv(megatv);
		const megatitle = res.data.title;
		setTitle(megatitle);
    });
	
	}, [])
	// -- Fin Mega en Vivo -- //
	
	

    return (
        <>
		
		<main>
        <section className="carrusel">
        <div className="carrusel__principal owl-carousel owl-theme">
            
			<Slider {...slides1}>
			{carousel1.map(c1 => (
			
			<div className="item item__carrusel__mega" key={c1.mt}> 
				<a href={"detail/"+c1.mt+"/"+c1.name}>
					<img className="slide_desktop img-fluid" src={c1.img1} alt=""/>
					<img className="slide_movil img-fluid" src={c1.img2} alt=""/>
				</a>
				<div class="main__carousel-owl-info">
					<div class="main__carousel-owl-price">
						<span class="main__carousel-owl-since">DESDE</span> {c1.price_from} 
					</div>
					<br/>
					<span class="main__carousel-owl-current">{c1.currency} {c1.room_type} + {c1.taxes}*</span>
				</div>
				
			</div>


			))}
		</Slider>
            
            
        </div>
        </section>

        <section className="somos " id="somos">
            <h1 className="text-center somos__h1">{/*Agencia de viajes en {user.state_name}, {user.city_name}:*/} {user.name_agency}</h1>
            <div className="container quienes__somos">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src="https://exodus.b-cdn.net/exodus/luxury/01/img/title01.png" alt=""/>
                        <h5 className="text-center somos__title">Quienes Somos</h5>
                        <p className="text-center somos__text">{user.description && user.description.substr(0, 100)+'...' }</p>
                        <p className="text-center"><a data-toggle="modal" data-target="#exampleModal" className="somos__link">[VER MÁS]</a></p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src="https://exodus.b-cdn.net/exodus/luxury/01/img/title02.png" alt=""/>
                        <h5 className="text-center somos__title">Redes Sociales</h5>
                        <ul className="list-inline text-center">

						{ user.facebook  != null ? <li className="list-inline-item">
                                <a href={'https://www.facebook.com/'+user.facebook} target="_blank" className="link__networks"><i className="fab fa-facebook-square"></i></a>
                            </li> : '' }
              
                { user.twitter != null ? <li className="list-inline-item">
                                <a href={'https://twitter.com/'+user.twitter} target="_blank"  className="link__networks"><i className="fab fa-twitter"></i></a>
                            </li> : '' }
                        { user.instagram != null ? <li className="list-inline-item">
                                <a href={'https://www.instagram.com/'+user.instagram} target="_blank" className="link__networks"><i className="fab fa-instagram"></i></a>
                            </li> : '' }

                            
                            
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src="https://exodus.b-cdn.net/exodus/luxury/01/img/title03.png" alt=""/>
                        <h5 className="text-center somos__title">Chat en linea</h5>
                        <ul className="list-inline text-center">

							{ user.messenger != null ? <li className="list-inline-item">
							<a href={'https://m.me/'+user.messenger} target="_blank" className="link__networks-msg"><i className="fab fa-facebook-messenger"></i></a>
                            </li> : '' }
							{ user.whatsapp != null ? <li className="list-inline-item">
							<a href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp+'&amp;text='+user.name_agency+''} target="_blank"  className="link__networks-msg"><i className="fab fa-whatsapp"></i></a>
                            </li> : '' }
                          
                           
                        </ul>
                    </div>
                </div>
            </div>
        </section>


		<div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-xl">
		<div class="modal-content">
			<div class="modal-header">
			<h5 class="modal-title" id="exampleModalLabel">Quienes Somos</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			</div>
			<div class="modal-body">
			<div class="container">
				<div class="row">
				
			
		<p dangerouslySetInnerHTML={{__html: user.description}}></p>
				

				</div>
			</div>
			</div>
			<div class="modal-footer">
			
			</div>
		</div>
		</div>
		</div>




        <section className="revista ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text__revista-p">{traveler.title} - {traveler.date}</p>
                        <div className="container__revista">
                            <img src={traveler.img} alt="" className="img-fluid"/>
                        </div>
                        <div className="container">
                            <ul className="list-inline text-center">
                                <li className="list-inline-item">
                                    <a href={traveler.url} target="_blank" className="btn__revista border-negro negro negrohover"> <span><i className="fas fa-eye"></i></span>  Ver</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href={traveler.descarga} target="_blank" className="btn__revista border-negro negro negrohover"><span><i className="fas fa-download"></i></span>  descargar</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="container__img-mapa">
                            <img src="https://exodus.b-cdn.net/exodus/luxury/01/img/mapa.png" alt="" className="img-fluid"/>
                        </div>
                        <div className="planificar back_planificar_negro text_planificar_negro">
                            <div className="line__planificar line_negro">
                            <h4 className="planificar__h4">{traveler.desc}</h4>
                             <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <a href="#contacto" className="contactame back__negro">Contáctame</a>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </section>

        <section className="seccionfavoritos">
            <h2 className="text-center general__h2">Favoritos de viajeros</h2>
            <div className="favoritos owl-carousel owl-theme">
			<Slider {...slides3}>
			{carousel3.map(c3 => (
			

			<div className="item" key={c3.mt}>
			<a href={"detail/"+c3.mt+"/"+c3.name}>
			<img src={c3.img} alt={c3.name}/>
			</a>
			<div className="mt">
				Mt - {c3.mt}
			</div>
			<div className="info__favoritos">
				<div className="dias back__items__negro">
				{c3.days} dias / {c3.nights} noches
				</div>
				<div className="desde back__items__negro">
					desde {c3.price_from} {c3.currency}
				</div>
			</div>
			</div>

			))}
		</Slider>
                
            </div>
        </section>

        <section className="seccionofertas">
            <h2 className="text-center general__h2">Ofertas de invierno</h2>
            <div className="ofertas owl-carousel owl-theme">
			<Slider {...slides4}>
			{carousel4.map(c4 => (

				<div className="item" key={c4.mt}> 
				<a href={"detail/"+c4.mt+"/"+c4.name}>
					<img src={c4.img} alt={c4.name}/>
				</a>
				</div>

					))}
			</Slider> 
            </div>
        </section>

        <section className="experiencia">
            <h3 className="text-center experiencia__h3">¿Buscas una experiencia auténtica?</h3>
            <p className="text-center experiencia__subtitle">Comunícate con nostros</p>
            <p className="text-center experiencia__text"> <a href={'tel:'+user.phone} className="experiencia__link">Llama ahora: {user.phone}</a> </p>
        </section>

        <section className="mapas " id="contacto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <iframe title="map" className="map" src={user.google_map} width="100%" height="563" aria-hidden="false"></iframe>
                    </div>
                    <div className="col-md-8">
                        <form method="post" action="https://www.scriptsexodus.exodus.mx/send-template.php" className="container__form">
                            <div className="form-group">
                              <input type="email" name="email" className="form-control input__form back__negro2" id="" placeholder="Email*" required/>
                              
                            </div>
                            <div className="form-group">
                                <input type="text" name="asunto" className="form-control input__form back__negro2" id="" placeholder="Asunto*" required/>
                                
                              </div>
                              <div className="form-group">
                                <input type="text" name="telefono" className="form-control input__form back__negro2" id="" placeholder="Telefono / Celular" required/>
                                
                              </div>
                            <div className="form-group">
                              
                              <input type="text" name="mensaje" className="form-control textarea__form back__negro2" placeholder="Mensaje"/>
                            </div>

							<input type="hidden" name="agencia" value={user.agency_mail}/>
                        <input type="hidden" name="url" value={user.url}/>
                        <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>
                            
                            <button type="submit" className="btn__form back__negro border-negro">Enviar</button>
                          </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="seccionvideos">
            <h4 className="text-center general__h2">Videos que inspiran</h4>
            <div className="videos owl-carousel owl-theme">
			<Slider {...slides4}>
			{megatv.map(tv => (
			
			<div className="item" key={tv.mt}>
			<a data-fancybox="true" href={tv.video_download}>	<img src={tv.img} alt=""/> </a>
			</div>
			

			))}
			</Slider> 
                
            </div>
        </section>

        <section className="seccionbloqueos">
            <h4 className="text-center general__h2">Bloqueos</h4>
            <div className="bloqueos owl-carousel owl-theme">
			<Slider {...slides5}>
					{carousel5.map(c5 => (
					
				<div className="item" key={c5.mt}>
				<a href={"detail/"+c5.mt+"/"+c5.name}>
				<img src={c5.img} alt={c5.name}/>
				</a>
				<div className="mt">
					Mt - {c5.mt}
				</div>
				<div className="info__favoritos">
					<div className="dias back__items__negro">
					{c5.days} dias /{c5.nights} noches
					</div>
					<div className="desde back__items__negro">
						desde {c5.price_from} {c5.currency}
					</div>
				</div>
				</div>

					))}
				</Slider> 
                

                
            </div>
        </section>
    </main>
       
        </>
    )
}

export default Main
