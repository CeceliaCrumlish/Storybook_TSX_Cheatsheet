//TODO: bugs, in storybook the text does not change itelf and the image 
//is kinda not working 
import {Avatar} from '@mui/material';
import { CalendarToday }  from "@mui/icons-material";

import Card, { CardProps } from '@mui/material/Card';
import CardContent from "@mui/material/Card"
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';


export interface ImgTxtProps extends CardProps {
    title?: string, 
    subtitle?: string, 
    img?: React.ReactNode, // should be a url to the image you add
}

export const ImgTxt = ({title, subtitle, img, children , ...props } : ImgTxtProps) => {
        return(
        <>
            <Stack maxWidth={{xs:"12", lg:"md"}} direction="column" spacing={1} alignItems="center">
            <img src={img} alt="scale" />;
             <b>{title}</b>
             {subtitle}
             </Stack>
             {children} 
         </>
        )
    }
    
    ImgTxt.defaultProps = {
        title: 'edit me', 
        subtitle: 'help',
    }; 
   