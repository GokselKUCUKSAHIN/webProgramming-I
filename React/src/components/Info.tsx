import React from "react";
import bm from '../resources/bm.png';

function Info() {
    return <div>
        <div className="d-flex justify-content-center my-3">
            <img src={bm} alt="bm_logo"/>
        </div>
        <div className="d-flex justify-content-center my-3 text-center px-4">
            <h2>
                Erciyes Üniversitesi Bilgisayar Mühendisliği Bölümü Web Programlama 1
                dersi final sorusu
            </h2>
        </div>
        <div className="d-flex justify-content-center my-3 text-center px-4">
            <h3>Göksel KÜÇÜKŞAHİN</h3>
        </div>
        <div className="d-flex justify-content-center my-3 text-center px-4">
            <h2><b>Alışveriş Uygulaması</b></h2>
        </div>
        <div className="d-flex justify-content-center my-3 text-center px-4">
            <h5>
                Vermek istediğiniz siparişler için aşağıdaki listeden seçerek adedini
                berlitiniz
            </h5>
        </div>
    </div>
}

export default Info;