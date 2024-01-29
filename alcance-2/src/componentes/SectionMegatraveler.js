/**
 * Component Section Mega Traveler
 * Developed by David Marin
 */
import React from 'react'

function SectionMegatraveler() {
    return (
        <>
            <section className="megatraveler">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<img src="https://exodus.b-cdn.net/exodus/alcance/traveler.webp" className="img-fluid" alt="" />
					</div>
					<div className="col-md-5">
						<div className="row">
							<div className="col-md-12">
								<h3 className="title-section text-right">MEGA TRAVELER</h3>
								<h4 className="subtitle-section text-right mb-5">Mayo - Junio 2020</h4>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 ">
								<p className="text-justify text-megatraveler">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est laudantium cum dicta provident, quam inventore sunt ducimus impedit eaque nulla repellendus harum consequatur rem molestias rerum. Nostrum, nisi unde.</p>
							</div>
							<div className="col-md-6 text-center">
								<a href="" className="btn-back-yellow descargar">VER AHORA</a>
							</div>
							<div className="col-md-6 text-center">
								<a href="" className="btn-back-yellow descargar">DESCARGAR</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-7">
						<div className="row  mt-megatraveler">
							<div className="col-md-12 ">
								<p className="text-justify text-megatraveler">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est laudantium cum dicta provident, quam inventore sunt ducimus impedit eaque nulla repellendus harum consequatur rem molestias rerum. Nostrum, nisi unde.</p>
							</div>
							<div className="col-md-12 text-center">
								<a href="" className="btn-back-yellow descargar">VER AHORA</a>
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
        </>
    )
}

export default SectionMegatraveler
