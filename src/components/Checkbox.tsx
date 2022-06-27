import React from 'react';

import { Checkbox as MuiCheckbox, FormControlLabel, FormGroup} from '@mui/material';
import {CheckboxProps as MuiCheckboxProps } from "@mui/material"
import { Grid, Paper, Box} from '@mui/material';
import {useState} from 'react'; 
import { borders } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'; 


export interface CheckboxProps extends MuiCheckboxProps {
    withBorder?: boolean, 
    yourLabel: string,
    boxSize: number,
    state: State, 
}

type State = "CHECKED"|"UNCHECKED"|"PLAIN"; 


/*Question here is there an easier way to conditionally render something with paper? 
I triet to make a function called wrapWithPaper but it was not very sucessful*/
export const Checkbox = ({ state = "UNCHECKED", boxSize = 200, withBorder = false, yourLabel = "hello", sx,  ...props}: CheckboxProps) => {
    const [didTask, setAccept] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setAccept(event.target.checked)
    }

    return(
        <>
         {state === "UNCHECKED" ?
        <Box sx={{padding: '16px'}}>
            { withBorder ? 
            <Box> 
            <Paper  
            sx={{ 
                width: {boxSize}, 
                variant: "outlined",
            }} 
            style={{
                borderColor: "#F89365", 
                borderRadius: "15px", 
                flexGrow: 1
            }}
            >
            <FormControlLabel  
            control={
                <MuiCheckbox {...props} 
                 disabled
                 />
                }
            label={<Typography color="text.primary">{yourLabel}</Typography>}
             />
            </Paper>
            </Box>
            : 
            <Box>
            <FormControlLabel 
            label = {<Typography color="text.secondary">{yourLabel}</Typography>}
            control = {< MuiCheckbox 
            disabled
            />} 
            />
            </Box>
            }
            
        </Box>
        :
        <Box sx={{padding: '16px'}}>
            { withBorder ? 
            <Box> 
            <Paper 
            variant= "outlined"
            sx={{ 
                padding: '16px',
                width: {boxSize}, 
                height: '100%',
                borderwidth: '10px' ,
            }} 
            style={{
                borderColor: "#F89365", 
                borderRadius: "15px", 
                flexGrow: 1
            }}
            >
            <FormControlLabel  
            control={
                <MuiCheckbox {...props} 
                defaultChecked={true}                  
                disabled
                 />
                }
            label={<Typography color="text.primary">{yourLabel}</Typography>}
             />
            </Paper>
            </Box>
            : 
            <Box>
            <FormControlLabel 
            label = {<Typography color="text.secondary" >{yourLabel}</Typography>}
            control = {< MuiCheckbox 
            value="Checked"
            disabled
            />} 
            />
            </Box>
            }
            
        </Box>
}
        </>
        
    )
}

/*exporting default (Necessary)*/
Checkbox.defaultProps = {
    yourLabel:  "todo!", 
    boxSize: 100,
    withBorder: true,
    state: "UNCHECKED",
}




