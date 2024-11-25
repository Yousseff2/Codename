function updateBinaryDigits() {
  const groups = document.querySelectorAll(".binary-group");

  groups.forEach((group) => {
    const digits = group.querySelectorAll(".binary-digit");
    const numToUpdate = Math.floor(Math.random() * 4) + 1; // Randomly update 1-4 digits

    for (let i = 0; i < numToUpdate; i++) {
      const index = Math.floor(Math.random() * digits.length);
      digits[index].textContent = Math.round(Math.random());
    }
  });
}

// Update less frequently for a slower, more comfortable effect
setInterval(updateBinaryDigits, 1000);
updateBinaryDigits();
