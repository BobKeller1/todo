import React, { useState } from "react";

function UseInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  return { value, onChange };
}

export default UseInput;
