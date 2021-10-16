import React from "react";
import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg";
import { ReactComponent as FacebookIcon } from "../../../assets/img/svg/facebook.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://www.youtube.com/channel/UCaxgyGB1VUKn6esKaQzc8bg"
        className="youtube"
        target="_blank"
        rel="noopener noreferrer"
      >
        <YouTubeIcon />
      </a>
      <a
        href="https://www.facebook.com/jordyvega"
        className="facebook"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/jordy-vega-250a57173/"
        className="linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon />
      </a>
    </div>
  );
}
