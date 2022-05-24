import styled from "@emotion/styled";

const ModalBody = ({children}) => {
  return <ModalBodyWrapper>{children}</ModalBodyWrapper>;
};

const ModalBodyWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  background-color: white;
  padding: 20px;
  width: 50%;
  font-size: 30px;
`;
export default ModalBody;
