import React from "react";
import "../components/css/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
