import { useState, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    fetch('http://127.0.0.1:8000/images/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setImages(data);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  // Function to open the modal with the selected image
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index); // Set the current index of the clicked image
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0); // Reset the index when the modal is closed
  };

  // Function to navigate to the previous image
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Function to navigate to the next image
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500, 
      easing: "ease-in-out",
      once: false, 
    });
  }, []);



  return (
    <div className="container mx-auto px-2 py-2">
      <h2 className="text-center text-3xl font-bold mb-8 text-red-800">Gallery</h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative overflow-hidden  shadow-xl hover:shadow-xl transition-shadow duration-300 cursor-pointer" 
            onClick={() => openModal(image, index)} // Open modal on click and pass the index
          >
            <img
              src={`http://127.0.0.1:8000${image.image}`}
              alt={image.title || "Gallery Image"}
              className="w-full h-80 object-cover transform hover:scale-105 hover:brightness-75 transition-transform duration-700" data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            />
            {image.title && (
              <div className="absolute inset-0 flex itjustify-centerems-center  bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold text-center">
                  {image.title}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for displaying the selected image with slider */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal} // Close modal when clicking outside the image
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <img
              src={`http://127.0.0.1:8000${images[currentIndex].image}`}
              alt={images[currentIndex].title || "Gallery Image"}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            {images[currentIndex].title && (
              <p className="text-white text-center mt-4 text-xl font-semibold">
                {images[currentIndex].title}
              </p>
            )}

            {/* Previous Button */}
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from closing
                goToPrevious();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from closing
                goToNext();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 rounded-full p-2 transition-colors duration-300 bg-orange-100 hover:bg-orange-800 animate-bounce shadow-xl"
              onClick={closeModal} 
            >
                <IoIosClose size={25}/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;