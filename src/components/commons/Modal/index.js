import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { createGlobalStyle } from 'styled-components';
import { ModalWrapper } from './styles/ModalWrapper';

const LockScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const Modal = ({ isOpen, onClose, children }) => (
  <ModalWrapper
    isOpen={isOpen}
    onClick={(event) => {
      const isSafeArea = event.target.closest('[data-modal-safe-area="true"]');
      // isOpen = false;
      if (!isSafeArea) {
        onClose();
      }
    }}
  >
    {isOpen && <LockScroll />}

    <motion.div
      variants={{
        open: {
          x: 0,
        },
        closed: {
          x: '100%',
        },
      }}
      animate={isOpen ? 'open' : 'closed'}
      transition={{
        duration: 0.1,
      }}
      style={{
        display: 'flex',
        flex: 1,
      }}
    >
      {children({
        'data-modal-safe-area': 'true',
      })}
    </motion.div>
  </ModalWrapper>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;