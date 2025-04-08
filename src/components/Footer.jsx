import React from 'react'
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <section className="footer">
      <img
        src="https://joincci.org/_next/image?url=%2Flogo-white.webp&w=256&q=75"
        alt=""
      />

      <div className="footerContent">
        <ul>
          <li>CONNECT</li>
          <li>Become a member</li>
          <li>Prayer Request</li>
          <li>First Timers</li>
          <li>Second Timers</li>
          <li>Online Community</li>
        </ul>

        <ul>
          <li>MINISTRIES</li>
          <li>Celebration Church Worship</li>
          <li>Finding Salaam</li>
          <li>Celeb Teens</li>
          <li>Celeb Kids</li>
        </ul>

        <ul>
          <li>RESOURCES</li>
          <li>Membership Classes</li>
          <li>Celebrations</li>
          <li>Pre Marital Counselling</li>
          <li>Post Marital Counselling</li>
          <li>New Campus Volunteers</li>
          <li>Welfare Request</li>
        </ul>

        <ul>
          <li>MEDIA</li>
          <li>Watch Online</li>
          <li>Sermons</li>
        </ul>
      </div>

      <hr className="footerHr" />

      <div className="footerSocials">
        <p>
          Copyright © 2025 Celebration Church International. All rights
          reserved.
        </p>
        <div className="socialIcons">
          <SocialIcon
            url="https://www.instagram.com"
            className="socialIcon"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.twitter.com"
            className="socialIcon"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.youtube.com"
            className="socialIcon"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com"
            className="socialIcon"
            bgColor="transparent"
          />
        </div>
      </div>
    </section>
  );

  
}

export default Footer