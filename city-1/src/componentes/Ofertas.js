import React from 'react'

function Ofertas() {
    return (
        <>
        <section className="back-head back-head-orange">
			<div className="container">
				<div className="row">
					<div className="col-md-12 container-main-title">
						<h1 className="text-center main-title mb-1">Viajes Ofertas</h1>	
					</div>
				</div>
			</div>
			<div className="filter"></div>
		</section>
        <section className="section-top-ten">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                  
                <iframe className="iframe-mega" title="ofertas" src="https://www.megatravel.com.mx/tools/ofertas-viaje.php?&txtColor=123a32&aColor=123a32&ahColor=e87234&thBG=e87234&thTxColor=fff&ff=7" width="100%" height="1200" border="0"align="left" allowtransparency="true" frameborder="0"> </iframe>
                </div> 
            </div> 
        </div>   
        </section>  
        </>
    )
}

export default Ofertas
