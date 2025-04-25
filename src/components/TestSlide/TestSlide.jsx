import React, { useRef, useEffect } from "react";
import "./TestSlide.css";

const MovingImages = () => {
  const trackRef = useRef(null);
  const isSmallDevice = window.innerWidth <= 768;

  useEffect(() => {
    if (!isSmallDevice || !trackRef.current) return;

    const track = trackRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2; // Scroll multiplier
      track.scrollLeft = scrollLeft - walk;
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };

    const handleTouchEnd = () => {
      isDown = false;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener("mousedown", handleMouseDown);
    track.addEventListener("mouseleave", handleMouseLeave);
    track.addEventListener("mouseup", handleMouseUp);
    track.addEventListener("mousemove", handleMouseMove);
    track.addEventListener("touchstart", handleTouchStart);
    track.addEventListener("touchend", handleTouchEnd);
    track.addEventListener("touchmove", handleTouchMove);

    return () => {
      track.removeEventListener("mousedown", handleMouseDown);
      track.removeEventListener("mouseleave", handleMouseLeave);
      track.removeEventListener("mouseup", handleMouseUp);
      track.removeEventListener("mousemove", handleMouseMove);
      track.removeEventListener("touchstart", handleTouchStart);
      track.removeEventListener("touchend", handleTouchEnd);
      track.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isSmallDevice]);

  return (
    <div className="image-scroller">
      <div className="image-track" ref={trackRef}>
        <div className="image-container">
          <img
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNigeria.7cc7863c.jpeg&w=640&q=75"
            alt="Content 1"
          />
          <div className="image-text">Nigeria</div>
        </div>

        <div className="image-container">
          <img
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCanada.d8d0103b.jpeg&w=640&q=75"
            alt="Content 2"
          />
          <div className="image-text">Canada</div>
        </div>

        <div className="image-container">
          <img
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUK.dea2ef03.jpeg&w=640&q=75"
            alt="Content 3"
            className="unitedKingdom"
          />
          <div className="image-text">United Kingdom</div>
        </div>

        <div className="image-container">
          <img
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FUS.29bb3a25.jpeg&w=750&q=75"
            alt="Content 3"
            className="unitedKingdom"
          />
          <div className="image-text">United States</div>
        </div>

        <div className="image-container">
          <img
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatchany.b677bb3f.png&w=256&q=75"
            alt="Content 3"
          />
        </div>
      </div>
    </div>
  );
};

export default MovingImages;
