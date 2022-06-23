/* eslint-disable react/jsx-no-duplicate-props */
//TODO: bugs, in storybook the text does not change itelf and the image 
//is kinda not working 
import {Avatar, Box, Typography} from '@mui/material';
import { CalendarToday }  from "@mui/icons-material";

import Grid from '@mui/material/Grid';
import { GridProps } from '@mui/system';
import Typeograpy from '@mui/material/Typeograpy';

export interface ImgTxtProps extends GridProps {
    title?: string, 
    subtitle?: string, 
    // img?: string, //
    img?: React.ReactNode,
}

/*wrap formatting*/

export const ImgTxt = ({title, subtitle, img } : ImgTxtProps) => {
        return(
            <>
            
            <Grid 
            container 
            direction="column"
            spacing= {1}
            alignItems="center"
            justifyContent="center"
            columnSpacing={{xs:1, sm: 2, md: 3}} 
            sx = {{}}
            >

            <Grid item xs={3}>

            <Box        
            bgcolor="secondary.main"  
            borderRadius="20px"
            padding="20px"      
            > 
            {img} 
            </Box>

            </Grid>
            <Grid item xs={1}>
            <Typography 
            variant="h6" 
            align="center" 
            style={{flex: 1}}
            maxWidth={300}
            >
        {title}        
            </Typography>
            </Grid>
            <Grid item xs={1} >
            <Typography 
            align="center" 
            style={{flex: 1}} 
            variant="body2" 
            color="text.primary"
            maxWidth={275}
            >
        {subtitle}
            </Typography>
            </Grid>
            </Grid>
            </>
         
        )
}
    
    ImgTxt.defaultProps = {
        title: 'edit me', 
        subtitle: 'help',
    }; 
   