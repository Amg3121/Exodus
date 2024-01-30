import React from 'react'

function Ofertas() {
    return (
        <>
        <section className="back-head">
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
                  
                <iframe className="iframe-mega" title="ofertas" src="https://www.megatravel.com.mx/tools/ofertas-viaje.php?&txtColor=333333&aColor=333333&ahColor=db0e35&thBG=db0e35&thTxColor=fff&ff=9" width="100%" height="1200" border="0"align="left" allowtransparency="true" frameborder="0"> </iframe>
                </div> 
            </div> 
        </div>   
        </section>  
        </>
    )
}

export default Ofertas
