

to run api test :

step 1 : start mysql local instance 
step 2 : create .env file 
step 3 : set following 3 environment variables naming as 
          1) DB_USER  , 2) DB_PASSWORD , 3) DATABASE

step 4 : run following command in backend_test directory : npm start 
step 5 : split terminal 
step 6 : you can run following curl command or you can pase curl command in postman to see output 

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

         


