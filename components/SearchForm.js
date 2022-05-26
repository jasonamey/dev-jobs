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
import Button from "./ui/Button";
import {PrimaryButtonColors, ButtonBase} from "../styles/mixins";
import {device} from "../styles/devices";

const SearchForm = ({setJobs, allJobs, numOfTotalJobs}) => {
  const [textSearch, setTextSearch] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [isFullTimeOnly, setIsFullTimeOnly] = useState(false);
  const [isModalViewable, setIsModalViewable] = useState(false);

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
    setIsModalViewable(false);
  };

  const hideModal = () => {
    setIsModalViewable(false);
  };

  return (
    <FormWrapper>
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
          <Button buttonColors={PrimaryButtonColors} type="submit">
            Search
          </Button>
        </form>
      </div>

      <div className="mobile-container">
        <form>
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
            onClick={submitHandler}
          >
            <Image
              src={searchIconWhite}
              alt="search-icon"
              height={24}
              width={24}
            />
          </button>

          {isModalViewable && (
            <Modal hideModal={hideModal}>
              <div className="top">
                <TextInputField
                  id={"location"}
                  iconSource={locationIcon}
                  altText={"locaiton icon"}
                  placeholderText="Filter by location"
                  setText={setJobLocation}
                  textTerm={jobLocation}
                />
              </div>
              <div className="bottom">
                <CheckboxField
                  id="isFullTimeOnly"
                  checkedValue={isFullTimeOnly}
                  setCheckedValue={setIsFullTimeOnly}
                  textLabel="Full Time Only"
                />
                <button
                  css={[PrimaryButtonColors, ButtonBase]}
                  style={{width: "100%"}}
                  type="submit"
                  onClick={submitHandler}
                >
                  Search
                </button>
              </div>
            </Modal>
          )}
        </form>
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
    align-items: center;
  }
  .mobile-container {
    display: block;
    display: flex;
    padding: 0 14px;
    button {
      border: none;
      padding: 12px;
      border-radius: var(--border-radius);
      cursor: pointer;
      &.filter-btn {
        margin-right: 8px;
        background-color: transparent;
      }
    }
  }
  .tablet-container {
    display: none;
  }

  @media screen and ${device.tablet} {
    padding-right: 16px;
    .mobile-container {
      display: none;
    }
    .tablet-container {
      display: block;
    }
  }
`;

export default SearchForm;
