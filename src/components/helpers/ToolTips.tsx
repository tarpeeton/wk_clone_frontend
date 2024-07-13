import React, { FC, useState } from 'react';
import '../../assets/css/dashboard/ToolTip.css'
interface TooltipProps {
  text: string;
  children: React.ReactNode;
}

const MyToolTip: FC<TooltipProps> = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {visible && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default MyToolTip;
