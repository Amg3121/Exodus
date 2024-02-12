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
	autoplay: false,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 3,
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


    return (
        <>
          <main>
		
		<section className="slide-full">

			<div className="slide owl-carousel owl-theme">
			<Slider {...slides1}>
				{carousel1.map(c1 => (
					<div className="item item-info" key={c1.mt}>
					<a href={'detail/'+c1.mt+'/'+c1.name}>
						<img className="slide_desktop img-fluid" width="100%" src={c1.img1} alt=""/>
						<img className="slide_movil img-fluid" width="100%" src={c1.img2} alt=""/>
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
		


		<section className="mega-ofertas" id="ofertas">
			<div className="container">
				<div className="row mb-5">
					<div className="col-md-12 animate-left">
						<h3 className="text-center title-template">Mega Ofertas</h3>
						<h4 className="text-center title-section  mb-4">Seleccion de viajes</h4>
					</div>
				</div>

			
				<div className="top-ten owl-carousel owl-theme">
				    <Slider {...slides2}>
					{carousel2.map(c2 => (
							<div className="item main__sections-item">
							<a href={'detail/'+c2.mt+'/'+c2.name} className="main__sections-item-link">
								<img src={c2.img} alt="" className="img-slide" /></a>
								<h4 className="title title--color text-center mt-4 mb-5">
									<a href={'detail/'+c2.mt+'/'+c2.name} className="st-link c-main">{c2.name}</a>
								</h4>
								<div className="section-footer">
									<div className="st-flex space-between st-price__wrapper">
	
										<div className="right">
	
														<span className=" price--tour">
															<span className="text-lg lh1em item "> {c2.price_from} USD</span>                                                    </span>
										</div>
										<div className="st-btn--book">
											<a className="st-btn--book-link" href={'detail/'+c2.mt+'/'+c2.name}>VER PAQUETES</a>
										</div>
									</div>
								</div>
							
						</div>	
				   	))}
				    </Slider>
				</div>

			</div>
		</section>
		
	
		<section className="section-top-ten ">
			<div className="container overflow">
				<div className="row mb-5">
					<div className="col-md-12 animate-left">
						<h3 className="text-center title-template">Destinos</h3>
						<h4 className="text-center title-section mb-4">Top 10 ofertas</h4>
					</div>
				</div>
				
				<div className="offers owl-carousel owl-theme animate-bottom">
				<Slider {...slides5}>
				{carousel5.map(c5 => (		
					<div className="item item-slide-content">
						<div className="price-slide">
						<a href={'detail/'+c5.mt+'/'+c5.name}>
							<img src={c5.img} className="img-slide5" alt=""/>
						</a>
						</div>
						<div className="main__sections-info">
							<small className="main__sections-days">{c5.days} DÍAS / {c5.nights} NOCHES</small> 
							<div className="main__sections-price">
								<span className="main__sections-since">DESDE</span>{c5.price_from}
						   </div><br/> 
					   		<span className="main__sections-current">{c5.currency} {c5.room_type}+{c5.taxes}*</span>
				   		</div>
					</div>
								
					))}
			</Slider>		
					
				</div>
				
				</div>
			
		</section>

		<section>
			<div className="container">
				<div className="row">
				<div className="col-md-6">
					
					<div className="fecha">
						<h3 className=" title-template">Revista</h3>
				<h4 className=" title-section  mb-4 seleccion-viajes">{traveler.title}</h4>
					</div>
					<a href={traveler.url} className="button-descargar button-descargar-azul"> <span><i className="far fa-eye" aria-hidden="true"></i></span> Ver</a>
					<a href={traveler.descarga} className="button-descargar button-descargar-azul"><span><i className="fas fa-download" aria-hidden="true"></i></span> Descargar</a>
				</div>
				<div className="col-md-6">
					<img src={traveler.img} alt={traveler.title} className="img-fluid"/>
				</div>
			</div>
			</div>
		</section>

		<section  className="aboutus" id="about">
			<div className="container">
				<div className="row">
					<div className="st-about-us-left wpb_column column_container col-md-6"><div className="vc_column-inner wpb_wrapper"/>
							
					<div className=" ">
						<div className="wpb_wrapper">
							<div className="div1">
							<h3 className="title-template">Nosotros</h3>
							<h4 className="title-section mb-4 seleccion-viajes">{user.name_agency}</h4>
						</div>
				
						</div>
					</div>
					<div className="wpb_single_image wpb_content_element vc_align_left">
						
						<figure className="wpb_wrapper vc_figure">
							<div className="vc_single_image-wrapper   vc_box_border_grey">
                                <img className="vc_single_image-img " src="https://exodus.b-cdn.net/exodus/grupo-tours/03/img/chica.png" width="250" height="200" alt="Group 25" title="Group 25"/>

                                </div>
						</figure>
					</div>
				</div>
					
				
					<div className="st-about-us-right wpb_column column_container col-md-6"><div className="vc_column-inner wpb_wrapper">
							
					<div className="wpb_text_column wpb_content_element ">
						<div className="wpb_wrapper2">
						<p>		{!!user.description && (<p>{user.description.substr(0, 120)}</p>)} </p>
				
						</div>
					</div>
				
					<div className="wpb_text_column wpb_content_element ">
						<div className="wpb_wrapper">
							
							<p><a className="leermas" data-toggle="modal" data-target="#description" > QUIENES SOMOS / Leer más  </a></p>
							<p>REDES SOCIALES</p>
							<p>CHAT EN LINEA</p>
				
						</div>
					</div>
				
					
				</div>
					</div> 
				</div>
				</div> 
			
		</section>
		

		<section className="section-locks">
			<div className="container overflow">
				<div className="row mb-5">
					<div className="col-md-12 animate-left">
						<h3 className="text-center title-template">Los mas vendidos</h3>
							<h4 className="text-center title-section  mb-4 seleccion-viaje">Seleccion de viajes</h4>
					</div>
				</div>
				<div className="locks owl-carousel owl-theme animate-top">
				<Slider {...slides4}>
				{carousel4.map(c4 => (
				
	
					<div className="item item-slide-content">
						<div className="price-slide">
						<a href={'detail/'+c4.mt+'/'+c4.name}>
							<img src={c4.img} className="img-locks" alt=""/>
						</a>
						


						</div>

						
						
					</div>


									))}
									</Slider>	
					
				</div>	
				
			</div>
		</section>

		<section className="video-templete">
			<div className="container">
				<div className="row">
				<div className="col-md-6">
					
					<div className="fecha div2">
						<h3 className=" title-template">Videos </h3>
						<h4 className=" title-section  mb-4 seleccion-viajes">{megatitle}</h4>
						
					</div>
					<br/>
					<p className="p1">
					Video Minutos: La distancia no se cuenta cuando el destino es lo que cuenta. Cualquier que sea tu sueño de viaje, conocelo en nuestro catálogo en video. Los viajes comienzas en la imaginación
¿Que te parece tomar nuestro viaje? a tan solo un clic de distancia
					</p>
				</div>
				<div className="col-md-6">
				<a href="#" data-toggle="modal" data-target="#exampleModal">	<img src="https://exodus.b-cdn.net/exodus/grupo-tours/01/img/imagen-yt.png" alt="" className="img-fluid"/></a>
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

	

    </main>
        </>
    )
}

export default Main
