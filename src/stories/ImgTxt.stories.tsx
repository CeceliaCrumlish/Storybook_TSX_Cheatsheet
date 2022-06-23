import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImgTxt} from '../components/ImgTxt';
import female_icon from '../image/female_symbol.svg' //this works randomly Idk bro
import AccountCircle from '@mui/icons-material/AccountCircle';
import Height from "../image/height.png"
import { AccountCircleSharp } from '@mui/icons-material';
// maybe works better if its a png 

export default  {
    title: 'ImgTxt', 
    component: ImgTxt, 
} as ComponentMeta <typeof ImgTxt>; 

// const Template: ComponentStory<typeof ImgTxt> = (args) => (
//     <ImgTxt>args</ImgTxt>
// )
const Template: ComponentStory<typeof ImgTxt> = (args) => <ImgTxt {...args} />;

export const Basic = Template.bind({}); 
Basic.args = {
    title: "An extra long Text to see if Text wrapping will be an issue? ", 
    subtitle: "i'm text", 
    img: <AccountCircle sx=
    {{
        color: "primary.main",
        width: "40px",
        height: "40px"
    }}
    
    />, // pass in a mui icon 
}; 

export const Changed = Template.bind({}); 
Changed.args = {
    title: "What is your Weight? ", 
    subtitle: "To give us better data we need to know your weight", 
    img: <img src={female_icon} alt="" size="small"/> // pass in image  that is not a mui icon but is really small  TODO AUTOSIZE
}; 

export const WthSrcImg = Template.bind({});
WthSrcImg.args = {
    title: "what is your height?", 
    subtitle: "to give us better data we need to know your height", 
    img: <img 
    src={Height} 
    alt=""
    width= "40px"
    height = "40px"
    />
};