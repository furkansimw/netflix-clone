import React from "react";

const Footer = () => {
  const l = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Relations",
    "Jobs",
    "Redeem Gift Cards",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Only on Netflix",
  ];
  return (
    <div className="footer">
      <div className="ctx">
        <div className="title">
          <p>Questions? Call </p>
          <a href="#" className="phone">
            0850-390-7444
          </a>
        </div>
        <ul>
          {l.map((i) => (
            <li>
              <a href="#">{i}</a>
            </li>
          ))}
        </ul>
        <select>
          <option>English</option>
          <option>Türkçe</option>
        </select>
        <p>Netflix Turkey</p>
      </div>
    </div>
  );
};

export default Footer;
