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

export const ImageGallery = () => {
    const images = [
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

    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomedIndex, setZoomedIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sliderImages, setSliderImages] = useState([]);

    useEffect(() => {
        setFilteredImages(tag === 'all' ? images : images.filter(image => image.tag === tag));
    }, [tag, images]);

    useEffect(() => {
        if (selectedImage) {
            setCurrentIndex(filteredImages.findIndex(img => img.id === selectedImage.id));
        }
    }, [selectedImage, filteredImages]);

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setZoomedIndex(index);
        setIsModalOpen(true);
        // Set images for the slider excluding the current zoomed image
        setSliderImages(filteredImages.filter((img, idx) => idx !== index));
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    const handleNextImage = () => {
        setZoomedIndex(prevIndex => (prevIndex + 1) % filteredImages.length);
        setSelectedImage(filteredImages[zoomedIndex]);
        setSliderImages(filteredImages.filter((img, idx) => idx !== zoomedIndex && idx !== currentIndex));
    };

    const handlePrevImage = () => {
        setZoomedIndex(prevIndex => (prevIndex - 1 + filteredImages.length) % filteredImages.length);
        setSelectedImage(filteredImages[zoomedIndex]);
        setSliderImages(filteredImages.filter((img, idx) => idx !== zoomedIndex && idx !== currentIndex));
    };

    return (
        <div className="text-xl text-center px-5 py-3">  
            <div className="flex flex-wrap justify-center mb-4">
                <TagButton name="all" tagActive={tag === 'all'} handleSetTag={setTag} /> 
                <TagButton name="new" tagActive={tag === 'new'} handleSetTag={setTag} /> 
                <TagButton name="free" tagActive={tag === 'free'} handleSetTag={setTag} /> 
                <TagButton name="pro" tagActive={tag === 'pro'} handleSetTag={setTag} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
            {/* Modal for displaying enlarged image */}
            {selectedImage && (
                <div className="fixed  inset-10 flex items-center justify-center z-50  ">
                    <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>
                    <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg relative">
                        <button
                            className="absolute top-10 right-10 text-gray-700 hover:text-black backdrop-blue"
                            onClick={handleCloseModal}
                        >
                            <b>Close</b>
                        </button>
                        <button
                            className="absolute top-1/2 transform -translate-y-1/2 left-2 text-gray-700 hover:text-black"
                            onClick={handlePrevImage}
                        >
                            Prev
                        </button>
                        <button
                            className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-700 hover:text-black"
                            onClick={handleNextImage}
                        >
                            Next
                        </button>
                        <div className="overflow-x-auto">
                            {/* Image carousel */}
                            <div className="flex  items-center justify-center">
                                <div className="p-8"> {/* Adjust padding here */}
                                    <img
                                        className="w-full h-auto max-h-96"
                                        src={selectedImage.imageName}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Slider for other images */}
            {selectedImage && (
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
        <button className={`px-4 py-2 mr-2 rounded-lg ${tagActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} onClick={() => handleSetTag(name)}>
            {name.toUpperCase()}
        </button>
    );
};

export default ImageGallery;
