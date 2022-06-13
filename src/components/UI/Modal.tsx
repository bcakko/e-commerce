import { Fragment, ReactNode } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props: { onClose: () => void }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full z-40 bg-backdrop-color opacity-95"
      onClick={props.onClose}
    />
  );
};

const ModalOverlay = (props: { children: ReactNode }) => {
  return (
    <div className="fixed top-1/2 z-50 w-full h-full">
      <div className="flex justify-center items-center">{props.children}</div>
    </div>
  );
};

const portalElement: any = document.getElementById("overlays");

const Modal = (props: { children: ReactNode; onClose: () => void }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
