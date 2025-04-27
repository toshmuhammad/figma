import Mask from "../img/Mask.svg"
import image from "../img/image.svg"
import over from "../img/over.svg"
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



    </section>;
}