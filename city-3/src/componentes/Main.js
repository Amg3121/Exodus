import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Main({ user }) {
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
				<section className="back-head back-head-red">
					<div className="container">
						<div className="row">
							<div className="col-md-12 container-main-title text-center">
								<h1 className="text-center main-title mb-3"> {user.name_agency}</h1>
								<h2 className="text-center main-subtitle">Agencia de Viajes en {user.state_name}</h2>
								<a href="#contacto" className="btn-agency btn-red mt-4">¡Contáctanos YA!</a>
							</div>
						</div>
					</div>
				</section>
				<section className="my-about" id="about">
					<div className="container">
						<h2 className="title-section color-red mb-4">Quienes Somos</h2>
						<div className="row">
							<div className="col-md-12 animate-top">
								<p className="item-about-p" dangerouslySetInnerHTML={{ __html: user.description }}></p>
							</div>
						</div>
					</div>
				</section>
				<section className="mega-ofertas" id="ofertas">
					<div className="container">
						<div className="row">
							<div className="col-md-3">
								<h2 className="title-section color-red mb-4">{title2}</h2>
								<p className="text-mega-ofertas">Hoy tenemos las mejores opciones de viaje a todo el Mundo. Estas son nuestras ofertas destacadas. ¡Conócelas! y planea desde aquí tus próximas vacaciones. Recuerda regresar porque siempre estamos actualizando con los mejores viajes.</p>
							</div>
							<div className="col-md-9">
								<div className="top-ten">
									<Slider {...slides2}>
										{carousel2.map(c2 => (
											<div className="item item-slide-content" key={c2.mt}>
												<div className="price-slide">
													<a href={'/detail/' + c2.mt + '/' + c2.name}>
														<img src={c2.img} alt="" />
													</a>
													<p className="price-text back-red-blue">${c2.price_from}</p>
												</div>
											</div>
										))}
									</Slider>
								</div>
							</div>
						</div>
						<div className="row back-promo mt-5">
							<div className="col-md-8">
								<h4 className="promo-title">¿Necesitas un asesor de Viajes?</h4>
								<p className="promo-text">No dudes en contactarnos</p>
							</div>
							<div className="col-md-4 text-right">
								<a href={'tel:' + user.phone} className="btn-back-red-blue leer-mas mt-3">¡Llamanos!</a>
							</div>
						</div>
					</div>
				</section>
				<section className="section-top-ten">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h3 className="title-section color-red mb-4">{title4}</h3>
							</div>
						</div>
						<div className="offers">
							<Slider {...slides4}>
								{carousel4.map(c4 => (
									<div className="item item-slide-content" key={c4.mt}>
										<div className="price-slide">
											<a href={'/detail/' + c4.mt + '/' + c4.name}>
												<img src={c4.img} alt="" />
											</a>
										</div>
										<div className="item-slide-info">
											<small className="item-slide-days">{c4.name}</small>
											<div className="item-slide-price">
												<div className="row no-gutters">
													<div className="col-md-6">
														<p className="text-left text-ofertas-days">{c4.days} dias</p>
													</div>
													<div className="col-md-6">
														<p className="text-right color-red text-ofertas-price">${c4.price_from}</p>
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
				<section className="slide-full">
					<div className="slide">
						<Slider {...slides1}>
							{carousel1.map(c1 => (
								<div className="item item-info" key={c1.mt}>
									<a href={'/detail/' + c1.mt + '/' + c1.name}>
										<img className="slide_desktop width-img" src={c1.img1} alt="" />
										<img className="slide_movil width-img" src={c1.img2} alt="" />
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
				<section className="section-locks">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h3 className="title-section color-red mb-4">{title5}</h3>
							</div>
						</div>
						<div className="locks owl-carousel owl-theme">
							<Slider {...slides5}>
								{carousel5.map(c5 => (
									<div className="item item-slide-content" key={c5.mt}>
										<div className="price-slide">
											<a href={'/detail/' + c5.mt + '/' + c5.name}>
												<img src={c5.img} className="width-img" alt="" />
											</a>
										</div>
									</div>
								))}
							</Slider>
						</div>
					</div>
				</section>
				<section className="my-favoritos">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2 className="title-section color-red mb-4">{title3}</h2>
							</div>
						</div>
						<div className="favoritos owl-carousel owl-theme">
							<Slider {...slides3}>
								{carousel3.map(c3 => (
									<div className="item item-slide-content" key={c3.mt}>
										<div className="price-slide">
											<a href={'/detail/' + c3.mt + '/' + c3.name}>
												<img src={c3.img} className="width-img" alt="" />
											</a>
										</div>
										<div className="item-slide-info">
											<small className="item-slide-days color-red">{c3.name}</small>
											<div className="item-slide-price">
												<span className="item-slide-since">${c3.price_from}</span>
											</div>
										</div>
									</div>
								))}
							</Slider>
						</div>
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
										<h3 className="title-section text-right color-red">{traveler.title}</h3>
										<h4 className="subtitle-section text-right mb-5 color-red">{traveler.date}</h4>
									</div>
								</div>
								<div className="row back-white">
									<div className="col-md-12 ">
										<p className="text-justify text-megatraveler">{traveler.desc}</p>
									</div>
									<div className="col-md-6 text-center">
										<a href={traveler.url} target="_blank" className="btn-back-red-blue descargar">VER AHORA</a>
									</div>
									<div className="col-md-6 text-center">
										<a href={traveler.descarga} target="_blank" className="btn-back-red-blue descargar">DESCARGAR</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="my-megatraveler">
					<div className="container">
						<div className="row">
							<div className="col-md-7">
								<div className="row back-megatraveler mt-megatraveler">
									<div className="col-md-12 ">
										<p className="text-justify text-megatraveler">
											Video Minutos: La distancia no se cuenta cuando el destino es lo que cuenta. Cualquier que sea tu sueño de viaje, conocelo en nuestro catálogo en video. <strong>Los viajes comienzas en la imaginación</strong><br />
											¿Que te parece tomar nuestro viaje? a tan solo un clic de distancia
										</p>
									</div>
									<div className="col-md-12 text-center">
										<a className="btn-back-red-blue descargar" data-toggle="modal" data-target="#exampleModal">VER AHORA</a>
									</div>
								</div>
							</div>
							<div className="col-md-5 pl-5">
								<h3 className="title-section color-red mt-4">MEGA TRAVELER</h3>
								<h4 className="subtitle-section mb-5 color-red">Videos que inpiran a viajar</h4>
								<img src="https://exodus.b-cdn.net/exodus/city/01/img/06_MEGATV_001.png" className="img-fluid" alt="" />
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
			</main>
		</>
	)
}
export default Main
