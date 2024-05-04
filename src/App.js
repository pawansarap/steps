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
    if (step < 3) setStep(step + 1);
    // setTest({name:" Keep Gooing Pawan"});
  }
  function handlePrevious() {
    if (step > 1) setStep(step - 1);
    // setTest({name:" Try One More Time Pawan"});
  }
  return (
    <>
    <div  onClick={()=>setIsOpen(!isOpen)}>{isOpen ? <button className="close"> Close &times;</button>: <button className="close">Open +</button>} </div>
      { isOpen &&
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* { test.name} */}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      }
    </>
  );
}
