import React from 'react'
function MainCruceros() {
    return (
        <>
            <section className="bg-image-02 context-dark section-70 section-xl-120">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 container-main-title">
                            <h1 className="text-spacing-60 text-uppercase text-ubold2 p text-center">Viajes Cruceros</h1>
                        </div>
                    </div>
                </div>
                <div className="filter"></div>
            </section>
            <section className="section-top-ten">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe className="iframe-mega" title="cruceros" src="https://www.megatravel.com.mx/tools/vi.php?Dest=13&txtColor=333333&aColor=333333&ahColor=8f22fc&thBG=8f22fc&thTxColor=fff&ff=9" width="100%" height="1200" border="0" align="left" allowtransparency="true" frameborder="0"> </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainCruceros
