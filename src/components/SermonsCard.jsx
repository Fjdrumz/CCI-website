import React, { useState } from "react" 

const PhotoCards = () => {
  // Sample data for 30 cards
  const cardData = [
    {
      title: "Spirit & Truth - True Worship",
      subtitle: "Wonder",
      date: "May 5th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fspirit-truth-true-worship%2Fspirit-truth-true-worship.png&w=256&q=75",
    },
    {
      title: "Apologia - Defending the Faith",
      subtitle: "Landmarks",
      date: "Apr 28th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fapologia-defending-the-faith%2Fapologia-defending-the-faith.png&w=256&q=75",
    },
    {
      title: "Sealed - No Confidence in The Flesh",
      subtitle: "Landmarks",
      date: "Apr 21st, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fsealed-no-confidence-in-the-flesh%2Fsealed-no-confidence-in-the-flesh.png&w=256&q=75",
    },
    {
      title: "Special MDWK - Contending For The Faith",
      subtitle: "Landmarks",
      date: "Apr 18th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fspecial-mdwk-contending-for-the-faith%2Fspecial-mdwk-contending-for-the-faith.png&w=256&q=75",
    },
    {
      title: "Cipher - Understanding The Faith",
      subtitle: "Landmarks",
      date: "Apr 14th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fcipher-understanding-the-faith%2Fcipher-understanding-the-faith.png&w=256&q=75",
    },
    {
      title: "The Way - Singularity of The Faith",
      subtitle: "Landmarks",
      date: "Apr 7th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fthe-way-singularity-of-the-faith%2Fthe-way-singularity-of-the-faith.png&w=256&q=75",
    },
    {
      title: "Special MDWK - Pendulum",
      subtitle: "Landmarks",
      date: "Apr 4th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fspecial-mdwk-pendulum%2Fspecial-mdwk-pendulum.png&w=256&q=75",
    },
    {
      title: "Endless life",
      subtitle: "The Believer's Authority",
      date: "May 31st, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fendless-life%2Fendless-life.png&w=256&q=75",
    },
    {
      title: "Deeper Lagos - Evening - Angelic Ministry",
      subtitle: "Deeper Lagos",
      date: "May 30th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fdeeper-lagos-evening-angelic-ministry%2Fdeeper-lagos-evening-angelic-ministry.png&w=256&q=75",
    },
    {
      title: "Deeper Lagos - Noon - Consecration",
      subtitle: "Deeper Lagos",
      date: "May 30th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fdeeper-lagos-evening-angelic-ministry%2Fdeeper-lagos-evening-angelic-ministry.png&w=256&q=75",
    },
    {
      title: "Deeper Lagos - Morning - Where is Eden?",
      subtitle: "Deeper Lagos",
      date: "May 30th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fdeeper-lagos-evening-angelic-ministry%2Fdeeper-lagos-evening-angelic-ministry.png&w=256&q=75",
    },
    {
      title: "Trample - Exercising Authority As A Believer",
      subtitle: "The Believer's Authority",
      date: "May 24th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Ftrample-exercising-authority-as-a-believer%2Ftrample-exercising-authority-as-a-believer.png&w=256&q=75",
    },
    {
      title: "Sceptre - Who Runs The World",
      subtitle: "The Believer's Authority",
      date: "May 17th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fsceptre-who-runs-the-world%2Fsceptre-who-runs-the-world.png&w=256&q=75",
    },
    {
      title: "Seated - The Position of the Believer",
      subtitle: "The Believer's Authority",
      date: "May 11th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fseated-the-position-of-the-believer%2Fseated-the-position-of-the-believer.png&w=256&q=75",
    },
    {
      title: "APV Ghana – The Believer's Authority",
      subtitle: "APV Ghana",
      date: "May 3rd, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fapv-ghana-the-believers-authority%2Fapv-ghana-the-believers-authority.png&w=256&q=75",
    },
    {
      title: "Endless life",
      subtitle: "The Believer's Authority",
      date: "May 31st, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fendless-life%2Fendless-life.png&w=256&q=75",
    },
    {
      title: "Cipher - Understanding The Faith",
      subtitle: "Landmarks",
      date: "Apr 14th, 2024",
      img: "https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.amazonaws.com%2Fsermon-assets%2Fcipher-understanding-the-faith%2Fcipher-understanding-the-faith.png&w=256&q=75",
    },
  ];

  const allCards = cardData.map((data, i) => ({
    id: i + 1,
    title: data.title,
    subtitle: data.subtitle,
    date: data.date,
    imageUrl: data.img,
  }));

  const [visibleCount, setVisibleCount] = useState(9);

  // Function to generate random dates
  // function generateRandomDate() {
  //   const months = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];
  //   const month = months[Math.floor(Math.random() * months.length)];
  //   const day = Math.floor(Math.random() * 28) + 1;
  //   const year = 2023 + Math.floor(Math.random() * 2); // 2023 or 2024
  //   const suffix =
  //     day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";
  //   return `${month} ${day}${suffix} ${year}`;
  // }

  const handleSeeMore = () => {
    setVisibleCount(allCards.length);
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardsGrid}>
        {allCards.slice(0, visibleCount).map((card) => (
          <div key={card.id} style={styles.card}>
            <div style={styles.imageContainer}>
              <img
                src={card.imageUrl}
                alt={card.title}
                style={styles.cardImage}
              />
            </div>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardSubtitle}>{card.subtitle}</p>
              <div style={styles.cardFooter}>
                <span style={styles.cardDate}>{card.date}</span>
                <button style={styles.downloadButton}>Download</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < allCards.length && (
        <div style={styles.seeMoreContainer}>
          <button onClick={handleSeeMore} style={styles.seeMoreButton}>
            See More
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
    justifyContent: "space-evenly",
  },
  card: {
    borderRadius: "12px",
    overflow: "hidden",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    height: "100%",
    overflow: "hidden",
    borderRadius: "12px",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  cardContent: {
    padding: "15px",
    height: "50%",
    display: "flex",
    flexDirection: "column",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 8px 0",
    textAlign: "left",
  },
  cardSubtitle: {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 12px 0",
    textAlign: "left",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardDate: {
    fontSize: "12px",
    color: "#666",
  },
  downloadButton: {
    padding: "6px 12px",
    backgroundColor: "transparent",
    border: "1px solid #666",
    borderRadius: "4px",
    color: "black",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "12px",
  },
  seeMoreContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "40px 0",
  },
  seeMoreButton: {
    padding: "10px 30px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

// Add hover effects with CSS
const styleElement = document.createElement("style");
styleElement.textContent = `
  .card:hover {
    transform: translateY(-5px);
  }
  .card-image:hover {
    transform: scale(1.1);
  }
  .download-button:hover {
    background-color: #4CAF50;
    color: white;
    border-color: #4CAF50;
  }
  .see-more-button:hover {
    background-color: #45a049;
  }
`;
document.head.appendChild(styleElement);

export default PhotoCards;
