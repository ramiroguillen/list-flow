// libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';
// material UI
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Settings, Assignment } from '@mui/icons-material';

const MenuList = ({ list }) => {

    const getIcon = (icon) => {
        switch (icon) {
            case 'HOME':
                return <Home />;
            case 'SETTINGS':
                return <Settings />;
            case 'TASKS':
                return <Assignment />;
            default:
                break;
        }
    }
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    return (
        <List>
            {list.map(({ text, path, icon, id }) =>
                <ListItem key={id} button onClick={() => navigateTo(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            )}
        </List>
    );
}

export default MenuList;
