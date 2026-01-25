const sidebarLinks = document.querySelectorAll('.sidebar a');

sidebarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    sidebarLinks.forEach(l => l.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});

const certDetails = [
  `Digital Egypt Pioneers Initiative (DEPI)  
Frontend Web Development – Jun 2025

Trainee in the Digital Egypt Pioneers Initiative (DEPI), a national scholarship by the Ministry of Communications and Information Technology (MCIT), Egypt.

Specialization: Front-End Web Development
Technologies: HTML, CSS, JavaScript, React.js

The program offered in-depth technical training, mentorship, and real-world projects focused on modern web development.
I developed multiple responsive and dynamic user interfaces, applying best practices in UI/UX, clean code, and performance optimization.

Skills: React.js  · HTML · CSS · JavaScript · Soft Skills · Freelancing · Coaching · English`,
  `Information Technology Institute (ITI)  
Web Development Using React JS – 145 hours  
August 1st – September 15th, 2025

Completed an intensive technical training program at ITI focused on modern front-end development using React.js..
The program included hands-on sessions in:

Client-Side Technologies (16 hrs)

JavaScript ES6+ (18 hrs)

HTML5 (12 hrs)

Bootstrap (14 hrs)

ReactJS (60 hrs)

Capstone Project (25 hrs)

Skills Gained:  
React.js  · JavaScript · HTML5 · Bootstrap · Component-Based Architecture · State Management · UI/UX Principles`,
  `Digital Egypt Youth Program  
Web Designer – Sep 27 to Nov 22, 2025  
Total Hours: 120 (Technical: 90 hrs · Freelancing: 30 hrs)  


Completed a comprehensive training program organized by the Ministry of Communications and Information Technology (MCIT), in collaboration with Creativa Innovation Hubs and NTI.

The program focused on professional web design skills, freelancing readiness, and gig-based coaching.
Delivered hands-on training in:

UI/UX Design Principles

HTML & CSS Layouts

Visual Branding

Freelancing Platforms & Client Communication

Skills Gained:  
Web Design · HTML · CSS · Freelancing · Coaching · Soft Skills · Client Communication · English`,
  `ICPC ECPC Qualifications – Collegiate Programming Contest  
Honorable Mention – July 21, 2024  
Zagazig University

Participated in the 2024 ICPC ECPC Qualifications – Day 2, a regional collegiate programming contest recognized by the International Collegiate Programming Contest (ICPC).

Earned an Honorable Mention for outstanding performance in algorithmic problem solving and competitive programming.

Skills Demonstrated:  
Data Structures · Algorithms · Time Complexity Optimization · Team Collaboration · Problem Solving · Competitive Coding`
];

function openModal(index) {
  document.getElementById("modal-details").innerText = certDetails[index];
  document.getElementById("cert-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("cert-modal").style.display = "none";
}

