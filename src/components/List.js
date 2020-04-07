import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { finishLoading, getData } from '../redux/actions';
import Loader from './Loader';
import Item from './Item';

const List = ({ posts, load }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  const postsToRender = posts.map((item) => {
    return <Item key={item.id} post={item} />;
  });
  return (
    <div className="d-flex justify-content-center m-2">
      {load ? <Loader /> : <div className="list">{postsToRender}</div>}
    </div>
  );
};
const mapDispatchToProps = {
  finishLoading,
};
const mapStateToProps = (state) => {
  return {
    posts: state.todo.todo,
    load: state.app.loading,
  };
};
List.propTypes = {
  posts: PropTypes.array.isRequired,
  load: PropTypes.bool,
};
List.defaultProps = {
  load: true,
};
export default connect(mapStateToProps, mapDispatchToProps)(List);
