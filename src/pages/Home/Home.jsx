import AboutUs from './AboutUs/AboutUs';
import Nap from './Nap/Nap';
import Product from './Product/Product';
import Service from './Service/Service';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <>
        <Slider></Slider>
        <AboutUs></AboutUs>
        <Service></Service>
        <Nap></Nap>
        <Product></Product>
        </>
    );
};

export default Home;