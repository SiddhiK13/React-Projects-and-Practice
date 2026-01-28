import "./MapSection.css";

const MapSection = () => {
  return (
    <div className="map-section">
      <iframe
        title="map"
        src="https://www.google.com/maps?q=Hopatcong,New%20Jersey&output=embed"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapSection;
