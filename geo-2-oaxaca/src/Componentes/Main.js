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
		<div className="toursoaxaca">
				<div className="touroaxaca">
					<div class="image">
						<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/montealban.jpg" class="img-fluid"/>
					</div>
					<div class="text">
						<h2>Tour 1 Monte Alban, San Bartolo Coyotepec, Cuilapam de Guerrero &amp; Arrazola</h2>
						<span class="textoparra">
						<p>
						Enjoy the archaeological zone of Monte Albán, a 1500-year-old empire, declared  World Heritage Site by the UNESCO in 198,  the village of Coyotepec, famous for its black clay pottery, Then the majestic Convent of Cuilapam de Guerrero, and  Arrazola, where beautiful wooden pieces are handcrafted by local artisans.<br/>
						Daily from 10:00 –to 18:00, $32 USD per person
						</p>
						<p>
						Disfrute de una visita a la zona arqueológica de Monte Albán, imperio de 1500 años de antigüedad, declarado Patrimonio de la Humanidad por la UNESCO en 1987. el pueblo de Coyotepec, famoso por su cerámica negra, el majestuoso Convento de Cuilapam de Guerrero, y Arrazola, donde bellas piezas de madera son hechas a mano por artesanos locales.<br/>
						Diario de 10:00 a 18:00, $550.00 pesos mexicanos por persona
						</p>
						</span>
					</div>
				</div>

				<div className="touroaxaca">
					<div class="image">
						<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/tule-tree.jpg" class="img-fluid"/>
					</div>
					<div class="text">
						<h2>Tour 2 El Tule Tree, Mitla, Teotitlan del Valle, Hierve el Agua &amp; mezcal</h2>
						<span class="textoparra">
							<p>
							Visit a natural wonder of the world: the Tule tree, more than 2000 years old, and the archaeological zone of Mitla, preciously decorated with geometric designs. Also Teotitlan del Valle with its famous wool tapestry, and Hierve el Agua where you can enjoy the stunning petrified waterfalls. Visit of a  mezcal distillery.<br/>
							Daily from 10:00 to 19:00, $32 USD per person
							</p>
							<p>
							Visite el milenario el árbol del Tule, con más de 2000 años de antigüedad,  la zona arqueológica de Mitla, caracterizada por su preciosista decoración con diseños geométricos, Teotitlán del Valle con su famosa tapicería y tejidos de lana,  Hierve el Agua donde podrá disfrutar de impresionantes cascadas petrificadas y visita a una destilería de mezcal.<br/>
							Diario de 10:00 a 19:00, $550.00 pesos mexicanos por persona
							</p>
						</span>
					</div>
				</div>

				<div className="touroaxaca">
					<div class="image">
						<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/mitla.jpg" class="img-fluid"/>
					</div>
					<div class="text">
						<h2>Tour 3 El Tule Tree, Mitla, Teotitlan del Valle, Monte Alban</h2>
						<span class="textoparra">
							<p>
							We will visit the millenary Tule tree, Teotitlan del Valle with its famous wool tapestry, Mitla archaeological zone recognized for its unique architecture and the impressive ruins of Monte Albán, whose temples, ball courts and astronomical observatory will complete an unforgettable visit.<br/>
							Daily  from 10:00 to  18:00, $37 USD USD per person.
							</p>
							<p>
							Visitamos el milenario árbol Tule, Teotitlan del Valle con su famosa tapicería en lana, la zona arqueológica de Mitla reconocida por su arquitectura única y las impresionantes ruinas de Monte Albán, cuyos templos, juego de pelota y observatorio astronómico harán inolvidable la visita.<br/>
							Diario de 10:00 a 18:00, $630.00 pesos mexicanos por persona
							</p>
						</span>
					</div>
				</div>

				<div className="touroaxaca">
					<div class="image">
						<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/monte-alban.jpg" class="img-fluid"/>
					</div>
					<div class="text">
						<h2>Tour 4 Monte Alban</h2>
						<span class="textoparra">
							<p>
							The archaeological zone of Monte Albán, impressive site inhabited by warriors, wise men  and astronomers.
							Daily from 10:00 to 13:30, $23 USD per person
							</p>
							<p>
							La zona arqueológica de Monte Albán, sitio impresionante habitado por guerreros, sabios y astrónomos.<br/>
							Diario de 10:00 a 13:30, $380.00 pesos mexicanos per person
							</p>
						</span>
					</div>
				</div>

				<div className="touroaxaca">
					<div class="image">
						<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/teotitlandelvalle.jpg" class="img-fluid"/>
					</div>
					<div class="text">
						<h2>Tour 5 El Tule Tree, Mitla, Teotitlan del Valle</h2>
						<span class="textoparra">
							<p>
							We will visit the fascinating El Tule Tree, one of the oldest in the world, also the exquisite decoration of Mitla's carved stones, and Teotitlan del Valle where they make artisanal rugs with natural dyes.<br/>
							Daily from 10:00 to 14:30, $23 USD per person
							</p>
							<p>
							Visitaremos el fascinante árbol de El Tule, uno de los más antiguos del mundo, también la exquisita decoración de las piedras talladas de Mitla, y Teotitlan del Valle donde se hacen alfombras artesanales con tintes naturales.<br/>
							Diario de 10:00 a 14:30, $380.00 pesos mexicanos por persona
							</p>
						</span>
					</div>
				</div>

				<div className="touroaxaca">
					<div class="image">
						<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/oaxacacuizaaarra.jpg" class="img-fluid"/>
					</div>
					<div class="text">
						<h2>Tour 6 Cuilapam, Zaachila &amp; Arrazola</h2>
						<span class="textoparra">
							<p>
							Cuilapam de Guerrero has a majestic 16th century convent with Gothic and Renaissance influence, we will also visit the village of Zaachila with its typical Indian market and Arrazola, where you can admire the alebrijes, wooden figurines of fantastical creatures.<br/>
							Only on Thursdays: 10:00 – 14:30, $23 USD per person.
							</p>
							<p>
							Cuilapam de Guerrero tiene un majestuoso convento del siglo XVI con influencia gótica y renacentista, también visitaremos el pueblo de Zaachila con su típico mercado indio y Arrazola, donde se pueden admirar los alebrijes, esculturas de madera de criaturas fantásticas. Solo los Jueves de 10:00 a 14:30, $380.00 pesos mexicanos por persona
							</p>
						</span>
					</div>
				</div>

				<div className="touroaxaca">
				<div class="image">
					<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/templo-iglesia-de-ocotlan-oaxaca.jpg" class="img-fluid"/>
				</div>
				<div class="text">
					<h2>Tour 7 San Bartolo, Santo Tomas Jalieza &amp; Ocotlan de Morelos</h2>
					<span class="textoparra">
						<p>
						In San Bartolo Coyotepec, we will assist to a the process of the extraordinary black clay pottery. In Santo Tomas Jalieza, you can find belts, bags and clothing made with rudimentary waist looms and in Ocotlan you can explore the weekly prehispanic market.<br/>
						Only on Fridays from 10:00 to 14:30, $23 USD per person.
						</p>
						<p>
						En San Bartolo Coyotepec, asistiremos a una demostración del proceso de creación de la extraordinaria cerámica negra de arcilla. En Santo Tomas Jalieza, puedes encontrar cinturones, bolsos y prendas de vestir hechos con telares de cintura rudimentarios y en Ocotlan puedes explorar el mercado.<br/>
						Solo Viernes de 10:00 a 14:30, $380.00 pesos mexicanos por persona
						</p>
					</span>
				</div>
				
				</div>

				<div className="touroaxaca">
					<div class="image">
						<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/citytour.jpg" class="img-fluid"/>
					</div>
					<div class="text">
						<h2>Tour 8 City Tour (pedestrian tour)</h2>
						<span class="textoparra">
							<p>
							We will visit the church of Santo Domingo de Guzmán, Monumental architectural complex built by the Dominican Order. We will also visit the Regional Museum of Oaxaca located inside the church of Santo Domingo, and the Tourist Corridor that connects the city center with Santo Domingo Church.<br/>
							the Zócalo, located in the city center is surrounded by beautiful portals, November 20 Market where you can try Oaxacan’s rich gastronomy, and Benito Juarez Market a more traditional market you can find moles, quesillo, chocolate and Chapulines (fried grasshoppers). Only from Tuesday to Sunday 10:00 to 13:30, $29 USD per person mínimum 3 people.
							</p>
							<p>
							A pie, visitaremos la iglesia de Santo Domingo de Guzmán, Monumental complejo arquitectónico construido por la orden dominica. También visitaremos el Museo Regional de Oaxaca ubicado dentro de la iglesia de Santo Domingo, y el corredor turístico que conecta el centro de la ciudad con la iglesia de Santo Domingo.<br/>
							Visitaremos el Zócalo, ubicado en el centro de la ciudad rodeado por hermosos portales, el Mercado 20 de noviembre donde se puede saborear la rica gastronomía de Oaxaca, y el Mercado Benito Juárez un mercado más tradicional donde se pueden encontrar moles, quesillo, chocolate y chapulines (saltamontes fritos). Sólo de Martes a Sábado 10:00 a 13:30, $480.00 pesos mexicanos por persona, minimo 3 personas.
							</p>
						</span>
					</div>
				</div>

				<div className="touroaxaca">
					<div class="image">
						<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/church-de-santo-tomas.jpg" class="img-fluid"/>
					</div>
					<div class="text">
						<h2>Tour 9 Sierra Norte, Abseiling, Bromelia Forest, Mirador, Church of Santo Tomás, Zip-line</h2>
						<span class="textoparra">
							<p>
							Ixtlán de Juárez: a well preserved natural area of Mexico, ranked seventeenth richest in biodiversity in the world. You can explore one of the caves, stroll around the Bromelia Forest and then admire the landscape from the Mirador de Cuachirindoo. You can try the zip-line and visit the Church of Saint Tomás Apostle, Ixtlan.<br/>
							Daily from 07:00 to 18:00, $35 USD per person  (minimum 12 people).
							</p>
							<p>
							Ixtlán de Juárez: un área natural mejor conservada de México, tercera más rica en biodiversidad del país y una de las diecisiete en el mundo por su biodiversidad. Puede explorar una de las cuevas, pasear por el bosque de Bromelia y luego admirar el paisaje del Mirador de Cuachirindoo. Puede probar la tirolesa y visitar la Iglesia de Santo Tomás de Apostol, Ixtlan.<br/>
							Diario de 07:00 a 19:00, $600.00 pesos mexicanos por persona( mínimo 12 personas).
							</p>
						</span>
					</div>
				</div>

				<div className="touroaxaca">
					<div class="image">
						<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/capulalpam.jpg" class="img-fluid"/>
					</div>
					<div class="text">
					<h2>Tour 10 Sierra Norte, Cloud Forest, Mirador, Capulalpam, Herbalist Center</h2>
					<span class="textoparra">
						<p>
						Sierra Norte: Through the cloud forest we arrive to breathtaking landscapes and surroundings. The Center for Traditional Indigenous Medicine in Capulalpam offers herbal medicine and regional plant remedies.<br/>
						
						Daily from 07:00 to 19:00, $75 USD per person (minimum 12 people)
						</p>
						<p>
						Sierra Norte: Puede disfrutar de sus riquezas naturales, y sus hermosos paisajes. A través del bosque nublado llegamos a uno de los miradores donde podemos contemplar los alrededores. El Centro de Medicina Indígena Tradicional de Capulalpam ofrece medicamentos a base de plantas y remedios regionales.<br/>

						Diario De 07:00 a 19:00, $1,300.00 pesos mexicanos por persona(un minimo 12 personas).
						</p>
					</span>
					</div>
				</div>

		</div>
        <div className="about">

            <div className="container__about">

            <h3 className="about-title__yellow">quienes</h3>
            <h3 className="about-tittle__white">somos</h3>
			<h2 class="h2-title">Bienvenido a Viajes Oaxaca - Descubre Oaxaca y el Mundo.</h2>
            <p className="about_text" >
			{!!user.description && (<p>{user.description.substr(0, 341)}</p>)} <a data-toggle="modal" data-target="#description">Leer más </a>  
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
			
			{/*<div>
				<div>
					<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100036536838228&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false"  width={500} height={500} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
				</div>
			</div>
			<div class="banner">
				<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/visit-oaxaca.jpg" width="500" />
			</div>*/}

        </div>
		<div id="grid">
			<div id="areaA">
				<div className="widgetface"><iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100036536838228&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false"  width={500} height={500} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
			</div>
			<div id="areaA">
				<div class="banner1">
				<img src="https://exodus.b-cdn.net/exodus/geo/brasil/img/oaxaca/visit-oaxaca.jpg" className="img fluid visitoaxaca"/>
				</div>
			</div>
		</div>


		
    </section>
    
    
       
        </>
    )
}

export default Main
