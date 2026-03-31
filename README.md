🧠 How This Project Works (Under the Hood)
If you're wondering how a simple webpage can upload, play, and remember videos and documents without a backend server or a database, here is the exact step-by-step breakdown of the logic.

1. The "No Server" Architecture
Most websites send your files to a server (like AWS or a database) to store them. This project does not do that. It is 100% client-side. Everything happens entirely inside your web browser using built-in browser APIs. This means your files never leave your computer, ensuring total privacy, but it also means we are limited by the browser's memory.

2. The Unit Toggle (The Accordion Logic)
When you look at the page, all units are closed. How does the page know which one to open?

There is a single variable in the script acting as a memory state: openU (which defaults to -1, meaning nothing is open).
When you click "Operating Systems" (which is Unit #6, or index 5 in programming), the toggle(5) function runs.
It checks: Is 5 equal to openU? If yes, it closes it (sets openU = -1). If no, it opens it (sets openU = 5).
Then, it triggers the render() function to redraw the screen based on that new state.
3. The Upload Process (The Magic Trick)
This is the most important part of the project. When you click "Upload" and select a file, here is exactly what the JavaScript does:

Catches the File: The <input type="file"> element detects a change and passes the file to a function called handleUp().
Checks the Type: It looks at what section you are in. Did you upload a video? An image? A PDF? It routes the file to the correct category (e.g., vid, img, or c1).
Reads the File: It uses a browser tool called FileReader. This takes the raw binary data of your video or PDF and translates it into a Base64 text string. (Base64 is that long string of random letters and numbers that represents a file).
Saves to Memory: It pushes an object containing the file's name, its new Base64 url, and its size into the correct array for that specific unit.
4. How It Remembers Your Files (localStorage)
If you close the browser, normal webpage data disappears. To fix this, the project uses localStorage.

Think of localStorage as a tiny digital locker assigned specifically to this webpage.
Every time a file is added or deleted, the sv() (save) function runs.
It takes our massive JavaScript object (which holds all 12 units and all their files) and uses JSON.stringify() to smash it into one giant block of text.
It stuffs that text into the localStorage locker under the key "kj_d".
When you open the page tomorrow, the very first line of JavaScript grabs "kj_d" from the locker and uses JSON.parse() to turn that text back into a working JavaScript object.
5. The Render Cycle (Drawing the Screen)
The page doesn't use complex frameworks like React to update the screen. It uses raw string concatenation.

Whenever you open a unit, upload a file, or delete a file, the render() function runs.
It loops through all 12 units. If a unit is closed, it just writes the HTML for the closed card.
If a unit is open, it builds HTML for the exam papers, loops through any saved Base64 strings to create <video> or <img> tags, and writes the download links.
It injects all this text into the main <div> using innerHTML. This essentially "redraws" the screen in a fraction of a second.
6. The Technical vs Non-Technical Check
How does the page know to hide the Video and Image uploaders for "Communication Skills" but show them for "Operating Systems"?

In the JavaScript, the list of units has a property: t:1 (technical) or t:0 (non-technical).
When building the HTML for an open unit, the code simply asks: if(U[i].t).
If the answer is true (1), it adds the HTML for the Video and Image panels. If false (0), it skips them entirely.
7. Deleting Files
When you click the trash icon on a file:

The code identifies exactly where that file lives using three coordinates: Unit Index, Category (e.g., 'cat2' or 'img'), and File Index.
It uses .splice() to surgically cut that specific file out of the array.
It immediately saves the updated array to localStorage so the deletion is permanent.
It triggers render() to refresh the screen so the deleted file disappears from view.
⚠️ The One Big Trade-Off (Why file size matters)
Because we convert files into Base64 text strings to store them in localStorage, files grow by about 33% in size when saved.

If you upload a 3MB PDF, it takes up ~4MB of browser storage.
Browsers strictly limit localStorage to about 5MB–10MB total.
This is why the project is designed for evidence (screenshots, short clips, past papers) rather than massive files. It's a portfolio, not a Google Drive replacement!
