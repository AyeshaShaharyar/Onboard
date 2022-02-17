import React from "react";
import { withStyles } from "@material-ui/core";
import { Drawer, List } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TableChartIcon from "@material-ui/icons/TableChart";
import BusinessIcon from "@material-ui/icons/Business";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const itemsConfig = {
  table: {
    icon: TableChartIcon,
    text: "Table",
    link: `/Table`
  },

  organisation: {
    icon: BusinessIcon,
    text: "Organisation",
    link: `/Organisation`
  }
};

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar
});

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
  }

  handleListItemClick = (event, index) => {
    this.setState({
      selectedIndex: index
    });
  };

  render() {
    const { className, classes, onSidebarOpen, ...rest } = this.props;
    const { selectedIndex } = this.state;
    return (
      <div className={classes.root}>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />
          <List>
            {["table", "organisation"].map((item, index) => {
              const Icon = itemsConfig[item].icon;
              return (
                <ListItem
                  component={Link}
                  to={itemsConfig[item].link}
                  selected={index === this.state.selectedIndex}
                  onClick={event => this.handleListItemClick(event, index)}
                  button
                  key={item}
                  style={
                    selectedIndex === index ? { backgroundColor: "grey" } : {}
                  }
                >
                  <ListItemIcon>
                    <Icon
                      style={selectedIndex === index ? { color: "white" } : {}}
                    />
                  </ListItemIcon>
                  <ListItemText primary={itemsConfig[item].text} />
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);
