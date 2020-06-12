const jobIT = [
  "Front End Developer",
  "Back End Developer",
  "UI Designer",
  "UX Researcher",
  "Database Administrator",
  "Android Developer",
  "Cloud Engineer",
];

console.log(jobIT.length);
console.log(jobIT);

document.getElementById(
  "headline"
).innerHTML = `<h2>${jobIT.length} Pekerjaan di Bidang IT:`;

let jobArr = "";
jobIT.forEach((arr) => {
  jobArr = jobArr.concat(`<li>${arr}</li>`);
});
document.getElementById("list-pekerjaan").innerHTML = jobArr;
