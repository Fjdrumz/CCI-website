import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./AccountNumbers.css";

const AccountNumbers = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (textToCopy, index) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
    });
  };

  return (
    <section className="accountNumbersSection">
      <div className="accountsContainer">
        <div className="accesBankDiv">
          <h2>
            <img
              src="https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.eu-north-1.amazonaws.com%2Fweb-assets%2Faccess_bank_logp_1_6a47fbff2d.png&w=32&q=75"
              alt=""
            />{" "}
            Access Bank
          </h2>

          <img
            src="https://joincci.org/_next/static/media/nigeria-flag.25a77d3f.svg"
            alt=""
          />
        </div>

        {/* First flexAccounts */}
        <div className="flexAccounts">
          <div className="accountNumber space">
            <p className="mainacc">MAIN ACCOUNT</p>
            <div className="accNumberCopyDiv">
              <p>069259997</p>
              <button
                onClick={() => handleCopy("069259997", 0)}
                className="copyIcon">
                {copiedIndex === 0 ? (
                  <span style={{ fontSize: "12px" }}>Copied!</span>
                ) : (
                  <i className="fas fa-copy"></i>
                )}
              </button>
            </div>
          </div>

          <div className="accountNumber">
            <p className="mainacc">SEED CHURCH</p>
            <div className="accNumberCopyDiv">
              <p>1911603344</p>
              <button
                onClick={() => handleCopy("1911603344", 1)}
                className="copyIcon">
                {copiedIndex === 1 ? (
                  <span style={{ fontSize: "12px" }}>Copied!</span>
                ) : (
                  <i className="fas fa-copy"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Second flexAccounts */}
        <div className="flexAccounts">
          <div className="accountNumber space">
            <p className="mainacc">RENT ACCOUNT</p>
            <div className="accNumberCopyDiv">
              <p>1911578888</p>
              <button
                onClick={() => handleCopy("069259997", 2)}
                className="copyIcon">
                {copiedIndex === 2 ? (
                  <span style={{ fontSize: "12px" }}>Copied!</span>
                ) : (
                  <i className="fas fa-copy"></i>
                )}
              </button>
            </div>
          </div>

          <div className="accountNumber">
            <p className="mainacc">BUILDING CHURCH</p>
            <div className="accNumberCopyDiv">
              <p>1911506050</p>
              <button
                onClick={() => handleCopy("1911603344", 3)}
                className="copyIcon">
                {copiedIndex === 3 ? (
                  <span style={{ fontSize: "12px" }}>Copied!</span>
                ) : (
                  <i className="fas fa-copy"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="extraContainer">
        <div className="otherAccounts">
          <div className="accesBankDiv">
            <h3>
              <img
                src="https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.eu-north-1.amazonaws.com%2Fweb-assets%2Fother_acct_logo_afa03ed3b9.png&w=32&q=75"
                alt=""
              />{" "}
              Other Accounts
            </h3>

            <img
              src="https://joincci.org/_next/static/media/nigeria-flag.25a77d3f.svg"
              alt=""
            />
          </div>

          <div className="flexAccounts otherAccountsFlex">
            <div className="accountNumber space otheraccountEtra">
              <p className="mainacc">
                <img
                  src="https://cci-axios-web-cms-assets.s3.eu-north-1.amazonaws.com/web-assets/stanbic_logo_21a285c4df.svg"
                  alt=""
                />
                Stanbic
              </p>
              <div className="accNumberCopyDiv">
                <p>0064035065</p>
                <button
                  onClick={() => handleCopy("069259997", 0)}
                  className="copyIcon">
                  {copiedIndex === 0 ? (
                    <span style={{ fontSize: "12px" }}>Copied!</span>
                  ) : (
                    <i className="fas fa-copy"></i>
                  )}
                </button>
              </div>
            </div>

            <div className="accountNumber otheraccountEtra">
              <p className="mainacc">
                <img
                  src="https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.eu-north-1.amazonaws.com%2Fweb-assets%2Fmoniepoint_logo_eb26c88bac.png&w=32&q=75"
                  alt=""
                />
                Monie Point
              </p>
              <div className="accNumberCopyDiv">
                <p>4664390779</p>
                <button
                  onClick={() => handleCopy("1911603344", 1)}
                  className="copyIcon">
                  {copiedIndex === 1 ? (
                    <span style={{ fontSize: "12px" }}>Copied!</span>
                  ) : (
                    <i className="fas fa-copy"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="payPalContainer">
          <p className="paypalTitle">
            <img
              src="https://joincci.org/_next/image?url=https%3A%2F%2Fcci-axios-web-cms-assets.s3.eu-north-1.amazonaws.com%2Fweb-assets%2Fpaypal_logo_c1164fab19.png&w=32&q=75"
              alt=""
            />
            Give Via PayPal
          </p>

          <p className="paypalText">
            Give securely from anywhere in the world using PayPal balance,
            credit/debit cards, or bank accounts.
          </p>

          <div className="paypalFooter">
            <button>GIVE NOW →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountNumbers;
