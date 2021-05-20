import Tooltip from '@material-ui/core/Tooltip';
import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  tooltip: {
    background: '#000',
    fontSize: '12px',
    lineHeight: '16.8px',
    fontFamily: "'Asap', sans-serif"
  },
});
function EmailWithTooltip({ email, nameForClass, noLink }) {
  const nodeEmail = useRef();
  const [hoverStatus, setHover] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    compareSize();
  }, []);

  const compareSize = () => {
    const compare = nodeEmail.current.scrollWidth > nodeEmail.current.clientWidth;
    setHover(compare);
  };

  if (noLink) {
    return (
      <Tooltip
        title={email}
        disableHoverListener={!hoverStatus}
        disableTouchListener={!hoverStatus}
        disableFocusListener={!hoverStatus}
        placement="bottom-end"
        classes={classes}
      >
        <span itemProp="email" ref={nodeEmail} className={nameForClass} style={{ cursor: 'auto'}}>{email}</span>
      </Tooltip>
    );
  }

  return (
    <Tooltip
      classes={classes}
      title={email}
      disableHoverListener={!hoverStatus}
      disableTouchListener={!hoverStatus}
      disableFocusListener={!hoverStatus}
      placement="bottom-end"
    >
      <a itemProp="email" ref={nodeEmail} href={`mailto:${email}`} className={nameForClass}>{email}</a>
    </Tooltip>
  );
}

export default EmailWithTooltip;
