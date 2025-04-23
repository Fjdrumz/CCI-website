import React, { useState } from "react";

const HorizontalTags = () => {
  // List of random Bible names for tags
  const allTags = [
    "Abraham",
    "Isaac",
    "Jacob",
    "Moses",
    "Aaron",
    "David",
    "Solomon",
    "Elijah",
    "Elisha",
    "Samuel",
    "Noah",
    "Daniel",
    "Joseph",
    "Benjamin",
    "Joshua",
    "Caleb",
    "Ezra",
    "Nehemiah",
  ];

  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const visibleTagsCount = 13;
  const navigationStep = 2;

  // Calculate which tags to show
  const visibleTags = [];
  for (let i = 0; i < visibleTagsCount; i++) {
    const index = (visibleStartIndex + i) % allTags.length;
    visibleTags.push(allTags[index]);
  }

  const handleNext = () => {
    setVisibleStartIndex(
      (prevIndex) => (prevIndex + navigationStep) % allTags.length
    );
  };

  const handlePrevious = () => {
    setVisibleStartIndex(
      (prevIndex) =>
        (prevIndex - navigationStep + allTags.length) % allTags.length
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.tagsContainer}>
        {visibleTags.map((tag, index) => (
          <button key={index} style={styles.tag}>
            {tag}
          </button>
        ))}
        <button
          onClick={handleNext}
          style={styles.navButton}
          aria-label="Show next tags">
          &gt;
        </button>
      </div>

      {/* Optional previous button if you want two-way navigation */}
      <button
        onClick={handlePrevious}
        style={{ ...styles.navButton, left: 0 }}
        aria-label="Show previous tags">
        &lt;
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    margin: "20px 0",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  tagsContainer: {
    display: "flex",
    gap: "10px",
    overflowX: "hidden",
    scrollBehavior: "smooth",
    padding: "10px 0",
  },
  tag: {
    padding: "8px 15px",
    backgroundColor: "#f0f0f0",
    borderRadius: "20px",
    whiteSpace: "nowrap",
    fontSize: "14px",
    flexShrink: 0,
    border: "1px solid #ddd",
  },
  navButton: {
    position: "absolute",
    right: "0",
    top: "50%",
    transform: "translateY(-50%)",
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    cursor: "pointer",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    zIndex: 1,
  },
};

export default HorizontalTags;
