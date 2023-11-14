import AboutUs from './AboutUs/AboutUs';
import ChooseUs from './ChooseUs/ChooseUs';
import Nap from './Nap/Nap';
import Product from './Product/Product';
import Service from './Service/Service';
import Slider from './Slider/Slider';
import Teams from './Teams/Teams';

const Home = () => {
    return (
        <>
        <Slider></Slider>
        <AboutUs></AboutUs>
        <Service></Service>
        <Nap></Nap>
        <Product></Product>
        <Teams></Teams>
        <ChooseUs></ChooseUs>
        </>
    );
};

export default Home;