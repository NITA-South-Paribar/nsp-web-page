import React, { useEffect, useState } from "react";
import Image1 from '../../images/img1.jpeg';
import Image2 from '../../images/img2.jpeg';
import Image3 from '../../images/img3.jpeg';
import Image4 from '../../images/img4.jpeg';
import Image5 from '../../images/img5.jpeg';
import Image6 from '../../images/img6.jpeg';
import Image7 from '../../images/img7.jpeg';
import Image8 from '../../images/img8.jpeg';
import Image9 from '../../images/img9.jpeg';
import Image10 from '../../images/img10.jpeg';
import Image11 from '../../images/img11.jpeg';
import Image12 from '../../images/img12.jpeg';
import Image13 from '../../images/img13.jpeg';
import Image14 from '../../images/img14.jpeg';
import Image15 from '../../images/img15.jpeg';
import Image16 from '../../images/img16.jpeg';

const imagesData = [
    { id: '1', imageName: Image1, tag: 'free' },
    { id: '2', imageName: Image2, tag: 'new' },
    { id: '3', imageName: Image3, tag: 'pro' },
    { id: '4', imageName: Image4, tag: 'pro' },
    { id: '5', imageName: Image5, tag: 'free' },
    { id: '6', imageName: Image6, tag: 'new' },
    { id: '7', imageName: Image7, tag: 'pro' },
    { id: '8', imageName: Image8, tag: 'free' },
    { id: '9', imageName: Image9, tag: 'new' },
    { id: '10', imageName: Image10, tag: 'new' },
    { id: '11', imageName: Image11, tag: 'new' },
    { id: '12', imageName: Image12, tag: 'new' },
    { id: '13', imageName: Image13, tag: 'free' },
    { id: '14', imageName: Image14, tag: 'pro' },
    { id: '15', imageName: Image15, tag: 'free' },
    { id: '16', imageName: Image16, tag: 'new' }
];

export const ImageGallery = () => {
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sliderImages, setSliderImages] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setFilteredImages(tag === 'all' ? imagesData : imagesData.filter(image => image.tag === tag));
    }, [tag]);

    useEffect(() => {
        if (selectedImage) {
            setCurrentIndex(filteredImages.findIndex(img => img.id === selectedImage.id));
        }
    }, [selectedImage, filteredImages]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isModalOpen) {
                if (event.key === 'Escape') {
                    handleCloseModal();
                } else if (event.key === 'ArrowLeft') {
                    handlePrevImage();
                } else if (event.key === 'ArrowRight') {
                    handleNextImage();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isModalOpen, currentIndex, filteredImages]);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        setIsModalOpen(true);
        setSliderImages(filteredImages.filter((img, idx) => idx !== index));
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const handleNextImage = () => {
        const newIndex = (currentIndex + 1) % filteredImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
        setSliderImages(filteredImages.filter((img, idx) => idx !== newIndex));
    };

    const handlePrevImage = () => {
        const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setCurrentIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
        setSliderImages(filteredImages.filter((img, idx) => idx !== newIndex));
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="text-xl text-center px-5 py-3">
            <div className="mt-16 flex flex-col md:flex-row">
                {/* Tag Buttons */}
                <div className="flex items-center md:hidden">
                    <button className="p-2 rounded-md bg-gray-300" onClick={handleMenuToggle}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>
                <div className={`flex flex-col md:flex-col md:items-center md:w-1/6 mb-4 md:mb-0 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <TagButton name="all" tagActive={tag === 'all'} handleSetTag={setTag} />
                    <TagButton name="new" tagActive={tag === 'new'} handleSetTag={setTag} />
                    <TagButton name="free" tagActive={tag === 'free'} handleSetTag={setTag} />
                    <TagButton name="pro" tagActive={tag === 'pro'} handleSetTag={setTag} />
                </div>
                {/* Image Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full md:w-5/6">
                    {filteredImages.map((image, index) => (
                        <div key={image.id} className="image-card">
                            <img
                                className="w-full h-auto cursor-pointer"
                                src={image.imageName}
                                alt=""
                                onClick={() => handleImageClick(image, index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && selectedImage && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
                    <div className="relative w-full h-full flex items-center justify-center z-50">
                        <button
                            className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white hover:text-gray-300"
                            onClick={handlePrevImage}
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <div className="max-w-full max-h-full flex items-center justify-center">
                            <img
                                className="w-auto h-auto max-h-full max-w-full"
                                src={selectedImage.imageName}
                                alt=""
                            />
                        </div>
                        <button
                            className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white hover:text-gray-300"
                            onClick={handleNextImage}
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                        <button
                            className="absolute top-4 right-4 text-white hover:text-gray-300"
                            onClick={handleCloseModal}
                        >
                            <i className="fa-regular fa-circle-xmark"></i>
                        </button>
                    </div>
                </div>
            )}

            {/* Slider */}
            {isModalOpen && (
                <div className="fixed inset-x-0 bottom-0 flex items-center justify-center z-50">
                    <div className="bg-white p-2 rounded-lg shadow-lg">
                        <div className="flex items-center justify-center">
                            {sliderImages.map((image, idx) => (
                                <img
                                    key={image.id}
                                    className={`w-12 h-auto cursor-pointer mx-2 ${idx === currentIndex ? 'border-2 border-blue-500' : ''}`}
                                    src={image.imageName}
                                    alt=""
                                    onClick={() => handleImageClick(image, idx)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
        <button
            className={`px-7 py-2 mb-2 rounded-lg ${tagActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
            onClick={() => handleSetTag(name)}
            style={{ display: 'block' }} 
        >
            {name.toUpperCase()}
        </button>
    );
};

export default ImageGallery;
