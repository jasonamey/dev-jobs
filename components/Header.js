import React from "react";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="container">
        <Link href="/">
          <h1>devjobs</h1>
        </Link>
        <DynamicThemeToggle />
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 160px;
  background-image: url("/bg-pattern-header.svg");
  background-color: var(--color-bg-secondary);
  padding-top: 42px;
  display: flex;
  justify-content: center;
  .container {
    width: var(--desktop-width);
    height: 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      color: #fff;
      font-weight: 600;
      font-size: 32px;
      cursor: pointer;
    }
  }
`;

export default Header;
