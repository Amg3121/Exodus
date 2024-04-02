import React from 'react'
function MainEuropa() {
    return (
        <>
            <section className="back-head back-head-pink">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 container-main-title">
                            <h1 className="text-center main-title mb-1">Viajes Europa</h1>
                        </div>
                    </div>
                </div>
                <div className="filter"></div>
            </section>
            <section className="section-top-ten">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe className="iframe-mega" title="europa" src="https://www.megatravel.com.mx/tools/vi.php?Dest=1&txtColor=000&aColor=000&ahColor=e83e8c&thBG=e83e8c&thTxColor=fff&ff=9" width="100%" height="1200" border="0" align="left" allowtransparency="true" frameborder="0"> </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainEuropa
