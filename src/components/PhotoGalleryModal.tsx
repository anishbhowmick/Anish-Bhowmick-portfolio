import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  url: string;
  title: string;
  description?: string;
}

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  onNavigate: (index: number) => void;
}

const galleryPhotos: Photo[] = [
  {
    url: "https://images.unsplash.com/photo-1731228069233-000260367c6d?q=80&w=1956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Hot Brew",
    description: "Cup of happiness"
  },
  {
    url: "https://images.unsplash.com/photo-1731228224755-a9ddcfedb35e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
    title: "Felis catus",
    description: "Adorable meowing friend"
  },
  {
    url: "https://images.unsplash.com/photo-1731228235215-c3f36060e25b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8fA%3D%3D",
    title: "Furry Friend",
    description: "Peace. Love. Dogs."
  },
  {
    url: "https://images.unsplash.com/photo-1731228096880-15730fa65b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8fA%3D%3D",
    title: "A Mountain Friend",
    description: "Beautiful view at the valley"
  },
  {
    url: "https://images.unsplash.com/photo-1731228961749-e55d7de4d982?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D",
    title: "Morning  Hills",
    description: "Golden hour over rolling hills"
  },
  {
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    title: "Forest Canopy",
    description: "Sunlight filtering through trees"
  }
];

export default function PhotoGalleryModal({ isOpen, onClose, currentIndex, onNavigate }: PhotoGalleryModalProps) {
  if (!isOpen) return null;

  const photo = galleryPhotos[currentIndex];

  const handlePrevious = () => {
    onNavigate(currentIndex === 0 ? galleryPhotos.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === galleryPhotos.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
      <div className="absolute inset-0 backdrop-blur-xl"></div>
      
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Close gallery"
      >
        <X size={24} />
      </button>

      <button
        type="button"
        onClick={handlePrevious}
        aria-label="Previous Photo"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-2 text-gray-400 hover:text-white transition-colors"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Photo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-2 text-gray-400 hover:text-white transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      <div className="relative z-40 max-w-7xl mx-auto px-4 py-8">
        <div className="relative">
          <img
            src={`${photo.url}?auto=format&fit=crop&q=80`}
            alt={photo.title}
            className="max-h-[80vh] object-contain mx-auto rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-2xl font-bold text-white mb-2">{photo.title}</h3>
            {photo.description && (
              <p className="text-gray-300">{photo.description}</p>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {galleryPhotos.map((photo, index) => (
            <button
              type="button"
              key={index}
              onClick={() => onNavigate(index)}
              aria-label={`View photo ${index + 1}: ${photo.title}`}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}