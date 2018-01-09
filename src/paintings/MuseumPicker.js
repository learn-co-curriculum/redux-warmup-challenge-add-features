import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const MuseumPicker = props => {
  console.log(props);
  return (
    <div className="row">
      <div className="ui menu">
        <div
          onClick={() => props.toggleVisibleMuseum('ALL')}
          className={`${props.active === 'ALL' ? 'active' : null} item`}
        >
          All Museums
        </div>
        <div
          onClick={() => props.toggleVisibleMuseum('NATIONAL_GALLERY')}
          className={`${props.active === 'NATIONAL_GALLERY'
            ? 'active'
            : null} item`}
        >
          National Gallery of Art, Washington D.C.
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('in mapStateToProps', state);
  return {
    active: state.visibilityFilter
  };
};

export default connect(mapStateToProps, actions)(MuseumPicker);
