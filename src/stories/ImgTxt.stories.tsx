import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImgTxt} from '../components/ImgTxt';

export default {
    title: 'ImgTxt', 
    component: ImgTxt, 
} as ComponentMeta <typeof ImgTxt>; 

// const Template: ComponentStory<typeof ImgTxt> = (args) => (
//     <ImgTxt>args</ImgTxt>
// )
const Template: ComponentStory<typeof ImgTxt> = (args) => <ImgTxt {...args} />;

export const Basic = Template.bind({}); 
Basic.args = {
    title: "change me", 
    subtitle: "i'm text", 
}; 

export const Changed = Template.bind({}); 
Changed.args = {
    title: "change me", 
    subtitle: "i'm text", 
}; 
