import React from 'react'
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Folder from '@material-ui/icons/Folder';
import FolderOpen from '@material-ui/icons/FolderOpen';

const SideBarItem = ({selected, classes, title}) => (
    <ListItem button className={classes.nested}>
        <ListItemIcon>
            {selected ?
                <FolderOpen style={{ color: 'orange' }} />
                :
                <Folder style={{ color: 'orange' }} />
            }
        </ListItemIcon>
        <ListItemText inset primary={title} />
    </ListItem>
)

export default SideBarItem