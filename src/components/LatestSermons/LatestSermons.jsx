import React, { useState, useEffect } from "react";
import SearchWithIcons from "../SearchSermons/SearchSermons";
import HorizontalTag from "../SearchTags";
import PhotoCards from "../SermonsCard";
import "./LatestSermons.css";





const LatestSermons = () => {
  const [sermons, setSermons] = useState([]);
  const [activeSermon, setActiveSermon] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Mock data - in a real app you'd fetch from an API
    const mockSermons = [
      {
        id: 1,
        title: "Faith in Uncertain Times",
        preacher: "Pastor Michael Chen",
        date: "2023-11-12",
        scripture: "Hebrews 11:1-6",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
        audio: "https://example.com/sermon1.mp3",
        duration: "32:45",
        series: "Anchor for the Soul",
        description:
          "Exploring how to maintain strong faith when facing life's storms and uncertainties.",
      },
      {
        id: 2,
        title: "The Power of Forgiveness",
        preacher: "Dr. Sarah Johnson",
        date: "2023-11-05",
        scripture: "Matthew 18:21-35",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6",
        audio: "https://example.com/sermon2.mp3",
        duration: "28:15",
        series: "Relationships Redefined",
        description:
          "Understanding the transformative power of forgiveness in our relationships.",
      },
      {
        id: 3,
        title: "Living with Purpose",
        preacher: "Pastor David Williams",
        date: "2023-10-29",
        scripture: "Ephesians 2:10",
        image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81",
        audio: "https://example.com/sermon3.mp3",
        duration: "35:20",
        series: "Identity in Christ",
        description:
          "Discovering God's unique purpose for your life and how to walk in it daily.",
      },
    ];

    setSermons(mockSermons);
    setActiveSermon(mockSermons[0]); // Set first sermon as active by default
  }, []);

  return (
    <section className="latest-sermons">
      <div className="section-header">
        <button>▶️ Watch</button>
        <h2>Latest Sermons</h2>
        <p>Weekly sermons for your progress and joy in the faith</p>
      </div>
      <SearchWithIcons />
      <HorizontalTag />
      <PhotoCards />
    </section>
  );
};

export default LatestSermons;
