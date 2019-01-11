import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { Row, Col } from "react-materialize";
import { connect } from "react-redux";
import { getProjects, getActions } from "../store/actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
    this.props.getActions();
  }
  render() {
    return (
      <Row>
        {this.props.projects.map(project => (
          <Col s={12} m={8} key={project.id} className="offset-m2">
            <ProjectCard
              project={project}
              posts={this.props.posts}
              projects={this.props.projects}
            />
          </Col>
        ))}
      </Row>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    actions: state.actions
  };
};

export default connect(
  mapStateToProps,
  { getProjects, getActions }
)(Dashboard);
