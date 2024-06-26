import React from 'react'
function MainMedioOriente() {
    return (
        <>
            <section className="back-head back-head-pink">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 container-main-title">
                            <h1 className="text-center main-title mb-1">Viajes Medio Oriente</h1>
                        </div>
                    </div>
                </div>
                <div className="filter"></div>
            </section>
            <section className="section-top-ten">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe className="iframe-mega" title="mediooriente" src="https://www.megatravel.com.mx/tools/vi.php?Dest=2&txtColor=000&aColor=000&ahColor=e83e8c&thBG=e83e8c&thTxColor=fff&ff=9" width="100%" height="1200" border="0" align="left" allowtransparency="true" frameborder="0"> </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainMedioOriente
