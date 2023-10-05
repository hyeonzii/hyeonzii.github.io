import React from "react";
import Icon from "../images/notebook.png";
import { Helmet } from "react-helmet";

export default function Head() {
  return (
    <Helmet>
      <title>hyeonzii의 블로그</title>
      <meta
        name="description"
        content="프론트엔드 개발자 이현지의 기술 블로그 입니다!"
      />
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="icon" href={Icon} />
      <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
    </Helmet>
  );
}
