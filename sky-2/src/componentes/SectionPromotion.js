/**
 * Component Section Promotions
 * Developed by David Marin
 */
import React from 'react'

function SectionPromotion() {
    return (
        <>
        <section className="sections">
			<div className="container-fluid p-0">
				<div className="row no-gutters">
					<div className="col-lg-6 col-md-12 col-sm-12 seasons-item">
						<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/offers.webp" alt=""/>
						<div className="seasons-info">
							<div className="seasons-content">
								<h4 className="seasons-title">MEGA OFERTAS</h4>
								<a href="/" className="seasons-link btn-seasons-blue">ver ahora</a>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 col-sm-12">
						<div className="row no-gutters">
							<div className="col-md-12 seasons-item">
								<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/summer.webp" alt=""/>
								<div className="seasons-info">
									<div className="seasons-content">
										<h4 className="seasons-title">OFERTAS INVIERNO 2020 / 2021</h4>
										<a href="/" className="seasons-link btn-seasons-blue">ver ahora</a>
									</div>
								</div>
							</div>
							<div className="col-md-6 seasons-item">
								<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/locks.webp" alt=""/>
								<div className="seasons-info">
									<div className="seasons-content">
										<h4 className="seasons-title">BLOQUEOS</h4>
										<a href="/" className="seasons-link btn-seasons-blue">ver ahora</a>
									</div>
								</div>
							</div>
							<div className="col-md-6 seasons-item">
								<img className="seasons-img" src="https://exodus.b-cdn.net/exodus/alcance/favorites.webp" alt=""/>
								<div className="seasons-info">
									<div className="seasons-content">
										<h4 className="seasons-title">FAVORITOS</h4>
										<a href="/" className="seasons-link btn-seasons-blue">ver ahora</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default SectionPromotion
