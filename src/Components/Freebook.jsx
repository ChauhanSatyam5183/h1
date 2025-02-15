/* eslint-disable no-unused-vars */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Freebook() {
  const [books, setBooks] = useState([]); // State for all books
  const [filteredBooks, setFilteredBooks] = useState([]); // State for filtered books

  // Fetch and filter books on component mount
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response=null;
        // const response = await axios.get("/api/books");
        console.log("response", response.data);

        // Set all books
        setBooks(response.data);

        // Filter books with category 'free' and set filtered books
        const freeBooks = response.data.filter((data) => data.category === "free");
        setFilteredBooks(freeBooks); // Store filtered books in state
      } catch (error) {
        console.log(error);
      }
    };
 
    getBooks(); // Call the fetch function
  }, []); // Empty dependency array ensures it runs once after initial render

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-bold text-xl pb-2">Free Offered Course</h1>
          <p>
            A bookstore is a treasure trove for readers of all ages, offering a wide selection
            of books across various genres. Whether youre looking for the latest bestsellers,
            timeless classics, or hidden gems, bookstores provide the perfect space to explore
            new worlds, spark creativity, and enjoy the thrill of discovering your next great read.
          </p>
        </div>

        {/* Render the slider only if there are filtered books */}
        <div>
          {filteredBooks.length > 0 ? (
            <Slider {...settings}>
              {filteredBooks.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          ) : (
            <p>Loading books...</p> // Show loading message if no books are available yet
          )}
        </div>
      </div>
    </>
  );
}
