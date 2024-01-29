import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Main({user}) {

// -- Slide 1 -- //
const slides1 = {
	dots: false,
	autoplay: true,
	infinite: true,
	speed: 500,
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
	autoplay: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
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
        initialSlide: 2
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
	autoplay: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
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
        initialSlide: 2
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
	autoplay: true,
	infinite: true,
	speed: 500,
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
        initialSlide: 2
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
	autoplay: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
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
        initialSlide: 2
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
        <section class="agencia">
            <div class="container-template">
                <div class="row">
                    <div class="col-md-6">
                        <img src="https://exodus.b-cdn.net/exodus/prime/01/img/chica-sombrero.png" class="img-fluid" alt="agencia de viajes"/>
                    </div>
                    <div class="col-md-6">
                        <h1 class="title-h1">La mejor <br/> Agencia de<br/> Viajes</h1>
                        <h2 class="title-h2">Creamos experiencias inolvidables <br/> en México y el mundo</h2>
                        <a href="#contacto" class="btn-section-one btn-back-azul-cafe">Quiero recibir asesoría</a>
                    </div>
                </div>
            </div>

            <div class="divider background-azul"></div>
        </section>

        <section class="confiarnos background-azul">
            <div class="container-template text-center">
                <h3 class="title-section-white">
                    Razones para confiarnos tu viaje
                </h3>
                <h4 class="subtitle-section-white">Contar con la asesoría y el respaldo de un Agente de viajes, es garantía de:</h4>
                
                <div class="row items-confiarnos">

                    <div class="col-md-12 d-flex flex-wrap justify-content-center">
                       
                        <div class="m-2 text-dark">
                        <a href="" class="media rounded align-items-center pl-3 pr-4 pl-md-4 pr-md-5 py-2 link-confiranos">
                            <span class="span-confiarnos">
                                <img src="https://exodus.b-cdn.net/exodus/prime/01/img/planeacion.png" alt=""/>
                            </span> planeación sin contratiempos
                        </a>
                        </div>
                        <div class="m-2 text-dark">
                        <a href="" class="media rounded align-items-center pl-3 pr-4 pl-md-4 pr-md-5 py-2 link-confiranos">
                            <span class="span-confiarnos">
                                <img src="https://exodus.b-cdn.net/exodus/prime/01/img/asesoria.png" alt=""/>
                            </span> asesoría personalizada
                        </a>
                        </div>
                        <div class="m-2 text-dark">
                        <a href="" class="media rounded align-items-center pl-3 pr-4 pl-md-4 pr-md-5 py-2 link-confiranos">
                            <span class="span-confiarnos">
                                <img src="https://exodus.b-cdn.net/exodus/prime/01/img/precios-competitivos.png" alt=""/>
                            </span> precios competitivos
                        </a>
                        </div> 

                        
                        </div>

                        <div class="col d-flex flex-wrap justify-content-center">
                            <div class="m-2 text-dark">
                                <a href="" class="media rounded align-items-center pl-3 pr-4 pl-md-4 pr-md-5 py-2 link-confiranos">
                                    <span class="span-confiarnos">
                                        <img src="https://exodus.b-cdn.net/exodus/prime/01/img/optimizacion.png" alt=""/>
                                    </span> optimización de tu tiempo antes y durante el viaje
                                </a>
                                </div> 
                        </div>

                </div>
            </div>
        </section>


        <section class="back-banner">
        
            <div class="space-banner"></div>
                  
            <div class="divider divider-bottom bg-white"></div>

        </section>
        
        
        <section class="mas-vendidos">
            <div class="container-template-slide">
                <h3 class="title-section-black">Los más vendidos</h3>
                <h4 class="subtitle-section-black">Destinos de temporada irresistible</h4>
                <div class="vendidos owl-carousel owl-theme">
                <Slider {...slides2}>
        				{carousel2.map(c2 => (
                  
                  <div class="item mega__ofertas--item" key={c2.mt}> 
                    <a href={"detail/"+c2.mt+"/"+c2.name}>
                      <img src={c2.img} alt=""/>
                      
                    </a>
                    <div class="item-slide-info">
                            <small class="item-slide-days">{c2.days} DÍAS / {c2.nights} NOCHES</small> 
                            <div class="item-slide-price">
                                <span class="item-slide-since">DESDE</span>{c2.price_from}
                           </div><br/> 
                            <span class="item-slide-current">{c2.currency} {c2.room_type}+{c2.taxes}*</span>
                    </div>
                        
                  </div>

                ))}
                </Slider> 
                
			  
                 
                </div>
            </div>
        </section>


        <section class="carrusel">
            <div class="slide owl-carousel owl-theme">

            <Slider {...slides1}>
				{carousel1.map(c1 => (
					<div class="item item-info" key={c1.mt}>
					<a href={'/detail/'+c1.mt+'/'+c1.name}>
          <img class="slide_desktop img-fluid" src={c1.img1} alt=""/>
			  <img class="slide_movil img-fluid" src={c1.img2} alt=""/>
					</a>
					<div class="info-slide">
					
							<p class="slide-desde">desde {c1.price_from} <span class="slide-span">{c1.currency}</span> </p>
							<p class="slide-days"> {c1.days} dias / {c1.nights} noches </p>
							
					</div>
					</div>
				))}
				</Slider>
                
            </div>
        </section>

        <section class="los-favoritos">
            <div class="container-template-slide">
                <h3 class="title-section-black">Los favoritos</h3>
                <h4 class="subtitle-section-black">Nuestra mejor selección de destinos nacionales e internacionales</h4>
                <div class="favoritos owl-carousel owl-theme">
                <Slider {...slides3}>
        			{carousel3.map(c3 => (	
                
                <div class="item item-slide-content" key={c3.mt}>
                    <a href={'/detail/'+c3.mt+'/'+c3.name}>
                        <img src={c3.img} alt=""/>
                    </a>
                    <div class="item-slide-info">
                        <small class="item-slide-days">{c3.days} DÍAS / {c3.nights} NOCHES</small> 
                        <div class="item-slide-price">
                            <span class="item-slide-since">DESDE</span>{c3.price_from}
                      </div><br/> 
                        <span class="item-slide-current">{c3.currency} {c3.room_type}+{c3.taxes}*</span>
                    </div>
                </div>
                


					
					
					))}
					</Slider> 

                
                </div>
            </div>
        </section>

        <section class="salidas-programadas background-picture-azul">
            <div class="container-template-slide">
                <h3 class="title-section-white">Salidas Programadas</h3>
                <h4 class="subtitle-section-white">Satisfaccion total, todo lo que necesitas viene incluido</h4>
                <div class="row container-iconos-programadas">
                    <div class="col-md-12 d-flex flex-wrap justify-content-center">
                       
                        <div class="m-2 text-dark">
                        <a href="" class="media rounded align-items-center pl-3 pr-3 pl-md-3 pr-md-3 py-2 ">
                            <span class="span-confiarnos">
                                <img src="https://exodus.b-cdn.net/exodus/prime/01/img/vuelos.png" alt=""/>
                            </span> 
                        </a>
                        </div>
                        <div class="m-2 text-dark">
                        <a href="" class="media rounded align-items-center pl-3 pr-3 pl-md-3 pr-md-3 py-2 ">
                            <span class="span-confiarnos">
                                <img src="https://exodus.b-cdn.net/exodus/prime/01/img/hospedaje.png" alt=""/>
                            </span> 
                        </a>
                        </div>
                        <div class="m-2 text-dark">
                        <a href="" class="media rounded align-items-center pl-3 pr-3 pl-md-3 pr-md-3 py-2 ">
                            <span class="span-confiarnos">
                                <img src="https://exodus.b-cdn.net/exodus/prime/01/img/alimentos.png" alt=""/>
                            </span> 
                        </a>
                        </div>
                        
                        <div class="m-2 text-dark">
                            <a href="" class="media rounded align-items-center pl-3 pr-3 pl-md-3 pr-md-3 py-2 ">
                                <span class="span-confiarnos">
                                    <img src="https://exodus.b-cdn.net/exodus/prime/01/img/transportacion.png" alt=""/>
                                </span> 
                            </a>
                            </div>

                        
                        </div>
                </div>
                <div class="programadas owl-carousel owl-theme">

                <Slider {...slides5}>
        			{carousel5.map(c5 => (		
					
              <div class="item item-slide-content" key={c5.mt}>
              <a href={'/detail/'+c5.mt+'/'+c5.name}>
                  <img src={c5.img}  alt=""/>
              </a>
              <div class="item-slide-info">
                  <small class="item-slide-days">{c5.days} DÍAS / {c5.nights} NOCHES</small> 
                  <div class="item-slide-price">
                      <span class="item-slide-since">DESDE</span>{c5.price_from}
                </div><br/> 
                  <span class="item-slide-current">{c5.currency} {c5.room_type}+{c5.taxes}*</span>
              </div>
              </div>
              ))}
              </Slider> 

                </div>
            </div>
        </section>

        <section class="mega-ofertas mega-ofertas-back background-verano-azul">
            <div class="container-template-slide">
              <h3 class="title-section-white">{title4}</h3>
                <h4 class="subtitle-section-white">No te quedes con las ganas, viaja seguro al mejor precio</h4>
                <div class="temporada owl-carousel owl-theme">
                
                <Slider {...slides4}>
                  {carousel4.map(c4 => (
                    <div class="item item-slide-content item-border-white" key={c4.mt}>
                      <a href={"detail/"+c4.mt+"/"+c4.name}>
                        <img src={c4.img} alt=""/>
                      </a>
                    </div>
                  ))}
                  </Slider>                    
                    
                </div>
            </div>
            <div class="divider divider-bottom bg-white"></div>
        </section>

        <section class="tu-viaje-inicia">
            <div class="container-template">
                <div class="row">
                    <div class="col-md-4">
                        
                            

                                <h3 class="title-megatv">Tu viaje inicia aquí</h3>

                                <a href="" data-toggle="modal" data-target="#exampleModal" class="btn-megatv btn-back-azul-cafe">
                                    <span>
                                        <img src="https://exodus.b-cdn.net/exodus/prime/01/img/mega-tv.png" alt=""/>
                                    </span>MEGA TV
                                </a>
                                <a href="" data-toggle="modal" data-target="#exampleModal2" class="btn-megatv btn-back-azul-morado">
                                    <span>
                                        <img src="https://exodus.b-cdn.net/exodus/prime/01/img/mega-traveler.png" alt=""/>
                                    </span>MEGA traveler
                                </a>
                           
                            
                                
                                
                            
                       
                    </div>
                    <div class="col-md-4">
                        <img src="https://exodus.b-cdn.net/exodus/prime/01/img/smartphone.png" class="img-fluid" alt=""/>
                    </div>
                    <div class="col-md-4">
                        <p class="text-megatv"><strong> Consulta nuestras revistas  y videos </strong> e inspirate con las mejores opciones para tus próximas vacaciones.</p>
                        
                        <div class="alert back-respuesta rounded-lg d-inline-block mb-4">
                            <div class="d-flex align-items-center">
                              <div class="badge badge-pill"><img src="https://exodus.b-cdn.net/exodus/prime/01/img/cliente-opinion.png" alt=""/></div>
                              <div class="mx-3">"Servicio con rápida respuesta"</div>
                            </div>
                          </div>
                    </div>
                </div>
            </div>
        </section>


        <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">{megatitle}</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			

			<div class="container">

    <div class="row">
	{megatv.map(tv => (
		<div class="col-md-4" key={tv.order}>
        <div class="card mb-4 shadow-sm">
		    <img src={tv.img} class="img-fluid" />
            <div class="card-body">
	    <p class="card-text">{tv.title}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <a data-fancybox href={tv.link} class="btn btn-sm btn-outline-danger">Ver video</a>
                </div>
                
            </div>
            </div>
        </div>
        </div>
		))}
        

      </div>
    </div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
		</div>

    <div class="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-xl">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="exampleModalLabel">{traveler.title}</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			

			<div class="container">

    <div class="row">
    

    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">
          <h3 class="title-megatv">{traveler.title} - {traveler.date}</h3>
          <a href={traveler.url} target="_blank" class="btn-megatv btn-back-azul-cafe">
            <span><img src="https://exodus.b-cdn.net/exodus/prime/01/img/mega-tv.png" alt=""/>
            </span>VER</a>
          <a href={traveler.descarga} target="_blank" class="btn-megatv btn-back-azul-morado">
              <span><img src="https://exodus.b-cdn.net/exodus/prime/01/img/mega-traveler.png" alt=""/>
              </span>DESCARGAR</a>
        </div>
        <div class="col-md-6">
          <img src={traveler.img} class="img-fluid" alt=""/>
        </div>
      </div>
    </div>
      
        

      </div>
    </div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
		</div>

       

          <section class="quienes-somos" id="somos">
            <div class="container-template">
                <h3 class="title-section-black">Quienes somos</h3>
                <h4 class="subtitle-section-black"> </h4>
                <div class="container-somos">
                <div class="somos owl-carousel owl-theme">
                    <div class="item item-slide-content">
                      
                        <a href="">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="https://exodus.b-cdn.net/exodus/prime/01/img/img-quienes-somos.png" alt="" class="mainimg1"/>
                                </div>
                                <div class="col-md-8 p-l-somos">
                                  
  <h3 class="somos-title">{user.name_agency}</h3>
  
                                    
                                    <p class="somos-text">
				   
				   {!!user.description && (<p>{user.description.substr(0, 120)}</p>)} <a data-toggle="modal" data-target="#description">Leer más </a>  
			   </p>
                                    
                                    <p> <img src={user.logo} alt="" class="mainimg1"/></p>
                                </div>
                            </div>
                            
                        </a>
                        
                    </div>
                    
                    

                    

                </div>  
            </div> 
            </div>    
        </section>

        <div class="modal fade" id="description" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

					
			<p class="text-about" dangerouslySetInnerHTML={{__html: user.description}}></p>
    
    </div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
		</div>
</main>
        </>
    )
}

export default Main
