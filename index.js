const formConfig = [
  {
    key: "user_name",
    label: "Name",
    type: "name",
    maxLength: 50,
    pattern: "[A-Za-z ]+",
    title: "Please enter only letters and spaces",
  },
  {
    key: "mobile_no",
    label: "Mobile Number",
    type: "mobile_number",
    pattern: "^[6-9]\\d{9}$",
    title: "Please enter a valid 10-digit mobile number starting with 6, 7, 8 or 9",
  },
  {
    key: "email",
    label: "Email",
    type: "email",
    title: "Please enter a valid email address",
  },
];

const form = document.getElementById("dynamicForm");

formConfig.forEach((field) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("form-field");

  const label = document.createElement("label");
  label.htmlFor = field.key;
  label.textContent = field.label;
  wrapper.appendChild(label);

  const input = document.createElement("input");
  input.id = field.key;
  input.name = field.key;
  input.required = true;

  // Apply common attributes
  if (field.maxLength) input.maxLength = field.maxLength;
  if (field.pattern) input.pattern = field.pattern;
  if (field.title) input.title = field.title;

  switch (field.type) {
    case "text":
      input.type = "text";
      break;
    case "name":
      // Use text type for name input
      input.type = "text";
      input.placeholder = "Enter your name";
      break;
    case "email":
      input.type = "email";
      input.placeholder = "example@domain.com";
      break;
    case "mobile_number":
      input.type = "tel";
      input.placeholder = "10-digit number";
      break;
    default:
      input.type = field.type;
  }

  wrapper.appendChild(input);
  form.appendChild(wrapper);
});

// Add submit button
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

// Handle submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.checkValidity()) {
    alert("Submitted successfully");
    form.reset();
  } else {
    form.reportValidity();
  }
});
