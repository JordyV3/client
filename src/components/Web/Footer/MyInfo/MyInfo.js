import React from "react";
import LogoWhite from "../../../../assets/img/png/Logo.svg";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="Jordy Vega" />
      <h4>
        Diseño y desarrollo de aplicaciones web, base de datos y deploy con servicios cloud.
      </h4>
      <SocialLink />
    </div>
  );
}
