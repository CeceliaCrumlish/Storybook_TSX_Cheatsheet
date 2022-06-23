
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TxtField } from '../components/TxtField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockIcon from '@mui/icons-material/Lock';


//exporting the default propt name for aesthetic testing and pages
export default {
  title: 'TxtField',
  component: TxtField,
} as ComponentMeta<typeof TxtField>;

//template is a wrapper around button that passes props, and allows you to set 
// lets you pass args as props to view different states
const Template: ComponentStory<typeof TxtField> = (args) => (
  <TxtField {...args}/>
)

//'none' | 'square-rounded' | 'rounded' | 'circular'
//👇 Each story then reuses that template
export const Password = Template.bind({});
Password.args = {
    field: "password",
    icon: <LockIcon/>
}

export const Name = Template.bind({}); 
Name.args = {
    field: "name",
    icon: <AccountCircle/>,
}

export const ChangeImg = Template.bind({}); 
ChangeImg.args = {
    field: "email", 
    icon: <EmailOutlinedIcon/>,
}