import React, { MouseEvent, ReactNode } from "react";

type IconButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

export default function IconButton({ children, onClick }: IconButtonProps) {
  return (
    <button className="action-button" onClick={onClick}>
      {children}
    </button>
  );
}

/**
Unit tests:

test that the onclick action fires and on another test that the children render
*/
