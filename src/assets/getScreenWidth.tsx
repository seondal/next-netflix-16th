// 반응형? 을 위해 화면크기를 받아오는 함수입니다
import { useState, useEffect } from "react";

export function GetScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(375);

  useEffect(() => {
    setScreenWidth(window.screen.width);
  }, []);

  return screenWidth;
}
