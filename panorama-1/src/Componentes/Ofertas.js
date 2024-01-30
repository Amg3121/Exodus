import React from 'react'

function Ofertas() {
    return (
        <>
        <div class="header__container--back">
            <div class="container-fluid container__text--title padding__rem">
           
           <h1 class="title__h1"> Viajes Ofertas</h1>
            </div>
        </div>
        
        <section className="section-top-ten">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                  
                <iframe className="iframe-mega" title="ofertas" src="https://www.megatravel.com.mx/tools/ofertas-viaje.php?&txtColor=343a40&aColor=e0a331&ahColor=343a40&thBG=e0a331&thTxColor=fff&ff=7" width="100%" height="1200" border="0"align="left" allowtransparency="true" frameborder="0"> </iframe>
                </div> 
            </div> 
        </div>   
        </section>  
        
        </>
    )
}

export default Ofertas
