import Carousel from './carousel';
import '../sass/carousel.scss';

let options1 = {
    container: "my-carousel",
    icon: "lightbulb",
    title: "Fresh and just uploaded content",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}
let carousel1 = new Carousel(options1);

let options2 = {
    container: "my-carousel2",
    icon: "star",
    title: "Most popular content",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}
let carousel2 = new Carousel(options2);