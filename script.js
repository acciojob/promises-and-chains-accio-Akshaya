document.getElementById("userform").addEventListener("submit",(event)=>{
	event.preventDefault();

	const name=document.getElementById("name").value.trim();
	const age=document.getElementById("age").value.trim();

	if(!name||!age){
		alert("please fill out the all fields.");
		return;
	}
	const ageNum = parseInt(age, 10);
    if (isNaN(ageNum) || ageNum <= 0) {
      alert("Please enter a valid age.");
      return;
  }

  handleFormSubmission(name, ageNum);
});

function handleFormSubmission(name, age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // Simulating a delay of 4 seconds
  })
  .then(message => alert(message))
  .catch(error => alert(error));
}