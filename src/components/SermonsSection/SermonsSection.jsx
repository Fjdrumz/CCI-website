import React from "react";
import "./SermonsSection.css";

function SermonsSection() {
  return (
    <section className="sermonsCreatedSection">
      <div className="sermonPraiseVideo">
        <div className="praiseVideo">
          <video
            style={{ borderRadius: "10px" }}
            width="630"
            controls
            className="w-full rounded-md"
            playsInline
            autoPlay
            loop>
            <source
              src="https://res.cloudinary.com/digb7qq2m/video/upload/f_auto:video,q_auto/reboot-camp-ministration"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="curated">
          <button>🌍 SERMONS</button>
          <h2>
            Over <span>200+</span> <br /> Sermons curated <br /> for your
            progress <br /> and joy in the <br /> faith
          </h2>
        </div>
      </div>
    </section>
  );
}

export default SermonsSection;
