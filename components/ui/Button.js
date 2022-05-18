import React from "react";
import styled from "@emotion/styled";

const Button = ({children, primaryButton = true, buttonType}) => {
  return (
    <ButtonWrapper primaryButton={primaryButton}>
      <button type={buttonType}>{children}</button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  button {
    border: none;
    cursor: pointer;
    background-color: ${(props) =>
      props.primaryButton
        ? "var(--color-accent-primary)"
        : "var(--color-accent-secondary)"};
    padding: 14px 0;
    width: 146px;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    font-family: inherit;
    border-radius: var(--border-radius);
    transition: var(--transition);
    &:hover {
      background-color: ${(props) =>
        props.primaryButton
          ? "var(--color-accent-primary)"
          : "var(--color-accent-secondary)"};
    }
  }
`;

export default Button;
