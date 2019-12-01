import React from 'react';
import Header from '../components/AppHeader';
import PropTypes from 'prop-types';
import { Row, Col, Card, Avatar } from 'antd';
import LoginForm from './LoginForm';

const dummy = {
  nickname: 'ipadorusa',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};
const AppLayout = ({ children }) => {
  return <React.Fragment>
    <Header />
    <Row>
      <Col xs={24} md={6}>
        {dummy.isLoggedIn
        ? <Card
          actions={[
            <div key="twit">twit<br/>{dummy.Post.length}</div>,
            <div key="following">팔로잉<br/>{dummy.Followings.length}</div>,
            <div key="follower">팔로워<br/>{dummy.Followers.length}</div>
          ]}
        >
          <Card.Meta
           avatar={<Avatar>{dummy.nickname[0]}</Avatar>} title={dummy.nickname}
          />
        </Card>
        :
        <LoginForm />}
      </Col>
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={24} md={6}></Col>
    </Row>
  </React.Fragment>
};

AppLayout.propTypes = {
  children: PropTypes.node,
};
export default AppLayout;