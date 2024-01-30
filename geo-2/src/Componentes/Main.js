import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Carousel} from '3d-react-carousal';


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
		speed: 500,
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
		speed: 500,
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
		speed: 500,
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
		speed: 500,
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

	let slides3d = [
		<img  src="https://exodus.b-cdn.net/exodus/geo/brasil/img/video-quienes-somos/carrusel/img1.jpg" alt="1" />,
	    <img  src="https://exodus.b-cdn.net/exodus/geo/brasil/img/video-quienes-somos/carrusel/img2.jpg" alt="2" />  ,
	    <img  src="https://exodus.b-cdn.net/exodus/geo/brasil/img/video-quienes-somos/carrusel/img3.jpg" alt="3" />  
	];
	
	

    return (
        <> 
		  
	<section className="section-main">
        <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/slider-principal.b6914020.jpg" alt="" className="section-main__image"/>
        <h1 class="h1-title">AGENCIA DE VIAJES - {user.name_agency}</h1>
		<div className="section-filtro"></div>
    </section>

    



    <section className="section-carousel-main">

        <div className="carousel-main owl-carousel owl-theme">

		<Slider {...slides1}>
			{carousel1.map(c1 => (
			

			<div className="item carousel-main__item" key={c1.mt}>
			<a href={"detail/"+c1.mt+"/"+c1.name} className="carousel-main__item-link">
			<img className="slide_desktop img-fluid" src={c1.img1} alt=""/>
			  <img className="slide_movil img-fluid" src={c1.img2} alt=""/>
				
			</a>
			<div className="carousel-main__info">

				
					<div className="carousel-main__price">
						<span className="carousel-main__since">DESDE </span>
						{c1.price_from}</div><br/>

				<span className="carousel-main__current">{ c1.currency } { c1.room_type } + { c1.taxes }*</span>

			</div>

			</div>


			))}
		</Slider>

            


        </div>
       
    </section>

    <section className="section-mega-offers">

        <h4 className="mega-offers-title">
            <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/mega-ofertas.a5c76399.png" alt="" className="mega-offers-title__image"/>
        </h4>

        <h5 className="mega-offers-text">los más vendidos</h5>

        <div className="carousel-best-sellers owl-carousel owl-theme">

		<Slider {...slides2}>
			{carousel2.map(c2 => (
			

<div className="item carousel-best-sellers__item" key={c2.mt}>
<a href={"detail/"+c2.mt+"/"+c2.name} className="carousel-best-sellers__item-link">
	<img src={c2.img} alt="" className="carousel-best-sellers__item-image"/>
</a>

<div className="carousel-best-sellers__info">

	<small className="carousel-best-sellers__days">{ c2.days } DÍAS / { c2.nights } NOCHES</small>

		<div className="carousel-best-sellers__price">
			<span className="carousel-best-sellers__since">DESDE</span>{ c2.price_from }
		</div><br/>

	<span className="carousel-best-sellers__current">{ c2.currency } { c2.room_type }+{ c2.taxes }*</span>

</div>

</div>

			))}
		</Slider> 


            


           

        </div>


        <h5 className="mega-offers-text">salidas programadas</h5>

        <div className="carousel-scheduled-departures owl-carousel owl-theme">

		<Slider {...slides5}>
					{carousel5.map(c5 => (
					
					

<div className="item carousel-scheduled-departures__item" key={c5.mt}>
<a href={"detail/"+c5.mt+"/"+c5.name} className="carousel-scheduled-departures__item-link">
	<img src={c5.img} alt="" className="carousel-scheduled-departures__item-image"/>
</a>

<div className="carousel-scheduled-departures__mt">MT-{ c5.mt }</div>

<div className="carousel-scheduled-departures__info">

	<small className="carousel-scheduled-departures__days">{ c5.days } DÍAS / { c5.nights } NOCHES</small>

		<div className="carousel-scheduled-departures__price"><span className="carousel-scheduled-departures__since">DESDE</span>{ c5.price_from }</div><br/>

	<span className="carousel-scheduled-departures__current">{ c5.currency } { c5.room_type }+{ c5.taxes }*</span>

</div>

</div>

					))}
		</Slider>

            
        </div>

    </section>
 
    <section className="section-favorites">
        <h5 className="mega-offers-text section-favorites__text">favoritos</h5>
        <div className="carousel-favorites owl-carousel owl-theme">


		<Slider {...slides3}>
			{carousel3.map(c3 => (
			
			

			<div className="item carousel-favorites__item" key={c3.mt}>
			<a href={"detail/"+c3.mt+"/"+c3.name} className="carousel-favorites__item-link">
				<img src={c3.img} alt="" className="carousel-favorites__item-image"/>
			</a>
			<div className="carousel-favorites__mt">MT-{ c3.mt }</div>

			<div className="carousel-favorites__info">

				<small className="carousel-favorites__days">{ c3.days } DÍAS / { c3.nights } NOCHES</small>

					<div className="carousel-favorites__price">
						<span className="carousel-favorites__since">DESDE</span>{ c3.price_from }</div><br/>

				<span className="carousel-favorites__current">{ c3.currency } { c3.room_type }+{ c3.taxes }*</span>

			</div>
			</div>

			))}
		</Slider>

           
           

        </div>

    </section>

    <section className="season-offers">

        <h5 className="mega-offers-text title__text--black megatraveler__text--brasil">{title4}</h5>
        <div className="carousel-temporada owl-carousel owl-theme">

		<Slider {...slides4}>
			{carousel4.map(c4 => (



<div className="item carousel-favorites__item" key={c4.mt}>
<a href={"detail/"+c4.mt+"/"+c4.name} className="carousel-favorites__item-link">
	<img src={c4.img} alt={c4.name} className="carousel-favorites__item-image"/>
</a>
</div>

			))}
		</Slider> 

            

        

        </div>

        <div className="megatraveler">

            <div className="megatraveler__info">
                <h3 className="megatraveler__title">
                    <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/mega-traveler.44fd220e.png" alt="" className="megatraveler__title--image"/>
                </h3>
                <p className="megatraveler__paragraph">{traveler.desc}</p>
                
                <div className="megatraveler__content-button">

                    <a href={traveler.url} target="_blank" className="megatraveler__button">
                        <span className="megatraveler__button--span">
                            <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/mega-traveler/ver.png" alt="" className="megatraveler__icon--button" />
                        </span> ver
                    </a>

                    <a href={traveler.descarga} target="_blank" className="megatraveler__button">
                        <span className="megatraveler__button--span">
                            <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/mega-traveler/descargar.png" alt="" className="megatraveler__icon--button" />
                        </span> descargar
                    </a>

                </div>
            </div>

            <div className="megatraveler__content-image">
                <img src={traveler.img} alt="" className="megatraveler__image--newsletter" />
            </div>

        </div>

    </section>

    <section className="video">

        <h3 className="video-title">#quieroviajar</h3>
        <div className="content-video">
            <a href="" data-toggle="modal" data-target="#exampleModal" className="video-link">
                <img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/video-quienes-somos/video.jpg" alt="" className="video-image" />
            </a>
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
			
			<div class="col-md-4" key={tv.mt}>
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
			
			</div>
		</div>
		</div>
		</div>

    <section className="about-section" id="somos">
        <div className="about">

          {/* <div className="container__about">

            <h3 className="about-title__yellow">quienes</h3>
            <h3 className="about-tittle__white">somos</h3>
			<h2 class="h2-title">Agencia de viajes en {user.city_name} - {user.name_agency}</h2>
            <p className="about_text" dangerouslySetInnerHTML={{__html: user.description}}>
               
            </p>
            

            </div> */}
			<div className="container__about">

            <h3 className="about-title__yellow">quienes</h3>
            <h3 className="about-tittle__white">somos</h3>
			<h2 class="h2-title">Agencia de viajes en {user.city_name} - {user.name_agency}</h2>
            <p className="about_text" >
			{!!user.description && (<p>{user.description.substr(0, 168)}</p>)} <a data-toggle="modal" data-target="#description">Leer más </a>  
            </p>
            </div>
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



            

            <div className="about-carrousel">

                <div className="about-carrousel__info" >

		
				<Carousel slides={slides3d} autoplay={true} interval={2200}/>

                    
                  </div>
            </div>
        </div>
    </section>

    

    
       
        </>
    )
}

export default Main
