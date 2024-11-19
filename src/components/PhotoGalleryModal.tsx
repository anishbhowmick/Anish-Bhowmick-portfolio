import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import hot_brew from "../assets/images/hot_brew.jpg"
import billi from "../assets/images/billi.jpg"
import furry_friend from "../assets/images/furry_friend_2.jpg"
import mountain_friend from "../assets/images/furry_friend.jpg"
import landscape from "../assets/images/landscape_1.jpg"
import landscape_2 from "../assets/images/landscape_2.jpg"
import railway from "../assets/images/railway_station.jpg"
import durga_puja_1 from "../assets/images/durga_pujo_1.png"

interface Photo {
  source: string;
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
    source: durga_puja_1,
    title: "Goddess Durga",
    description: "Embrace the strength within, like the divine Maa Durga"
  },
  {
    source: hot_brew,
    title: "Hot Brew",
    description: "Cup of happiness"
  },
  {
    source: billi,
    title: "Felis catus",
    description: "Adorable meowing friend"
  },
  {
    source: furry_friend,
    title: "Furry Friend",
    description: "Peace. Love. Dogs."
  },
  {
    source: mountain_friend,
    title: "A Mountain Friend",
    description: "Beautiful view at the valley"
  },
  {
    source: landscape,
    title: "Morning  Hills",
    description: "Golden hour over rolling hills"
  },
  {
    source: landscape_2,
    title: "Classic Elegance",
    description: "A Beautiful landscape"
  },
  {
    source: railway,
    title: "Railway Station",
    description: "On the move"
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
            src={`${photo.source}?auto=format&fit=crop&q=80`}
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