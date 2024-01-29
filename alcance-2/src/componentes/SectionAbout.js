/**
 * Component Section About
 * Developed by David Marin
 */
import React from 'react'

function SectionAbout({user}) {
    return (
        <>
        <section className="back-about back-about-yellow">
			<div className="container-template">
				<div className="row">
					<div className="col-md-12">
						<h3 className="text-center title-section mb-4">Quienes Somos...</h3>
					</div>
					<div className="col-md-12">
						{user.map((dato, index) => {
							return <p key={index} className="text-about" dangerouslySetInnerHTML={{__html: dato.description}}></p>;
						})}
					</div>
					
					<div className="col-md-12 text-center">
						<a href="" className="btn-about btn-back-yellow mt-4">Empezar</a>
					</div>
				</div>
			</div>
		</section>
        </>
    )
}

export default SectionAbout
