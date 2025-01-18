import React, { useEffect } from 'react';
import "./Alert.css"

const Alert = ({ name, closeAlert}) => {
  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div className="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
};

export default Alert;
