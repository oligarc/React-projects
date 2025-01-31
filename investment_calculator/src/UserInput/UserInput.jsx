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
          setInit(e.target.value);
          console.log(e.target.value);
        }}
      />
      <GeneralInput
        inputLable={"Annual Investment"}
        value={annual}
        onChange={(e) => setAnnual(e.target.value)}
      />
      <GeneralInput
        inputLable={"Expected Return"}
        value={expected}
        onChange={(e) => setExpected(e.target.value)}
      />
      <GeneralInput
        inputLable={"Duration (years)"}
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
    </>
  );
}

export default UserInput;
