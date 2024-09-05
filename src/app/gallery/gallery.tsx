"use client";
import React, { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image"; //

const API_KEY = "563492ad6f91700001000001e5ec521f808a44569ff59f212a840c7f";
const PER_PAGE = 4;

export default function Gallery() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch images from Pexels API
  const fetchImages = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/curated?per_page=${PER_PAGE}&page=${page}`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch images.");
      }

      const data = await response.json();
      setPhotos((prevPhotos) => [...prevPhotos, ...data.photos]);
    } catch (error) {
      setError("Error fetching photos from Pexels. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mx-auto px-5 py-20">
      <div className="gallery-container">
        <h2 className="text-3xl font-bold text-center mb-7">Capturing Joy</h2>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="cursor-pointer border relative overflow-hidden group"
              onClick={() => handleImageClick(index)}
            >
              <Image
                src={photo.src.medium}
                alt={photo.alt || `Gallery Image ${index + 1}`}
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-md transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-md"></div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-all flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              "Load More Images"
            )}
          </button>
        </div>

        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={photos.map((photo) => ({ src: photo.src.large }))}
            index={currentIndex}
          />
        )}
      </div>
    </div>
  );
}
