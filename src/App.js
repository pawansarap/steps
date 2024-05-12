import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({name: " Pawan"});
  function handleNext() {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1);
    // if (step < 3) setStep((s)=> s + 1);  // increse the count by 2 by calling the call back funciton 2's

    // setTest({name:" Keep Gooing Pawan"});
  }
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // setTest({name:" Try One More Time Pawan"});
  }
  return (
    <>
      {/* <div onClick={() => setIsOpen(!isOpen)}> */}
      <div onClick={() => setIsOpen((is) => !is)}>
        {" "}
        {/* above and this line doe the same thing but here we are calling call back funciton  */}
        {isOpen ? (
          <button className="close"> Close &times;</button>
        ) : (
          <button className="close">Open +</button>
        )}{" "}
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <SetpMessage step={step}>{messages[step - 1]}</SetpMessage>
          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
// children is the pre define key word of react
function SetpMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
