//TODO: bugs, in storybook the text does not change itelf and the image 
//is kinda not working 
import {Avatar} from '@mui/material'
import { CalendarToday, Scale }  from "@mui/icons-material"

import { Grid } from '@mui/material';
import Stack from '@mui/material/Stack';


export interface ImgTxtProps{
    title?: string, 
    subtitle?: string, 
    img?: typeof Avatar, // should be a url to the image you add
    children?: any, 
}

export const ImgTxt = ({title, subtitle, children , ...props } : ImgTxtProps) => {
        return(
            <>
        <Stack direction="column" spacing={1} alignItems="center">
            <Avatar variant="rounded"> 
            <CalendarToday/>
            </Avatar>
            <b>{title}</b>
            {subtitle}
        </Stack>
            </>
        )
}

ImgTxt.defaultProps = {
    title: 'edit me', 
    subtitle: 'im text',
}; 
  

//Todo tackle spacing and box 
//todo change avatatar options to const image options in const list 

//other grid code that can be useful 

            // <>
            //     <Grid container
            //     direction ="column"
            //     justifyContent="center"
            //     alignItems ="center"
            //     >
            //         <Grid item xs= {12} md ={10}>
            //         <Avatar variant="rounded"><FemaleIcon/></Avatar>
            //         </Grid>
            //         <Grid item xs= {12} md ={10}>
            //             <b>title</b> 
            //         </Grid> 
            //          <Grid item xs= {12} md ={10}>
            //             subtitle 
            //          </Grid>   
            //     </Grid>
         
            // </>
//notes: having trouble passing sx element to avatar to change colors 
// also having trouble importing images/getting images 