class Calculator {
  constructor(currentval, preval) {
    this.preval = preval;
    this.currentval = currentval;
    // this.operation = undefined;
    this.clear();
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = '';
  }

  appendnum(val) {
    if (val === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + val.toString();
    console.log(this.currentOperand);
  }

  display() {
    this.currentval.innerText = this.currentOperand;
    if (this.operation !== null) {
      this.preval.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.preval.innerText = "";
    }
  }
  operationch(op) {
    if (this.currentOperand === '') return
    if(this.previousOperand !== ''){
        this.calculate()
    }
    this.operation = op;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }
  calculate() {
    let result = ''
    const pre = parseFloat(this.previousOperand)
    const cur = parseFloat(this.currentOperand)
    if(isNaN(pre)|| isNaN(cur))return;
    switch (this.operation) {
        case '+':
            result = pre + cur;
            break;
        case '-':
            result = pre - cur;
            break;
        case '*':
            result = pre * cur;
            break;
        case '÷':
            if(cur === 0) return
            result = pre / cur;
            break;
        default:
            return;
    }
    this.currentOperand = result;
    this.operation = '';
    this.previousOperand = '';
}
}

const preval = document.querySelector("[data-previous-operand]");
const currentval = document.querySelector("[data-current-operand]");
const num = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

let calculator = new Calculator(currentval, preval);

num.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendnum(button.innerText);
    calculator.display();
  });
});
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.operationch(button.innerText);
    calculator.display();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.calculate();
  calculator.display();
});
allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.display();
});
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.display();
});
