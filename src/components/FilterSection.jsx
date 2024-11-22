import React from "react";

const FilterSection = ({ activeFilter, setFilter }) => {
  return (
    <div className="filter-section">
      <button
        className={activeFilter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={activeFilter === "home" ? "active" : ""}
        onClick={() => setFilter("home")}
      >
        Home Consultation
      </button>
      <button
        className={activeFilter === "clinic" ? "active" : ""}
        onClick={() => setFilter("clinic")}
      >
        In-Clinic Consultation
      </button>
    </div>
  );
};

export default FilterSection;
