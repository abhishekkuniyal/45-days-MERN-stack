const input = document.getElementById('input');
const buttons = document.querySelectorAll('#btn1');
const btn2 = document.getElementById('btn2')

function Grade(score) {
  if (score >= 90) {
    return "You got Grade A";
  } else if (score >= 80) {
    return "You got Grade B";
  } else if (score >= 70) {
    return "You got Grade C";
  } else if (score > 60) {
    return "You got Grade D";
  } else {
    return "You are failed, better luck next time";
  }
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const value = btn.textContent.trim();

    if (value === 'submit') {
      const score = parseInt(input.value);
      if (isNaN(score)) {
        alert("Please enter a valid number");
      } else {
        alert(Grade(score));
        input.value = ""; 
      }
    } else {
      
      if (input.value.length < 2) {
        input.value += value;
      }
    }
  });
});


btn2.addEventListener('click', () => {
  input.value = input.value.slice(0, -1);
});
