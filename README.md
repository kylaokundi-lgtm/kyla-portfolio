Process
🎓 Level 6 CS Academic E-Portfolio
This repository contains my academic e-portfolio, designed and developed to meet the requirements of my Level 6 Computer Science coursework. It serves as a centralized, interactive space to organize my exam papers, practical assessment videos, and image evidence across all my curriculum units.

Built by: Kyla Maria Jepchumba
Admission No: TDC113-C002-0001/2024
Course: Level 6 - Computer Science
Live Demo: [➡️ Click here to view the deployed portfolio] (Add your Vercel/Netlify link here)

🧠 Why I Built This
As a CS student, I needed a way to keep track of my progress, past papers, and practical evidence without losing files across different folders and flash drives. Instead of using a generic template, I coded this from scratch to ensure it perfectly matched my exact curriculum structure and allowed for direct file interaction right in the browser—no backend servers or databases required.

✨ Key Features
Personalized Homepage: Features my profile picture, full name, admission number, academic level, and a detailed bio outlining my skills and career goals.           
  -Interactive Unit Accordion: All 12 curriculum units are listed cleanly. Clicking a unit expands it to reveal its specific resources without cluttering the page.
  -Comprehensive Exam Management: Every unit has dedicated, separate upload zones for CAT 1, CAT 2, and Mock Exams. Files can be uploaded, downloaded, or deleted instantly.                                                                                                                                                         
  -Practical Evidence Vault: Technical units include dedicated sections for uploading practical assessment videos (which play inline) and image evidence (displayed in a hover-to-download gallery).                                                                                                                                   
  -Smart Unit Filtering: The system automatically detects non-technical units (like Communication Skills) and hides the video/image uploads, restricting them to exam papers only.                                                                                                                                                  
  -Persistent Local Storage: All uploaded files are saved directly to the browser's localStorage. The portfolio remembers everything even after the browser is closed.                                                                                                                                                            
  -Fully Responsive: The layout adapts seamlessly from desktop grids to single-column mobile views.
🛠️ Tech Stack
  I kept the stack lightweight and native to prove that complex functionality doesn't require bloated frameworks:

HTML5 — Semantic structure and file input handling
CSS3 — Custom dark theme, Grid/Flexbox layouts, hover animations, responsive breakpoints
Vanilla JavaScript — DOM manipulation, FileReader API, and localStorage management
Iconify — Scalable vector icons via CDN
Google Fonts — Inter font family for clean readability
📁 Project Structure
text
cs-e-portfolio/
│
├── index.html          # Main structure (Profile, Unit shells)
├── style.css           # All styling, responsive rules, animations
├── script.js           # App logic, file uploads, accordion toggle, storage
├── README.md           # This file
└── PROJECT_REPORT.md   # Detailed technical documentation

cs-e-portfolio/
│
├── index.html          # Main structure (Profile, Unit shells)
├── style.css           # All styling, responsive rules, animations
├── script.js           # App logic, file uploads, accordion toggle, storage
├── README.md           # This file
└── PROJECT_REPORT.md   # Detailed technical documentation
🚀 How to Run Locally
No npm install required. Just follow these steps:

Clone or download this repository to your local machine.
Ensure index.html, style.css, and script.js are in the same folder.
Double-click index.html to open it in any modern browser (Chrome recommended).
📋 Curriculum Units Included
The portfolio is structured specifically for my Level 6 units. Technical units are marked with their evidence capabilities.

Unit code  Unit name
CCS101   	Fundamentals of Programming
CCS102	  Mathematics for Computer Science	
CCS103  	Basic Electronics
CCS104  	Communication Skills	
CCS105  	Work Ethics & Entrepreneurial Skills	
CCS201	  Computer Organization & Architecture	
CCS202	  Operating Systems
CCS203	  Database Systems
CCS204   	Web Design
CCS205  	Graphics Design	
CCS206  	Networking & Distributed Systems	
CCS301  	Information Systems Development	

⚠️ Note on Storage Limitations
Because this project runs 100% client-side using localStorage, browsers enforce a strict storage limit (typically 5MB–10MB.                                         
Think of localStorage as a tiny, invisible digital locker that lives inside your web browser. Every website you visit gets its own separate locker.

Because your e-portfolio doesn't use a backend server or a database (like MySQL), localStorage is the only way the website remembers the files you upload when you close the tab and come back later.

Here is exactly how it works in your specific project:

How your portfolio uses it:                                                                                                                                        
  The Upload: When you upload a PDF or an image, the browser reads that file and translates it into a giant wall of text (called a Base64 string).
  The Packing: JavaScript takes all your files for all 12 units, wraps them up into one big package, and labels it with the key "kj_d".
  The Storage: It shoves that package into your browser's localStorage locker.                                                                                     
  The Recall: The next time you open index.html, the very first line of JavaScript knocks on the locker door, asks for "kj_d", unpacks the text, and turns it back into downloadable videos, images, and PDFs. Files are converted to base64 strings to be saved. Therefore, this tool is optimized for past papers, screenshots, and short practical clips, not full-length lecture recordings.

© 2025 Kyla Maria Jepchumba. All rights reserved.



