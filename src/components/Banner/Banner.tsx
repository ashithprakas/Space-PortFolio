import { Col, Container, Row } from "react-bootstrap";
import { HeaderIcon } from "../../assets/images";
import { useEffect, useState } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";

const Banner = () => {
  const toRotate = ["Web Developer ", "Angular Developer ", "React Developer "];
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [tagLineText, setTagLineText] = useState("");
  const [tickerDelta, setTickerDelta] = useState(300 - Math.random() * 100);

  const tagLinePeriod = 1000;

  const tick = () => {
    const i = loopNumber % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, tagLineText.length - 1)
      : fullText.substring(0, tagLineText.length + 1);

    setTagLineText(updatedText);

    if (isDeleting) {
      setTickerDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTickerDelta(tagLinePeriod);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setTickerDelta(500);
    }
  };
  useEffect(() => {
    const lineTicker = setInterval(() => {
      tick();
    }, tickerDelta);
    return () => {
      clearInterval(lineTicker);
    };
  }, [tagLineText]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tag-line">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Ashith`}{" "}
              <span className="txt-rotate">
                <span className="wrap">{tagLineText}</span>
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              nostrum recusandae dolorum illo ad itaque officia explicabo! Quos
              cum molestias necessitatibus nemo iure ducimus veniam obcaecati,
              minus consequuntur. Pariatur, voluptatibus.
            </p>
            <button onClick={() => console.log("connect")}>
              <ArrowRightCircle />
              Let's Connect
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={HeaderIcon} alt="header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;