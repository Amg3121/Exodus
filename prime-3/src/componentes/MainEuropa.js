import React from 'react'
function MainEuropa() {
    return (
        <>
            <section className="agencia">
                <div className="container-template">
                    <div className="row">
                        {/**  <div className="col-md-6">
                        <img src="https://exodus.b-cdn.net/exodus/prime/01/img/chica-sombrero.png" className="img-fluid" alt="agencia de viajes"/>
                    </div>*/}
                        <div className="col-md-12">
                            <h1 className="title-h1-destinos"> Viajes Europa</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-top-ten">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe className="iframe-mega" title="europa" src="https://www.megatravel.com.mx/tools/vi.php?Dest=1&txtColor=7f7f7f&aColor=7f7f7f&ahColor=599097&thBG=599097&thTxColor=fff&ff=2" width="100%" height="1200" border="0" align="left" allowtransparency="true" frameborder="0"> </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainEuropa
