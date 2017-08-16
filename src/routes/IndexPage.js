import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import IconTest from './../components/IconTest';

function IndexPage() {
  return (
    <IconTest/>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
