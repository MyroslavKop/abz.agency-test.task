import { useEffect, useRef, useState } from 'react';

import ITooltip from './interface';
import styles from './Tooltip.module.scss';

const Tooltip = ({ children, text }: ITooltip) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTooltipElement, setIsTooltipElement] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tooltipElement = tooltipRef.current;
    const textElement = tooltipElement?.getElementsByTagName('p')[0];
    if (textElement && textElement.textContent && textElement.textContent.length > 29) {
      setIsTooltipElement(true);
      textElement.style.cursor = 'pointer';
    }
  }, []);

  return (
    <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} ref={tooltipRef}>
      {children}
      {isTooltipElement && isVisible && (
        <div className={styles.tooltip}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
