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
			breakpoint: 1224,
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
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1224,
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
				breakpoint: 1224,
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
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1224,
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
          <section className="back-head back-head-yellow">
			<div className="container">
				<div className="row">
					<div className="col-md-12 container-main-title text-center">
						 <h1  className="text-center main-title mb-1">Agencia de Viajes en {user.state_name}</h1>
                          <h2  className="text-center main-subtitle">{user.name_agency}</h2>
							
						<a href="#about" className="main-text">Empezar</a>
					</div>
				</div>
			</div>
		</section> 
        <section className="back-about back-about-yellow" id="about">
			<div className="container-template">
				<div className="row">
					<div className="col-md-12">
						<h3 className="text-center title-section mb-4">Quienes Somos...</h3>
					</div>
					<div className="col-md-12">
						 <p className="text-about" dangerouslySetInnerHTML={{__html: user.description}}></p>
					
					</div>
					
					<div className="col-md-12 text-center">
						<a href="#about" className="btn-about btn-back-yellow mt-4">Empezar</a>
					</div>
				</div>
			</div>
		</section>
        <section className="seasons">
			<div className="container-fluid no-gutters p-0">
				<div className="row no-gutters">
					<div className="col-lg-4 col-md-4 col-sm-4 col-12 seasons-item">
						    <img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/top-ten.webp" alt=""/>
						<div className="seasons-info">
							<div className="seasons-content">
								<h4 className="seasons-title">TOP 10 {title2}</h4>
								<a className="seasons-link btn-seasons-yellow" data-toggle="modal" data-target="#exampleModal2">ver ahora</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-12 seasons-item">
						<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/seasons.webp" alt=""/>
						<div className="seasons-info">
							<div className="seasons-content">
								<h4 className="seasons-title">{title4}</h4>
								<a href="#" className="seasons-link btn-seasons-yellow"  data-toggle="modal" data-target="#exampleModal3">ver ahora</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-12 seasons-item">
						<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/best-travels.webp" alt=""/>
						<div className="seasons-info">
							<div className="seasons-content">
								<h4 className="seasons-title">MEJOR SELECCIÓN<br/> DE VIAJES</h4>
								<a href="#" className="seasons-link btn-seasons-yellow"  data-toggle="modal" data-target="#exampleModal4">ver ahora</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section className="slide-full">
            <div className="slide">
            <Slider {...slides1}>
        {carousel1.map(c1 => (

        <div className="item item-info" key={c1.mt}>
        <a href={'/detail/'+c1.mt+'/'+c1.name}>
            <img className="slide_desktop img-fluid" src={c1.img1} alt=""/>
            <img className="slide_movil img-fluid" src={c1.img2} alt=""/>
        </a>
        <div className="info-slide">
        
            <p className="slide-desde">desde {c1.price_from} <span className="slide-span">{c1.currency}</span> </p>
            <p className="slide-days"> {c1.days} dias / {c1.nights} noches </p>
            
        </div>
        </div>   
        
            ))}
        </Slider>

                
                
                </div>

                </section>  

                <section className="megatraveler">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<img src={traveler.img} className="img-fluid" alt="" />
					</div>
					<div className="col-md-5">
						<div className="row">
							<div className="col-md-12">
								<h3 className="title-section text-right">{traveler.title}</h3>
								<h4 className="subtitle-section text-right mb-5">{traveler.date}</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 ">
								<p className="text-justify text-megatraveler">{traveler.desc}</p>
							</div>
							<div className="col-md-6 text-center">
								<a href={traveler.url} target="_blank" className="btn-back-yellow descargar">VER AHORA</a>
							</div>
							<div className="col-md-6 text-center">
								<a href={traveler.descarga} target="_blank" className="btn-back-yellow descargar">DESCARGAR</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-7">
						<div className="row  mt-megatraveler">
							<div className="col-md-12 ">
								<p className="text-justify text-megatraveler">
                                Video Minutos: La distancia no se cuenta cuando el destino es lo que cuenta. Cualquier que sea tu sueño de viaje, conocelo en nuestro catálogo en video. <strong>Los viajes comienzas en la imaginación</strong><br/>
								¿Que te parece tomar nuestro viaje? a tan solo un clic de distancia    
                                </p>
							</div>
							<div className="col-md-12 text-center">
								<a href="" className="btn-back-yellow descargar" data-toggle="modal" data-target="#exampleModal">VER AHORA</a>
							</div>
							
						</div>
					</div>
					<div className="col-md-5 pl-5">
						<h3 className="title-section text-right">MEGA TV</h3>
						<h4 className="subtitle-section mb-5 text-right">Videos que inpiran a viajar</h4>
						<img src="https://exodus.b-cdn.net/exodus/alcance/mega-tv.webp" className="img-fluid" alt="" />
					</div>
				</div>
			</div>
		</section>
        <section className="sections">
			<div className="container-fluid p-0">
				<div className="row no-gutters">
					<div className="col-lg-6 col-md-12 col-sm-12 seasons-item">
						<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/offers.webp" alt=""/>
						<div className="seasons-info">
							<div className="seasons-content">
								<h4 className="seasons-title">{title2}</h4>
								<a href="#" className="seasons-link btn-seasons-yellow"  data-toggle="modal" data-target="#exampleModal2">ver ahora</a>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<div className="row no-gutters">
							<div className="col-md-12 seasons-item">
								<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/summer.webp" alt=""/>
								<div className="seasons-info">
									<div className="seasons-content">
										<h4 className="seasons-title">{title4}</h4>
										<a href="#" className="seasons-link btn-seasons-yellow"  data-toggle="modal" data-target="#exampleModal3">ver ahora</a>
									</div>
								</div>
							</div>
							<div className="col-md-6 seasons-item">
								<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/locks.webp" alt=""/>
								<div className="seasons-info">
									<div className="seasons-content">
										<h4 className="seasons-title">{title5}</h4>
										<a href="#" className="seasons-link btn-seasons-yellow"  data-toggle="modal" data-target="#exampleModal4">ver ahora</a>
									</div>
								</div>
							</div>
							<div className="col-md-6 seasons-item">
								<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/favorites.webp" alt=""/>
								<div className="seasons-info">
									<div className="seasons-content">
                                        <h4 className="seasons-title">{title3}</h4>
										<a href="#" className="seasons-link btn-seasons-yellow"  data-toggle="modal" data-target="#exampleModal5">ver ahora</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        <section className="networks">
			<h3 className="text-center title-section mb-4">Llámanos</h3>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<img className="img-fluid" src="https://exodus.b-cdn.net/exodus/alcance/call-us.webp" alt=""/>
						<h4 className="networks-title color-yellow">llamanos</h4>
						<p className="text-networks">Estamos disponibles para que nos contactes vía telefónica. ¡Llama YA!</p>
						<span className="text-networks">
						 <a href={'tel:'+user.phone}> <strong >	{user.phone}</strong> </a>
						
							
						</span>
					</div>
					<div className="col-md-4">
						<img className="img-fluid" src="https://exodus.b-cdn.net/exodus/alcance/networks.webp" alt=""/>
						<h4 className="networks-title color-yellow">redes sociales</h4>
						<p className="text-networks">Siguenos en nuestras redes sociales. ¡Dale Me Gusta!</p>
						<ul>
							<li>

                            { user.facebook == null ? '': <a href={'https://www.facebook.com/'+user.facebook} target="_blank"  className="under-yellow networks-link"><i className="fab fa-facebook networks-icon"></i>{user.facebook}</a> }
						
                        
								
							</li>
							<li>
                            { user.instagram == null ? '': <a href={'http://instagram.com/'+user.instagram} target="_blank"  className="under-yellow networks-link"><i className="fab fa-instagram networks-icon"></i>{user.instagram}</a> }
						
								
							</li>
							<li>
                            { user.twitter == null ? '': <a href={'https://twitter.com/'+user.twitter} target="_blank"  className="under-yellow networks-link"><i className="fab fa-twitter networks-icon"></i>{user.twitter}</a> }
					
								
							</li>
							
						</ul>
					</div>
					<div className="col-md-4">
						<img className="img-fluid" src="https://exodus.b-cdn.net/exodus/alcance/chat.webp" alt=""/>
						<h4 className="networks-title color-yellow">chatea con nosotros</h4>
						<p className="text-networks">Estamos en línea, escríbenos para ayudarte a planear tu próximo viaje. </p>
						<ul>
							<li>
								
                            { user.whatsapp == null ? '': <a href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp} className="under-yellow networks-link" target="_blank"><i className="fab fa-whatsapp-square networks-icon"></i>{user.whatsapp}</a> }
							
									
								
							</li>
							
							
							
						</ul>
					</div>
				</div>
			</div>
		</section>    

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


        <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-xl">
			<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title" id="exampleModalLabel">{title2}</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
			

			<div className="container">

            <Slider {...slides2}>
            {carousel2.map(c2 => (
            <div className="item item-slide-content" key={c2.mt}>
                <div className="price-slide">
                <a href={'/detail/'+c2.mt+'/'+c2.name}>
                    <img src={c2.img} className="img-responsive" alt=""/>
                </a>
                    <p className="price-text back-green">${c2.price_from}</p>
                </div>
                <div className="item-slide-info">
                    <small className="item-slide-days">{c2.days} DÍAS / {c2.nights} NOCHES</small> 
                    <div className="item-slide-price">
                        <span className="item-slide-since">DESDE </span>${c2.price_from}
                </div><br/> 
                    <span className="item-slide-current">{c2.currency} {c2.room_type}+{c2.taxes}*</span>
                </div>
            </div>
            ))}
			</Slider>


    </div>

			</div>
			<div className="modal-footer">
				
			</div>
			</div>
		</div>
		</div>



        <div className="modal fade" id="exampleModal3" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-xl">
			<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title" id="exampleModalLabel">{title4}</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
			

			<div className="container">

            <Slider {...slides4}>
            {carousel4.map(c4 => (
            <div className="item item-slide-content" key={c4.mt}>
                <div className="price-slide">
                <a href={'/detail/'+c4.mt+'/'+c4.name}>
                    <img src={c4.img} className="img-responsive" alt=""/>
                </a>
                    <p className="price-text back-green">${c4.price_from}</p>
                </div>
                <div className="item-slide-info">
                    <small className="item-slide-days">{c4.days} DÍAS / {c4.nights} NOCHES</small> 
                    <div className="item-slide-price">
                        <span className="item-slide-since">DESDE </span>${c4.price_from}
                </div><br/> 
                    <span className="item-slide-current">{c4.currency} {c4.room_type}+{c4.taxes}*</span>
                </div>
            </div>
            ))}
			</Slider>


    </div>

			</div>
			<div className="modal-footer">
				
			</div>
			</div>
		</div>
		</div> 

        <div className="modal fade" id="exampleModal4" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-xl">
			<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title" id="exampleModalLabel">{title5}</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
			

			<div className="container">

            <Slider {...slides5}>
            {carousel5.map(c5 => (
            <div className="item item-slide-content" key={c5.mt}>
                <div className="price-slide">
                <a href={'/detail/'+c5.mt+'/'+c5.name}>
                    <img src={c5.img} className="img-responsive" alt=""/>
                </a>
                    <p className="price-text back-green">${c5.price_from}</p>
                </div>
                <div className="item-slide-info">
                    <small className="item-slide-days">{c5.days} DÍAS / {c5.nights} NOCHES</small> 
                    <div className="item-slide-price">
                        <span className="item-slide-since">DESDE </span>${c5.price_from}
                </div><br/> 
                    <span className="item-slide-current">{c5.currency} {c5.room_type}+{c5.taxes}*</span>
                </div>
            </div>
            ))}
			</Slider>


    </div>

			</div>
			<div className="modal-footer">
				
			</div>
			</div>
		</div>
		</div>


        <div className="modal fade" id="exampleModal5" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div className="modal-dialog modal-xl">
			<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title" id="exampleModalLabel">{title3}</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
			

			<div className="container">

            <Slider {...slides3}>
            {carousel3.map(c3 => (
            <div className="item item-slide-content" key={c3.mt}>
                <div className="price-slide">
                <a href={'/detail/'+c3.mt+'/'+c3.name}>
                    <img src={c3.img} className="img-responsive" alt=""/>
                </a>
                    <p className="price-text back-green">${c3.price_from}</p>
                </div>
                <div className="item-slide-info">
                    <small className="item-slide-days">{c3.days} DÍAS / {c3.nights} NOCHES</small> 
                    <div className="item-slide-price">
                        <span className="item-slide-since">DESDE </span>${c3.price_from}
                </div><br/> 
                    <span className="item-slide-current">{c3.currency} {c3.room_type}+{c3.taxes}*</span>
                </div>
            </div>
            ))}
			</Slider>


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
