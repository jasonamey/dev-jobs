import React, {useState} from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import searchIcon from "../public/icon-search.svg";
import searchIconWhite from "../public/icon-search-white.svg";
import locationIcon from "../public/icon-location.svg";
import filterIcon from "../public/icon-filter.svg";
import {
  searchArrayOfObjectsForTextInValue,
  searchArrayForValueOfKey,
} from "../helpers/utilities";
import Modal from "../components/ui/modal/Modal";
import TextInputField from "./TextInputField";
import CheckboxField from "./CheckboxField";
import {PrimaryButtonColors} from "../styles/mixins";
import {device} from "../styles/devices";

const SearchForm = ({setJobs, allJobs, numOfTotalJobs}) => {
  const [textSearch, setTextSearch] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);
  const [isModalViewable, setIsModalViewable] = useState(true);
  const [jobsFoundBySearch, setJobsFoundBySearch] = useState(numOfTotalJobs);

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
    setJobsFoundBySearch(curArr.length);
    setTextSearch("");
    setJobLocation("");
    setIsFullTimeOnly(false);
  };

  const hideModal = () => {
    setIsModalViewable(false);
  };

  return (
    <FormWrapper>
      {isModalViewable && <Modal hideModal={hideModal}>hello</Modal>}
      <div className="tablet-container">
        <form onSubmit={submitHandler}>
          <TextInputField
            id={"textSearch"}
            iconSource={searchIcon}
            altText={"search icon"}
            placeholderText="Filter by title, companies, expertise..."
            setText={setTextSearch}
            textTerm={textSearch}
          />
          <TextInputField
            id={"location"}
            iconSource={locationIcon}
            altText={"locaiton icon"}
            placeholderText="Filter by location"
            setText={setJobLocation}
            textTerm={jobLocation}
          />
          <CheckboxField
            id="isFullTimeOnly"
            checkedValue={isFullTimeOnly}
            setCheckedValue={setIsFullTimeOnly}
            textLabel="Full Time Only"
          />
        </form>
      </div>
      <div className="mobile-container">
        <TextInputField
          id={"textSearch"}
          iconSource={searchIcon}
          altText={"search icon"}
          placeholderText="Filter by title, companies, expertise..."
          setText={setTextSearch}
          textTerm={textSearch}
          hideForMobile={false}
        />
        <button
          type="button"
          onClick={() => setIsModalViewable(true)}
          className="filter-btn"
        >
          <Image src={filterIcon} alt="filter-icon" height={20} width={20} />
        </button>
        <button
          type="submit"
          css={[PrimaryButtonColors]}
          className="search-btn"
        >
          <Image
            src={searchIconWhite}
            alt="search-icon"
            height={20}
            width={20}
          />
        </button>
      </div>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  transform: translateY(-50%);
  background-color: var(--color-bg-primary);
  border-radius: var(--border-radius);
  overflow: hidden;
  form {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
  .mobile-container {
    display: block;
    display: flex;
    padding: 24px;
    button {
      border: none;
      padding: 12px;
      border-radius: var(--border-radius);

      &.filter-btn {
        background-color: transparent;
      }
    }
  }
  .tablet-container {
    display: none;
  }

  @media screen and ${device.tablet} {
    .mobile-container {
      display: none;
    }
    .tablet-container {
      display: block;
    }
  }
`;

export default SearchForm;
