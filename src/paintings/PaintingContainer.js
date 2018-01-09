import React, { Component } from 'react';
import { connect } from 'react-redux';
import PaintingList from './PaintingList';
import PaintingShow from './PaintingShow';
import * as actions from '../actions';
{
}
// NOTE: actions is a directory.
// By default import will look for a file called index.js in any directory

class PaintingContainer extends Component {
  componentDidMount() {
    this.props.fetchPaintings();
  }

  render() {
    // console.log('actions', actions);
    // console.log('Props in Container Component', this.props);
    const visiblePaintings = this.props.paintings.filter(pntg => {
      if (this.props.visibilityFilter === 'ALL') {
        return pntg;
      } else if (this.props.visibilityFilter === 'NATIONAL_GALLERY') {
        return pntg.museum.id === 2;
      }
    });
    return (
      <div className="row">
        <div className="six wide column">
          <PaintingList paintings={visiblePaintings} />
        </div>
        <div className="ten wide column">
          {this.props.activePainting ? (
            <PaintingShow painting={this.props.activePainting} />
          ) : (
            <h3>select a painting</h3>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    paintings: state.paintings,
    visibilityFilter: state.visibilityFilter,
    activePainting: state.paintings.find(p => p.id === state.activePaintingId)
  };
};

// this is equivalent to passing the object as the second arg
// to connect
// const mapDispatchToProps = dispatch => {
//   return {
//     fetchPaintings: () => dispatch(actions.fetchPaintings()),
//     selectPainting: id => dispatch(actions.selectPainting(id))
//   };
// };

export default connect(mapStateToProps, actions)(PaintingContainer);
// NOTE: here we're using the shorthand syntax for mapDispatchToProps
// (This is the recommended way to do this)
// it works like this:
// the second arg to connect is an object where the keys
// are the names of the functions we want as props and the values
// are the appropriate action creator functions
// (action creators are just functions which return actions)
