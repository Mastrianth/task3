import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider, Tooltip } from "@material-ui/core";

const theme = createMuiTheme({
  overrides:{
    MuiTooltip: {
      tooltip: {
        backgroundColor: "#707070",
        boxShadow: "0 4px 4px 1px rgba(0, 0, 0, 0.11)",
        color: '#fefefe',
        fontFamily: "'Nunito', sans-serif",
        fontSize: '14px',
        fontWeight: '400'
      },
    }
  }
});

const useStyles = makeStyles(() => ({
  tooltip: {
    maxWidth: '61px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
  }
}))

const TooltipComponent = ({fontWeight, color, cls, fontSize, fontFamily, label, ...props}) => {
  const classes=useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Tooltip
        title={label}
        placement="bottom-end"
        PaperProps={{
        paperOptions: {
          modifiers: {
            offset: {
              enabled: true,
              offset: '50px, 5px'
            },
          },
        },
        }}>
        <div className={classes.tooltip}
             style={{
               fontWeight,
               fontSize,
               fontFamily,
               color,
               ...props
             }}
        >
          {label}
        </div>
      </Tooltip>
    </ThemeProvider>
  )
}

export default TooltipComponent;
