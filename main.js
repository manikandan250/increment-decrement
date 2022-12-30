incre=document.getElementById("incre");
decre=document.getElementById("decre");
incre.addEventListener("click",myFunction);
decre.addEventListener("click",myFunctionn);

function myFunction(){
	var add=document.getElementById("dom").value;
	add++;
	document.getElementById("dom").value=add;
}
function myFunctionn(){
	var add=document.getElementById("dom").value;
	
	if(add>0){
		add--;
	document.getElementById("dom").value=add;
	
	}
}
