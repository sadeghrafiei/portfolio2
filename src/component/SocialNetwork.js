import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    let navLinks = document.querySelectorAll(".social-network a");

    navLinks.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate(${attrX}px , ${attrY}px)`;
      });
      link.addEventListener('mouseleave' , () => {
          link.style.transform = '';
      })
    });
  };
  return (
    <div className="social-network">
      <ul className="content">
        <a
          rel="noopener noreferrer"
          className="hover"
          target="_blank"
          href="https://www.facebook.com"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>
        <a
          rel="noopener noreferrer"
          className="hover"
          target="_blank"
          href="https://twitter.com/mr_sadegh20"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>
        <a
          rel="noopener noreferrer"
          className="hover"
          target="_blank"
          href="https://www.instagram.com/mr.sadegh20/"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
        <a
          rel="noopener noreferrer"
          className="hover"
          target="_blank"
          href="https://www.linkedin.com/in/sadegh-rafiei-20039419a/"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-linkedin"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
