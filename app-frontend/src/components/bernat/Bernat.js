import React from "react";
import './Bernat.css';
import bernat from '../img/bernat.jpg';
import { BsInstagram, BsFacebook } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';

function Bernat() {
    return (
        <div className="main">
            <div className="list-item">
                <div className="item-title">
                    <h1>Magamról</h1>
                </div>
                <div className="item-content">
                    <p>Gáspár Bernát vagyok, 16 éves tanuló. Jelenleg a Petrik Lajos technikumba járok be minden nap,
                        általánosba a zuglói Herman Ottó Általánosba jártam. Nem feltétlen a kedvenc dolgom
                        iskolába járni, viszont informatikát tanulok és igyekszem <br />a maximumot kihozni belőle.
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
            <div className="img-div">
                <img src={bernat} alt="bernat" />
            </div>
            <div className="list-item">
                <div className="item-title">
                    <h1>Kedvenc tantárgyak</h1>
                </div>
                <div className="item-content">
                    <p>Nagyon nem tudnék kiemelni egy tantárgyat, inkább az adott
                        tantárgyon belül a témától függ a preferenciám, viszont ha mondanom kéne párat,
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
                    <p>Ha kijártam az iskolát utána már rendeltetés szerűen programozó szeretnék
                        lenni, saját vállalkozásokba kezdeni, megismerni az üzletet. Azt, hogy később még
                        hol akarok tanulni, ahhoz több előkészület és utána nézés szükséges.
                    </p>
                </div>
            </div>
            <div className="social-media">
                <div className="social">
                    <BsInstagram size={30} />
                    <p>gaspar.bernat</p>
                </div>
                <div className="social">
                    <BsFacebook size={30} />
                    <p>Gáspár Bernát</p>
                </div>
                <div className="social">
                    <AiFillMail size={30} />
                    <p>gaspar.bernat2005@gmail.com</p>
                </div>
            </div>
        </div>
    );
}

export default Bernat;