import Tooltip from '@material-ui/core/Tooltip';
import React, { useRef, useEffect, useState } from 'react';

function UsersWithTooltip({ username, nameForClass }) {
  const nodeName = useRef();
  const [hoverStatus, setHover] = useState(false);

  useEffect(() => {
    compareSize();
  }, []);

  const compareSize = () => {
    // const compare = nodeName.current.scrollWidth > nodeName.current.clientWidth;

    const compare = (nodeName.current.scrollWidth > nodeName.current.clientWidth)
      || (nodeName.current.scrollHeight > nodeName.current.clientHeight + 2);
    setHover(compare);
  };

  return (
    <Tooltip
      title={username}
      disableHoverListener={!hoverStatus}
      disableTouchListener={!hoverStatus}
      disableFocusListener={!hoverStatus}
      placement="bottom-end"
    >

      <h3 ref={nodeName} className={nameForClass} itemProp="name">{username}</h3>

    </Tooltip>
  );
}

export default UsersWithTooltip;
