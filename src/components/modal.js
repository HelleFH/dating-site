import React from 'react';

const Modal = (props) => {
  const { closeModal } = props;

  return (
    <div className="modal-overlay">
        <div
          onClick={closeModal}
          style={{
            color: '#000000',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            border: 0,
            position: 'absolute',
            top: '0',
            right: '0.5rem',
            zIndex: '9999',
          }}
        >
          <p style={{fontWeight:'bolder',}}> &#x2715;</p > 
  

              
              
        </div>
        {props.children}
   
      </div>
      
  );
};

export default Modal;
