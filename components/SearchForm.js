import React, {useState, useEffect} from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import searchIcon from "../public/icon-search.svg";
import locationIcon from "../public/icon-location.svg";
import {
  searchArrayOfObjectsForTextInValue,
  searchArrayForValueOfKey,
} from "../helpers/utilities";

const SearchForm = ({setJobs, allJobs}) => {
  const [textSearch, setTextSearch] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);
  const [viewableJobs, setViewableJobs] = useState(allJobs);

  const submitHandler = (e) => {
    e.preventDefault();
    let curArr = [...allJobs];
    if (textSearch.length > 0) {
      curArr = searchArrayOfObjectsForTextInValue(curArr, textSearch);
    }
    if (jobLocation.length > 0) {
      curArr = searchArrayForValueOfKey(curArr, jobLocation, "location");
    }
    if (isFullTimeOnly) {
      curArr = searchArrayForValueOfKey(curArr, "Full Time", "contract");
    }
    setJobs((prev) => curArr);
    setTextSearch("");
    setJobLocation("");
    setIsFullTimeOnly(false);
  };
  return (
    <FormWrapper>
      <form onSubmit={submitHandler}>
        <FieldWrapper>
          <label htmlFor="textSearch" className="global-style-visually-hidden">
            Filter by Title, Company, Expertise
          </label>
          <div className="icon-wrapper">
            <Image src={searchIcon} alt="search icon" className="icon" />
          </div>
          <input
            id="textSearch"
            type="text"
            placeholder="Filter by title, companies, expertise..."
            value={textSearch}
            onChange={(e) => {
              setTextSearch((prev) => e.target.value);
            }}
            className="text-input"
          />
        </FieldWrapper>
        <FieldWrapper>
          <label htmlFor="textSearch" className="global-style-visually-hidden">
            Filter by Location
          </label>
          <div className="icon-wrapper">
            <Image src={locationIcon} alt="search icon" className="icon" />
          </div>
          <input
            id="location"
            type="text"
            className="text-input"
            placeholder="Filter by location"
            value={jobLocation}
            onChange={(e) => setJobLocation((prev) => e.target.value)}
          />
        </FieldWrapper>
        <FieldWrapper>
          <label className="checkbox-container" htmlFor="isFulltimeOnly">
            <input
              id="isFullTimeOnly"
              type="checkbox"
              checked={isFullTimeOnly}
              onChange={(e) => setIsFullTimeOnly((prev) => !prev)}
            />
            <span className="checkmark"></span>
            Full Time Only
          </label>
          <button type="submit">Search</button>
        </FieldWrapper>
      </form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  transform: translateY(-50%);
  background-color: var(--color-bg-primary);
  border-radius: var(--card-border-radius);
  overflow: hidden;
  form {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-right: 1px solid var(--color-text-primary);
  padding: 15px;
  &:last-child {
    border: none;
  }
  input {
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
  }
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
      border-radius: 4px;
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
  .icon-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 24px;
    width: 30px;
    margin: 0 14px 0 6px;
  }
  button {
    border: none;
    background-color: var(--color-accent-primary);
    color: #fff;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    padding: 13px 38px;
    border-radius: var(--card-border-radius);
    cursor: pointer;
    &:hover {
      background-color: var(--color-accent-secondary);
    }
  }
`;

export default SearchForm;
