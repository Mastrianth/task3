import Tooltip from '@material-ui/core/Tooltip';
import React, { useRef, useEffect, useState } from 'react';

function EmailWithTooltip({ email, nameForClass, noLink }) {
  const nodeEmail = useRef();
  const [hoverStatus, setHover] = useState(false);

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
      >
        <span itemProp="email" ref={nodeEmail} className={nameForClass} style={{ cursor: 'auto' }}>{email}</span>
      </Tooltip>
    );
  }

  return (
    <Tooltip

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
