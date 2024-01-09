import { useImperativeHandle, forwardRef } from "react";


const Modal = forwardRef(function Modal({children}){
  // modal 의 children으로 cart와 checkout form이 들어오도록 
  return (
    <div className="modal">
      {children}
    </div>
  );
});

export default Modal;