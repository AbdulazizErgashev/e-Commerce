import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Img1 from "../img/1.png";
import Img2 from "../img/2.png";
import Img3 from "../img/3.png";
import Img4 from "../img/4.png";
import Img5 from "../img/5.png";
import Img6 from "../img/6.png";
import Img7 from "../img/7.png";
import Img8 from "../img/8.png";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-4xl text-gray-700 cursor-pointer bg-white p-2 rounded-full shadow-lg"
      onClick={onClick}
    >
      <MdNavigateNext />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-4xl text-gray-700 cursor-pointer bg-white p-2 rounded-full shadow-lg"
      onClick={onClick}
    >
      <MdNavigateBefore />
    </div>
  );
};

export default function Products() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      title: "Product 1",
      image: Img1,
      price: 12.3,
      discount: 2,
    },
    {
      id: 2,
      title: "Product 2",
      image: Img2,
      price: 14.5,
      discount: 1.5,
    },
    {
      id: 3,
      title: "Product 3",
      image: Img3,
      price: 9.99,
      discount: 3,
    },
    {
      id: 4,
      title: "Product 4",
      image: Img4,
      price: 25.0,
      discount: 5,
    },
    {
      id: 5,
      title: "Product 5",
      image: Img5,
      price: 7.75,
      discount: 1,
    },
    {
      id: 6,
      title: "Product 6",
      image: Img6,
      price: 19.99,
      discount: 2.5,
    },
    {
      id: 7,
      title: "Product 7",
      image: Img7,
      price: 18.0,
      discount: 3,
    },
    {
      id: 8,
      title: "Product 8",
      image: Img8,
      price: 22.5,
      discount: 4,
    },
  ];

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="min-h-screen w-full px-4 md:px-10 py-5 bg-gray-100">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-5 text-gray-800">
        Products Carousel
      </h2>
      <Slider {...settings} className="mt-5">
        {products.map((item) => (
          <div key={item.id} className="p-2 md:p-4">
            <div
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleProductClick(item.id)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 md:h-60 object-contain"
              />
              <div className="mt-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <p className="text-red-500">Discount: {item.discount}% Off</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
