import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Product.scss";
import { useContext } from "react";
import { ShopContext } from "../../Context/Context";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Product({ products }) {
    const { id } = useParams();
    const product = products.find((e) => e.productId === Number(id));
    const { addToCart, cartItems } = useContext(ShopContext);


    const sndMsg = (prName) => {
        const mahsulot = prName;

        const natija = window.confirm("Mahsulotimizni xarid qilmoqchimisiz ?")

        if (natija) {
            const xabar = `Assalomu alaykum. Men ${mahsulot}dan buyurtma bermoqchiman.`

            const tgurl = `https://t.me/sayfullayevv_h?text=${encodeURIComponent(xabar)}`;

            window.open(tgurl, "_blank")
        }
    }


    return (
        <>
            <Navbar />
            <div className="product">
                <img src={product.productImage} className="productImage" alt="" />
                <div>
                    <p className="productName">
                        {product.productName}
                    </p>
                    <p
                        className="productDesc"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
                        suscipit hic unde obcaecati, in dolore qui accusantium neque debitis
                        earum architecto voluptatum impedit necessitatibus optio rerum
                        doloremque cupiditate a illum.
                    </p>
                    <div className="count_product" >
                        <p>Narxi: <b>{product.productPrice}</b></p>
                        <button
                            onClick={() => {
                                addToCart(product.productId);
                                sndMsg(product.productName)
                            }}
                        >
                            Buyurtma berish
                        </button>
                    </div>
                </div>
            </div>
            <div style={{
                marginTop: '120px'
            }}>
                <Contact />

            </div>
            <Footer />
        </>
    );
}