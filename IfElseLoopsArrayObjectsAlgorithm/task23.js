let students = [
    { name: "Ali", scores: [90, 85, 92] },
    { name: "Davud", scores: [100, 100, 100] },
    { name: "Mammal", scores: [75, 80, 85] },
    { name: "Camil", scores: [90, 95, 85] },
  ];
  
  let averages = students.map(student => {
    let sum = student.scores.reduce((total, score) => total + score, 0);
    return {
      name: student.name,
      average: sum / student.scores.length
    };
  });
  
  console.log(averages);
  