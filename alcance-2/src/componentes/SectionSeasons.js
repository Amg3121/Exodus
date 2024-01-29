/**
 * Component Section Seasons
 * Developed by David Marin
 */
import React from 'react'

function SectionSeasons() {
    return (
        <>
        <section className="seasons">
			<div className="container-fluid no-gutters p-0">
				<div className="row no-gutters">
					<div className="col-lg-4 col-md-4 col-sm-4 col-12 seasons-item">
						    <img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/top-ten.webp" alt=""/>
						<div className="seasons-info">
							<div className="seasons-content">
								<h4 className="seasons-title">TOP 10 OFERTAS</h4>
								<a href="/" className="seasons-link btn-seasons-yellow">ver ahora</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-12 seasons-item">
						<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/seasons.webp" alt=""/>
						<div className="seasons-info">
							<div className="seasons-content">
								<h4 className="seasons-title">VIAJES INVIERNO<br/> 2020 - 2021</h4>
								<a href="/" className="seasons-link btn-seasons-yellow">ver ahora</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 col-sm-4 col-12 seasons-item">
						<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/best-travels.webp" alt=""/>
						<div className="seasons-info">
							<div className="seasons-content">
								<h4 className="seasons-title">MEJOR SELECCIÓN<br/> DE VIAJES</h4>
								<a href="/" className="seasons-link btn-seasons-yellow">ver ahora</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>  
        </>
    )
}

export default SectionSeasons
