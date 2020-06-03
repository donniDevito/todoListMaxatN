import React from "react";
import "../App.css";
import { FilterStates } from "../App";

interface IProps {
  filterState: FilterStates;
  setFilterState: React.Dispatch<React.SetStateAction<FilterStates>>;
}

export const FilterComponent: React.FC<IProps> = ({
  setFilterState,
  filterState,
}) => {
  const filterClickHandler = (event: any) =>
    setFilterState(Number(event.target.id));

  return (
    <div
      id="radioBtn"
      className="btn-group-vertical btn-group-lg"
      onClick={filterClickHandler}
    >
      <a
        href="/#"
        className={`btn btn-primary sansFamilyNormal ${
          filterState === FilterStates.All ? "active" : "notActive"
        }`}
        id="0"
      >
        All
      </a>
      <a
        href="/#"
        className={`btn btn-primary sansFamilyNormal ${
          filterState === FilterStates.Completed ? "active" : "notActive"
        }`}
        id="1"
      >
        Completed
      </a>
      <a
        href="/#"
        className={`btn btn-primary sansFamilyNormal ${
          filterState === FilterStates.InProgress ? "active" : "notActive"
        }`}
        id="2"
      >
        In-Progress
      </a>
    </div>
  );
};
export default FilterComponent;
