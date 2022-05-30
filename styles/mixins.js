import {css} from "@emotion/react";
import {device} from "./devices";

export const ButtonBase = css`
  border: none;
  cursor: pointer;
  padding: 14px;
  font-weight: 600;
  font-size: 15px;
  font-family: inherit;
  border-radius: var(--border-radius);
  transition: var(--transition);
  &:hover {
    color: #fff;
  }
`;

export const PrimaryButtonColors = css`
  background-color: var(--color-accent-primary);
  color: #fff;
  &:hover {
    background-color: var(--color-accent-secondary);
  }
`;

export const SecondaryButtonColors = css`
  background-color: var(--color-accent-secondary);
  color: var(--color-accent-secondary);
  &:hover {
    background-color: var(--color-accent-primary);
    color: #fff;
  }
`;

export const FieldWrapperStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 28px 0;
  @media screen and ${device.tablet} {
    padding: 28px 15px;
    border-right: 1px solid var(--color-text-primary);
  }
`;

export const InputStyle = css`
  font: inherit;
  border: none;
  outline: none;
  background-color: var(--color-bg-primary);
  color: var(--color-text-input);
  &.text-input {
    flex: 1;
    &::placeholder {
      color: var(--color-text-primary);
    }
  }
`;

export const IconStyle = css`
  display: none;
  @media screen and ${device.tablet} {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 24px;
    width: 30px;
    margin: 0 14px 0 6px;
  }
`;
