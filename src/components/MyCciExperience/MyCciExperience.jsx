import React, { useState, useEffect } from "react";
import "./MyCciExperience.css"; 



const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 2 ? 0 : prev + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-container"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <h3>{testimonial.title}</h3>
            <p>{testimonial.content}</p>
           
          </div>
        ))}
      </div>
      <div className="gradient-overlay left"></div>
      <div className="gradient-overlay right"></div>
    </div>
  );
};

function MyCciExperience() {
  // Define testimonials **inside** MyCciExperience to ensure it's accessible
  const testimonials = [
    {
      id: 1,
      title: "Finding Purpose and Direction",
      content:
        "Before joining CCI, I felt lost. I had ideas, dreams, and ambitions, but I lacked the structure and support to bring them to life. I was constantly second-guessing myself, unsure if I had what it took to succeed. Then, I found CCI. From the very first interaction, I knew this community was different.The mentorship and resources provided were unlike anything I had experienced before. I was surrounded by people who not only believed in my potential but actively encouraged me to reach beyond my comfort zone. With each passing day, I found myself growing—both personally and professionally. I developed new skills, built meaningful relationships, and gained the confidence to pursue my dreams with unwavering determination.Today, I stand as a testament to what the right environment can do for someone seeking clarity and direction. CCI didn't just give me tools; it gave me a purpose....",
    },
    {
      id: 2,
      title: "A Family Beyond Borders",
      content:
        "When I joined CCI, I was looking for an opportunity to expand my professional network. What I found was so much more. CCI isn't just a community—it’s a family. I’ve had the privilege of connecting with individuals from diverse backgrounds, each with unique stories and experiences.Despite our differences, one thing unites us: the unwavering support we offer each other. Whether it’s late-night brainstorming sessions, encouraging words during tough times, or celebrating each other’s successes, the bonds formed here are deep and genuine.I never imagined I could find such a strong sense of belonging in an online community. But CCI has proven that distance is no barrier when hearts and minds are aligned. I now have lifelong friends and mentors who push me to be my best every single day.",
    },
    {
      id: 3,
      title: "Transforming Passion into Impact",
      content:
        "I always knew I had a passion for making a difference, but I didn't know how to channel it effectively. That changed the day I joined CCI. From the very beginning, I was encouraged to take action, to turn ideas into reality, and to make meaningful contributions.Through CCI, I have launched projects I never thought possible. I have gained insights from experts, learned valuable strategies, and built a strong foundation for my initiatives. More importantly, I’ve witnessed the real impact of my work on the lives of others.CCI has taught me that passion alone isn't enough; it must be accompanied by action, perseverance, and a supportive community. I am eternally grateful for the opportunities and encouragement I’ve received.",
    },
    {
      id: 4,
      title: "Overcoming Fear and Self-Doubt",
      content:
        "If there’s one thing CCI has given me, it’s confidence. Before joining, I constantly doubted myself—whether I was good enough, whether my voice mattered, whether I could truly succeed. Those fears held me back for years.The CCI community changed everything. The unwavering encouragement from fellow members, the constructive feedback, and the culture of growth helped me push past my self-doubt. I started taking small steps, and before I knew it, I was achieving things I once deemed impossible.Today, I no longer let fear control me. I step forward with conviction, knowing that I have the skills, support, and mindset to take on any challenge. CCI has empowered me in ways I never imagined, and for that, I am forever grateful.",
    },
    {
      id: 5,
      title: "A Journey of Continuous Growth",
      content:
        "One of the best things about CCI is that the learning never stops. Every day presents an opportunity to grow, to evolve, and to become better. Through engaging discussions, workshops, and collaborations, I have expanded my knowledge and refined my skills in ways that traditional education never could.But it’s not just about professional growth—it’s personal growth, too. CCI has challenged me to think critically, to embrace different perspectives, and to become a better version of myself. The environment here fosters continuous improvement, and that’s something truly invaluable.Being part of CCI has reinforced my belief that learning is a lifelong journey. I look forward to every new lesson, every new challenge, and every new opportunity that this incredible community offers.",
    },
    {
      id: 6,
      title: " From Skeptic to Believer",
      content: "I’ll admit it—I was skeptical at first. I had joined many communities before, only to be disappointed by empty promises and lack of genuine engagement. But something about CCI felt different.From day one, I could sense the authenticity. The people here are driven, passionate, and incredibly supportive. No one is left behind; everyone is encouraged to grow and succeed. The culture is one of collaboration rather than competition, and that alone makes all the difference.Looking back, I can’t believe how much I’ve grown. The skepticism I once had has transformed into unwavering belief in this community. CCI is more than a platform—it’s a movement. And I’m honored to be part of it..",
    },
  ];

  return (
    <section className="myCciExperienceSection">
      <div className="cciExperienceTitle">
        <button>📖 MEMBER STORIES</button>
        <h2>MY CCI EXPERIENCE</h2>
        <p>Real people, Endless Life</p>
      </div>

      {/* Pass testimonials as a prop */}
      <TestimonialCarousel testimonials={testimonials} />
    </section>
  );
}

export default MyCciExperience;
