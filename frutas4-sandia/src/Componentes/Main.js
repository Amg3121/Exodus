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
			breakpoint: 1300,
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
			breakpoint: 700,
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
			breakpoint: 700,
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
			breakpoint: 700,
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
			breakpoint: 700,
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
	let numeromayor = 0;
	const [ open, setOpen ] = useState(false)
	const [ open2, setOpen2 ] = useState(false)

    return (
        <>
	<div className="main">
		
		<section className="main__header sandia">
			<nav className={ open ? "sidebar show" : "sidebar"}>
				<div className="aside__icon__close">
					<a aria-expanded={open === true ? "true" : "false"}
					className={open === true ? "aside__icon-a1" : "aside__icon-a1"}
					onClick={ () => setOpen(!open) }>
					<i class="fas fa-window-close" aria-hidden="true"></i>
					</a>
				</div>
			
				<div className="aside__icon">
					<a aria-expanded={open === true ? "true" : "false"}
					className={open === true ? "aside__icon-a1" : "aside__icon-a1"}
					onClick={ () => setOpen(!open) }/>
				</div>
			
				<ul>
					<li>
						<a href="/promociones">
						ofertas y <br /> promociones
						</a>
					</li>
					<li>
						<a  aria-expanded={open2 === true ? "true" : "false"}
						className={open2 === true ? "feat-btn" : "feat-btn"}
						onClick={ () => setOpen2(!open2) }>
								destinos <br /> de viaje
								<span className="fas fa-chevron-circle-down first"></span>
						</a>
						<ul className={ open2 ? "feat-show show" : "feat-show"}>
							<li>
								<a href="/europa">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/viajes-a-europa.jpg" alt="" />
								<span className="span__submenu">viajes a europa</span>
								</a>
							</li>
							<li>
								<a href="/canada">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/canada.jpg" alt="" />
								<span className="span__submenu">canadá</span>
								</a>
							</li>
							<li>
								<a href="/estados-unidos">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/estados-unidos.jpg" alt="" />
								<span className="span__submenu">estados unidos</span>
								</a>
							</li>
							<li>
								<a href="/mexico">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/mexico.jpg" alt="" />
								<span className="span__submenu">méxico</span>
								</a>
							</li>
							<li>
								<a href="/sudamerica">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/sudamerica.jpg" alt="" />
								<span className="span__submenu">sudamérica</span>
								</a>
							</li>
							<li>
								<a href="/centroamerica">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/centroamerica.jpg" alt="" />
								<span className="span__submenu font">centroamérica</span>
								</a>
							</li>
							<li>
								<a href="/pacifico">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/pacifico.jpg" alt="" />
								<span className="span__submenu">pacífico</span>
								</a>
							</li>
							<li>
								<a href="/medio-oriente">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/medio-oriente.jpg" alt="" />
								<span className="span__submenu">medio oriente</span>
								</a>
							</li>
							<li>
								<a href="/asia">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/asia.jpg" alt="" />
								<span className="span__submenu">asia</span>
								</a>
							</li>
							<li>
								<a href="/africa">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/africa.jpg" alt="" />
								<span className="span__submenu">africa</span>
								</a>
							</li>
							<li>
								<a href="/eventos">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/eventos.jpg" alt="" />
								<span className="span__submenu">eventos</span>
								</a>
							</li>
							<li>
								<a href="/cruceros">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/cruceros.jpg" alt="" />
								<span className="span__submenu">cruceros</span>
								</a>
							</li>

							<li>
								<a href="/juvi">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/juvi.jpg" alt="" />
								<span className="span__submenu">#juvi</span>
								</a>
							</li>

							<li>
								<a href="/exoticos">
								<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/menu/grupos-y-fits.jpg" alt="" />
								<span className="span__submenu">Exoticos</span>
								</a>
							</li>
						</ul>
					</li>
					<li>
						<a aria-expanded={open === true ? "true" : "false"}
						className={open === true ? "feat-showsomos showsomos" : "feat-showsomos"}
						onClick={ () => setOpen(!open) } href="/#somos">quienes somos</a>
					</li>
					<li>
						<a aria-expanded={open === true ? "true" : "false"}
						className={open === true ? "feat-show1 show1" : "feat-show1"}
						onClick={ () => setOpen(!open) } href="/#somosagencia">quienes somos</a>
					</li>
					<li>
						<a aria-expanded={open === true ? "true" : "false"}
						className={open === true ? "feat-show show" : "feat-show"}
						onClick={ () => setOpen(!open) } href="#contacto">contacto</a>
					</li>
				</ul>
			</nav>
			
			<div className="aside__icon">
				<a aria-expanded={open === true ? "true" : "false"}
				className={open === true ? "aside__icon-a" : "aside__icon-a"}
				onClick={ () => setOpen(!open) }>
				<i class="fa fa-bars" aria-hidden="true"></i>
				</a>
			</div>
			
			<h1 className="main__h1">
                la mejor agencia <span className="main__span back__sandia">de viajes</span>
                <div className="maple">
					<img class="maple-img" src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/maple.png" alt=""/>
				</div>
            </h1>

            <div className="woman">
                <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/chica-sandia.png" alt="" className="woman__img" />
            </div>
        </section>
		
		<section className="main__carousel">
            <div className="main__carousel-owl owl-carousel owl-theme">
				<Slider {...slides1}>
					{carousel1.map(c1 => (			
						<div className="item main__carousel-owl-item" key={c1.mt}>
							<a href={"detail/"+c1.mt+"/"+c1.name} className="main__carousel-owl-item-link">
								<img src={c1.img1} alt="" className="slide_desktop main__carousel-owl-item-image" /> 
								<img className="slide_movil img-fluid" src={c1.img2} alt=""/>
							</a> 
							<div className="main__carousel-owl-info">
								<div className="main__carousel-owl-price"><span className="main__carousel-owl-since">DESDE</span>
									{c1.price_from}
								</div><br/> 
									<span className="main__carousel-owl-current">{c1.currency} {c1.room_type } + {c1.taxes}*</span>
							</div>
                    	</div>
					))}
				</Slider>      
            </div>
        </section>
            
        <section className="main__carousel-hot back__sandia">
            <h3 className="title__sections">
				<span className="title__sections-icon">
                <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/play-white.png" alt="" className="title__sections-img"/>
                </span> 
                <p className="content__title">
                    lo mas <span className="title__sections-hot">hot</span>
                </p>
				<div className="aguacate">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/sandia1.png" alt="" className="responsive__aguacate"/>
                </div>
			</h3>
			<div className="main__sections owl-carousel owl-theme">
				<Slider {...slides2}>
					{carousel2.map(c2 => (
						<div className="item main__sections-item" key={c2.mt}>
							<a href={"detail/"+c2.mt+"/"+c2.name} className="main__sections-item-link">
								<img src={c2.img} alt="" className="main__sections-item-image" /></a>
							<div className="main__sections-mt">MT-{c2.mt}
							</div> 
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
			<div class="aguacate__sub">
				<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/sandia2.png" alt="" class="responsive__aguacate-sub"/>
			</div>
		</section>
		
		<section className="travels__carousel__section back__sandia__favoritos">
            <h3 className="travels__title__sections color__black">
				<span className="title__sections-icon">
                <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/play.png" alt="" className="title__sections-img"/>
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
							<div className="main__sections-mt">MT-{c3.mt}
							</div> 
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
                <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/chica-tabla.png" className="verano__image-img" alt=""/>
            </div>
            <h3 className="title__sections-black">
				<span className="title__sections-icon">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/play.png" alt="" className="title__sections-img"/>
                </span> 
                <p className="content__title">
					Nuestras <span className="title__sections-hot">{title4}</span>
                </p>
            </h3>
            <div className="aguacate">
                <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/planta1.png" alt=""/>
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
                <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/hojas.png" alt=""/>
            </div>
        </section>

        <section className="main__carousel__suenos back__sandia">
            <h3 className="title__sections__suenos">
				<span className="title__sections-icon">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/play-white.png" alt="" className="title__sections-img"/>
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
							<div className="main__sections-mt">MT-{c5.mt}
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
        </section>

		<section  className="container__section-hidden">
			<div className="section__see" id="somosagencia"><br/>
				<div className="aside__about-balloon" href="#somos">
					<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/quienes-somos.png" alt="" className="responsive__img"/>
				</div>
				<p><a className="aside__about-p" data-toggle="modal" data-target="#description1" > {!!user.description && (<p>{user.description.substr(0, 120)}</p>)} ..Leer más  </a></p>
				<div className="modal fade" id="description1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-lg">
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
				<a href="#contacto" className="aside__about-a back__sandia hover__sandia">contacto</a>
				<hr />
				<div className="aside__networks-balloon">
					<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/comunicate.png" alt="" className="responsive__img"/>
				</div>
				<div className="aside__networks-communicate">
					<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/comunicate2.png" alt="" className="responsive__img"/>
				</div>

				<a href={'tel:'+user.phone} className="aside__networks-a">{user.phone}</a> 
				<ul className="aside__networks-ul">
					{ user.whatsapp != null ? 
					<li className="aside__networks-li aside__link-whatsapp">
						<a target="_blank" href={'https://api.whatsapp.com/send?phone=52'+user.whatsapp+'&text=Hola '+user.name_agency+''} className="aside__networks-link">
						<i className="fa fa-whatsapp" aria-hidden="true"></i>
						</a>
					</li> 
					: '' }
					{ user.messenger != null ? 
					<li className="aside__networks-li aside__link-facebook">
						<a href={'https://m.me/'+user.messenger} target="_blank" className="aside__networks-link">
						<i className="fab fa-facebook-messenger"></i>
						</a>
					</li>
					: '' }
					<li className="aside__networks-li aside__link-email">
						<a href={'mailto:'+user.agency_mail} target="_blank" className="aside__networks-link">
							<i className="fa fa-envelope-o" aria-hidden="true"></i>
						</a>
					</li>
			
				</ul>
				<hr className="section__hidden" />
	   		</div>
		</section>
		
		<section className="container__section-hidden">
            <div className="section__see">
				<div className="aside__map-balloon">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/visitanos.png" alt="" className="responsive__img"/>
                </div>
                <div className="aside__map-icon">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/ubicacion.png" alt="" className="responsive__img ubicacion-img"/>
                </div>
                <p className="aside__map-p">
                    {user.address} #{user.outdoor_number},{user.suburb}, C.P.{user.postal_code} , {user.city_name},  <span className="aside__map-span"> {user.state_name} </span>
                </p>       
            </div>
            <div className="aside__map section__see">
                <iframe title="google2" className="not-border" src={user.google_map} width="100%" height="550" aria-hidden="false"></iframe>
            </div>       
            <div className="aside__tv section__see"><hr />
                <div className="aside__tv-icon">
                    <img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/megatv-1.png" alt="" className="responsive__img" />
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
                    <source src="https://exodus.b-cdn.net/exodus/frutas/sandia/video/video-mega-tv.mp4" type="video/mp4" />
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
                    <a href={traveler.descarga} target="_blank" className="btn-megatraveler back__sandia hover__sandia margin__btn-right">Descargar</a>
                </div>
				<div className="container__megatraveler-btn">
					<a href={traveler.url} target="_blank" className="btn-megatraveler back__sandia hover__sandia ">Ver Online</a>
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
				<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/video.png" alt="" className="video-image" />
				</a>
			</div>  
			<div className="container__chicos">
				<img src="https://exodus.b-cdn.net/exodus/frutas/sandia/img/pareja.png" alt="" className="responsive__chicos" />
			</div>
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
        </section>

        </>
    )
}

export default Main
