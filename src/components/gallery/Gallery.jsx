import galleryCSS from "./Gallery.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import mainImage from "../../../public/Images/Equipment-And-Amenities-Of-Pinnacle-International-Fitness81-768x700.jpg";
import otherImage1 from "../../../public/Images/Equipment-And-Amenities-Of-Pinnacle-International-Fitness101-768x700.jpg";
import otherImage2 from "../../../public/Images/Equipment-And-Amenities-Of-Pinnacle-International-Fitness41-768x700.jpg";
import otherImage3 from "../../../public/Images/Equipment-And-Amenities-Of-Pinnacle-International-Fitness81-768x700.jpg";
import otherImage4 from "../../../public/Images/Equipment-And-Amenities-Of-Pinnacle-International-Fitness91-768x700.jpg";

const Gallery = () => {
  return (
    <div className={galleryCSS.galleryWrapper}>
      <p>Image Gallery</p>
      <h1>Here We Share Our All Time Best Fitness Gallery</h1>
      <div className={galleryCSS.galleryImages}>
        <img src={mainImage} alt="image" className={galleryCSS.mainImage}></img>
        <div className={galleryCSS.otherImages}>
          <img src={otherImage1} alt="image" />
          <img
            className={galleryCSS.moreImages}
            src={otherImage2}
            alt="image"
          />
          <img src={otherImage3} alt="image" />
          <LazyLoadImage
            src={otherImage4}
            width={600}
            height={400}
            alt="Image Alt"
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
