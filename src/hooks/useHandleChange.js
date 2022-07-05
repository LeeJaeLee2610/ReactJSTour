import { useState } from "react";

export default function useHandleChange(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    // console.log(e.target.value);
    const type = e.target.type;
    if (type === "checkbox") {
      setValues({
        ...values,
        [e.target.name]: e.target.checked,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };
  return {
    values,
    handleChange,
  };
}
