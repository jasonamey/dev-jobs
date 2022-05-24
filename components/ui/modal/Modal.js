import {useEffect, useState} from "react";
import ModalBackground from "./ModalBackground";
import ModalBody from "./ModalBody";
import ReactDOM from "react-dom";

const Modal = ({children, hideModal}) => {
  const [isViewable, setIsViewable] = useState(false);
  useEffect(() => {
    setIsViewable(true);
  }, []);

  if (isViewable)
    return (
      <>
        {ReactDOM.createPortal(
          <ModalBackground hideModal={hideModal} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalBody>{children}</ModalBody>,
          document.getElementById("overlay-root")
        )}
      </>
    );
  else {
    return <div>bye</div>;
  }
};

export default Modal;
