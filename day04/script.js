// 01 create an array of objects:-

const skill = [
  {
    skill: "Html",
    proficiency: "Advanced",
    experience: "2 year",
    work: "frontend",
  },
  {
    skill: "TailwindCss",
    proficiency: "Intermediate",
    experience: "1 year",
    work: "frontend",
  },
  {
    skill: "JavaScript",
    proficiency: "Intermediate",
    experience: "1 year",
    work: "frontend",
  },
  {
    skill: "React",
    proficiency: "Beginner",
    experience: "1 month",
    work: "frontend",
  },
  {
    skill: "NodeJs",
    proficiency: "Intermediate",
    experience: "1 month",
    work: "backend",
  },
];

console.log(skill);

// 02 create a function which takes skills parameters:-

const skillfunction = function skills(skill, proficiency, experience, work) {
  return `Your proficiency in ${skill} is ${proficiency} and you have ${experience} of experience and you will work on ${work}`;
};

// 03 use array .map() method to create new array:-

const skillmap = skill.map((item) =>
  skillfunction(item.skill, item.proficiency, item.experience, item.work)
);

console.log(skillmap);
