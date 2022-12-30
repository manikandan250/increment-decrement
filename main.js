incre=document.getElementById("incre");
decre=document.getElementById("decre");
incre.addEventListener("click",myFunction);
decre.addEventListener("click",myFunctionn);

function myFunction(){
	let add=document.getElementById("dom").value;
	add++;
	document.getElementById("dom").value=add;
}
function myFunctionn(){
	let add=document.getElementById("dom").value;
	add--;
	document.getElementById("dom").value=add;
}
