import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  // elementRef is a mutable object and you can only set current property. It's a frozen object
  const elementRef = useRef(null);

  // what is a ref? I have one value which i need to access through entire app

  if (!elementRef.current) {
    elementRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elementRef.current);

    // when component unmounts, we need to destroy the created element (created div)

    return () => {
      // whatever we return from useEffect, is to cleanup for preventing memory leak
      modalRoot.removeChild(elementRef.current);
    };
  }, []);

  return createPortal(<div>{children}</div>, elementRef.current);
};

export default Modal;
