import React from "react";
import { useState } from "react";

export default function useForm(defaults) {
  const [values, setValues] = useState(defaults);

  function updateValue(e) {
    let { value } = e.target;
    if (value.type === "number") {
      parseInt(value);
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
  return { values, updateValue };
}
