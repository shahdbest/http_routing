# Issue Tracker 

## Problem Statement

Issue Tracker is to track the list of issues. These are the operations that can be  performed in this Issue Tracker.

 - We can add an issue with details like title, description. 
 - we can view all the issues
 - We can delete an issue.

 The APIs for performing these tasks are given below.

## Know your APIs
    
     - POST    - http://localhost:3000/issues         - add a new issues
     - GET     - http://localhost:3000/issues         - get all issues
     - DELETE  - http://localhost:3000/issues/{id}/   - delete an issue by its id   
     
## TECH STACK

- Angular8
- Jasmine
- Protractor
- json-server

## PREREQUISITES

  1. Install dependencies npm install
  2. Run the frontend `npm run start` which shall run on port:4200  
  3. Use `json-server --watch db.json` for APIs availabilty using json-server


## Instructions

1. Your are expected to write code in the given boilerplate so that you can complete this assignment
2. All the detailed instructions are given inside the project
3. Understand the comments in the project and write code
4. After writing the code unit test your code by running `npm run test` or `ng test` and end-to-end test by running `npm run e2e` or `ng e2e`.
