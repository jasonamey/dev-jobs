import React from "react";
import Image from "next/image";
import {FieldWrapperStyle, InputStyle, IconStyle} from "../styles/mixins";

const TextInputField = ({
  id,
  iconSource,
  placeholderText,
  altText,
  textTerm,
  setText,
  addStyle,
}) => {
  return (
    <div css={FieldWrapperStyle}>
      <label htmlFor={id} className="global-style-visually-hidden">
        {placeholderText}
      </label>
      <div css={IconStyle}>
        <Image src={iconSource} alt={altText} className="icon" />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholderText}
        value={textTerm}
        onChange={(e) => setText((prev) => e.target.value)}
        className="text-input"
        css={InputStyle}
      />
    </div>
  );
};

export default TextInputField;
