import { useState, useRef, useCallback } from "react";

export default function usePlacement() {
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);

  const [placement, setPlacement] = useState({
    top: 0,
    left: 0,
  });


  const updatePlacement = useCallback(() => {
    if (!containerRef.current) return;

    const buttonRect =
      containerRef.current.getBoundingClientRect();


    const dropdownHeight =
      dropdownRef.current?.offsetHeight || 0;


    const dropdownWidth =
      dropdownRef.current?.offsetWidth || 160;


    const spaceBelow =
      window.innerHeight - buttonRect.bottom;


    const showAbove =
      spaceBelow < dropdownHeight &&
      buttonRect.top > dropdownHeight;


    setPlacement({
      top: showAbove
        ? buttonRect.top - dropdownHeight
        : buttonRect.bottom,

      left:
        buttonRect.right - dropdownWidth,
    });

  }, []);


  return {
    placement,
    containerRef,
    dropdownRef,
    updatePlacement,
  };
}