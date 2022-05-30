import styled from "@emotion/styled";
import {device} from "../../../styles/devices";

const ModalBody = ({children}) => {
  return <ModalBodyWrapper>{children}</ModalBodyWrapper>;
};

const ModalBodyWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: var(--color-bg-secondary);
  width: 90%;
  border-radius: var(--border-radius);
  div {
    padding: 12px;
    &.top {
      border-bottom: 1px solid hsla(212, 23%, 69%, 0.2);
    }
  }
  input {
    background-color: var(--color-bg-secondary);
  }
  @media screen and ${device.tablet} {
    display: none;
  }
`;
export default ModalBody;
