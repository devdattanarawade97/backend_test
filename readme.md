# API Test Instructions

## Steps to Run API Tests

### Step 1: Start MySQL Local Instance
Ensure that your MySQL local instance is running.

### Step 2: Create `.env` File
In the root of your project, create a `.env` file.

### Step 3: Set Environment Variables
Add the following environment variables to the `.env` file:
- `DB_USER` – Your MySQL username.
- `DB_PASSWORD` – Your MySQL password.
- `DATABASE` – The name of the database you are using.

### Step 4: Run Backend Tests
Navigate to the `backend_test` directory and run the following command: npm start

### Step 5: Split Terminal
Open a new terminal or split the existing one to manage additional tasks


###  Step 6: Execute API Test Commands
# You can test the API using the following curl commands or paste them into Postman to see the output

# Get employed count
curl -X GET http://localhost:3000/api/getEmployedCount

# Get retired count
curl -X GET http://localhost:3000/api/getRetiredCount

# Get student count
curl -X GET http://localhost:3000/api/getStudentCount

# Get cargiver count
curl -X GET http://localhost:3000/api/getCargiverCount

# Get homemaker count
curl -X GET http://localhost:3000/api/getHomemakerCount

# Get volunteer count
curl -X GET http://localhost:3000/api/getVolunteerCount

# Get true endowments count
curl -X GET http://localhost:3000/api/getTrueEndowmentsCount

# Get good endowments count
curl -X GET http://localhost:3000/api/getGoodEndowmentsCount

# Get beautiful endowments count
curl -X GET http://localhost:3000/api/getBeautifulEndowmentsCount

# Get prosperous endowments count
curl -X GET http://localhost:3000/api/getPropserousEndowmentsCount

# Get sustainable endowments count
curl -X GET http://localhost:3000/api/getSustainableEndowmentsCount

# Get just and well-ordered endowments count
curl -X GET http://localhost:3000/api/getJustAndWellOrderedEndowmentsCount

# Get hybrid location count
curl -X GET http://localhost:3000/api/getHybridLocationCount

# Get remote location count
curl -X GET http://localhost:3000/api/getRemoteLocationCount

# Get workplace location count
curl -X GET http://localhost:3000/api/getWorkplaceLocationCount

