var s1 = {name: "Anisha", grade:"10", age:"15"}
a = JSON.stringify(s1);
b = JSON.parse(a);
document.getElementById("p1").innerHTML = " My name is " + b.name + " and i am going into grade " + b.grade + " , i am" + b.age;