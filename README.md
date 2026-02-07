Day 1:

“How does a browser talk to a backend server?”

Try to explain using:

Browser
URL
Port
Route
Response

Ans: If a user does any action or any click the browser requests to the server for the response.
Here the URL explains that what response do you need and here the PORT is something we use it for 
running backend server, it is the address of this backend application. 

Updated Ans: 
When a user performs an action, the browser sends an HTTP request to a backend server using a URL.
The URL contains the domain, port, and route.
The port identifies the backend application, and the route tells the server what operation to perform.
The backend processes the request and sends a response, which the browser uses to update the user interface.



Day 2:

Task 1 - Design Portfolio Data:
Projects: What fields does a project need?
Experience: What fields does experience need?
Skills: How would you group skills?

Project:
- title: Portfolio Project
- short description: Learning complete MERN stack from scratch
- long description: Building end-to-end portfolio project using MERN stack from scratch, learning concepts in depth to know how the systems or applications actually work
- tech used: MongoDB, Express, React, Node
- links: Stay Tune

Task 2 - Why should frontend NOT talk directly to the database? (This question is very common in interviews.)

Ans: Frontend is the client right, so whenever a client requested any thing by clicking or by reacting with any botton then the browser would requests to the backend I mean the server, the server asks database for actual data that need to format and send to the client. 

Updated Ans: Frontend should not talk directly to the database because it is insecure and unsafe.
The frontend sends requests to the backend, and the backend is responsible for talking to the database, applying rules, formatting data, and sending a safe response back to the frontend.
This way, the database is protected, business logic stays in one place, and the system is secure and scalable.
