import React from "react";

export const Footer = () => {
  let stylee = {
    height: "30px",
  };
  return (
    <footer className="bg-dark text-light my-2" style={stylee}>
      <p className="text-center">Copyright &copy; AyushTodos</p>
    </footer>
  );
};
