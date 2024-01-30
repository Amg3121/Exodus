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
			breakpoint: 1000,
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
			breakpoint: 1224,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 1000,
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
			breakpoint: 1224,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 1000,
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
	

	<section className="carrusel">
		
		<div className="slide">
		
				<Slider {...slides1}>
				{carousel1.map(c1 => (
					<div className="item item-info" key={c1.mt}>
					<a href={'/detail/'+c1.mt+'/'+c1.name}>
						<img className="slide_desktop img-fluid" src={c1.img1} width="100%"alt=""/>
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


	<section className="mas-vendidos">
		<div className="container-template-slide">
			<h3 className="subtitle-section-black color-azul-subtitle">Mega Ofertas</h3>
          <h4 className="title-section-black">Mega Ofertas</h4>
          <hr className="divider margin-divider-one color-azul-line"/>
		  <div className="vendidos owl-carousel owl-theme">
		  <Slider {...slides2}>
				{carousel2.map(c2 => (
			
				<div className="item item-slide-content" key={c2.mt}>
					<a href={'/detail/'+c2.mt+'/'+c2.name}>
						<img src={c2.img} alt=""/>
					
					<div className="item-slide-info">
						<small className="item-slide-days">{c2.days} DÍAS / {c2.nights} NOCHES</small> 
						<div className="item-slide-price">
							<span className="item-slide-since">DESDE</span>{c2.price_from}
					   </div><br/> 
						<span className="item-slide-current">{c2.currency} {c2.room_type}+{c2.taxes}*</span>
					</div>
					</a>
				</div>
		
				
					))}
					</Slider>
					</div>
		</div>
	</section>
	
	<section className="section-80 section-lg-120 section-agencia" id="about">
        <div className="container container-wide">
          <h3 className="subtitle-section-black color-azul-subtitle">Agencia de viajes en {user.state_name}, {user.city_name}</h3>
				<h4 className="title-section-black">{user.name_agency}</h4>
          <hr className="divider color-azul-line"/>
          <div className="row row-50">
            <div className="col-md-6 col-lg-4 icon-box view-animate text-center"><span className="icon icon-lg text-primary-grad icon-primary icon-circle mdi mdi-airplane color-azul-icon"></span>
              <h5 className="text-bold">Quienes<br className="d-none d-lg-block"/>Somos</h5>
              <hr className="divider-info color-azul-subline"/>
			   <p className="inset-xxl-left-40 inset-xxl-right-40">
				   
				   {!!user.description && (<p>{user.description.substr(0, 120)}</p>)} <a data-toggle="modal" data-target="#description">Leer más </a>  
			   </p>
              
            </div>
            <div className="col-md-6 col-lg-4 icon-box view-animate text-center"><span className="icon icon-lg text-primary-grad icon-primary icon-circle mdi mdi-account-multiple color-azul-icon"></span>
              <h5 className="text-bold">Redes Sociales <br/></h5>
              <hr className="divider-info color-azul-subline sociales-margin"/>
              <p className="inset-xxl-left-40 inset-xxl-right-40">Siguenos en nuestras redes sociales. ¡Dale Me Gusta!</p>
			  <p className="">
									{ user.facebook == null ? '' :  <span className="span-footer color-azul-light"><a href={'https://www.facebook.com/'+user.facebook} target="_blank" ><i className="fab fa-facebook"></i></a></span>
									 }
									{ user.twitter == null ? '' : <span className="span-footer color-azul-light"><a href={'https://twitter.com/'+user.twitter} target="_blank" ><i className="fab fa-twitter-square"></i></a></span>
									 }
									{ user.instagram == null ? '' : <span className="span-footer color-azul-light"><a href={'http://instagram.com/'+user.instagram} target="_blank" ><i className="fab fa-instagram" aria-hidden="true"></i></a></span> }
									
								</p>
            </div>
            <div className="col-md-6 col-lg-4 icon-box view-animate text-center"><span className="icon icon-lg text-primary-grad icon-primary icon-circle mdi mdi-wechat color-azul-icon"></span>
              <h5 className="text-bold">Chat en linea <br/></h5>
              <hr className="divider-info color-azul-subline sociales-margin"/>
              <p className="inset-xxl-left-40 inset-xxl-right-40">Estamos en línea, escríbenos para ayudarte a planear tu próximo viaje.</p>
			  <p>
			  { user.whatsapp == null ? '' : <span className="span-footer color-azul-light"><a href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp} target="_blank" ><i className="fab fa-whatsapp" aria-hidden="true"></i></a></span> }
			  </p>
            </div>
            
          </div>
        </div>
      </section>




	<section className="bg-image-01 context-dark section-70 section-xl-120">
        <div className="container parallax-scene-wrapper">
          <div className="row justify-content-sm-center">
            <div className="col-xl-12 col-lg-12 wow fadeInUp">
              <h1 className="text-spacing-60 text-uppercase text-ubold2 p">¿Buscas una experiencia autentica?</h1>
				<p className="big">Nosotros creamos tus vacaciones soñadas</p><a className="button button-template btn-azul-purple btn-azul-purple-hover" href={'tel:'+user.phone}>Llama ahora:{user.phone}</a>
            </div>
          </div>
        </div>
      </section>
	

	<section className="megatv">
		<h3 className="subtitle-section-black color-azul-subtitle">Videos que inspiran y enamoran</h3>
		<h4 className="title-section-black">Mega TV</h4>
		<hr className="divider color-azul-line"/>
		<div className="container">
			<div className="row">
				<div className="col-md-6 back-azul-verde padding-carrusel-videos">
					<h5 className="videos-online color-azul-line">Videos Online</h5>
					<p className="video-inspiran">Videos que <br/> inspiran.</p>
					<div className="online owl-carousel owl-theme">
					<Slider {...slideVideos}>
						{megatv.map(t1 => (
						
						<div className="item online-item">
						<a data-fancybox href={t1.video_download}>	<img src={t1.img} className="img-fluid" alt=""/> </a>
						</div>
						
						))}
						</Slider>
					</div>	
				</div>
				<div className="col-md-6">
					<div className="row text-center">
					{megatv.map((value, index) => (
					
					index <= 7 ? <div className="col-md-6 margin-bottom-video"><a data-fancybox href={value.video_download}><img src={value.img} className="img-fluid" alt=""/> </a> </div> : ''
						
					))}
						
					</div>
				</div>
			</div>
		</div>
	</section>

	<section className="traveler">
		<h3 className="subtitle-section-black color-azul-subtitle">Descrubre tu proximo destino</h3>
		<h4 className="title-section-black">Revista Traveler</h4>
		<hr className="divider color-azul-line"/>
		<div className="container">
			<div className="row">
			<div className="col-md-6">
				<span className="revista-online color-azul-line">Revista Online </span>
				<div className="fecha">
					{ traveler.title }<br/>
					{ traveler.date }
				</div>
				<a href={ traveler.url } target="_blank" className="button-descargar button-descargar-azul"> <span><i className="far fa-eye"></i></span> Ver</a>
				<a href={ traveler.descarga } target="_blank" className="button-descargar button-descargar-azul"><span><i className="fas fa-download"></i></span> Descargar</a>
			</div>
			<div className="col-md-6">
				<img src={ traveler.img } alt="" className="img-fluid"/>
			</div>
		</div>
		</div>
	</section>


	
	

	<section className="galeria">
		<div className="container-fluid no-padding">
		<h3 className="subtitle-section-black color-azul-subtitle">Las mejores ofertas</h3>
		<h4 className="title-section-black">Nuestros destinos</h4>
		<hr className="divider color-azul-line"/>

	<div className="row no-gutters">
	
		<div class="col-md-4 no-gutters">
		<div class="col-md-12 s">
		<a className="thumbnail-variant-4" data-toggle="modal" data-target="#favoritos"><img className="img-responsive center-block thumbnail-image" src="https://exodus.b-cdn.net/exodus/sky/01/img/london.png" alt=""/>
					<div className="caption">
					<h3 className="text-ubold btn-azul-purple">{title3}</h3>
					  
					</div></a>
		</div>

		<div class="col-md-12">
		<a className="thumbnail-variant-4" data-toggle="modal" data-target="#bloqueos"><img className="img-responsive center-block thumbnail-image" src="https://exodus.b-cdn.net/exodus/sky/01/img/vegas.png" alt=""/>
					<div className="caption">
					  <h3 className="text-ubold btn-azul-purple">Seccion de viajes</h3>
					</div>
		</a>
		</div>
		</div>

		<div class="col-md-4 no-gutters">

		<div class="col-md-12">
		<a className="thumbnail-variant-4" data-toggle="modal" data-target="#temporada"><img className="img-responsive center-block thumbnail-image" src="https://exodus.b-cdn.net/exodus/sky/01/img/fiordo.png" alt=""/>
					<div className="caption">
						<h3 className="text-ubold btn-azul-purple">{title4}</h3>
					</div>
		</a>
		</div>

		

		<div class="col-md-12">
		<a className="thumbnail-variant-4" data-toggle="modal" data-target="#ofertas"><img className="img-responsive center-block thumbnail-image" src="https://exodus.b-cdn.net/exodus/sky/01/img/iguazu.png" alt=""/>
					<div className="caption">
					  <h3 className="text-ubold btn-azul-purple">Mega Ofertas</h3>
					  
					</div></a>
		</div>
		</div>

		<div class="col-md-4 no-gutters">
			<div class="col-md-12">
				<a className="thumbnail-variant-4" data-toggle="modal" data-target="#temporada"><img className="img-responsive center-block thumbnail-image" src="https://exodus.b-cdn.net/exodus/sky/01/img/peru.png" alt=""/>
							<div className="caption">
								<h3 className="text-ubold btn-azul-purple">{title4}</h3>
							</div>
				</a>
			</div>
		<div class="col-md-12">
		<a className="thumbnail-variant-4" data-toggle="modal" data-target="#bloqueos"><img className="img-responsive center-block thumbnail-image" src="https://exodus.b-cdn.net/exodus/sky/01/img/paris.png" alt=""/>
					<div className="caption">
					<h3 className="text-ubold btn-azul-purple">{title5}</h3>
					  
					</div></a>
		</div>
		<div class="col-md-12">
		<a className="thumbnail-variant-4" href="/mexico"><img className="img-responsive center-block thumbnail-image" src="https://exodus.b-cdn.net/exodus/sky/01/img/cancun.png" alt=""/>
						<div className="caption">
						  <h3 className="text-ubold btn-azul-purple">cancún</h3>
						  
						</div></a>
		</div>
		</div>
		
	</div>



		
		</div>
		  
	
	
	
	</section>


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




		<div className="modal fade" id="favoritos" aria-labelledby="exampleModalLabel" aria-hidden="true">
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


		<div className="modal fade" id="temporada" aria-labelledby="exampleModalLabel" aria-hidden="true">
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



		<div className="modal fade" id="ofertas" aria-labelledby="exampleModalLabel" aria-hidden="true">
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




		<div className="modal fade" id="bloqueos" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

	

    </main>


        </>
    )
}

export default Main
