import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
    Link
  } from "react-router-dom"


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
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1300,
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
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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

    // carrusel videos


    const slideVideos = {
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
              slidesToShow: 3,
              slidesToScroll: 3,
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
    return (
        <>
               <main>
        
        <section className="somos">
            <div className="container-template">
                <div className="row">
                    <div className="col-lg-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="container-title-white">
                            <span className="back-title">SOMOS</span>
                            <h3 className="title-black">¿Quienes somos?</h3>
                        </div>
                        
                        <div className="line orange-dark"></div>
                        <div className="row">
                            <div className="col-xl-11">
                            <p className="about_text" dangerouslySetInnerHTML={{__html: user.description}}>
                                </p>
                        <a href="#contacto" className="btn-info-template button-white">más información</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <img src="https://exodus.b-cdn.net/exodus/magno/03/img/1_iMac.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>

        <section className="banners back-orange">
            <div className="way-point way-point-orange">
            <svg version="1.1" x="0px" y="0px" width="253px" height="38px" enable-background="new 0 0 253 38" >
                <path  fill-rule="evenodd" clip-rule="evenodd" d="M252,36.001C199.397,36.001,176,0,125.815,0                                       C76,0,52.988,36.001,0,36.001C4.336,40.465,273.563,36.001,252,36.001z"></path>
            </svg>
            <span className="icon"><i className="fas fa-chevron-down"></i></span>
            </div>
            <div className="container-template">
                <div className="container-title">
                    <span className="back-title-black back-text-title-orange">mega ofertas</span>
                    <h3 className="title-white">mega ofertas</h3>
                </div>
                <div className="line orange-color"></div>
                <div className="ofertas owl-carousel owl-theme">

                <Slider {...slides2}>
					{carousel2.map(c2 => (
								<div className="item item-info">
							<a href={'detail/'+c2.mt+'/'+c2.name} className="main__sections-item-link">
								<img src={c2.img} alt="" className="img-slide" /></a>
                                <div className="info orange-transparent">
                        
                        <div className="desde">desde {c2.price_from}<span className="current"> {c2.currency}</span>
                                 <div className="days">{c2.days} dias / {c2.nights} noches</div>
                                </div>
                            </div>
                     
							
						</div>	
				   	))}
				    </Slider>

                   
                   
                </div>

                <div className="container-title">
                    <span className="back-title-black back-text-title-orange">temporada</span>
                    <h3 className="title-white">ofertas de temporada</h3>
                </div>
                <div className="line orange-color"></div>
                <div className="temporada owl-carousel owl-theme">
                <Slider {...slides4}>
				{carousel4.map(c4 => (
				<div className="item item-info">
						<a href={'detail/'+c4.mt+'/'+c4.name}>
							<img src={c4.img} className="img-locks" alt=""/>
						</a>
				</div>

									))}
									</Slider>	
                </div>

                <div className="container-title">
                    <span className="back-title-black back-text-title-orange">bloqueos</span>
                    <h3 className="title-white">bloqueos</h3>
                </div>
                
                <div className="line orange-color"></div>
                <div className="bloqueos owl-carousel owl-theme">
                <Slider {...slides5}>
				{carousel5.map(c5 => (		
					 <div className="item item-info">
						<a href={'detail/'+c5.mt+'/'+c5.name}>
							<img src={c5.img} className="img-slide5" alt=""/>
						</a>
            <div className="info orange-transparent">
                        
                        <div className="desde">desde {c5.price_from}<span className="current"> {c5.currency}</span>
                                 <div className="days">{c5.days} dias / {c5.nights} noches</div>
                                </div>
                            </div>
                     
							
						</div>	
								
					))}
			</Slider>		
    
          
                       
                   
                </div>

                <div className="container-title">
                    <span className="back-title-black back-text-title-orange">favoritos</span>
                    <h3 className="title-white">favoritos</h3>
                </div>

                
                <div className="line orange-color"></div>
                <div className="favoritos owl-carousel owl-theme">
                    <Slider {...slides3}>
			{carousel3.map(c3 => (
			
			

            <div className="item item-info">
			<a href={"detail/"+c3.mt+"/"+c3.name} className="carousel-favorites__item-link">
				<img src={c3.img} alt="" className="carousel-favorites__item-image"/>
			</a>
      <div className="info orange-transparent">
                        
                        <div className="desde">desde {c3.price_from}<span className="current"> {c3.currency}</span>
                                 <div className="days">{c3.days} dias / {c3.nights} noches</div>
                                </div>
                            </div>
                     
							
						</div>	
			
	

			))}
		</Slider>


                </div>
                
                
            </div>
        </section>

        <section className="carrusel">
            <div className="slide owl-carousel owl-theme">
            <Slider {...slides1}>
			{carousel1.map(c1 => (
			
            <div className="item item-info"  key={c1.mt}>
			
			<a href={"detail/"+c1.mt+"/"+c1.name} className="carousel-main__item-link">
      <img className="slide_desktop img-fluid" width="100%" src={c1.img1} alt=""/>
						<img className="slide_movil" width="100%" src={c1.img2} alt=""/>
				
			</a>
            <div className="info-slide">
                        <p className="slide-desde">desde { c1.price_from }<span className="slide-span"> { c1.currency } </span> </p>
                        <p className="slide-days"> { c1.days } DÍAS / { c1.nights } NOCHES </p>
                        {/*<a href={"detail/"+c1.mt+"/"+c1.name} className="button-template button-orange">mas informacion</a>*/}
                        </div>
					

			</div>

			


			))}
		</Slider> 
               
            </div>
        </section>
        <section className="megatraveler">
               <div className="container-template">
                   <div className="row traveler">
                       <div className="col-md-6">
                        <div className="container-title-white">
                            <span className="back-title">REVISTA</span>
                            <h3 className="title-black">{traveler.title}</h3>
                        </div>
                        
                        <div className="line-dark orange-dark"></div>
                        <p className="paragraph-oswald-light">
                        Revista digital mensual con las mejores promociones de viajes de temporada
                        </p>
                       </div>
                       <div className="col-md-6 text-center">
                       <img src={traveler.img} alt={traveler.title} className="img-fluid"/>
                           <div className="buttons-download">
                           <a href={traveler.url} target="_blank" className="button-template button-orange"> <span><i className="far fa-eye" aria-hidden="true"></i></span> Ver</a>
                           <a href={traveler.descarga} target="_blank"  className="button-template button-orange"><span><i className="fas fa-download" aria-hidden="true"></i></span> Descargar</a> 
                           </div>
                       </div>

                   </div>
                   <div className="row megatv">
                    <div className="col-md-6">
                        <div className="container-title-white">
                            <span className="back-title">Megatv</span>
                            <h3 className="title-black">{megatitle}</h3>
                        </div>
                     
                     <div className="line-dark orange-dark"></div>
                     <p className="paragraph-oswald-light">
                     Video Minutos: La distancia no se cuenta cuando el destino es lo que cuenta. Cualquier que sea tu sueño de viaje, conocelo en nuestro catálogo en video. Los viajes comienzas en la imaginación ¿Que te parece tomar nuestro viaje? a tan solo un clic de distancia
                     </p>
                     </div>
                     <div className="col-md-6 text-center">
                         <img src="https://exodus.b-cdn.net/exodus/magno/01/img/3.jpg" className="img3 img-fluid" alt="" />
                         <div className="buttons-see text-center">
                             
                         <a href="#" data-toggle="modal" data-target="#exampleModal" className="button-template button-orange">ver</a>
                         </div>
                     </div>
                  </div>
               </div> 
        </section>
    </main>
    <div className="modal fade" id="description" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-xl">
			<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title" id="exampleModalLabel">Quienes Somos</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
			

			<div className="container">

					
			<p className="text-about" dangerouslySetInnerHTML={{__html: user.description}}></p>
    
    </div>

			</div>
			<div className="modal-footer">
				
			</div>
			</div>
		</div>
		</div>


		<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-xl">
			<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title" id="exampleModalLabel">{megatitle}</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
			

			<div className="container">

    <div className="row">
	{megatv.map(tv => (
		<div className="col-md-4" key={tv.order}>
        <div className="card mb-4 shadow-sm">
		    <img src={tv.img} className="img-fluid" />
            <div className="card-body">
	    <p className="card-text">{tv.title}</p>
            <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                <a data-fancybox href={tv.video_download} className="btn btn-sm btn-outline-danger">Ver video</a>
                </div>
                
            </div>
            </div>
        </div>
        </div>
		))}
        

      </div>
    </div>

			</div>
			<div className="modal-footer">
				
			</div>
			</div>
		</div>
		</div>
        </>
    )
}

export default Main