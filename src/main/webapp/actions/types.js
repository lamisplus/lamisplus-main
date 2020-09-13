/**
 * @TYPES
 * ==============================================
 * PATIENTS
 */

export const PATIENTS_FETCH_ALL = 'PATIENTS_FETCH_ALL'
export const PATIENTS_FETCH_BY_ID = 'PATIENTS_FETCH_BY_ID'
export const PATIENTS_CREATE = 'PATIENTS_CREATE'
export const PATIENTS_UPDATE = 'PATIENTS_UPDATE'
export const PATIENTS_DELETE = 'PATIENTS_DELETE'
export const PATIENTS_ERROR = 'PATIENTS_ERROR'
export const PATIENT_VITAL_SIGNS = 'PATIENT_VITAL_SIGNS'
export const PATIENT_LATEST_VITAL_SIGNS = 'PATIENT_LATEST_VITAL_SIGNS'
export const PATIENT_ALLERGIES = 'PATIENT_ALLERGIES'
export const PATIENT_LAB_ORDERS = 'PATIENT_LAB_ORDERS'
export const PATIENT_LATEST_MEDICATION_LIST = 'PATIENT_LATEST_MEDICATION_LIST'
export const PATIENT_ENCOUNTER_LIST = 'PATIENT_ENCOUNTER_LIST'
export const PATIENT_EXCLUSIVE_ENCOUNTER_LIST = 'PATIENT_EXCLUSIVE_ENCOUNTER_LIST'
export const CHECKEDIN_PATIENT_FETCH_ALL = 'CHECKEDIN_PATIENT_FETCH_ALL'
export const FETCH_COUNTRIES = "FETCH_COUNTRIES";
export const PATIENT_UPDATE = "PATIENT_UPDATE"
export const PATIENT_DELETE = "PATIENT_DELETE"
export const PATIENT_CONSULTATION_HISTORY = 'PATIENT_CONSULTATION_HISTORY'
export const PATIENT_APPOINTMENTS = 'PATIENT_APPOINTMENTS'
export const PATIENT_RADIOLOGY_ORDERS = 'PATIENT_RADIOLOGY_ORDERS'

/**
 * @TYPES
 * ===============================================
 * CHECKIN
 */
export const CHECKIN_FETCH_ALL = "CHECKIN_FETCH_ALL";
export const CHECKIN_FETCH_BY_ID = "CHECKIN_FETCH_BY_ID";
export const CHECKIN_CREATE = "CHECKIN_CREATE";
export const CHECKIN_UPDATE = "CHECKIN_UPDATE";
export const CHECKIN_DELETE = "CHECKIN_DELETE";
export const CHECKIN_ERROR = "CHECKIN_ERROR";

/**
 * @TYPES
 * ===============================================
 * ENCOUNTER
 */
export const ENCOUNTER_FETCH_ALL = "ENCOUNTER_FETCH_ALL";
export const ENCOUNTER_FETCH_BY_ID = "ENCOUNTER_FETCH_BY_ID";
export const ENCOUNTER_CREATE = "ENCOUNTER_CREATE";
export const ENCOUNTER_UPDATE = "ENCOUNTER_UPDATE";
export const ENCOUNTER_DELETE = "ENCOUNTER_DELETE";
export const ENCOUNTER_ERROR = "ENCOUNTER_ERROR";

/**
 * @TYPES
 * ===============================================
 * LABORATORY
 */
export const LABORATORY_FETCH_ALL = 'LABORATORY_FETCH_ALL'
export const LABORATORY_TESTORDER_FOR_PATIENT = 'LABORATORY_TESTORDER_FOR_PATIENT'
export const ERROR_LABORATORY_TESTORDER_FOR_PATIENT = 'ERROR_LABORATORY_TESTORDER_FOR_PATIENT'
export const LABORATORY_TESTORDER = 'LABORATORY_TESTORDER'
export const LABORATORY_TESTRESULT = 'LABORATORY_TESTRESULT'
export const LABORATORY_CREATE = 'LABORATORY_CREATE'
export const LABORATORY_UPDATE = 'LABORATORY_UPDATE'
export const LABORATORY_DELETE = 'LABORATORY_DELETE'
export const LABORATORY_ERROR = 'LABORATORY_ERROR'
export const CREATE_COLLECT_SAMPLE = 'CREATE_COLLECT_SAMPLE'
export const ERROR_CREATE_COLLECT_SAMPLE = 'ERROR_CREATE_COLLECT_SAMPLE'
export const ERROR_LABORATORY_TESTORDER = 'ERROR_LABORATORY_TESTORDER'
export const FETCH_ALL_TEST_GROUP = 'FETCH_ALL_TEST_GROUP'
export const FETCH_ALL_TESTS_BY_TEST_GROUP = 'FETCH_ALL_TESTS_BY_TEST_GROUP'
export const CREATE_TEST_ORDER = 'CREATE_TEST_ORDER'
export const TRANSFER_SAMPLE = 'TRANSFER_SAMPLE'
export const ERROR_TRANSFER_SAMPLE = 'ERROR_TRANSFER_SAMPLE'
export const LABORATORY_TESTORDER_FOR_LAB = 'LABORATORY_TESTORDER_FOR_LAB'
export const ERROR_LABORATORY_TESTORDER_FOR_LAB = 'ERROR_LABORATORY_TESTORDER_FOR_LAB'
export const FORMDATA_FETCH_BY_ID = 'FORMDATA_FETCH_BY_ID'
export const ERROR_FORMDATA_FETCH_BY_ID = 'ERROR_FORMDATA_FETCH_BY_ID'
export const FETCH_ALL_TESTS_BY_ENCOUNTER_ID = 'FETCH_ALL_TESTS_BY_ENCOUNTER_ID'
export const FETCH_ALL_RADIOLOGY_TESTS_BY_ENCOUNTER_ID = 'FETCH_ALL_RADIOLOGY_TESTS_BY_ENCOUNTER_ID'
export const RADIOLOGY_TEST_ORDERS = 'RADIOLOGY_TEST_ORDERS'
export const DISPATCH_MANIFEST_SAMPLE = 'DISPATCH_MANIFEST_SAMPLE'
export const ERROR_DISPATCH_MANIFEST_SAMPLE = 'ERROR_DISPATCH_MANIFEST_SAMPLE'
export const SAMPLE_DISPATCHED = 'SAMPLE_DISPATCHED'
export const ERROR_SAMPLE_DISPATCHED = 'ERROR_SAMPLE_DISPATCHED'
export const SAMPLES_MANIFEST_BY_ID = 'SAMPLES_MANIFEST_BY_ID'
export const ERROR_SAMPLES_MANIFEST_BY_ID = 'ERROR_SAMPLES_MANIFEST_BY_ID'
export const FETCH_ALL_RADIOLOGY_TEST_GROUP = 'FETCH_ALL_RADIOLOGY_TEST_GROUP'
export const FETCH_ALL_RADIOLOGY_TESTS_BY_TEST_GROUP = 'FETCH_ALL_RADIOLOGY_TESTS_BY_TEST_GROUP'
/**
 * @TYPES
 * ===============================================
 * FORM
 */
export const FORM_FETCH_ALL = 'FORM_FETCH_ALL'
export const FORM_FETCH_BY_ID = 'FORM_FETCH_BY_ID'
export const FORM_CREATE = 'FORM_CREATE'
export const FORM_UPDATE = 'FORM_UPDATE'
export const FORM_SAVE_ENCOUNTER = 'FORM_SAVE_ENCOUNTER'
export const FORM_ERROR = 'FORM_ERROR'
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA'
export const PROGRAM_FETCH_ALL = 'PROGRAM_FETCH_ALL'

/**
 * @TYPES
 * ===============================================
 * CONSULATION
 */
export const CONSULTATION_CREATE = 'CONSULTATION_CREATE'
export const CONSULTATION_ERROR = 'CONSULTATION_ERROR'

/**
 * @TYPES
 * ===============================================
 * PHARMACY
 */
export const PHARMACY_FETCH_PRESCRIPTIONS = "PHARMACY_FETCH_PRESCRIPTIONS";
export const PHARMACY_TESTORDER = "PHARMACY_TESTORDER";
export const PHARMACY_TESTRESULT = "PHARMACY_TESTRESULT";
export const PHARMACY_CREATE = "PHARMACY_CREATE";
export const PHARMACY_UPDATE = "PHARMACY_UPDATE";
export const PHARMACY_DELETE = "PHARMACY_DELETE";
export const PHARMACY_ERROR = "PHARMACY_ERROR";
export const FETCH_PATIENT_PRESCRIPTIONS = "FETCH_PATIENT_PRESCRIPTIONS";
export const UPDATE_PRESCRIPTION_STATUS = "UPDATE_PRESCRIPTION_STATUS";

/**
 * @TYPES
 * ===============================================
 * CONSULATION
 */
export const MEDICATION_FETCH = 'MEDICATION_FETCH'
export const MEDICATION_ERROR = 'MEDICATION_ERROR'

/**
 * @TYPES
 * ===============================================
 * FORMBUILDER
 */
export const FORMTYPES_FETCH_ALL = 'FORMTYPES_FETCH_ALL'
export const FORMTYPES_FETCH_SERVICES = 'FORMTYPES_FETCH_SERVICES'
export const FORMTYPES_FETCH_BY_ID = 'FORMTYPES_FETCH_BY_ID'
export const FORMTYPES_CREATE_FORM = 'FORMTYPES_CREATE_FORM'
export const FORMTYPES_UPDATE = 'FORMTYPES_UPDATE'
export const FORMTYPES_DELETE = 'FORMTYPES_DELETE'
export const FORMTYPES_ERROR = 'FORMTYPES_ERROR'

/**
 * @TYPES
 * ===============================================
 * AUTHENTICATE
 */
export const AUTHENTICATION = 'AUTHENTICATION'
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR'
export const UNAUTHORISED_ERROR = 'UNAUTHORISED_ERROR'
/**
 * @TYPES
 * ===============================================
 * VISIT
 */
export const UPDATE_VISIT = 'UPDATE_VISIT'
export const UPDATE_VISIT_ERROR = 'UPDATE_VISIT_ERROR'

/**
 * @TYPES
 * ===============================================
 * USER
 */

export const REGISTER_REQUEST = 'USERS_REGISTER_REQUEST'
export const REGISTER_SUCCESS =  'USERS_REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'USERS_REGISTER_FAILURE'
export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID'
export const USERS_ERROR = 'USERS_ERROR'
/**
 * @TYPES
 * ===============================================
 * APPLICATION CODESET
 */
export const APPLICATION_CODESET_PRIORITIES = 'APPLICATION_CODESET_PRIORITIES'
export const APPLICATION_CODESET_RELATIONSHIPS = 'APPLICATION_CODESET_RELATIONSHIPS'
export const APPLICATION_CODESET_VL_INDICATION = 'APPLICATION_CODESET_VL_INDICATION'
export const APPLICATION_CODESET_BOOKING_STATUS = 'APPLICATION_CODESET_BOOKING_STATUS'
export const APPLICATION_CODESET_GENDER = 'APPLICATION_CODESET_GENDER'
export const APPLICATION_CODESET_LIST = 'APPLICATION_CODESET_LIST'
export const WARD_LIST = 'WARD_LIST'

/**
 * @TYPES
 * ===============================================
 * APPOINTMENTS
 */
export const APPOINTMENTS_FETCH_ALL = 'APPOINTMENTS_FETCH_ALL'
export const APPOINTMENTS_ERROR = 'APPOINTMENTS_ERROR'

/**
 * @TYPES
 * ===============================================
 * GLOBAL_VARIABLE
 */
export const GLOBAL_VARIABLE_FETCH_ALL = 'GLOBAL_VARIABLE_FETCH_ALL'


/**
 * @TYPES
 * ===============================================
 * STANDARDS
 */
export const ICD_STANDARDS_FETCH_ALL = 'ICD_STANDARDS_FETCH_ALL'

/**
 * @TYPES
 * ===============================================
 * BOOSTRAP MODULE
 */
export const FETCH_ALL_BOOTSTRAP_MODULE = 'FETCH_ALL_BOOTSTRAP_MODULE'
export const ERROR_FETCH_ALL_BOOTSTRAP_MODULE = 'ERROR_FETCH_ALL_BOOTSTRAP_MODULE'
export const CREATE_BOOTSTRAP_MODULE = 'CREATE_BOOTSTRAP_MODULE'
export const ERROR_CREATE_BOOTSTRAP_MODULE = 'ERROR_CREATE_BOOTSTRAP_MODULE'