import { createStyles, Theme, withStyles } from "@material-ui/core";
import React from "react";

const styles = (theme:Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
});

class DescriptionComponent extends React.Component<any,any> {
    
  render()
  {
    const { classes } = this.props;
    
      return (
        <div className={classes.root}>
            {/* Название (data.title), описание видео (data.desc) + проверка редактируемо или нет (data.editable) */}
        </div>
      );
  }
}

export default withStyles(styles)(DescriptionComponent);