import React, { useEffect } from "react";

export default () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("showInterception", entry.isIntersecting);
      });
    });

    document.querySelectorAll(".hidden").forEach((element) => {
      observer.observe(element);
    });
  }, []);
};
