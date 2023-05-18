import inquirer from "inquirer";

const UsdToPkr = 228.43;
const PkrToUsd = 0.0044;
const EuToPkr = 239.85;
const PkrtoEu = 0.0042;
const EuToUsd = 1.05;
const UsdToEu = 0.95;

let repeat = false;

async function Converter() {
  do {
    const answer: { CurrencyFrom: string; CurrencyTo: string; Amount: number } =
      await inquirer.prompt([
        {
          name: "CurrencyFrom",
          type: "list",
          choices: ["USD", "PKR", "EU"],
          message: "Which currency You want to convert from:",
        },
        {
          name: "CurrencyTo",
          type: "list",
          choices: ["USD", "PKR", "EU"],
          message: "Which currency You want to convert to:",
        },
        {
          name: "Amount",
          type: "number",
          message: "Enter value",
        },
      ]);

    //   console.log(answer.Amount);

    switch (answer.CurrencyFrom) {
      case "USD":
        if (answer.CurrencyTo === "PKR") {
          console.log(answer.Amount * UsdToPkr);
        } else if (answer.CurrencyTo === "EU") {
          console.log(answer.Amount * UsdToEu);
        } else if (answer.CurrencyTo === "USD") {
          console.log(answer.Amount);
        }
        break;
      case "PKR":
        if (answer.CurrencyTo === "USD") {
          console.log(answer.Amount * PkrToUsd);
        } else if (answer.CurrencyTo === "EU") {
          console.log(answer.Amount * PkrtoEu);
        } else if (answer.CurrencyTo === "PKR") {
          console.log(answer.Amount);
        }
        break;
      case "EU":
        if (answer.CurrencyTo === "PKR") {
          console.log(answer.Amount * EuToPkr);
        } else if (answer.CurrencyTo === "USD") {
          console.log(answer.Amount * EuToUsd);
        } else if (answer.CurrencyTo === "EU") {
          console.log(answer.Amount);
        }
        break;
    }
    repeat = await Repeat();
  } while (repeat);
}

async function Repeat() {
  const again = await inquirer.prompt([
    {
      name: "repeat",
      type: "list",
      choices: ["Y", "N"],
      message: "Do You want to repeat:",
    },
  ]);

  return again.repeat === "Y" ? true : false;
}

Converter();
