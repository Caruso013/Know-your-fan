import React from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="bg-furiaYellow text-black px-6 py-2 rounded-xl hover:bg-yellow-400 transition-all font-semibold"
  >
    {children}
  </button>
);

export default Button;
