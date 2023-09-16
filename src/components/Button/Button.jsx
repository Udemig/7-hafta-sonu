import { useEffect } from "react";
import "./Button.css";

const CustomButton = ({ title, onClick, type }) => {
  useEffect(() => {
    console.log("Button Ekrana Geldi");
  }, []);

  //compnnentDidUnMount componentin ekrandan silindiği anı yakalar
  useEffect(() => {
    return () => {
      console.log("component gitti");
    };
  }, []);

  const buttonStyle = {
    backgroundColor:type.backgroundColor,
    padding: type.padding,
    borderRadius: "6px",
    color: "white",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
