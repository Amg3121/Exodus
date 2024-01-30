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

       <div className="main">
           
            <section className="main__header fresa">
                <h1 className="main__h1">
                    la mejor agencia <span className="main__span back__fresa">de viajes</span>
                    <div className="maple"></div>
                </h1>
                <div className="woman">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/chica-fresa.png" alt="" className="woman__img" />
                </div>
            </section>
            
            <section className="main__carousel">
                <div className="main__carousel-owl owl-carousel owl-theme">
					<Slider {...slides1}>
						{carousel1.map(c1 => (
						
						<div className="item main__carousel-owl-item" key={c1.mt}>
							<a href={"detail/"+c1.mt+"/"+c1.name} className="main__carousel-owl-item-link">
								<img src={c1.img1} alt="" className="main__carousel-owl-item-image" /> 
							</a> 
							<div className="main__carousel-owl-info">
									<div className="main__carousel-owl-price"><span className="main__carousel-owl-since">DESDE</span>
							{c1.price_from}</div><br/> 
							<span className="main__carousel-owl-current">{c1.currency} {c1.room_type } + {c1.taxes}*</span>
							</div>
                     	</div>

						))}
					</Slider> 
                    
                </div>
            </section>
            
            <section className="main__carousel-hot back__fresa">
                <h3 className="title__sections">
                    
                    <span className="title__sections-icon">
                        <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/play-white.png" alt="" className="title__sections-img"/>
                    </span> 
                    <p className="content__title">
                     lo mas <span className="title__sections-hot">hot</span>
                    </p>
                    <div className="aguacate">
                        <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/fresa1.png" alt="" className="responsive__aguacate"/>
                    </div>
                    
                </h3>
                
            
                <div className="main__sections owl-carousel owl-theme">

				<Slider {...slides2}>
					{carousel2.map(c2 => (
                    <div className="item main__sections-item" key={c2.mt}>
                        <a href={"detail/"+c2.mt+"/"+c2.name} className="main__sections-item-link">
                            <img src={c2.img} alt="" className="main__sections-item-image" /></a>
                             <div className="main__sections-mt">MT-{c2.mt}</div> 
                        <div className="main__sections-info">
                                 <small className="main__sections-days">{c2.days} DÍAS / {c2.nights} NOCHES</small> 
                                 <div className="main__sections-price">
                                     <span className="main__sections-since">DESDE</span>{c2.price_from}
                                </div><br/> 
                            <span className="main__sections-current">{c2.currency} {c2.room_type}+{c2.taxes}*</span>
                        </div>
                    </div>

					))}
				</Slider>
                    
                    
                </div>

                <div class="aguacate__sub fresa__sub">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/fresa2.png" alt="" class="responsive__aguacate-sub"/>
                </div>
            </section>
         

            
            <section className="travels__carousel__section back__fresa__favoritos">
                <h3 className="travels__title__sections color__black">
                    
                    <span className="title__sections-icon">
                        <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/play.png" alt="" className="title__sections-img"/>
                    </span> 
                    <p className="content__title">
                     mis viajes <span className="title__sections-hot">favoritos</span>
                    </p>
                </h3>
                
                <div className="main__sections owl-carousel owl-theme">


				<Slider {...slides3}>
					{carousel3.map(c3 => (
					
					<div className="item main__sections-item" key={c3.mt}>
					<a href={"detail/"+c3.mt+"/"+c3.name} className="main__sections-item-link">
						<img src={c3.img} alt="" className="main__sections-item-image" /></a>
						<div className="main__sections-mt">MT-{c3.mt}</div> 
					<div className="main__sections-info">
							<small className="main__sections-days">{c3.days} DÍAS / {c3.nights} NOCHES</small> 
							<div className="main__sections-price">
								<span className="main__sections-since">DESDE</span>{c3.price_from}
							</div><br/> 
						<span className="main__sections-current">{c3.currency} {c3.room_type}+{c3.taxes}*</span>
					</div>
					</div>

					))}
				</Slider>

                </div>
            </section>

            <section className="verano__carousel__section">
                <div className="verano__image">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/chica-tabla.png" className="verano__image-img" alt=""/>
                </div>
                <h3 className="title__sections-black">
                    
                    <span className="title__sections-icon">
                        <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/play.png" alt="" className="title__sections-img"/>
                    </span> 
                    <p className="content__title">
					Nuestras <span className="title__sections-hot">{title4}</span>
                    </p>
                </h3>
                <div className="aguacate">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/planta1.png" alt=""/>
                </div>
                <div className="main__sections owl-carousel owl-theme">

				<Slider {...slides4}>
					{carousel4.map(c4 => (
					
					<div className="item main__sections-item" key={c4.mt}>
                        <a href={"detail/"+c4.mt+"/"+c4.name} className="main__sections-item-link">
                            <img src={c4.img} alt="" className="main__sections-item-image" /></a>
                    </div>

					))}
				</Slider> 

                    
                    
                </div>
                <div className="plant__sub">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/hojas.png" alt=""/>
                </div>
            </section>

            <section className="main__carousel__suenos back__fresa">
                <h3 className="title__sections__suenos">
                    
                    <span className="title__sections-icon">
                        <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/play-white.png" alt="" className="title__sections-img"/>
                    </span> 
                    <p className="content__title">
                     el viaje <span className="title__sections-hot">de tus sueños</span>
                    </p>
                </h3>
                
                <div className="main__sections owl-carousel owl-theme">

				<Slider {...slides5}>
					{carousel5.map(c5 => (
					
					<div className="item main__sections-item" key={c5.mt}>
					<a href={"detail/"+c5.mt+"/"+c5.name} className="main__sections-item-link">
						<img src={c5.img} alt="" className="main__sections-item-image" /></a>
						<div className="main__sections-mt">MT-{c5.mt}</div> 
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
            </section>

            <section className="container__section-hidden">
                <div className="section__see">

                    <div className="aside__map-balloon">
                        <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/visitanos.png" alt="" className="responsive__img"/>
                    </div>
                    <div className="aside__map-icon">
                        <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/ubicacion.png" alt="" className="responsive__img ubicacion-img"/>
                    </div>
                    <p className="aside__map-p">
                        {user.address} #{user.outdoor_number},{user.suburb}, C.P.{user.postal_code} , {user.city_name},  <span className="aside__map-span"> {user.state_name} </span>
                    </p>
           
                   </div>
                <div className="aside__map section__see">
                    <iframe title="google2" className="not-border" src={user.google_map} width="100%" height="550" aria-hidden="false"></iframe>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.498628977735!2d-100.99772768504802!3d22.145083885404468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98b164acdf8b%3A0xfdbe3d3b96d7619!2sCalle%20Melchor%20Ocampo%201370%2C%20Cuauhtemoc%2C%2078270%20San%20Luis%2C%20S.L.P.!5e0!3m2!1ses!2smx!4v1609291593788!5m2!1ses!2smx" width="600" height="450" aria-hidden="false"></iframe>
                </div>
           
                <div className="aside__tv section__see">
                    <hr />
                    <div className="aside__tv-icon">
                        <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/megatv-1.png" alt="" className="responsive__img" />
                    </div>
                    <p className="aside__tv-title">mega</p>
                    <p className="aside__tv-title">tv</p>
                    <p className="aside__tv-subtitle">videos que inspiran</p>
                    <p className="aside__tv-p">
					Video Minutos: La distancia no se cuenta cuando el destino es lo que cuenta. Cualquier que sea tu sueño de viaje, conocelo en nuestro catálogo en video. <strong>Los viajes comienzas en la imaginación</strong><br/>¿Que te parece tomar nuestro viaje? a tan solo un clic de distancia
                    </p>
                    
                </div>
           
                <div className="aside__tv-phone section__see">
                    <video className="" muted="muted" loop="loop" width="100%"  height="310">
                        <source src="https://mecamx.net/exodus2020/frutas/fresa/video/video-mega-tv.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            <section className="megatraveler">
                <div className="container__megatraveler">

                <div className="megatraveler-title">
                    {traveler.title}
                </div>
                <div className="megatraveler-title-sub">
				{traveler.date} 
                </div>
                <p className="megatraveler-p">
                    <span className="megatraveler-span">{traveler.desc}</span>
                 </p>
                <div className="container__megatraveler-btn">
                    <a href={traveler.descarga} target="_blank" className="btn-megatraveler back__fresa hover__fresa margin__btn-right">Descargar</a>
                    <a href={traveler.url} target="_blank" className="btn-megatraveler back__fresa hover__fresa margin__btn-left">Ver Online</a>
                </div>

                </div>
            <div className="megatraveler__magazine">
                <img  src={traveler.img} alt="" className="megatraveler__magazine-img"/>
            </div>
            </section>

       </div>
	   <section className="video">
       <h3 className="video__title">#quieroviajar</h3>
        <div className="container__video">
            
		<a href="" data-toggle="modal" data-target="#exampleModal" className="video-link">
                <img src="https://mecamx.net/exodus2020/africa/img/video-quienes-somos/video.jpg" alt="" className="video-image" />
            </a>
        </div>  
        <div className="container__chicos">
            <img src="https://exodus.b-cdn.net/exodus/frutas/fresa/img/pareja.png" alt="" className="responsive__chicos" />
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
		
        </>
    )
}

export default Main
