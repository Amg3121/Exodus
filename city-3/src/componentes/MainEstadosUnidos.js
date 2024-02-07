import React from 'react'
function MainEstadosUnidos() {
    return (
        <>
            <section className="back-head back-head-red">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 container-main-title">
                            <h1 className="text-center main-title mb-1">Viajes Estados Unidos</h1>
                        </div>
                    </div>
                </div>
                <div className="filter"></div>
            </section>
            <section className="section-top-ten">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe className="iframe-mega" title="usa" src="https://www.megatravel.com.mx/tools/vi.php?Dest=8&txtColor=082240&aColor=082240&ahColor=f81010&thBG=f81010&thTxColor=fff&ff=7" width="100%" height="1200" border="0" align="left" allowtransparency="true" frameborder="0"> </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainEstadosUnidos
