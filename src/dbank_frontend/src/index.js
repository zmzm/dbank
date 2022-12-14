import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener('load', async () => {
  const currentValue = await dbank_backend.checkBalance();
  document.getElementById('current-balance').textContent = currentValue;
})
