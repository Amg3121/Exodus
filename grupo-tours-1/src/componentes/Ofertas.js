import React from 'react'
function Ofertas() {
    return (
        <>
            <section className="section1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center title-section  mb-4 ">Viajes Ofertas</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-top-ten">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe className="iframe-mega" title="ofertas" src="https://www.megatravel.com.mx/tools/ofertas-viaje.php?&txtColor=343a40&aColor=343a40&ahColor=e87234&thBG=e87234&thTxColor=fff&ff=9" width="100%" height="1200" border="0" align="left" allowtransparency="true" frameborder="0"> </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Ofertas
