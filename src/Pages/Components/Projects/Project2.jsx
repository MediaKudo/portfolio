import React from "react";

const datas = {
  title: "Projet 2: Le renouveau",
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

const Project2 = () => {
  return (
    <div className="project">
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

export default Project2;
