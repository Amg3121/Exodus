import React from 'react'

function MainCruceros() {
    return (
        <>
        

        <section className="section-main-destination">
         {/* <img src="http://mecamx.net/exodus2020/africa/img/slider-principal/slider-principal.jpg" alt="" className="section-main__image"/>*/}
        <h1 class="h1-title-section">Viajes Cruceros</h1>
		<div className="section-filtro"></div>
    </section>
        
        <section className="section-mega-offers">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                
                <iframe className="iframe-mega" title="cruceros" src="https://www.megatravel.com.mx/tools/vi.php?Dest=13&txtColor=fff&aColor=fff&ahColor=fff&thBG=fff&thTxColor=fff&ff=3" width="100%" height="1200" border="0"align="left" allowtransparency="true" frameborder="0"> </iframe>
                </div> 
            </div> 
        </div>   
        </section>
      
        </>
    )
}

export default MainCruceros
