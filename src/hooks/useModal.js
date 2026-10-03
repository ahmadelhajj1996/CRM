import { useState, useCallback } from "react";
import usePersisted from "./usePersisted";

export const useModal = (initialState = false) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalMode, setModalMode] = useState("add");

  const openModal = useCallback((mode = "add", data = null) => {
    setModalMode(mode);
    setModalData(data);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalData(null);
    setModalMode("add");
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setModalData(null);
      setModalMode("add");
    }
  }, [isOpen]);

  return {
    isOpen,
    modalData,
    modalMode,
    openModal,
    closeModal,
    toggleModal,
    setIsOpen,
    setModalData,
    setModalMode,
  };
};
