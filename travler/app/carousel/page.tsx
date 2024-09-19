import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
//carousel import allows pictures for homepage to rotate
export default function ImageCarousel () {
  require('react-responsive-carousel').Carousel;
    return (
        <Carousel>
            <div>
                <img src='/reef1/jpg' width={400} height={400} alt="" />
            </div>
            <div>
                <img src='/kayak.jpg' width={400} height={400} alt="" />
            </div>
            <div>
                <img src='/suite.jpg' width={400} height={400} alt="" />
            </div>
            <div>
                <img src='/deluxe.jpg' width={400} height={400} alt="" />
            </div>
            <div>
                <img src='/first-class.jpg' width={400} height={400} alt="" />
            </div>
        </Carousel>
    )
}