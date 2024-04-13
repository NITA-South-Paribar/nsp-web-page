import React, { useEffect, useState } from 'react';
import './App.css';
//import images from './data';
import Lightbox from 'react-image-lightbox'; 
import 'react-image-lightbox/style.css'; 
function App() {
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
    }, [tag]);

    const openLightbox = (index) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="flex flex-wrap justify-center py-8">
                <TagButton name="all" tagActive={tag === 'all'} handleSetTag={setTag} />
                <TagButton name="new" tagActive={tag === 'new'} handleSetTag={setTag} />
                <TagButton name="free" tagActive={tag === 'free'} handleSetTag={setTag} />
                <TagButton name="pro" tagActive={tag === 'pro'} handleSetTag={setTag} />
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image, index) => (
                    <div key={image.id} className="image-card">
                        {/* Open the lightbox when an image is clicked */}
                        <a href={`/images/${image.imageName}`} onClick={(e) => { e.preventDefault(); openLightbox(index); }}>
                            <img className="image w-full h-auto" src={`/images/${image.imageName}`} alt="" />
                        </a>
                    </div>
                ))}
            </div>
            {lightboxOpen && (
                <Lightbox
                    mainSrc={`/images/${filteredImages[lightboxIndex].imageName}`} // Set the main image source
                    nextSrc={`/images/${filteredImages[(lightboxIndex + 1) % filteredImages.length].imageName}`} // Set the next image source
                    prevSrc={`/images/${filteredImages[(lightboxIndex + filteredImages.length - 1) % filteredImages.length].imageName}`} // Set the previous image source
                    onCloseRequest={closeLightbox} // Close the lightbox when requested
                    onMovePrevRequest={() => setLightboxIndex((lightboxIndex + filteredImages.length - 1) % filteredImages.length)} // Move to the previous image
                    onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % filteredImages.length)} // Move to the next image
                />
            )}
        </div>
    );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
        <button className={`px-4 py-2 mr-2 rounded-lg ${tagActive ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`} onClick={() => handleSetTag(name)}>
            {name.toUpperCase()}
        </button>
    );
};

export default App;
