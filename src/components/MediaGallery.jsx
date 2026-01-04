import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const MediaGallery = ({ filters }) => {
  // Define an array of media items
  const items = [
    {
      original: 'assets/gallery1.jpg',
      thumbnail: 'assets/gallery1_thumb.jpg',
      description: 'Wheat field at sunset'
    },
    {
      original: 'assets/gallery2.jpg',
      thumbnail: 'assets/gallery2_thumb.jpg',
      description: 'Researchers in a lab'
    },
    {
      original: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      thumbnail: 'assets/video_thumb.jpg',
      description: 'Campaign Launch Video',
      renderItem: () => (
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      )
    }
  ];
  // The ImageGallery library can handle images and custom renderers for video if provided.
  return (
    <section className="media-gallery">
      <h3>Media Gallery</h3>
      <ImageGallery 
        items={items} 
        showPlayButton={false} 
        showFullscreenButton={true}
        showThumbnails={true} 
      />
    </section>
  );
};
export default MediaGallery;
