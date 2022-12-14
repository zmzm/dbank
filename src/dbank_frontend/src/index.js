import { dbank_backend } from "../../declarations/dbank_backend";

const getCurrentBalance = async () => {
  const currentValue = await dbank_backend.checkBalance();
  document.getElementById('current-balance').textContent = currentValue;
}

window.addEventListener('load', async () => {
  getCurrentBalance();
});


document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const button = e.target.querySelector('#submit-btn');
  const topUpInput = e.target.querySelector('#top-up-amount');
  const withdrawInput = e.target.querySelector('#withdrawal-amount');

  const topUpAmount = Number.parseFloat(topUpInput.value);
  const withdrawAmount = Number.parseFloat(withdrawInput.value);

  button.setAttribute("disabled", true);

  if (topUpAmount > 0) {
    await dbank_backend.topUp(topUpAmount);
  }

  if (withdrawAmount > 0) {
    await dbank_backend.withdraw(withdrawAmount);
  }

  button.removeAttribute("disabled");
  topUpInput.value = '';
  withdrawInput.value = '';

  getCurrentBalance();

  return false;
});
