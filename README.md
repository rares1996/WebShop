<h2> Mini-Project3</h2>

Linnk to report: https://docs.google.com/document/d/1h0ucsJpRpzURoJV3a48K5uJLnS7iONi0a7im9LbmLeQ/edit#

📣 The project runs in: http://localhost:3000/
    
    ❗️ Run it by typing these two commands:
        cd mini-project-3 
        npm start    



<h3>Project 3 – Final Submission: Building a software system for web shopping.</h3>

The third mini-project is the final submission for the oral exam. It is also the only submission to be submitted. 

You should not submit the previous two mini-projects as this third project encompasses them. The two previous mini projects can be considered as two development phases towards this final third project. 

During the oral exam, you will present and be asked questions related only to this final mini-project. That is why you should consider review comments from the previous two mini-projects and try to incorporate them in developing this third final project. 

The third mini project’s requirements include complete functional requirements of the first two, plus an additional request regarding <b>data validation in the login form. </b>

Regarding non-functional requirements, there are new requirements for the client-side web application. Namely, it should be developed using React in Typescript or JavaScript. This means that you can from your first mini project reuse the web design (design concepts and CSS styles), but you must reimplement the functionality. 

There are no new requirements regarding the RESTful API developed in the second mini project. You can completely reuse it if you are satisfied with your solution and the review. However, you can reimplement it if you wish (using Typescript). You are also allowed to use a database as data storage, if you wish.
In the following are given details about the final submission: the project task and what to submit.

<h4>A. Project task</h4>

The project task is to build a software system for online shopping. The system consists of two main components that function together in the client/server web architecture: 
<ul>
    <li> A client-side web application for online shopping.</li>
    <li>A server-side RESTful web service for online shopping supporting the client-side application.</li>
</ul>

<h2>The client-side web application for online shopping </h2>

The client-side web application should enable customers to shop online: browsing through a list of products, viewing product details and selecting desired products to buy. 

<b>Functional requirements: </b>
<ol>
    <li> Users can see a list of all products that are offered (15-20 products, for illustration). </li>
    <li>Users can browse products using at least two different product categories. Examples of possible product categories are: 
        <ul>
            <li> Consumer type: men, women, children; </li>
            <li> Product size: S, M, L; </li>
            <li> Brand: Company A, Company B.  </li>
         </ul>   
     </li>
    <li>Users can see more details (e.g., full product description) for a specific product in the list.  </li>
    <li>Users can select and put a desired product in the shopping basket either from the list of products or from the product detail page. </li>
    <li>Users can see the content of their basket. </li>
    <li>Users can remove a product from their basket. </li>
    <li>Users can see on the home page the latest offers like new products or discounts. </li>
    <li>Users can use the website without registration, but they can register if they wish. </li>
    <li>During registration, users should give their first and family name, and email as well. The entered names and email should be validated by the login form.       Users cannot successfully register until the given data are valid. Users can cancel the registration and continue online shopping as unregistered buyers. </li>
    <li>If a user is registered, his/her name should be visible on the home and basket pages. </li>
</ol>

<b>Non-functional requirements: </b>

The website should be responsive, i.e., adjusting and adapting to any device screen size, whether it is a desktop, a laptop, a tablet, or a mobile phone. 
The application should be a single-page application developed in Typescript/JavaScript using React framework. Additional frameworks are allowed to be used (e.g. react-bootstrap, formik, other CSS frameworks, etc.).

The server-side RESTful web service for online shopping
The developed RESTful API should consist of web service operations (endpoints) that support the client-side application: information about the webshop offer and operations on the user’s shopping basket. 
Functional requirements: 

The RESTful API should support the following operations:
Get most important information about all products that are offered.
Get product categories that exist.
Get most important information about products for a specific category.
Get all details about a specific product.
Create a shopping basket for a specific user.
Put a product in the basket for a specific user.
Remove a product from the basket for a specific user.
Get the shopping basket content for a specific user.


 Non-functional requirements: 
API should be developed in JavaScript or Typescript using Node.js and Express framework.
API should use JSON as data format in HTTP messages.
Data about products, categories and the shopping basket content should be stored on the web server. The data can be stored in a single or multiple file(s) in JSON format or in any other database at will.


<h4>B. What to submit</h4>

You should submit two files as the result of your project: 
<b>
Project document (PDF format).
Source code (ZIP format)</b>

Project document
The project document describes your developed software system explaining the following points:
    <ul>
         <li>Web design of the client-side application (2-5 pages)</li>
          <li>The information architecture and the website design principles: used taxonomies, hierarchies of information, site navigation concepts, etc.</li>
          <li>Design of the RESTful API (1-3 pages)</li>
          <li>A short explanation of the implemented web service endpoints (operations/list of resources), including the table from the “Template for RESTful API               specification” with HTTP methods and paths.
             Note: the detailed operation specifications based on the provided template form the second mini project should be put in the appendix of the project               document and these pages are not counted.</li>
          <li>Software architecture of your developed system (2-5 pages)</li>
          <li>Explaining the overall logical/physical architecture of your software system (components you developed and used third-party components and their roles)</li>
          <li>Software styles/patterns and solutions used in your developed components in both client-side React application and RESTful API application, including your own, bult-in React or Express standard components, third-party frameworks (e.g. react-bootstrap),  React patterns and techniques used (e.g. prop drilling,  lifted state, Context API), your data storage solution, etc.</li>
    </ul>
The first page of the project document should name all team members and the name of your LearnIT group.  If you are a single developer, declare this.  
The document should be in the PDF format, A4 page size.

<b>Source code</b>
<br/>
The source code of your developed system (folders and all source code files), for both client side-web and RESTFUL API applications, should be zipped into a single Zip file.
