import React, { Component } from "react";
import { connect } from "react-redux";
import { getProjectActions, getProjects } from "../store/actions";
import { Row, Col, CardPanel } from "react-materialize";

class UserPosts extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getProjectActions(id);
    this.props.getProjects();
  }

  render() {
    const { projectActions } = this.props;

    return (
      <Row>
        {projectActions.map(action => (
          <Col s={12} key={action.id}>
            <CardPanel>
              <h5>{action.description}</h5>
              <p>{action.notes}</p>
            </CardPanel>
          </Col>
        ))}
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    projectActions: state.projectActions
  };
};

export default connect(
  mapStateToProps,
  { getProjectActions, getProjects }
)(UserPosts);
