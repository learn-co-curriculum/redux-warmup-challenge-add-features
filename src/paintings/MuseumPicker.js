import React from "react";
import { connect } from "react-redux";
import { selectGallery } from "../actions";

const museums = ["National Gallery of Art, Washington D.C."];

const MuseumPicker = ({ activeMuseum, selectGallery }) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div
          onClick={() => selectGallery(null)}
          className={`${!activeMuseum ? "active" : null} item`}
        >
          All Museums
        </div>
        {museums.map(museum => (
          <div
            onClick={() => selectGallery(museum)}
            className={`${museum === activeMuseum ? "active" : null} item`}
          >
            {museum}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ activeMuseum: state.filters.gallery });

export default connect(
  mapStateToProps,
  { selectGallery }
)(MuseumPicker);
