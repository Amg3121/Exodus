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
		infinite: true,
		speed: 500,
		autoplay:true,
		autoplayTimeout:100,
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
			breakpoint: 998,
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
		infinite: true,
		speed: 500,
		autoplay:true,
		autoplayTimeout:100,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 2,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 997,
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
		speed: 500,
		autoplay:true,
		autoplayTimeout:100,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive: [
		{
			breakpoint: 1224,
			settings: {
			  slidesToShow: 4,
			  slidesToScroll: 4,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 998,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 3,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 766,
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
		
		<section class="slide-full">

			<div class="slide owl-carousel owl-theme">
			<Slider {...slides1}>
			{carousel1.map(c1 => (
			

			<div className="item item-info" key={c1.mt}>
			<a href={"detail/"+c1.mt+"/"+c1.name}>
			<img className="slide_desktop" src={c1.img1} alt=""/>
			<img className="slide_movil" src={c1.img2} alt=""/>
			</a>
			<div className="info-slide">
			{/*<p class="slide-title">{c1.name} </p>	*/}
			<p className="slide-desde">desde {c1.price_from} <span className="slide-span">{c1.currency}</span> </p>
			<p className="slide-days"> {c1.days} dias /  {c1.nights} noches </p>

			</div>
			</div>


			))}
		</Slider>
				
				
				
				
			</div>
		</section>
		
		<section id="deparments">
			<div className="container">
				
					<div class="deparments owl-carousel owl-theme">

					<Slider {...slides3}>
						{carousel3.map(c3 => (

				<div class="item item-slide-content" key={c3.mt}>
				{/*<h4 class="text-center pt-2 pb-2">{c3.name}</h4>*/}
				<div class="price-slide">
				<a href={"detail/"+c3.mt+"/"+c3.name}>
					<img src={c3.img} alt=""/>
				</a>							
					
				</div>
				<div class="item-slide-info">
					
					<div class="item-slide-price">
						<div class="row no-gutters">
							<div class="col-md-6">
								<p class="text-left text-deparments-days back-text-dark-trendy1">
									<small class="deparments-desde back-text-light-trendy1">Desde</small> <br/> {c3.price_from}  {c3.currency}</p>
								
							</div>
							<div class="col-md-6">
								<p class="text-right text-ofertas-deparments">
									<a href={"detail/"+c3.mt+"/"+c3.name} class="deparments-link ">Ver Paquete</a>
								</p>
								
							</div>
						</div>	
				</div>
				</div>
				</div>


						))}
					</Slider>
						
						
					</div>
				
			</div>
		</section>

		<section class="binoculars" id="binoculars">
			<div class="container" id="about">
				<div class="row">
					<div class="col-md 12">
						<h3 class="text-center binoculars-title back-text-blue-trendy1">Bienvenido a {user.name_agency}</h3>
						<div class="hr text-center">
							<p class="binoculars-line"><i class="fas fa-binoculars"></i></p>
						</div>
						<p class="mt-5 mb-5 binoculars-parrafo">
							{user.description}
						</p>
						
					</div>
					<div class="col-md-12 text-center mt-5 mb-5">
						<a href={'tel:'+user.phone} class="binoculars-contacto button-trendy-3">Contactanos ahora: {user.phone}</a>
					</div>
				</div>
			</div>
		</section>


		<section class="links">
			<div class="container">
				<div class="row">
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-4">
								<img className="imgavion" src="https://exodus.b-cdn.net/exodus/trendy/02/img/1_sprites.png" alt=""/>
							</div>
							<div class="col-md-8">
								<h3 class="links-title-h3">Quienes <br/> Somos</h3>
							</div>
							<div class="col-md-12">
								<p class="links-text-p mt-4">{user.description && user.description.substr(0, 100)+'...' }</p>
								<a data-toggle="modal" data-target="#exampleModal" className="somos__link text-center">[VER MÁS]</a>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-4">
								<img className="imgavion" src="https://exodus.b-cdn.net/exodus/trendy/02/img/1_sprites.png" alt=""/>
							</div>
							<div class="col-md-8">
								<h3 class="links-title-h3">Redes <br/> Sociales</h3>
							</div>
							<div class="col-md-12 ">
								<p class="links-text-p mt-4">
								<ul className="list-inline text-center">

{ user.facebook  != null ? <li className="list-inline-item">
		<a href={'https://www.facebook.com/'+user.facebook} className="link__networks" target="_blank"><i className="fab fa-facebook-square"></i></a>
	</li> : '' }

{ user.twitter != null ? <li className="list-inline-item">
		<a href={'https://twitter.com/'+user.twitter} target="_blank"  className="link__networks"><i className="fab fa-twitter"></i></a>
	</li> : '' }
{ user.instagram != null ? <li className="list-inline-item">
		<a href={'https://www.instagram.com/'+user.instagram} target="_blank" className="link__networks"><i className="fab fa-instagram"></i></a>
	</li> : '' }

	
	
</ul>
								</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-4">
								<img className="imgavion" src="https://exodus.b-cdn.net/exodus/trendy/02/img/1_sprites.png" alt=""/>
							</div>
							<div class="col-md-8">
								<h3 class="links-title-h3">Chat <br/> en linea</h3>
							</div>
							<div class="col-md-12 ">
								<p class="links-text-p mt-4">
								<ul className="list-inline text-center">
                         
							{ user.messenger   != null ? <li className="list-inline-item">
		<a href={'https://m.me/'+user.messenger} target="_blank" className="link__networks-msg"><i className="fab fa-facebook-messenger"></i></a>
	</li>: '' }
							{ user.whatsapp   != null ? <li className="list-inline-item">
		<a href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp+'&amp;text='+user.name_agency+''} target="_blank" className="link__networks"><i className="fab fa-whatsapp"></i></a>
	</li>: '' }
                           
                        </ul>
								</p>
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
		
	
	{/**	<section class="mega-ofertas" id="ofertas">
			<div class="container">
				
					
					<h4 class="title-mega-ofertas">{title4}</h4>
					
					
						<div class="top-ten owl-carousel owl-theme pt-5">

						<Slider {...slides4}>
						{carousel4.map(c4 => (

							<div className="item item-slide-content" key={c4.mt}> 
							<div class="price-slide">
							<a href={"detail/"+c4.mt+"/"+c4.name}>
								<img src={c4.img} alt={c4.name}/>
							</a>
							</div>
							</div>
								))}
						</Slider> 
							
							
							

						</div>	
					
					
				

				

			</div>
		</section> */}

		
		<section class="megatraveler">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div class="row">
							<div class="col-md-12">
								<h3 class="title-megatraveler">{traveler.date}</h3>
								<h4 class="subtitle-megatraveler mb-5">{traveler.title}</h4>
							</div>
						</div>
						<div class="row">
							
							<div class="col-md-12 text-center">
								<a href={traveler.url} target="_blank" class="descargar"><i class="far fa-eye"></i> VER</a>
								<a href={traveler.descarga} target="_blank" class="descargar"><i class="fas fa-download"></i> DESCARGAR</a>
							</div>
							
						</div>
					</div>
					<div class="col-md-6 text-right">
						<img src={traveler.img} class="img-fluid" alt=""/>
						
					</div>
				</div>
				
			</div>
		</section>

		<section class="my-megatraveler">
			<div class="container">
				<div class="row">
					<div class="col-md-6 pl-5">
						<h3 class="title-my-megatraveler mt-4">VIDEOS</h3>
						<h4 class="subtitle-my-megatraveler mb-5">MEGA TV</h4>
						
					</div>
					<div class="col-md-6 text-right">
							<a data-toggle="modal" data-target="#exampleModalVideos">
							<img src="https://exodus.b-cdn.net/exodus/trendy/02/img/06_MEGATV_001.png" class="img-fluid" alt=""/>
							</a>
						
					</div>
					
				</div>
			</div>
		</section>


		<div class="modal fade" id="exampleModalVideos" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
			
			</div>
		</div>
		</div>
		</div>
		
		<section class="section-top-ten ">
			<div class="container">
				
					
						<h3 class="title-section-top-ten">Top 10 Ofertas</h3>
					
				

				<div class="offers owl-carousel owl-theme pt-5">

				<Slider {...slides2}>
						{carousel2.map(c2 => (

						<div class="item item-slide-content" key={c2.mt}>
						<div class="price-slide">
						<a href={"detail/"+c2.mt+"/"+c2.name}>
							<img src={c2.img} alt=""/>
						</a>

							
						</div>
						<div class="main__sections-info">
								<small class="main__sections-days">{c2.days} DÍAS / {c2.nights} NOCHES</small> 
								<div class="main__sections-price">
									<span class="main__sections-since">DESDE</span>{c2.price_from}
								</div><br/> 
							<span class="main__sections-current">{c2.currency} {c2.room_type}+{c2.taxes}*</span>
						</div>
						</div>

						))}
					</Slider>
							
					
					
				
					
				</div>

				
			</div>	
			
		</section>

		
		
		
		<section class="section-locks">
			<div class="container overflow">
				
					
				<h3 class="title-section-locks">{title4}</h3>
					
				
				<div class="locks owl-carousel owl-theme pt-5">

				<Slider {...slides4}>
						{carousel4.map(c4 => (

							
							<div class="item item-slide-content" key={c4.mt}>
							<div class="price-slide">
							<a href={"detail/"+c4.mt+"/"+c4.name}>
								<img src={c4.img} alt={c4.name}/>
							</a>

							</div>
							<div class="locks-info">
								<div class="row">
									<div class="col-md-9">
										<div class="row">
											<div class="col-md-12 locks-name text-center">
												<p class="locks-name-title">	{c4.name}</p>
											</div>
											<div class="col-md-4 locks-blue ">
												<p class="locks-mt text-center">MT-{c4.mt} </p>
											</div>
											<div class="col-md-4 locks-yellow text-center">
												<p class="locks-days"> <i class="fas fa-sun"></i> {c4.days} Días </p>
											</div>
											<div class="col-md-4 locks-blue text-center">
												<p class="locks-nigths"> <i class="far fa-moon"></i> {c4.nights} Noches </p>
											</div>
										</div>
									</div>
									<div class="col-md-3 locks-desde">
										
											<span class="locks-desde-title">DESDE</span> 
											<p class="locks-desde-text">{c4.price_from} <span class="locks-span">{c4.currency}</span> </p>
											<span class="locks-span">{c4.room_type} + {c4.taxes} IMP</span>
										
									</div>
								</div>
							</div>



							</div>






								))}
						</Slider> 
							



					
					
					
				</div>	

				
			</div>
		</section>

		

		<section class="my-favoritos back-trendy-3">
			<div class="container">
				
					
						<h2 class="title-my-favoritos">Selección de Viajes</h2>
					
				
					<div class="favoritos owl-carousel owl-theme pt-5">

					<Slider {...slides5}>
					{carousel5.map(c5 => (
					
				<div className="item item-slide-content" key={c5.mt}>
					<div class="price-slide">
				<a href={"detail/"+c5.mt+"/"+c5.name}>
				<img src={c5.img} alt={c5.name}/>
				</a>
				</div>
			
				</div>

					))}
				</Slider> 
								
					
						
						
					</div>
				
			
		</div>
		</section>


		

		
		

    </main>
       
        </>
    )
}

export default Main
