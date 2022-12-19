import { useEffect, useState } from "react";

export const useInputChange = () => {
  const [inputs, setInputs] = useState({
    userId: "",
    password: "",
    passwordCheck: "",
    nickName: "",
    title: "",
    content: "",
    prcie: "",
  });

  const onChangeInput = (event) => {
    const { value, name } = event.target;
    console.log(value, name);
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  return [inputs, onChangeInput];
};
