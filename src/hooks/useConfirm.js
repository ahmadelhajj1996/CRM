import { useState, useCallback } from 'react';

const useConfirm = (onConfirm) => {

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [item, setItem] = useState(null);
  const [name, setName] = useState('');

  const openConfirm = useCallback((item, name = 'this item') => {
    setItem(item);
    setName(name);
    setConfirmOpen(true);
  }, []);

  const closeConfirm = useCallback(() => {
    setConfirmOpen(false);
    setItem(null);
    setName('');
  }, []);

  const confirm = useCallback(() => {
    if (onConfirm) {
      onConfirm(item);
    }
    closeConfirm();
  }, [item, onConfirm, closeConfirm]);

  return {
    confirmOpen,
    name,
    openConfirm, closeConfirm ,
    confirm
  };
};

export default useConfirm; 

