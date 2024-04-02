import React from 'react'
function MainSudamerica() {
    return (
        <>
            <section className="back-head">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 container-main-title">
                            <h1 className="text-center main-title mb-1">Viajes Sudamérica</h1>
                        </div>
                    </div>
                </div>
                <div className="filter"></div>
            </section>
            <section className="section-top-ten">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe className="iframe-mega" title="sudamerica" src="https://www.megatravel.com.mx/tools/vi.php?Dest=7&txtColor=333333&aColor=333333&ahColor=5ab8c4&thBG=5ab8c4&thTxColor=fff&ff=9" width="100%" height="1200" border="0" align="left" allowtransparency="true" frameborder="0"> </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainSudamerica
