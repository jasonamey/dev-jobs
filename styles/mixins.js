import {css} from "@emotion/react";

export const ButtonBase = css`
  border: none;
  cursor: pointer;
  padding: 14px 0;
  width: 146px;
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
