import React from 'react'

function Community() {
  return (
    <section className="community">
      <div className="communityTopText">
        <button className="communityBtn">🌍COMMUNITY</button>
        <h1 className="communityTitle">
          We do community differently <br /> at <span>Celebration Church</span>
        </h1>
        <p className="moreThan">More than a church, a place to grow</p>
      </div>
      <div className="classesCelebrationsCounselling">
        <div className="classesCelebrationsCounselling1">
          <img
            className="classesImg first"
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmembership-class.e6e53cc0.webp&w=3840&q=75"
            alt=""
          />
          <h3 className="classesCelebrationsCounsellingTitle">
            Membership Classes →
          </h3>
          <p className="classesCelebrationsCounsellingText">
            Our Membership Classes get you up to speed withh accurate
            scripture-based teachings designed to create a strong...
          </p>
        </div>
        <div className="classesCelebrationsCounselling2">
          <img
            className="classesImg first"
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcelebrations.f123ede1.webp&w=3840&q=75"
            alt=""
          />
          <h3 className="classesCelebrationsCounsellingTitle">
            Celebrations →
          </h3>
          <p className="classesCelebrationsCounsellingText">
            You are the answers to our prayer, so we celebrate you everyday
            especialy on your special days. You mean that much to us
          </p>
        </div>
        <div className="classesCelebrationsCounselling3">
          <img
            className="classesImg"
            src="https://joincci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail2.17e9ea4a.jpg&w=3840&q=75"
            alt=""
          />
          <h3 className="classesCelebrationsCounsellingTitle">Counselling →</h3>
          <p className="classesCelebrationsCounsellingText">
            Need counsel? There is always someone available to pray with you and
            provide sound biblical counsel with zero judgement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Community