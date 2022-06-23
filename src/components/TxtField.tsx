import * as React from 'react';

import TextField from '@mui/material/TextField'
import { IconProps, styled, SvgIcon, SvgIconTypeMap, withStyles } from '@mui/material';
import {FilledTextFieldProps } from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from "@mui/icons-material/AccountCircle";
import FormControl from '@mui/material/FormControl';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';




/*Interface */
export interface TxtFieldProps extends FilledTextFieldProps {
    field?: string, 
    icon?: React.ReactNode, 
}

/*ICON STILL NOT WORKING IDK WHAT TO DOOOOOOOOOOOO :((((((*/
/*STYLE OVERRIDES THAT SITLL DON'T WORK :((*/


export const TxtField = ({field, icon,  sx, ...props}: TxtFieldProps ) =>{
    return(
        <> 
                   <FormControl>
                   <TextField
                     sx = {{ 
                        borderRadius: "50%"
                     }}
                     {...props}
                    id={field}
                    placeholder= {field}
                    label= {field}
                    type = {field}
                    variant = "outlined"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {icon}
                            </InputAdornment>
                        )
                        
                    }}
                    />
                </FormControl>
                </>
    );
}
  

TxtField.defaultProps = {
    field: "name", 
    icon: <EmailOutlinedIcon/>, 
}

