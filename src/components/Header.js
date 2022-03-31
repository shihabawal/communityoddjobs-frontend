import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Toolbar } from '@mui/material';

const Header = () => {
    const [value, setValue] = useState(0);
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Tabs textColor='inherit' value={value}
                        onChange={(e, value) => setValue(value)} indicatorColor="secondary">
                        <Tab label="Home"></Tab>
                        <Tab label="Users"></Tab>
                        <Tab label="Job Listing"></Tab>
                        <Tab label="Contact Us"></Tab>
                    </Tabs>
                </Toolbar>
            </AppBar>
        </React.Fragment >
    )
}

export default Header