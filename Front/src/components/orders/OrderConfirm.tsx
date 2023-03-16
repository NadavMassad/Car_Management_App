import React from 'react'
import PopUpProps from '../../models/PopUp';

const OrderConfirm = ({ isOpen, onClose, title, children }: PopUpProps) => {
  return (
    <div className="popUp">
    <div className="popUpInner">
      <div className="popup-header">
        <h2>{title}</h2>
        <button className="closeBtn" onClick={onClose}>
          X
        </button>
      </div>
      <div className="popup-content">{children}</div>
    </div>
  </div>
  )
}

export default OrderConfirm