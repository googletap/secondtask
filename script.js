// === Form Validation ===
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email!");
    return;
  }

  alert("Form submitted successfully!");
  document.getElementById("contactForm").reset();
});

// === To-Do List (DOM Manipulation) ===
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value.trim();
  if (!task) return;

  let li = document.createElement("li");
  li.textContent = task;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
