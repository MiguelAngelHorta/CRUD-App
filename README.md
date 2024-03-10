# Security Control Inventory Web App - Local Storage
 - 🔨 Build a web app with local storage using HTML, Javascript, and CSS.
   ![iScreen Shoter - 20240309210201445](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/7b1340d5-b017-4df5-ab9c-f92a073fcf38)
   
## Pre steps for building
- Open Visual Studio to organize files and make edits (download if not already installed)
- Sync files within a specified folder with Git repo and enable auto-save
- Ensure live server extension is installed for the dev local server
- Reference bootstrap open-source front-end framework code for pre-design and pre-built components for javascript

### Create files for the web app
- Create an HTML file
  - This HTML code is a web page for a Security Control Inventory application. It uses Bootstrap for styling and includes a form to enter control details, action buttons for updating controls, and a table to display control information. The page integrates custom CSS for additional styling and relies on JavaScript functions to manage data interactions.
- Create a Javascript file
  - **validateForm()**: Validates form fields for completeness, alerts for missing information, and returns true if valid, false otherwise.
    ![iScreen Shoter - Google Chrome - 240309210646](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/8210c082-f7d2-4144-a2ea-4976306c3688)
![iScreen Shoter - Google Chrome - 240309210705](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/81f9a066-0ec9-4331-8a5f-852261875601)
![iScreen Shoter - Google Chrome - 240309210729](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/e722c182-ed5b-4b55-b176-11894cd4712a)
![iScreen Shoter - Google Chrome - 240309210747](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/9af18fa1-8a21-4889-9600-5633c514437a)
![iScreen Shoter - Google Chrome - 240309210815](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/3bb5f389-ba95-4f58-8287-707ecf8cb741)

  - **showData()**: Populates HTML table with control information, retrieving data from local storage.
    ![iScreen Shoter - Google Chrome - 240309210910](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/f2d37d0b-700b-43a4-9fab-08b5d91098db)
![iScreen Shoter - Google Chrome - 240309211048](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/daa16251-c8c7-43e5-85f6-6c5dd7b4d016)
![iScreen Shoter - Google Chrome - 240309210804](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/d1925a50-2753-4fc2-b872-9d3fe0ca929b)

  - **AddData()**: Adds a new control to controlList if form is valid, checks for duplicate Main Control IDs, updates local storage, and refreshes table.
    
  - deleteData(index): Deletes a control at specified index, confirming deletion before updating.
  - **updateData(index)**: Enables control data editing in the UI, highlights selected row, disables delete buttons, updates controlList after validation, refreshes table, and clears form on successful update.
  - **downloadCSV()**: Creates CSV data from HTML table, generates downloadable CSV file, and releases object URL after download.
    ![iScreen Shoter - Google Chrome - 240309210447](https://github.com/MiguelAngelHorta/CRUD-App/assets/106134627/a1091c95-e736-4b9b-b54f-6d60f7e617cf)

- Create a CSS file
