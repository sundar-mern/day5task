//a for the given JSON iterate over all for loops (for for in for of for each)


const jsonObj = {
  "name": "SUNDARRAJAN S",
  "age": 23,
  "city": "THRUVANNAMALAI"
};

//1 FOR IN

for (let key in jsonObj) {
  if (jsonObj.hasOwnProperty(key)) {
    console.log(key, jsonObj[key]);
  }
}

//2 FOR OF

const valuesArray = Object.values(jsonObj);
for (let value of valuesArray) {
  console.log(value);
}

//3 FOR EACH

const arr = Object.values(jsonObj);
arr.forEach(value => {
  console.log(value);
});


//b create your own resume data in JSON format


const resumeData = {
    "name": "SUNDARRAJAN S",
    "contact": {
      "email": "sundarsangar057@gmail.com",
      "phone": "7010460884",
      "address": "122 Yadhavar Street Narthampoondi Tiruvanamalai"
    },
    "summary": "Full Stack developer with a passion for creating web applications and solving complex problems.",
    "education": [
      {
        "degree": "Bachelor of Engineering in Mechanical",
        "graduation_year": "2021"
      }
    ],

    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML/CSS",
      "SQL",
      "Git",
      "Agile Development",
      "Problem Solving",
      "Team Leadership"
    ],
    "languages": ["English (Fluent)", "Tamil(fluent)"]
  };
  
  
  console.log(`Name: ${resumeData.name}`);
  console.log(`Email: ${resumeData.contact.email}`);
  console.log(`Phone: ${resumeData.contact.phone}`);
  console.log(`Address: ${resumeData.contact.address}`);
  console.log(`Summary: ${resumeData.summary}`);
  
  console.log("\nEducation:");
  resumeData.education.forEach(edu => {
    console.log(`- Degree: ${edu.degree}`);
    console.log(`  Graduation Year: ${edu.graduation_year}`);
  });
  
  
  console.log("\nSkills:");
  resumeData.skills.forEach(skill => {
    console.log(`- ${skill}`);
  });
  
  console.log("\nLanguages:");
  resumeData.languages.forEach(lang => {
    console.log(`- ${lang}`);
  });
  