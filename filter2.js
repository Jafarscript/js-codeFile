let students = [
    {
      name: "david",
      GPA: 3.3,
      SAT: 2000
    },
    {
      name: "sheila",
      GPA: 3.1,
      SAT: 1600
    },
    {
      name: "Alonzo",
      GPA: 3.65,
      SAT: 1700
    },
    {
      name: "Mary",
      GPA: 3.8,
      SAT: 2100
    }
  ];

let lowestGP = students.filter(gpa =>{
    return gpa.GPA < 3.2;
})

console.log(lowestGP);

let highSAT = students.filter(sat => {return sat.SAT > 2099});
console.log(highSAT);