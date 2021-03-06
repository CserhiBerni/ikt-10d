import "./Main.css";
import { useState } from "react";
import { BsCashCoin, BsGlobe2 } from "react-icons/bs";
import { GoRocket } from "react-icons/go";
import axios from 'axios';

const apiAddress = "http://localhost:5000/api";

const currencyCache = {
  'USD_USD': { name: "USD", multiplier: 1 },
};

const gameCache = {};

document.title = "Gazdag Majmok";

function Main() {
  const [isLoading, setLoad] = useState("false");
  const [currency, setCurrency] = useState({ name: "USD", multiplier: 1 });
  const [keyshop, keyshopStatus] = useState(true);
  const [apiData, setApiData] = useState(
    { offstrData: "0", keyshopData: "0", storeUrlData: "0", keyshopUrlData: "0", bgImageData: "0" }
  );

  function keyshopValue() {
    let keyshopValue = document.getElementById('keyshop');
    if (keyshopValue === keyshop) {
      return;
    }
    else {
      keyshopStatus(!keyshop);
    }
  }

  async function changeCurrency(curr) {
    const pair = `USD_${curr}`;
    if (currencyCache[pair] != null) {
      console.log('Using cache', currencyCache[pair]);
      setCurrency(currencyCache[pair]);
      return;
    }

    try {
      const response = await axios.get(
        `https://free.currconv.com/api/v7/convert?q=${pair}&compact=ultra&apiKey=ab0ba6e042abcccc63e7`);
      setCurrency({ name: curr, multiplier: response.data[pair] });
      currencyCache[pair] = { name: curr, multiplier: response.data[pair] };
    } catch (error) {
      console.error(error);
    }
  }

  function getCurrency() {
    let prev = currency.name;
    let current = document.getElementById('currency').value.toUpperCase();

    if (prev === current) return;
    if (current === "USD") {
      setCurrency({ name: current, multiplier: 1 });
      return;
    }

    setCurrency({ name: current, multiplier: 0 });
    changeCurrency(current);
  }

  async function submit(e) {
    if (e.key === "Enter") {
      setLoad("true");
      let input = document.querySelector(".search-bar").value;
      document.querySelector(".search-bar").value = "";
      const queryUrl = `${apiAddress}?game=${input
        .toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll("'", "-")}`;
      if (gameCache[input] != null) {
        console.log('Using cache', gameCache[input]);
        setTimeout(() => {
          setApiData(gameCache[input]);
          setLoad("false");
        }, 1000);
        return;
      }
      try {
        const res = await fetch(queryUrl).then((response) => response.json());
        res.offstrData = parseFloat(res.offstrData.toString().replace('$', ''));
        res.keyshopData = parseFloat(res.keyshopData.toString().replace('~', '').replace('$', ''));
        gameCache[input] = res;
        setApiData(res);
        setLoad("false");
      } catch (err) {
        console.error(err);
        setLoad("error");
      }
    }
  }

  return (
    <div className="App">
      <div className="App-wrapper">
        <div className="top-setting">
          <ul className="settings-list">
            <li className="setting">
              R??gi??: <b>Hamarosan</b>
            </li>
            <li className="setting">
              Keyshopok:
              <b>
                <select id="keyshop" onChange={() => {
                  keyshopValue();
                }}>
                  <option value="enable">Enged??lyez</option>
                  <option value="disable">Nem enged??lyez</option>
                </select>
              </b>
            </li>
            <li className="setting">
              Valuta:
              <select id="currency" onChange={() => {
                getCurrency();
              }}>
                <option value="usd">USD</option>
                <option value="huf">HUF</option>
                <option value="eur">EUR</option>
                <option value="gbp">GBP</option>
                <option value="jpy">JPY</option>
              </select>
            </li>
          </ul>
        </div>
        <div className="title-line">
          <div className="text-wrapper">
            <h1 className="first-header">Gazdag Majmok</h1>
            <h1 className="second-header">minden j??t??k olcs??n</h1>
          </div>
        </div>
        <div className="slider-container">
          <div className="container-inner">
            <div className="slider-box">
              <h1>Legjobb ??rak</h1>
              <BsCashCoin size={50} />
              <p>
                Oldalunk nem csak, hogy j?? ??rakat keres a neten, hanem egyenesen a
                legjobbakat. Az oldal futtat??sakor egy speci??lis m??ly webes keres??
                algoritmus fut le, melynek seg??ts??g??vel v??gigj??rjuk az{" "}
                <b>??sszes</b> el??rhet?? aj??nlatot ??s kiv??lasztjuk neked a{" "}
                <b>legjobbat</b>. A be??ll??t??saidt??l f??gg??en meg tudunk jelen??teni
                ak??r keyshopokat is, emellett egy, az aj??nlathoz vezet?? linket is
                adunk neked.
              </p>
            </div>
            <div className="slider-box">
              <h1>Egyszer?? haszn??lat</h1>
              <GoRocket size={50} />
              <p>
                Weboldalunkat ??gy k??sz??tett??k el, hogy a lehet?? legfelhaszn??l??
                bar??tabb legyen, egy letisztul UI designal ??s egy nagyon egyszer??
                kezel??fel??lettel. Mind??ssze annyit kell tenned, hogy a lentebb
                tal??lhat?? keres?? mez??be be??rod a j??t??k nev??t melyet meg szeretn??l
                venni ??s mi mutatjuk is az aj??nlatokat.{" "}
                <i>
                  *Fontos, hogy a j??t??k nev??t pontosan add meg, ??gyelve arra, hogy ha sz??k??z van
                  akkor t??nyleg ??rd ki a sz??k??zt*
                </i>
              </p>
            </div>
            <div className="slider-box">
              <h1>Minden megtal??lhat??</h1>
              <BsGlobe2 size={50} />
              <p>
                Sz??les v??laszt??kot k??n??lunk az oldalon, hogy eg??szen biztosan
                megtal??ld azt a j??t??kot, amire v??gysz. A r??gi klasszikusokt??l
                kezdve a most n??pszer??, vagy esetleg felt??rekv?? vide??j??t??kokig
                minden??nk van. Mindezek ellen??re, ha m??gis ??gy ??rzed, hogy
                valamilyen okb??l kifoly??lag nem tal??ltunk aj??nlatot a kedvenc
                j??t??kodhoz, akkor azt mindenk??pp jelezd nek??nk, viszont hissz??k,
                hogy ilyenre nem fog sor ker??lni :)
              </p>
            </div>
          </div>
        </div>
        <div className="searchbar-section">
          <input
            onKeyDown={(e) => {
              submit(e);
            }}
            className="search-bar"
            type="text"
            placeholder="Adj meg egy j??t??kot."
          />
          <p>
            <i>
              *Megint csak kiemelend??, a j??t??k nev??t teljes m??rt??kben pontosan add meg, mivel
              egyenl??re csak ??gy m??k??dik a keres??s*
            </i>
          </p>
        </div>
        <div className="response-section">
          {isLoading === "true" ? (
            <div className="response-box loading">
              <p>Bet??lt??s...</p>
              <div className="loader"></div>
            </div>
          ) : isLoading === "false" ? (
            <div className="response-box success" style={{
              backgroundImage: `url("${apiData.bgImageData}")`
            }}>
              <div className="official">
                <p id="official">Hivatalos ??r: {(apiData.offstrData * currency.multiplier).toFixed(2)}{currency.name}</p>
                <a className="success-btn" href={apiData.storeUrlData} target="_blank" rel="noreferrer">
                  V??s??rolj most</a>
              </div>
              <div className="keyshop" style={{ display: keyshop ? '' : 'none' }}>
                <p id="keyshop">Keyshopos ??r: {(apiData.keyshopData * currency.multiplier).toFixed(2)}{currency.name}</p>
                <a className="success-btn" href={apiData.keyshopUrlData} target="_blank" rel="noreferrer">
                  V??s??rolj most</a>
              </div>
            </div>
          ) : (
            <div className="response-box error">
              <p>Hiba t??rt??nt. Val??sz??n??leg el??rt??l valamit :(</p>
            </div>
          )}
        </div>
        <div className="filler"></div>
      </div>
    </div>
  );
}

export default Main;
