import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Person from '@material-ui/icons/Person';

import SideBarItem from './SideBarItem'

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 6,
    },
});

class SideBarFolder extends React.Component {
    state = { open: true };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List
                    component="nav"
                >
                    <ListItem button onClick={this.handleClick}>
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <ListItemText inset primary="ACTIVE CASES" />
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <SideBarItem classes={classes} selected={true} title='Newport Island Theft'/>
                            <SideBarItem classes={classes} title='West Hills Case'/>
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}


SideBarFolder.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBarFolder);
