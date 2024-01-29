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
		infinite: true,
		autoplay:true,
		autoplayTimeout:100,
		slidesToShow: 4,
		slidesToScroll:1,
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
		<div class="header__container--back">
            <div class="container-fluid container__text--title padding__rem">
           <div class="title__agency"> agencia de viajes</div>
           <h1 class="title__h1"> {user.name_agency} </h1>
           <p class="text__title"> en {user.state_name}</p>
           <p class="text__phone">  <a href={'tel:'+user.phone}> {user.phone}</a> 
		   { user.other_phone  != null ? <a href={'tel:'+user.other_phone}> {user.other_phone}</a>: '' }</p>
           <a href="#contacto" class="link__title red red__button"> Contacto </a>
            </div>
        </div>

<section class="container-fluid mega__ofertas container__padding">
        <h3 class="text-center h3__general">{title2}</h3>
        <h4 class="text-center h4__general"></h4>
        <div class="line red"></div>
        <div class="mega__ofertas--carrusel owl-carousel owl-theme padding__rem">
		<Slider {...slides2}>
			{carousel2.map(c2 => (
			
			<div class="item mega__ofertas--item" key={c2.mt}> 
			<a href={"detail/"+c2.mt+"/"+c2.name}>
				<img src={c2.img} alt=""/>
				
			</a>
			<div class="mega__ofertas--info red">
				<p class="mega__ofertas--desde">Desde {c2.price_from}<span class="mega__ofertas--span"> {c2.currency}</span></p>
				<p class="mega__ofertas--dias"> {c2.days} dias / {c2.nights} noches</p>
			</div>    
			</div>

			))}
		</Slider>            
        
        </div>
    </section>

    <section class="container-fluid ofertas__temporada container__padding">
        <h3 class="text-center h3__general">{title4}</h3>
        <h4 class="text-center h4__general"></h4>
        <div class="line red"></div>
        <div class="ofertas__temporada--carrusel owl-carousel owl-theme">
		<Slider {...slides4}>
			{carousel4.map(c4 => (

		<div class="item_ofertas__temporada" key={c4.mt}> 
		<a href={"detail/"+c4.mt+"/"+c4.name}>
			<img src={c4.img} alt={c4.name}/>
		</a>
		</div>

			))}
		</Slider> 
                        
        </div>
    </section>

    <section class="container-fluid carrusel__mega container__padding">
        <div class="carrusel__mega--carrusel owl-carousel owl-theme">
		<Slider {...slides1}>
			{carousel1.map(c1 => (
			
			<div class="item item__carrusel__mega" key={c1.mt}> 
				<a href={"detail/"+c1.mt+"/"+c1.name}>
				<img className="slide_desktop img-fluid" src={c1.img1} alt=""/>
			  <img className="slide_movil img-fluid" src={c1.img2} alt=""/>
				</a>
				<div class="info__carrusel__mega">
					
					<div class="desde__carrusel__mega">
						Desde {c1.price_from}  <span class="span__carrusel__mega">{c1.currency}</span>
					</div>
					<div class="dias__carrusel__mega">
					{c1.days} dias / {c1.nights} noches
					</div>
					
				</div>
			</div>


			))}
		</Slider>
                        
           
        </div>
    </section>

    <section class="megatraveler red__strong">
        <div class="container-fluid container__padding">
        <div class="padding__rem">
        <div class="row">
            <div class="col-md-6">
                
                <h4 class="megatraveler__h4">{traveler.title} {traveler.date} <div class="megatraveler__vertical"></div></h4>
                
                <p class="megatraveler__p">
                    {traveler.desc}
                </p>
                <div class="megatraveler__container--buttons">
                    <a href={traveler.url} target="_blank" class="megatraveler__button red red__button">ver</a>
                    <a href={traveler.descarga} target="_blank" class="megatraveler__button red red__button">descargar</a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="megatraveler__revista">
                    <img src={traveler.img} alt="" class="img-fluid"/>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>

    <section class="mega__tv red">
        <div class="container-fluid container__padding">
            <div class="padding__rem">
            <div class="row">
                <div class="col-md-6">
                    <h4 class="mega__tv__h4">mega tv <div class="mega__tv__vertical"></div></h4>
                    <p class="mega__tv__p">
					Video Minutos: La distancia no se cuenta cuando el destino es lo que cuenta. Cualquier que sea tu sueño de viaje, conocelo en nuestro catálogo en video. <strong>Los viajes comienzas en la imaginación</strong><br/>¿Que te parece tomar nuestro viaje? a tan solo un clic de distancia
                    </p>
                    <div class="mega__tv__container--buttons">
                        <a data-toggle="modal" data-target="#exampleModal" target="_blank" class="mega__tv__button red__strong red__button2">ver</a>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mega__tv__video">
                    <img src="https://exodus.b-cdn.net/exodus/panorama/03/img/MTV.png" alt="" class="img-fluid"/>
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
			
			<div class="col-md-4">
					<div class="card mb-4 shadow-sm">
						<img src={tv.img} class="img-fluid"/>
							<div class="card-body">
								<p class="card-text">{tv.title} </p>
								<div class="d-flex justify-content-between align-items-center">
									<div class="btn-group">
										<a data-fancybox="true" href={tv.video_download} class="btn btn-sm btn-outline-danger">Ver video</a>
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
			<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			<button type="button" class="btn btn-primary">Save changes</button>
			</div>
		</div>
		</div>
		</div>

    <section class="container-fluid favoritos container__padding">
        <h3 class="text-center h3__general">{title3}</h3>
        <h4 class="text-center h4__general"></h4>
        <div class="line red"></div>
        <div class="favoritos--carrusel owl-carousel owl-theme padding__rem">
		
		<Slider {...slides3}>
			{carousel3.map(c3 => (
			
			<div class="item mega__ofertas--item" key={c3.mt}> 
			<a href={"detail/"+c3.mt+"/"+c3.name}>
				<img src={c3.img} alt=""/>
			</a>
			<div class="slide__info">
				<p class="slide__info--nombre">{c3.name}</p>       
			</div>    
			</div>

			))}
		</Slider>
            
            
        </div>
    </section>

    <section class="container-fluid bloqueos container__padding">
        <h3 class="text-center h3__general">{title5}</h3>
        <h4 class="text-center h4__general"></h4>
        <div class="line red"></div>
        <div class="bloqueos--carrusel owl-carousel owl-theme padding__rem">
		<Slider {...slides5}>
					{carousel5.map(c5 => (
					
					<div class="item mega__ofertas--item" key={c5.mt}> 
					<a href={"detail/"+c5.mt+"/"+c5.name}>
					<img src={c5.img} alt={c5.name}/>

					</a>
					<div class="slide__info">
					<p class="slide__info--nombre">{c5.name}</p>       
					</div>    
					</div>

					))}
				</Slider> 
            
           
        </div>
    </section>

    <section class="container-fluid quienes__somos container__padding">
        <h3 class="somos__h4 text-center">¿quiénes somos?</h3>
        <div class="padding__rem">
            <div class="row">
                <div class="col-md-12">
                    <p class="somos__text" dangerouslySetInnerHTML={{__html: user.description}}></p>
                    <br/><br/><br/>
                </div>
                
                <div class="col-md-12 text-center">
                    
                </div>
            </div>
        </div>
    </section>

       
        </>
    )
}

export default Main
