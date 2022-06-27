import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react'; 

import { Ccard } from '../components/Ccard'; 





export default {
    title: 'Ccard',
    component: Ccard,
  } as ComponentMeta<typeof Ccard>;
  
  //template is a wrapper around button that passes props, and allows you to set 
  // lets you pass args as props to view different states
  const Template: ComponentStory<typeof Ccard> = (args) => (
    <Ccard {...args} />
  )
  
  //'none' | 'square-rounded' | 'rounded' | 'circular'
  //👇 Each story then reuses that template
  export const Test1 = Template.bind({});
  Test1.args = {
    title: "hello hello ",
    preTitle: "pretitle to hello",
 
  };