import React, { useState } from 'react';
import { Camera, ChevronRight } from 'lucide-react';
import PhotoGalleryModal from './PhotoGalleryModal';

const photos = [
  {
    url: "https://images.unsplash.com/photo-1731228069233-000260367c6d?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hot Brew"
  },
  {
    url: "https://images.unsplash.com/photo-1731228224755-a9ddcfedb35e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
    title: "Felis catus"
  },
  {
    url: "https://images.unsplash.com/photo-1731228235215-c3f36060e25b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
    title: "Furry Friend"
  }
];

export default function Photography() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  return (
    <>
      <section className="py-32 bg-black text-white" id="photography">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center gap-4 mb-16">
            <Camera size={32} className="text-blue-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Photography
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {photos.map((photo) => (
              <div key={photo.url} className="group relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src={`${photo.url}?auto=format&fit=crop&q=80`} 
                  alt={photo.title}
                  className="w-full aspect-[3/4] object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                  <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                  <div className="h-1 w-12 bg-blue-400 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <span className="font-semibold">View More Photos</span>
                <ChevronRight size={20} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>

      <PhotoGalleryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentIndex={currentPhotoIndex}
        onNavigate={setCurrentPhotoIndex}
      />
    </>
  );
}