import GeneralInput from "../components/GeneralInput";

function UserInput({
  init,
  setInit,
  annual,
  setAnnual,
  expected,
  setExpected,
  duration,
  setDuration,
}) {
  return (
    <>
      <GeneralInput
        inputLable={"Initial Investment"}
        value={init}
        onChange={(e) => {
          setInit(Number(e.target.value));
          console.log(e.target.value);
        }}
      />
      <GeneralInput
        inputLable={"Annual Investment"}
        value={annual}
        onChange={(e) => setAnnual(Number(e.target.value))}
      />
      <GeneralInput
        inputLable={"Expected Return"}
        value={expected}
        onChange={(e) => setExpected(Number(e.target.value))}
      />
      <GeneralInput
        inputLable={"Duration (years)"}
        value={duration}
        onChange={(e) => setDuration(Number(e.target.value))}
      />
    </>
  );
}

export default UserInput;
