import React from 'react'
function MainEventos() {
    return (
        <>
            <div class="header__container--back">
                <div class="container-fluid container__text--title padding__rem">
                    <h1 class="title__h1"> Viajes Eventos </h1>
                </div>
            </div>
            <section className="section-top-ten">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <iframe className="iframe-mega" title="eventos" src="https://www.megatravel.com.mx/tools/vi.php?Dest=12&txtColor=082240&aColor=307fd9&ahColor=082240&thBG=307fd9&thTxColor=fff&ff=7" width="100%" height="1200" border="0" align="left" allowtransparency="true" frameborder="0"> </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainEventos
