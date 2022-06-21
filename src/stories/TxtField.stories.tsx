
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TxtField } from '../components/TxtField';
import  AccountCircle from '@mui/icons-material';
import LockOutlinedIcon from "@mui/icons-material"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';


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
    Icon: LockOutlinedIcon, 
}

export const Name = Template.bind({}); 
Name.args = {
    field: "name",
    Icon: AccountCircle,
}

export const ChangeImg = Template.bind({}); 
ChangeImg.args = {
    field: "email", 
    Icon: EmailOutlinedIcon,
    color: 'primary',
}