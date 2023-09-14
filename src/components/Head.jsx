import React from "react";
import Icon from "../images/favicon.ico";

export default function Head() {
  return (
    <>
      <title>hyeonzii의 블로그</title>
      <meta
        name="description"
        content="프론트엔드 개발자 이현지의 기술 블로그 입니다!"
      />
      <link id="icon" rel="icon" href={Icon} />
    </>
  );
}
