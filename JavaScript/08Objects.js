const p={name:"parag",age:22,
    hobbies:["drawing","gaming"]
};
console.log(p,p.age,p.name,p.hobbies[1]);
console.log(p["name"])
p["gender"]="male";
console.log(p);
//key adding
const key="email"
p[key]="parag@gmail.com"
console.log(p);

for (const key in p) {
   console.log(`${key}:${p[key]}`)
}
console.log(Object.keys(p))
for(let i of Object.keys(p)){
    console.log(i," :",p[i]);
}