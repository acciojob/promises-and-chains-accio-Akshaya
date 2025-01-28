document.getElementById("userform").addEventListener("submit",(event)=>{
	event.preventDefault();

	const name=document.getElementListener("name").value.trim();
	const age=document.getElementListener("age").value.trim();

	if(!name||!age){
		alert("please fill out the all fields.");
		return;
	}
	handleFormSubmission(name,parseInt(age));
	
});

function handleFormSubmission(name,age){
	const promise = new promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>=18){
	           resolve(`Welcome, <name>. You can vote.`);
			}else{
				resolve(`Oh sorry <name>. You aren't old enough.`);
			}
		},4000);
	});
	promise.then((message)=>{
		alert(message);
	});
	.catch((error){
		alert(err)
	});
}