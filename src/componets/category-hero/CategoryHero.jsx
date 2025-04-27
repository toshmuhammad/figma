import Mask from "../img/Mask.svg"
import image from "../img/image.svg"
import over from "../img/over.svg"
import belgi from "../img/belgi.svg"
import quloqchin from "../img/quloqchin.svg"
import kalonka from "../img/kalonka.svg"
import kane from "../img/kane.svg"
import Brat from "../img/Brat.svg"
import stil from "./CategoryHero.module.css"
export default function CategoryHero() {
    return <section className={stil.full}>
        <div className={stil.ful}>
            <div className={stil.img}>
                <img src={Mask} alt="#" />
            </div>
            <div className={stil.new}>
                <p className={stil.product}>
                    NEW PRODUCT
                </p>
                <h2 className={stil.mark}>XX99 Mark II <br />
                    Headphones</h2>
                <p className={stil.the}>The new XX99 Mark II headphones is the pinnacle of pristine <br /> audio. It redefines your premium headphone experience by <br /> reproducing the balanced depth and precision of studio-quality <br /> sound.</p>
                <button className={stil.btn}>See Product</button>
            </div>
        </div>

        <div className={stil.usa}>
            <div className={stil.as}>
                <h2 className={stil.mark}>XX99 Mark I <br />
                    Headphones</h2>
                <p className={stil.the}>As the gold standard for headphones, the classic XX99 Mark I <br /> offers detailed and accurate audio reproduction for <br /> audiophiles, mixing engineers, and music aficionados alike in <br /> studios and on the go.</p>
                <button className={stil.btn}>See Product</button>
            </div>
            <div className={stil.img}>
                <img src={image} alt="#" />
            </div>
        </div>



        <div className={stil.ful}>
            <div className={stil.img}>
                <img src={over} alt="#" />
            </div>
            <div className={stil.new}>
                <h2 className={stil.mark}>XX59 <br />
                    Headphones</h2>
                <p className={stil.the}>Enjoy your audio almost anywhere and customize it to your <br /> specific tastes with the XX59 headphones. The stylish yet <br /> durable versatile wireless headset is a brilliant companion at <br /> home or on the move. </p>
                <button className={stil.btn}>See Product</button>
            </div>
        </div>


        <div className={stil.hamma}>
            <div className={stil.put}>
                <img src={quloqchin} alt="#" />
                <h3>HEADPHONES</h3>
                <div className={stil.nik}>
                    <p>Shop</p>
                    <img src={belgi} alt="#" />
                </div>
            </div>

            <div className={stil.pat}>
                <img src={kalonka} alt="#" />
                <h3>SPEAKERS</h3>
                <div className={stil.nik}>
                    <p>Shop</p>
                    <img src={belgi} alt="#" />
                </div>
            </div>

            <div className={stil.pit}>
                <img src={kane} alt="#" />
                <h3>EARPHONES</h3>
                <div className={stil.nik}>
                    <p>Shop</p>
                    <img src={belgi} alt="#" />
                </div>
            </div>
        </div>


        <div className={stil.home}>
            <div className={stil.stop}>
                <h2 className={stil.you}>BRINGING YOU THE <br /> <span className={stil.best}>BEST</span> AUDIO GEAR</h2>
                <p className={stil.lokation}>Located at the heart of New York City, Audiophile is the premier <br /> store for high end headphones, earphones, speakers, and audio <br /> accessories. We have a large showroom and luxury <br /> demonstration rooms available for you to browse and <br /> experience a wide range of our products. Stop by our store to <br /> meet some of the fantastic people who make Audiophile the <br /> best place to buy your portable audio equipment.</p>
            </div>
            <div className={stil.brat}>
                <img src={Brat} alt="#" />
            </div>
        </div>


    </section>;
}