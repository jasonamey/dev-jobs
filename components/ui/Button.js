import React from "react";
import {ButtonBase, PrimaryButtonColors} from "../../styles/mixins";

const Button = ({
  children,
  buttonColors = PrimaryButtonColors,
  type,
  large = false,
}) => {
  return (
    <button css={[ButtonBase, buttonColors]} type={type}>
      {children}
    </button>
  );
};

export default Button;
