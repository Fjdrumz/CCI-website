import Accordion from "react-bootstrap/Accordion";
import "./Accordion.css";

function BasicExample() {
  return (
    <div className="center-container">
      <Accordion
        defaultActiveKey="0"
        className="accordion-container main-accordion">
        <h1 className="faqs">FAQS</h1>
        <Accordion.Item
          eventKey="0"
          className="accordion-container main-accordion">
          <Accordion.Header className="accordion-header accordion-container">
            <h1 className="accordion-number">01.</h1>
            <p className="accordion-text-head">How is my donation used?</p>
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            Your donation supports the mission of Celebration Church
            International to spread the gospel and make disciples around the
            world. Contributions go towards ministry programs, church
            operations, cell churches, community outreach, and special
            initiatives that help us bring transformation and impact to
            individuals and communities.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="1"
          className="accordion-container main-accordion">
          <Accordion.Header className="accordion-header accordion-container">
            <h1 className="accordion-number">02.</h1>
            <p className="accordion-text-head">
              Can i choose where my donation goes?
            </p>
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            Yes! We provide the option to direct your donation towards specific
            funds or projects, such as missions, church plants, cell churches,
            or outreach initiatives. During the giving process, you can select
            the area that resonates most with you, allowing you to support what
            matters most.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="2"
          className="accordion-container main-accordion">
          <Accordion.Header className="accordion-header accordion-container">
            <h1 className="accordion-number">03.</h1>
            <p className="accordion-text-head">
              Are there other ways to give asides online?
            </p>
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            Absolutely! In addition to online giving, you can also contribute
            through bank transfers, checks, or in-person at any of our church
            locations. Our team can provide more details to help you give in the
            way that’s most convenient for you. Please feel free to contact us
            for more information.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="3"
          className="accordion-container main-accordion">
          <Accordion.Header className="accordion-header accordion-container">
            <h1 className="accordion-number">04.</h1>
            <p className="accordion-text-head">
              Is my payment information secured?
            </p>
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            Yes, protecting your financial information is our top priority. Our
            online giving platform uses secure encryption and trusted payment
            processors to ensure that your data is safe. We are committed to
            maintaining the highest standards of security for all transactions.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="4"
          className="accordion-container main-accordion">
          <Accordion.Header className="accordion-header accordion-container">
            <h1 className="accordion-number">05.</h1>
            <p className="accordion-text-head">
              Can I give to support a specific project or initiative?
            </p>
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            Yes, you can! CCI offers designated giving options, allowing you to
            support specific projects or initiatives within the church. Whether
            you’re passionate about missions, building projects, or outreach,
            you can choose to invest in the initiatives closest to your heart.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="5"
          className="accordion-container main-accordion">
          <Accordion.Header className="accordion-header accordion-container">
            <h1 className="accordion-number">06.</h1>
            <p className="accordion-text-head">
              Who do I contact with my questions?
            </p>
          </Accordion.Header>
          <Accordion.Body className="accordion-body">
            If you have any questions about giving, please reach out to our
            Giving Team at givings@joincci.org or call us at +2349019500214.
            We’re here to assist and ensure that your giving experience at
            Celebration Church International is seamless and meaningful.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default BasicExample;
