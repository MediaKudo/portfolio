import React from "react";

const datas = {
  title: "Projet 3: La consécration",
  paragraph: "loremipsum",
  images: [
    {
      url: "https://picsum.photos/600/400",
    },
    {
      url: "https://picsum.photos/600/400",
    },
    {
      url: "https://picsum.photos/600/400",
    },
  ],
};
const images = datas.images;
const Project3 = () => {
  const test = (e) => {
    console.log(window.scrollY);
    console.log(window.innerHeight);
    console.log(e.target.getBoundingClientRect().top);
  };
  return (
    <div className="project" onScroll={test}>
      <div className="project-content">
        <h3 className="project-title">{datas.title}</h3>
        <p className="project-description">{datas.paragraph}</p>
      </div>
      <div className="gallery">
        {images.map((image, index) => (
          <img src={image.url} key={index} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Project3;
