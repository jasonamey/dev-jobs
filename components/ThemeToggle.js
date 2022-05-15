import styled from "@emotion/styled";
import Image from "next/image";
import {useState, useEffect} from "react";
import moon from "../public/icon-moon.svg";
import sun from "../public/icon-sun.svg";

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";
  const clickHandler = () => {
    let newTheme = activeTheme === "light" ? "dark" : "light";
    setActiveTheme(newTheme);
  };

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  return (
    <ToggleContainer>
      <Image src={sun} alt="sun icon" height="18" width="18" />
      <ToggleButton
        aria-label={`Change to ${inactiveTheme} mode`}
        title={`Change to ${inactiveTheme} mode`}
        type="button"
        onClick={clickHandler}
      >
        <ToggleThumb activeTheme={activeTheme} />
      </ToggleButton>
      <Image
        src={moon}
        alt="moon icon"
        height="12px"
        width="12px"
        layout="fixed"
      />
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 106px;
`;

const ToggleButton = styled.button`
  --toggle-width: 42px;
  --toggle-height: 23px;
  --toggle-padding: 5px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.5rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: #fff;
  transition: background 0.25s ease-in-out;
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

const ToggleThumb = styled.span`
  --thumb-width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: var(--thumb-width);
  height: var(--thumb-width);
  // width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  // height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: var(--color-accent-primary);
  transition: transform 0.25s ease-in-out;
  transform: ${(props) =>
    props.activeTheme === "dark"
      ? "translateX(calc(var(--toggle-width) - var(--thumb-width) - (2 * var(--toggle-padding))))"
      : "none"};
`;

export default ThemeToggle;
