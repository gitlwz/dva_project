import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
 
class AAA extends Component {
  render() {
    return (
      <div>
        <p>
          AAA页
        </p>
        <Link to={'/aaa/bbb'}>
          <Button type={'primary'} icon={'link'}>
            去BBB页面
          </Button>
        </Link>
        <br />
        <Link to={'/ccc'}>
          <Button type={'default'} icon={'enter'}>
            去CCC页面
          </Button>
        </Link>
      </div>
    );
  }
}
 
export default AAA;
