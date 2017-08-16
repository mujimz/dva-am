/**
 * Created by uxin on 2017/6/3.
 */
import React from 'react'
import { Icon, Grid } from 'antd-mobile';
const icons = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis',
  'koubei-o', 'koubei', 'loading',
];
class IconTest extends React.Component{
  constructor(props){
    super(props);
    this.data = icons.map(item => ({
      icon: (<Icon type={item} />),
      text: item,
    })).concat([{
      icon: (<Icon type={require('./../assets/fonts/menu.svg')} />),
      text: '自定义图标',
    }]);
  }
  render(){
    return (
      <Grid data={this.data} columnNum={3} hasLine={false} />
    );
  }
}

export default IconTest;
