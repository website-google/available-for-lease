"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function MediaGallery() {
  const mediaItems = [
    // Photos 26–60 (35 items)
    ...Array.from({ length: 35 }, (_, i) => ({
      type: "photo",
      src: `/available-for-lease/Photos/photo-${i + 26}.jpg`,
    })),
    // Videos 61–79 (19 items)
    ...Array.from({ length: 19 }, (_, i) => ({
      type: "video",
      src: `/available-for-lease/Videos/video-${i + 61}.mp4`,
    })),
  ];

  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Auto‑advance every 7s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mediaItems.length);
    }, 7000);
    return () => clearInterval(id);
  }, [mediaItems.length]);

  const nextItem = () => setCurrent((prev) => (prev + 1) % mediaItems.length);
  const prevItem = () =>
    setCurrent((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);

  const currentItem = mediaItems[current];

  return (
    <section className="section-gallery">
      <h2>Photo & Video Gallery</h2>
      <div className="gallery-container" onClick={() => setIsOpen(true)}>
        {currentItem.type === "photo" ? (
          <Image
            src={currentItem.src}
            alt={`Photo ${current + 26}`}
            width={1200}
            height={800}
            className="media-fit"
            style={{ width: "100%", height: "auto" }} // ✅ keeps aspect ratio
          />
        ) : (
          <video
            key={current}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="media-fit"
            width="1200"
            height="800"
            referrerPolicy="no-referrer-when-downgrade" // ✅ correct casing
          >
            <source src={currentItem.src} type="video/mp4" />
          </video>
        )}
        <span
          className="arrow left"
          onClick={(e) => {
            e.stopPropagation();
            prevItem();
          }}
        >
          &#10094;
        </span>
        <span
          className="arrow right"
          onClick={(e) => {
            e.stopPropagation();
            nextItem();
          }}
        >
          &#10095;
        </span>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="lightbox" onClick={() => setIsOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {currentItem.type === "photo" ? (
              <Image
                src={currentItem.src}
                alt={`Photo ${current + 26}`}
                width={1200}
                height={800}
                className="media-fit"
                style={{ width: "100%", height: "auto" }} // ✅ keeps aspect ratio
              />
            ) : (
              <video
                key={current}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="media-fit"
                width="1200"
                height="800"
                referrerPolicy="no-referrer-when-downgrade"
              >
                <source src={currentItem.src} type="video/mp4" />
              </video>
            )}
            <span className="arrow left" onClick={prevItem}>
              &#10094;
            </span>
            <span className="arrow right" onClick={nextItem}>
              &#10095;
            </span>
            <span className="close" onClick={() => setIsOpen(false)}>
              &times;
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
