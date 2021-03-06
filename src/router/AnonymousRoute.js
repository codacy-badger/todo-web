import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function AnonymousRoute({ component, user, ...rest }) {
  return user ? <Redirect to="/" /> : <Route {...rest} component={component} />;
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(AnonymousRoute);
