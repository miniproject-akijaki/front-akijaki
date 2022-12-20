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

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const clearInput = () => {
    setInputs({
      userId: "",
      password: "",
      passwordCheck: "",
      nickName: "",
      title: "",
      content: "",
      prcie: "",
    });
  };

  return [inputs, onChangeInput, clearInput, setInputs];
};
