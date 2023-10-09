import { useEffect, useState } from "react";

export default function InputComponent({ data, setter }) {
  const [error, setError] = useState("");

  useEffect(() => {
    validateInputValue();
  }, [data]);

  function validateInputValue() {
    let myErrorMessage = "";
    if (data.length < 5 && data.length ==! 0) {
      myErrorMessage += "Hallo, please provide a longer input... INPUT1,---";
      myErrorMessage += `string length is:  ${data.length}`;
    }
    // if (input2.length < 5) {
    //   myErrorMessage += "Hallo, please provide a longer input... INPUT2"
    // }
    setError(myErrorMessage);
  }

  return (
    <>
      <label>{error !== "" ? error : ""}</label>
      <input
        name="todoInput"
        className="TodoInput"
        onChange={(event) => setter(event.target.value)}
      />
    </>
  );
}
