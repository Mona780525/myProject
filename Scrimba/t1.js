let para = document.getElementById("para");
let previous = document.getElementById("pre");
let counter = 0;
let saveBtn = document.getElementById("Save");
let incrementBtn = document.getElementById("Increment");
para.textContent = counter;

incrementBtn.onclick = () => {
  counter += 1;
  para.textContent = counter;
};

saveBtn.onclick = () => {
  previous.textContent += counter + "-";
  para.textContent = 0;
  counter = 0;
};
