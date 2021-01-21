import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import SportsHandballIcon from '@material-ui/icons/SportsHandball';


function Navigation() {
    return (
        <div>
            <AppBar position="static" > 
                <Toolbar> 
                    <SportsHandballIcon />
                    <Typography>
                        Pokemon App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Navigation;