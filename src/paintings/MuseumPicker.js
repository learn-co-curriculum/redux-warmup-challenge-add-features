import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const MuseumPicker = props => {
  return (
    <div className="row">
      <div className="ui menu">
        <div onClick={() => props.toggleVisibleMuseum('ALL')} className="item">
          All Museums
        </div>
        <div
          onClick={() => props.toggleVisibleMuseum('NATIONAL_GALLERY')}
          className="item"
        >
          National Gallery of Art, Washington D.C.
        </div>
      </div>
    </div>
  );
};

export default connect(null, actions)(MuseumPicker);
