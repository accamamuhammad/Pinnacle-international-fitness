import attributionCSS from "./Attribution.module.css";

const Attribution = () => {
  return (
    <div className={attributionCSS.AttributionWrapper}>
      <h1>
        <a href="#">Built by Accama</a>
      </h1>
      <p>©2024 Accama Muhammad. All rights reserved</p>
    </div>
  );
};
export default Attribution;
