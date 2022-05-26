import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import {FieldWrapperStyle, PrimaryButtonColors} from "../styles/mixins";
import searchIcon from "../public/icon-search-white.svg";
import {device} from "../styles/devices";

const CheckboxField = ({id, checkedValue, setCheckedValue, textLabel}) => {
  return (
    <div css={FieldWrapperStyle} style={{border: "none"}}>
      <CheckBoxWrapper>
        <label className="checkbox-container" htmlFor={id}>
          <input
            id={id}
            type="checkbox"
            checked={checkedValue}
            onChange={(e) => setCheckedValue((prev) => !prev)}
          />
          <span className="checkmark"></span>
          {textLabel}
        </label>
      </CheckBoxWrapper>
    </div>
  );
};

{
  /* {jobsFoundBySearch === numOfTotalJobs ? "Search" : "Reset"} */
}

{
  /* <button
type="submit"
css={[PrimaryButtonColors]}
onClick={() => console.log("hello submit")}
>
<span className="search-btn-txt">Search</span>
<span className="search-btn-icon">
  <Image src={searchIcon} alt="search-icon" height={20} width={20} />
</span>
</button> */
}

const CheckBoxWrapper = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  .checkbox-container {
    margin-left: 10px;
    display: flex;
    height: 24px;
    align-items: center;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    input {
      position: absolute;
      opacity: 0;
      cursory: pointer;
      left: 0px;
      height: 24px;
      width: 24px;
      z-index: 1000;
    }
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 24px;
      width: 24px;
      border-radius: var(--border-radius);
      background-color: var(--color-text-primary);

      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }
    input:hover ~ .checkmark {
      background-color: var(--color-accent-secondary);
    }
    input:checked ~ .checkmark {
      background-color: var(--color-accent-primary);
    }

    input:checked ~ .checkmark:after {
      display: block;
    }
    .checkmark:after {
      left: 9px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
  button {
    font-family: inherit;
    border: none;
    cursor: pointer;
    padding: 11px;
    font-weight: 600;
    font-size: 15px;
    font-family: inherit;
    border-radius: var(--border-radius);
    // transition: var(--transition);
    &:hover {
      color: #fff;
    }
    .search-btn-txt {
      display: none;
    }
    .search-btn-icon {
      display: block;
    }
    @media screen and ${device.laptop} {
      padding: 14px;
      .search-btn-txt {
        display: block;
      }
      .search-btn-icon {
        display: none;
      }
    }
  }
`;

export default CheckboxField;
