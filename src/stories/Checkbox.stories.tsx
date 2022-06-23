import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '../components/Checkbox';
import LockOutlinedIcon from "@mui/icons-material"


//exporting the default propt name for aesthetic testing and pages
export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

//template is a wrapper around button that passes props, and allows you to set 
// lets you pass args as props to view different states
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args}/>
)

//'none' | 'square-rounded' | 'rounded' | 'circular'
//👇 Each story then reuses that template
export const Basic = Template.bind({});
Basic.args = {
    withBorder: false,
}
export const Border = Template.bind({});
Border.args = {
    withBorder: true,
}
export const LongText = Template.bind({});
LongText.args = {
    withBorder: true,
    yourLabel: " super long label test where the label goes weeeeee",
    boxSize: 150, //in px 
}

export const Checked = Template.bind({}); 
Checked.args = {
    state: "CHECKED",
    yourLabel: "Improve Endurance", 
}

export const Unchecked = Template.bind({});
Unchecked.args = {
    state: "UNCHECKED", 
    yourLabel: "Gain Weight"
}