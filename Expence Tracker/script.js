// Add interactivity
const form = document.getElementById('transaction-form');
const transactionList = document.getElementById('transaction-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  // Add transaction to table
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${description}</td>
    <td>${amount.toFixed(2)}</td>
    <td>${type}</td>
    <td>${new Date().toLocaleDateString()}</td>
  `;

  // Add animation
  row.style.animation = "fadeInRow 0.8s ease";
  transactionList.appendChild(row);

  // Clear form
  form.reset();
});

// Row fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInRow {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);