import React from 'react'

function Promociones() {
    return (
        <>
       

    <section className="section-main-destination">
    {/* <img src="http://mecamx.net/exodus2020/africa/img/slider-principal/slider-principal.jpg" alt="" className="section-main__image"/>*/}
        <h1 class="h1-title-section">Viajes Promociones</h1>
		<div className="section-filtro"></div>
    </section>
        
        <section className="section-mega-offers">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                
                <iframe className="iframe-mega" title="promociones" src="https://www.megatravel.com.mx/tools/ofertas-viaje.php?&txtColor=fff&aColor=fff&ahColor=fff&thBG=fff&thTxColor=fff&ff=3" width="100%" height="1200" border="0"align="left" allowtransparency="true" frameborder="0"> </iframe>
                </div> 
            </div> 
        </div>   
        </section>  
        
        </>
    )
}

export default Promociones
