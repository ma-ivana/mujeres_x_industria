import React, { useEffect } from "react";
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin: 15px;
  padding: 0 5%;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;

  @media all and (max-width: 420px) {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
`

const Section = styled.section`
  width: 500px;
  margin: 25px;
  

  @media all and (max-width: 420px) {
    width: 280px;
    margin: 5px;    
  }
  `

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <SectionContainer>
    <Section className="twitterContainer">
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="5"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/EmprendeFem"
        >
          Tweets de Emprender en Femenino
        </a>
      </div>
    </Section>
    <Section className="twitterContainer">
      <div className="twitter-embed">
        <a
          className="twitter-timeline"
          data-theme="light"
          data-tweet-limit="5"
          data-chrome="noheader nofooter noborders"
          href="https://twitter.com/vitapilar"
        >
          Tweets de María Eva González
        </a>
      </div>
    </Section>
    </SectionContainer>

  );
};

export default TwitterContainer;