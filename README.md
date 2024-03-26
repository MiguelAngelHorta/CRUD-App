
# Security Control Inventory Web App - Local Storage
 - 🔨 Build a web app with local storage using HTML, Javascript, and CSS.
   - Add and update your security controls with ease through this [UI web page](https://miguelangelhorta.github.io/Security-Controls-Inventory/) 
   ![iScreen Shoter - 20240309210201445](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/7b1340d5-b017-4df5-ab9c-f92a073fcf38)
   
## Pre Steps
- Open Visual Studio to organize files and make edits (download if not already installed)
  -   ![download](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/467f65d5-91e9-47ed-8f0b-a4f717f997cf)
- Sync files within a specified folder with Git repo and enable auto-save
  - ![iScreen Shoter - Code - 240309213834](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/9a55effc-e050-46f8-994b-702c1a90a7a9)

- Ensure live server extension is installed for the dev local server
  - ![iScreen Shoter - Code - 240309213554](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/d393e4fc-31bd-4483-9d1a-eb66ef9ae174)

- Reference bootstrap open-source front-end framework code for pre-design and pre-built components for javascript
  - [Get started with Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)


### Create Files for the Web App
- Create an HTML file
  - This HTML code is a web page for this Security Control Inventory application. It uses Bootstrap for styling and includes a form to enter control details, action buttons for updating controls, and a table to display control information. The page integrates custom CSS for additional styling and relies on JavaScript functions to manage data interactions.
- Create a Javascript file
  - **validateForm()**: Validates form fields for completeness, alerts for missing information, and returns true if valid, false otherwise.
    - ![iScreen Shoter - Google Chrome - 240309210646](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/8210c082-f7d2-4144-a2ea-4976306c3688)
    - ![iScreen Shoter - Google Chrome - 240309210705](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/81f9a066-0ec9-4331-8a5f-852261875601)
    - ![iScreen Shoter - Google Chrome - 240309210729](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/e722c182-ed5b-4b55-b176-11894cd4712a)
    - ![iScreen Shoter - Google Chrome - 240309210747](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/9af18fa1-8a21-4889-9600-5633c514437a)

  - **showData()**: Populates HTML table with control information, retrieving data from local storage.
    - ![iScreen Shoter - Google Chrome - 240309210910](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/f2d37d0b-700b-43a4-9fab-08b5d91098db)

  - **AddData()**: Adds a new control to controlList if form is valid, checks for duplicate Main Control IDs, updates local storage, and refreshes table. 
    - ![iScreen Shoter - Google Chrome - 240309210804](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/d1925a50-2753-4fc2-b872-9d3fe0ca929b)
    - ![iScreen Shoter - Google Chrome - 240313204151](https://github.com/MiguelAngelHorta/Security-Controls-Inventory/assets/106134627/81d807a2-ef3a-469d-a347-440368423bca)

  - **deleteData(index)**: Deletes a control at specified index, confirming deletion before updating.
    - ![iScreen Shoter - Google Chrome - 240309210815](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/3bb5f389-ba95-4f58-8287-707ecf8cb741)

  - **updateData(index)**: Enables control data editing in the UI, highlights selected row, disables delete buttons, updates controlList after validation, refreshes table, and clears form on successful update.
     - ![iScreen Shoter - 20240309211345028](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/186f25b1-a942-4379-a44b-862ff65ae015)

  - **downloadCSV()**: Creates CSV data from HTML table, generates downloadable CSV file, and releases object URL after download.
     - ![iScreen Shoter - Google Chrome - 240309210447](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/a1091c95-e736-4b9b-b54f-6d60f7e617cf)

- Create a CSS file
    - This CSS script structures the visual design of the Security Control Inventory web page by defining a dark gray background with white text, styling the table with dark headers and rows, and incorporating visual cues for disabled buttons and edited rows, contributing to a cohesive and user-friendly interface.

## Dockerize this app
1. Download and install Docker Desktop for your OS from Docker's official website: https://docs.docker.com/engine/install/.
2. Add a docker file to the folder
	   # Base image for a web server
	   FROM httpd:2.4
	   
	   # Copy your web app files to the container's document root
	   COPY . /usr/local/apache2/htdocs/
	   
	   # Expose port 80 for the web server
	   EXPOSE 80
	
3. build a docker base image by running this command in the folder

    ```bash
    docker build -t my-security-app .
    ```
    
4. start the container by running this command in the folder

    ```bash
    docker run -d -p 8080:80 my-security-app
    ```
5. Access the app through http://localhost:8080 in the browser

## Host this app in AWS
1. Login to AWS console
2. create S3 bucket
3. Load files into S3 bucket
4. Update permissions of the bucket policy (see allow all permissions below)
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": {
                "AWS": "*"
            },
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::security-controls-inventory/*"
        }
    ]
} 
6. Enable statis website hosting and name index document: index1.html
7. access site: http://security-controls-inventory.s3.us-east-2.amazonaws.com/CRUD%20App/index.html

