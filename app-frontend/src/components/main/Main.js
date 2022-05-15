import "./Main.css";
import { useState } from "react";
import { BsCashCoin, BsGlobe2 } from "react-icons/bs";
import { GoRocket } from "react-icons/go";
import axios from 'axios';

const apiAddress = "http://localhost:5000/api";

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
    try {
      const response = await axios.get(
        `https://free.currconv.com/api/v7/convert?q=USD_${curr}&compact=ultra&apiKey=ab0ba6e042abcccc63e7`);
      console.log(response.data);
      setCurrency({ name: curr, multiplier: response.data[`USD_${curr}`] });
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
        .replaceAll(" ", "-")}`;
      try {
        const res = await fetch(queryUrl).then((response) => response.json());
        res.offstrData = parseFloat(res.offstrData.toString().replace('$', ''));
        res.keyshopData = parseFloat(res.keyshopData.toString().replace('~', '').replace('$', ''));
        setApiData(res);
        setLoad("false");
      } catch (e) {
        console.error(e);
        setLoad("error");
      }
    }
  }

  return (
    <div className="App">
      <div className="App-wrapper">
        <div className="top-setting md-col-2">
          <ul className="settings-list">
            <li className="setting">
              Régió: <b>Hamarosan</b>
            </li>
            <li className="setting">
              Keyshopok:
              <b>
                <select id="keyshop" onChange={() => {
                  keyshopValue();
                }}>
                  <option value="enable">Engedélyez</option>
                  <option value="disable">Nem engedélyez</option>
                </select>
              </b>
            </li>
            <li className="setting md-col-2">
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
        <div className="title-line md-col-2">
          <div className="text-wrapper">
            <h1 className="first-header">Janó Manó</h1>
            <h1 className="second-header">minden vágyad teljesül</h1>
          </div>
        </div>
        <div className="slider-container">
          <div className="container-inner">
            <div className="slider-box">
              <h1>Legjobb árak</h1>
              <BsCashCoin size={50} />
              <p>
                Oldalunk nem csak, hogy jó árakat keres a neten, hanem egyenesen a
                legjobbakat. Az oldal futtatásakor egy speciális mély webes kereső
                algoritmus fut le, melynek segítségével végigjárjuk az{" "}
                <b>összes</b> elérhető ajánlatot és kiválasztjuk neked a{" "}
                <b>legjobbat</b>. A beállításaidtól függően meg tudunk jeleníteni
                akár keyshopokat is, emellett egy, az ajánlathoz vezető linket is
                adunk neked.
              </p>
            </div>
            <div className="slider-box">
              <h1>Egyszerű használat</h1>
              <GoRocket size={50} />
              <p>
                Weboldalunkat úgy készítettük el, hogy a lehető legfelhasználó
                barátabb legyen, egy letisztul UI designal és egy nagyon egyszerű
                kezelőfelülettel. Mindössze annyit kell tenned, hogy a lentebb
                található kereső mezőbe beírod a játék nevét melyet meg szeretnél
                venni és mi mutatjuk is az ajánlatokat.{" "}
                <i>
                  *Fontos, hogy a játék nevét pontosan add meg, ügyelve arra, hogy ha szóköz van
                  akkor tényleg írd ki a szóközt*
                </i>
              </p>
            </div>
            <div className="slider-box">
              <h1>Minden megtalálható</h1>
              <BsGlobe2 size={50} />
              <p>
                Széles választékot kínálunk az oldalon, hogy egészen biztosan
                megtaláld azt a játékot, amire vágysz. A régi klasszikusoktól
                kezdve a most népszerű, vagy esetleg feltörekvő videójátékokig
                mindenünk van. Mindezek ellenére, ha mégis úgy érzed, hogy
                valamilyen okból kifolyólag nem találtunk ajánlatot a kedvenc
                játékodhoz, akkor azt mindenképp jelezd nekünk, viszont hisszük,
                hogy ilyenre nem fog sor kerülni :)
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
            placeholder="Adj meg egy játékot."
          />
          <p>
            <i>
              *Megint csak kiemelendő, a játék nevét teljes mértékben pontosan add meg, mivel
              egyenlőre csak így működik a keresés*
            </i>
          </p>
        </div>
        <div className="response-section">
          {isLoading === "true" ? (
            <div className="response-box loading">
              <p>Betöltés...</p>
              <div className="loader"></div>
            </div>
          ) : isLoading === "false" ? (
            <div className="response-box success" style={{
              backgroundImage: `url("${apiData.bgImageData}")`
            }}>
              <div className="official">
                <p id="official">Hivatalos ár: {(apiData.offstrData * currency.multiplier).toFixed(2)}{currency.name}</p>
                <a className="success-btn" href={apiData.storeUrlData} target="_blank" rel="noreferrer">
                  Vásárolj most</a>
              </div>
              <div className="keyshop" style={{display: keyshop ? '' : 'none'}}>
                <p id="keyshop">Keyshopos ár: {(apiData.keyshopData * currency.multiplier).toFixed(2)}{currency.name}</p>
                <a className="success-btn" href={apiData.keyshopUrlData} target="_blank" rel="noreferrer">
                  Vásárolj most</a>
              </div>
            </div>
          ) : (
            <div className="response-box error">
              <p>Hiba történt. Valószínűleg elírtál valamit :(</p>
            </div>
          )}
        </div>
        <div className="filler"></div>
      </div>
      <div className="mobile-view">
        <div className="mw-wrapper">
          <h1>Rossz a telefonod :(</h1>
        </div>
      </div>
    </div>
  );
}

export default Main;
