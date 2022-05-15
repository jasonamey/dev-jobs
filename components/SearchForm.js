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
  console.log("", viewableJobs);

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
          <input
            id="isFullTimeOnly"
            type="checkbox"
            checked={isFullTimeOnly}
            onChange={(e) => setIsFullTimeOnly((prev) => !prev)}
          />
          <label htmlFor="itFulltimeOnly">Full Time Only</label>
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
  border-inline-end: 1px solid var(--color-text-primary);
  padding: 15px;
  &:last-child {
    border: none;
  }
  input {
    font: inherit;
    border: none;
    outline: none;
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary)
    &::placeholder {
      color: var(--color-text-secondary);
      font-weight: 300;
    }
    &.text-input {
      flex: 1;
    }
  }
  .icon-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 24px;
    width: 30px;
    margin-inline-end: 14px;
    maring-inline-start: 6px;
  }
  button {
    border: none;
    background-color: var(--color-accent-primary);
    color: #fff;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    padding-inline: 38px;
    padding-block: 13px;
    border-radius: var(--card-border-radius);
  }
`;

export default SearchForm;
