import React from "react";
import './Bernat.css';

function Bernat() {
    return (
        <div className="main bernat">
            <div className="list-item">
                <div className="item-title">
                    <h1>Magamról</h1>
                </div>
                <div className="item-content">
                    <p>Gáspár Bernát vagyok, 16 éves tanuló. Jelenleg a Petrik Lajos technikumba járok be minden nap,
                        általánosba a zuglói Herman Ottó Általánosba jártam. Nem a kedvenc eltöltésem iskolába
                        járni, viszont informatikát tanulok és igyekszem <br />a maximumot kihozni belőle.
                    </p>
                </div>
            </div>
            <div className="list-item">
                <div className="item-title">
                    <h1>Tapasztalat</h1>
                </div>
                <div className="item-content">
                    <p>Nagyon nagy projektekben koromhoz fogva még nem vettem részt, viszont barátaimmal
                        számos érdekes dolgot próbáltam ki az informatika, de főleg a programozás terén.
                        Remélhetőleg hamarosan viszont már való élet beli tapasztalatot is gyűjthetek.

                    </p>
                </div>
            </div>
            <div className="list-item">
                <div className="item-title">
                    <h1>Kedvenc tantárgyak</h1>
                </div>
                <div className="item-content">
                    <p>Legfőképpen azt szeretem, amikor nincsnek órák és tanulhatok magamtól, viszont ha mondanom kéne párat,
                        akkor igazából minden reál tantárgyat mondanék. Ezekben van nagyobb ismeretem, részben
                        ezért is szeretem ezeket jobban.
                    </p>
                </div>
            </div>
            <div className="list-item">
                <div className="item-title">
                    <h1>Jövőkép</h1>
                </div>
                <div className="item-content">
                    <p>Ha kijártam végre valahára az iskolát utána már rendeltetés szerűen programozó szeretnék
                        lenni, saját vállalkozásokba kezdeni, megismerni az üzletet. Azt, hogy később még
                        hol akarok tanulni, arról fogalmam sincs egyenlőre.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Bernat;