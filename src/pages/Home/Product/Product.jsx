import product1 from "../../../assets/products/1.png";
import product2 from "../../../assets/products/2.png";
import product3 from "../../../assets/products/3.png";
import product4 from "../../../assets/products/4.png";
import product5 from "../../../assets/products/5.png";
import product6 from "../../../assets/products/6.png";
import { Rating } from "@smastrom/react-rating";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
const Product = () => {
  const products = [
    { img: product1, title: "Car Engine Plug", price: "$40.00" },
    { img: product2, title: "Car Air Filter", price: "$50.00" },
    { img: product3, title: "Cools Led Light", price: "$30.00" },
    { img: product4, title: "Cools Led Light", price: "$20.00" },
    { img: product5, title: "Cools Tyr Light", price: "$10.00" },
    { img: product6, title: "Car UPS Plug", price: "$20.00" },
  ];
  return (
    <div className="md:mt-36">
      <SectionHeader
        title="Popular Products"
        subTitle="Browse Our Products"
        description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      ></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="card card-compact md:w-80 bg-base-100 shadow-2xl"
          >
            <figure>
              <img src={product.img} className="w-32" />
            </figure>
            <div className="card-body items-center justify-end">
              <Rating style={{ maxWidth: 100 }} value={5} readOnly />
              <h2 className="card-title text-dark2">{product.title}</h2>
              <p className="text-primaryColor">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
