import facebook from "../img/facebook.svg"
import twitter from "../img/twitter.svg"
import instagram from "../img/instagram.svg"
import style from "./Footer.module.css"
export default function Footer() {
    return <footer className={style.footer}>
        <div className={style.chiziq}></div>
        <div className={style.phile}>
            <div>
                <h2 className={style.audiophile}>audiophile</h2>
                <ul className={style.home}>
                    <li>
                        <a className={style.aud} href="#">Home</a>
                    </li>
                    <li>
                        <a className={style.aud} href="#">HEADPHONES</a>
                    </li>
                    <li>
                        <a className={style.aud} href="#">SPEAKERS</a>
                    </li>
                    <li>
                        <a className={style.aud} href="#">EARPHONES</a>
                    </li>
                </ul>

                <div className={style.full}>
                    <div className={style.yarm}>
                        <p className={style.paragrph}>Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br /> of music lovers and sound specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility - we’re open 7 <br /> days a week.</p>
                        <div className={style.nima}>
                            <img src={facebook} alt="#" />
                            <img className={style.style} src={twitter} alt="#" />
                            <img src={instagram} alt="#" />
                        </div>
                    </div>

                    <div>
                        <h4 className={style.all}>
                            Copyright 2021. All Rights Reserved
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

