function fibonacci(num) {
 if (num==1) {
 	console.log(0)
 }
	else if (num==2||num==3) {
		console.log(1)
	} 
	else{
		let n1=1;
		let n2=1;
		let ans = 0;
		for(let i=4; i<=num; i++){
			ans=n1+n2;
			n1=n2;
			n2=ans;
		}
		console.log(ans)
	}
}

module.exports = fibonacci;
