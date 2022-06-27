
    import React from 'react'; 
    import {Avatar, Grid, Button, Card, CardProps, CardMedia, CardContent, Typography} from '@mui/material';
    // import { Card, CardProps } from "@mui/material/Card";
    import { Box } from '@mui/material'
    // import Button from '@mui/material/Button'; 
    
    export interface CcardProps extends CardProps{
    
        /*states*/
        // state: CardState, // TODO IF YOU LIKE THIS ADD IT 
        /*props*/
        title: string,
        preTitle?: string,
        description?: string,
        med: string,
        timeDescription?: React.ReactNode, //extend to Api time
        avatars?: React.ReactNode,
        progressbar?: React.ReactNode,
        linkButton?: boolean, 
    }
    
    /*media styles*/
    var cardStyle = {
        display: 'flex',
        width: '666px',
        height: '160px',
        borderRadius: '15px'
    }
    var mediaStyle = {
        width: '120px',
        height: '120px',
        borderRadius: '15px',
    }
    var gridStyle = {
        direction: "column",
        justifyContent: "flex-end", 
        alignItems: "flex-start",
    }
    
    export const Ccard = ({sx, title, preTitle, description, timeDescription, avatars,
                            progressbar, med, linkButton, ...props} : CcardProps) => {
    
        return (
            <Card style={cardStyle}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              </Box>
              <CardMedia
                component="img"
                style ={mediaStyle}
                image="../image/yoga1.png"
                alt=""
              />
              <Box sx={{ display: "flex", flexDirection: "column"}}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
            
                 <Grid item>
                 <Typography component = "div" variant = "h6" color= "secondary.main" >
                            {preTitle}
                        </Typography>
                 </Grid>
                <Grid item>

                        <Typography component = 'div'  variant = 'h4'>
                            {title}
                        </Typography>
                </Grid>
                <Grid item>

                            <Typography component = 'div' variant ='body1' color = 'text.secondary'>
                            {description}
                        </Typography>

                </Grid>
                </Grid>
                </CardContent>

                <Box sx={{ display: "flex", alignItems: "flex-start", pl: 1, pb: 1 }}>
                </Box>
          </Box>
            </Card>
          );
    }
    
    Ccard.defaultProps = {
        txitle: "card title",
        preTitle: "pre title",
        description: "description or date/time"
    };

