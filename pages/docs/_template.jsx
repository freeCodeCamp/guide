import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const propTypes = {
  children: PropTypes.any
};

function ArticleTemplate(props) {
  return (
    <Row>
      <Col xs={ 12 }>
        { props.children }
      </Col>
    </Row>
  );
}

ArticleTemplate.displayName = 'ArticleTemplate';
ArticleTemplate.propTypes = propTypes;

module.exports = ArticleTemplate;
