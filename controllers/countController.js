import db from '../db/dbConfig.js';  // Import the MySQL connection

// Function to fetch completed assessments from the MySQL database
export const getEmployedCount = async (req, res) => {


  try {
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    // Sample query to get the IDs of completed assessments
    const [getEmployedRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['work', 1]);

    let employedUserIds = getEmployedRows.map(eachEmployed => eachEmployed.user_assessment_id);
    // console.log('employed user ids : ', employedUserIds);

    for (let eachId of employedUserIds) {
      if (userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

    res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};


/**
 * @function getRetiredCount
 * @description This controller function is an endpoint to get the count of retired users.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of retired users.
 */
export const getRetiredCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    // Sample query to get the IDs of completed assessments
    const [getRetiredRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['work', 2]);

    let retiredUserIds = getRetiredRows.map(eachRetired => eachRetired.user_assessment_id);
    // console.log('employed user ids : ', retiredUserIds);

    for (let eachId of retiredUserIds) {
      if (userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

/**
 * @function getStudentCount
 * @description This controller function is an endpoint to get the count of students.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of student users.
 */
export const getStudentCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT user_assessment_id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    // Sample query to get the IDs of completed assessments
    const [getStudentRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['work', 3]);
    // console.log('student user ids : ', getStudentRows);
    let studentUserIds = getStudentRows.map(eachStudent => eachStudent.user_assessment_id);
    // console.log('employed user ids : ', studentUserIds);

    for (let eachId of studentUserIds) {
      if (userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
/**
 * @function getHomemakerCount
 * @description This controller function is an endpoint to get the count of homemaker users.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of homemaker users.
 */
export const getHomemakerCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    // Sample query to get the IDs of completed assessments
    const [getHomeMakerRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['work', 4]);

    let homemakerUserIds = getHomeMakerRows.map(eachHomemaker => eachHomemaker.user_assessment_id);
    // console.log('employed user ids : ', homemakerUserIds);

    for (let eachId of homemakerUserIds) {
      if (userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
/**
 * @function getCargiverCount
 * @description This controller function is an endpoint to get the count of cargiver users.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of cargiver users.
 */
export const getCargiverCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    // Sample query to get the IDs of completed assessments
    const [getCargiverRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['work', 5]);

    let cargiverUserIds = getCargiverRows.map(eachCargiver => eachCargiver.user_assessment_id);
    // console.log('employed user ids : ', cargiverUserIds);

    for (let eachId of cargiverUserIds) {
      if (userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
/**
 * @function getVolunteerCount
 * @description This controller function is an endpoint to get the count of volunteer users.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of volunteer users.
 */

export const getVolunteerCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    // Sample query to get the IDs of completed assessments
    const [getVolunteerRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['work', 6]);

    let volunteerUserIds = getVolunteerRows.map(eachVolunteer => eachVolunteer.user_assessment_id);
    // console.log('employed user ids : ', volunteerUserIds);

    for (let eachId of volunteerUserIds) {
      if (userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};




/**
 * @function getTrueEndowmentsCount
 * @description This controller function is an endpoint to get the count of users that have a true endowment.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of users that have a true endowment.
 */
export const getTrueEndowmentsCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log(' user ids : ', userIds);
    const [workRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? ', ['work']);

    let workUserIds = workRows.map(row => row.user_assessment_id);
    // console.log('work user ids : ', workUserIds);
    // Sample query to get the IDs of completed assessments
    const [getTrueEndowmentRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['endowment', 1]);
    // console.log('true user id array: ', getTrueEndowmentRows);
    let trueUserIds = getTrueEndowmentRows.map(eachEndowment => eachEndowment.user_assessment_id);
    // console.log('true user id array: ', trueUserIds);

    for (let eachId of trueUserIds) {
      // console.log('each true id : ', eachId)
      if (workUserIds.includes(eachId) && userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};



/**
 * @function getGoodEndowmentsCount
 * @description This controller function is an endpoint to get the count of users that have a good endowment.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of users that have a good endowment.
 */
export const getGoodEndowmentsCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    const [workRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? ', ['work']);

    let workUserIds = workRows.map(row => row.user_assessment_id);
    // console.log('work user ids : ', workUserIds);
    // Sample query to get the IDs of completed assessments
    const [getGoodEndowmentRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['endowment', 2]);
    // console.log('good endowment user id array: ', getGoodEndowmentRows);
    let GoodUserIds = getGoodEndowmentRows.map(eachEndowment => eachEndowment.user_assessment_id);
    // console.log('good endowment user id array: ', GoodUserIds);

    for (let eachId of GoodUserIds) {
      // console.log('each true id : ', eachId)
      if (userIds.includes(eachId) && workUserIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

/**
 * @function getBeautifulEndowmentsCount
 * @description This controller function is an endpoint to get the count of users that have a beautiful endowment.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of users that have a beautiful endowment.
 */
export const getBeautifulEndowmentsCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.user_assessment_id);
    // console.log('user ids : ', userIds);
    const [workRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? ', ['work']);

    let workUserIds = workRows.map(row => row.user_assessment_id);
      // console.log('work user ids : ', workUserIds);
    // Sample query to get the IDs of completed assessments
    const [getBeautifulEndowmentRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['endowment', 3]);
    // console.log('beatuiful endowment user id array: ', getBeautifulEndowmentRows);
    let beatuifulUserIds = getBeautifulEndowmentRows.map(eachEndowment => eachEndowment.user_assessment_id);
    // console.log('beautiful endowment user id array: ', beatuifulUserIds);

    for (let eachId of beatuifulUserIds) {
      // console.log('each true id : ', eachId)
      if (userIds.includes(eachId) && workUserIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
/**
 * @function getPropserousEndowmentsCount
 * @description This controller function is an endpoint to get the count of users that have a prosperous endowment.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of users that have a prosperous endowment.
 */
export const getPropserousEndowmentsCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    const [workRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? ', ['work']);

    let workUserIds = workRows.map(row => row.user_assessment_id);
    //  console.log('work user ids : ', workUserIds);
    // Sample query to get the IDs of completed assessments
    const [getProsperEndowmentRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['endowment', 4]);
    // console.log('good endowment user id array: ', getGoodEndowmentRows);
    let propserUserIds = getProsperEndowmentRows.map(eachEndowment => eachEndowment.user_assessment_id);
    // console.log('propser endowment user id array: ', propserUserIds);

    for (let eachId of propserUserIds) {
      // console.log('each true id : ', eachId)
      if (userIds.includes(eachId) && workUserIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
/**
 * @function getSustainableEndowmentsCount
 * @description This controller function is an endpoint to get the count of users that have a sustainable endowment.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of users that have a sustainable endowment.
 */
export const getSustainableEndowmentsCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    const [workRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? ', ['work']);

    let workUserIds = workRows.map(row => row.user_assessment_id);
    //  console.log('work user ids : ', workUserIds);
    // Sample query to get the IDs of completed assessments
    const [getSustainableEndowmentRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['endowment', 5]);
    // console.log('good endowment user id array: ', getSustainableEndowmentRows);
    let sustainableUserIds = getSustainableEndowmentRows.map(eachEndowment => eachEndowment.user_assessment_id);
    // console.log('sustainable endowment user id array: ', sustainableUserIds);

    for (let eachId of sustainableUserIds) {
      // console.log('each true id : ', eachId)
      if (userIds.includes(eachId) && workUserIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
/**
 * @function getJustAndWellOrderedEndowmentsCount
 * @description This controller function is an endpoint to get the count of users that have a just and well ordered endowment.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of users that have a just and well ordered endowment.
 */
export const getJustAndWellOrderedEndowmentsCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    const [workRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? ', ['work']);

    let workUserIds = workRows.map(row => row.user_assessment_id);
    //  console.log('work user ids : ', workUserIds);
    // Sample query to get the IDs of completed assessments
    const [getWellorderedEndowmentRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['endowment', 6]);
    // console.log('good endowment user id array: ', getWellorderedEndowmentRows);
    let wellOrderedUserIds = getWellorderedEndowmentRows.map(eachEndowment => eachEndowment.user_assessment_id);
    // console.log('good endowment user id array: ', wellOrderedUserIds);

    for (let eachId of wellOrderedUserIds) {
      // console.log('each true id : ', eachId)
      if (userIds.includes(eachId) && workUserIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

/**
 * @function getHybridLocationCount
 * @description This controller function is an endpoint to get the count of users with a hybrid location.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of users with a hybrid location.
 */
export const getHybridLocationCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    // Sample query to get the IDs of completed assessments
    const [getHybridLocationRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['location', 1]);
    // console.log('good endowment user id array: ', getHybridLocationRows);
    let hybridLocationUserIds = getHybridLocationRows.map(eachLocation => eachLocation.user_assessment_id);
    // console.log('hybrid location user id array: ', hybridLocationUserIds);

    for (let eachId of hybridLocationUserIds) {
      // console.log('each true id : ', eachId)
      if (userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
/**
 * @function getRemoteLocationCount
 * @description This controller function is an endpoint to get the count of users with a remote location.
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @returns {Object} A JSON object with the count of users with a remote location.
 */
export const getRemoteLocationCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    // Sample query to get the IDs of completed assessments
    const [getRemoteLocationRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['location', 2]);
    // console.log('remote location user id array: ', getRemoteLocationRows);
    let remoteLocationUserIds = getRemoteLocationRows.map(eachLocation => eachLocation.user_assessment_id);
    // console.log('hybrid location user id array: ', hybridLocationUserIds);

    for (let eachId of remoteLocationUserIds) {
      // console.log('each true id : ', eachId)
      if (userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
export const getWorkplaceLocationCount = async (req, res) => {
  try {
    // Sample query to get the IDs of completed assessments
    let count = 0;
    // Sample query to get the IDs of completed assessments
    const [rows] = await db.query('SELECT id FROM users_assessments WHERE status = ?', ['complete']);

    let userIds = rows.map(row => row.id);
    // console.log('user ids : ', userIds);
    // Sample query to get the IDs of completed assessments
    const [getRemoteLocationRows] = await db.query('SELECT user_assessment_id FROM users_assessments_82_variables WHERE variable = ? AND score = ?', ['location', 3]);
    // console.log('remote location user id array: ', getRemoteLocationRows);
    let remoteLocationUserIds = getRemoteLocationRows.map(eachLocation => eachLocation.user_assessment_id);
    // console.log('hybrid location user id array: ', hybridLocationUserIds);

    for (let eachId of remoteLocationUserIds) {
      // console.log('each true id : ', eachId)
      if (userIds.includes(eachId)) {
        //console.log('found')
        count += 1;
      }
    }

        res.status(200).json({count:count});
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};