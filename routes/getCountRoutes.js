import express from 'express';
import { getBeautifulEndowmentsCount, getCargiverCount, getEmployedCount, getGoodEndowmentsCount, getHomemakerCount, getHybridLocationCount, getJustAndWellOrderedEndowmentsCount, getPropserousEndowmentsCount, getRemoteLocationCount, getRetiredCount, getStudentCount, getSustainableEndowmentsCount, getTrueEndowmentsCount, getVolunteerCount, getWorkplaceLocationCount } from '../controllers/countController.js';


const router = express.Router();

// Route to get all employed count
router.get('/getEmployedCount', getEmployedCount);
//curl -X GET http://localhost:3000/api/getEmployedCount

// Route to get all retired count
router.get('/getRetiredCount', getRetiredCount);
//curl -X GET http://localhost:3000/api/getRetiredCount


// Route to get all student count
router.get('/getStudentCount', getStudentCount);

// Route to get all cargiver count
router.get('/getCargiverCount', getCargiverCount);
//curl -X GET http://localhost:3000/api/getCargiverCount

// Route to get all homemaker count
router.get('/getHomemakerCount', getHomemakerCount);
//curl -X GET http://localhost:3000/api/getHomemakerCount


// Route to get all volunteer count
router.get('/getVolunteerCount', getVolunteerCount);
//curl -X GET http://localhost:3000/api/getVolunteerCount

// Route to get all true endowments count
router.get('/getTrueEndowmentsCount', getTrueEndowmentsCount);
//curl -X GET http://localhost:3000/api/getTrueEndowmentsCount

// Route to get all good endowments count
router.get('/getGoodEndowmentsCount', getGoodEndowmentsCount);
//curl -X GET http://localhost:3000/api/getGoodEndowmentsCount

// Route to get all beautiful endowments count
router.get('/getBeautifulEndowmentsCount', getBeautifulEndowmentsCount);
//curl -X GET http://localhost:3000/api/getBeautifulEndowmentsCount


// Route to get all prosperous endowments count
router.get('/getPropserousEndowmentsCount', getPropserousEndowmentsCount);
//curl -X GET http://localhost:3000/api/getPropserousEndowmentsCount


// Route to get all sustainable endowments count
router.get('/getSustainableEndowmentsCount', getSustainableEndowmentsCount);
//curl -X GET http://localhost:3000/api/getSustainableEndowmentsCount


// Route to get all just and well-ordered endowments count
router.get('/getJustAndWellOrderedEndowmentsCount', getJustAndWellOrderedEndowmentsCount);
//curl -X GET http://localhost:3000/api/getJustAndWellOrderedEndowmentsCount


// Route to get all hybrid location count
router.get('/getHybridLocationCount', getHybridLocationCount);
//curl -X GET http://localhost:3000/api/getHybridLocationCount


// Route to get all remote location count
router.get('/getRemoteLocationCount', getRemoteLocationCount);
//curl -X GET http://localhost:3000/api/getRemoteLocationCount


// Route to get all workplace location count
router.get('/getWorkplaceLocationCount', getWorkplaceLocationCount);
//curl -X GET http://localhost:3000/api/getWorkplaceLocationCount

export default router;