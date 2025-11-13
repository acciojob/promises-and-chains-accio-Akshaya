//your JS code here. If required.
const form = document.getElementById("voteForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");

form.addEventListener('submit',function(e){
	e.preventDefault();

	const name = nameInput.value.trim();
	const age = ageInput.value.trim();

	if(name === '' || age===''){
		alert("Please enter valid details")
		return;
	}

	const checkAge = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(parseInt(age)>18){
				resolve(`Welcome, ${name}. You can vote.`);
			}else{
				reject(`Oh sorry Doe. You aren't old enough.`);
			}
		},4000)
	});

	checkAge
	  .then(msg=>alert(msg))
	  .catch(err=>alert(err));
});
