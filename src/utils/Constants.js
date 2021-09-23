const Constants = {
  API_BASE_URL: 'https://wecarehospital.azurewebsites.net/wecare',

  //API_BASE_URL: 'http://localhost:8080/wecare',

  MAXIMUM_TAX_PERCENTAGE: 100,

  GRID_RESULT_ROW_DEFAULT_SIZE: 20,

  DEFAULT_DECIMAL_PLACES: 3,

  STEPPER_PAGES_SIZE: 10,

  MASTER_DATA_KEYS: {
    ALL_CURRENCIES: 'uheir398409*(&',
  },

  PUBLIC_KEY: `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5OZkfeUXv7lc5rexCCclfgkqv
9OmPgaoG6I4BE9KNeLt4ARGjtlUKTduMg7q0TYoPYzhD2drTgj9akJEDdsv0wots
lOvYsBlAAPPdnUuUsJrYuNFLW1n0TFNQhF0h916oUflK9BLDAKJ0k36Jem4uGvK4
6PAxGS7XQ+8Nls8DMwIDAQAB`,

  ACCESS_TOKEN: null,
  REFRESH_TOKEN: null,
  LOGGED_IN_USER: null,
  BASE_URL: 'https://s3.ap-south-1.amazonaws.com/iharvest-demo/',
  REPORT_BASE_URL:
    'https://health-tracker-dev.s3.ap-south-1.amazonaws.com//reports/',

  IMAGE_OUTPUT_TYPE: {
    DATA_URL: 'DATA_URL',
    BLOB: 'BLOB',
  },

  STATUS_CONST: {
    ACT: 'ACT',
    INA: 'INA',
  },

  STATUS: {
    ACT: 'Active',
    INA: 'Inactive',
  },

  TITLE: {
    MR: 'Mr',
    MRS: 'Mrs',
    MS: 'Ms',
    DR: 'Dr',
  },

  TITLE_CONST: {
    MR: 'MR',
    MRS: 'MRS',
    MS: 'MS',
    DR: 'DR',
  },

  STORAGE: {
    ACCESS_TOKEN: 'HT_FrE#4_#s',
    REFRESH_TOKEN: 'HT_LOpo#$d',
    LOGGED_USER_ENC: 'HT_LpP#dTede',
    SELECTED_ROLE_ID: 'HT_SRipETgdc',
    SELECTED_USER_ID: 'HT_wer%23#Tg32c',
    SELECTED_EMPLOYEE_ID: 'HT_wer%23#Tg32c',
  },
  DAYS_OF_WEEK_LIST: [
    { label: 'Sunday', value: 'Su' },
    { label: 'Monday', value: 'Mo' },
    { label: 'Tuesday', value: 'Tu' },
    { label: 'Wednesday', value: 'We' },
    { label: 'Thursday', value: 'Th' },
    { label: 'Friday', value: 'Fr' },
    { label: 'Saturday', value: 'Sa' },
  ],

  CLINICS: [
    { label: 'Select the clinic', value: '' },
    { label: 'Cardiology', value: 'cardiology' },
    { label: 'gastroenterology', value: 'gastroenterology' },
    // { label: 'Dermatology', value: 'dermatology' },
    // { label: 'Neurology', value: 'neurology' },
  ],
  TESTTYPES: [
    { label: 'Select the clinic', value: '' },
    { label: 'FBC', value: 'fbc' },
    { label: 'Bio Chemistry', value: 'bio' },
    { label: 'Diagnosicic test', value: 'diagnoscic' },
    { label: 'Iron-Deficiency-Anemia', value: 'iron' },
  ],
  NURSETYPE: [
    { label: 'Select the nurse type', value: '' },
    { label: 'Head Nurse', value: 1 },
    { label: 'Regular Nurse', value: 0 },
  ],

  SPECIALIZATION: [
    { label: 'Select Specialty', value: '' },
    { label: 'Cardiologist', value: 'cardiologist' },
    { label: 'BDS-Specialist', value: 'bds-specialist' },
    { label: 'Dermatologist', value: 'dermatologist' },
    { label: 'Neurologist', value: 'neurologist' },
  ],

  DAYS_OF_WEEK: {
    Su: 'Sunday',
    Mo: 'Monday',
    Tu: 'Tuesday',
    We: 'Wednesday',
    Th: 'Thursday',
    Fr: 'Friday',
    Sa: 'Saturday',
  },
  DAYS_OF_WEEK_CONST: {
    Su: 'Su',
    Mo: 'Mo',
    Tu: 'Tu',
    We: 'We',
    Th: 'Th',
    Fr: 'Fr',
    Sa: 'Sa',
  },

  DATE_TIME_FORMAT: 'DD/MM/YYYY HH:mm:ss',
  DATE_TIME_FORMAT_NO_SECONDS: 'DD/MM/YYYY HH:mm',
  DATE_FORMAT: 'DD/MM/YYYY',
  TIME_FORMAT: 'HH:mm:ss',
  TIME_FORMAT_NO_SECONDS: 'HH:mm',
  YEAR_FORMAT: 'YYYY',

  GENDER: {
    M: 'Male',
    F: 'Female',
  },
  GENDER_CONST: {
    M: 'M',
    F: 'F',
  },

  YES_NO: {
    Y: 'Yes',
    N: 'No',
  },

  YES_NO_CONST: {
    Y: 'Y',
    N: 'N',
  },

  PAGES: {
    dashboard: '/dashboard',
    adminDashboard: '/adminDashboard',
    doctorDashboard: '/doctorDashboard',
    theme: '/theme',
    themeColors: '/theme/colors',
    themeTypography: '/theme/typography',
    base: '/base',
    employeeAddEdit: '/employee/add-edit',
    employee: '/employee',
    notFound: '/404',
    login: '/login',
    doctor: '/doctor',
    doctorAddEdit: '/doctor/add-edit',
  },

  MEDICINES: [
    'Acetaminophen',
    'Adderall',
    'Amitriptyline',
    'Amlodipine',
    'Amoxicillin',
    'Ativan',
    'Atorvastatin',
    'Azithromycin',
    'Benzonatate',
    'Brilinta',
    'Bunavail',
    'Buprenorphine',
    'Cephalexin',
    'Ciprofloxacin',
    'Citalopram',
    'Clindamycin',
    'Clonazepam',
    'Cyclobenzaprine',
    'Cymbalta',
    'Doxycycline',
    'Dupixent',
    'Entresto',
    'Entyvio',
    'Farxiga',
    'Fentanyl',
    'Fentanyl Patch',
    'Gabapentin',
    'Gilenya',
    'Humira',
    'Hydrochlorothiazide',
    'Hydroxychloroquine',
    'Ibuprofen',
    'Imbruvica',
    'Invokana',
    'Januvia',
    'Jardiance',
    'Kevzara',
    'Lexapro',
    'Lisinopril',
    'Lofexidine',
    'Loratadine',
    'Lyrica',
    'Melatonin',
    'Meloxicam',
    'Metformin',
    'Methadone',
    'Methotrexate',
    'Metoprolol',
    'Naloxone',
    'Naltrexone',
    'Naproxen',
    'Omeprazole',
    'Onpattro',
    'Otezla',
    'Ozempic',
    'Pantoprazole',
    'Prednisone',
    'Probuphine',
    'Rybelsus',
    'Sublocade',
    'Tramadol',
    'Trazodone',
    'Wellbutrin',
    'Xanax',
    'Zubsolv',
  ],

  LABTESTS: [
    'BMP',
    'CBC',
    'CMP',
    'ESR',
    'Ferritin',
    'FT4',
    'FT3',
    'GC/CHL',
    'Hemoglobin A1C',
    'HIV (fourth generation test)',
    'Influenza A and B',
    'KOH',
    'Lipid Panel',
    'Manual Differential',
    'Mono (Mononucleosis)',
    'Rapid Strep Test',
    'TSH',
    'Urinalysis',
    'Urine Culture',
    'Vitamin B12',
  ],

  STATISTICS: [
    'Patients Registered In Clinic',
    'Patients In Clinic According To Age',
    '# Of Patients According To Diagnosis',
    '# Of Patients Visited In Clinic Dates',
    '# Of Patients Not Visited In Clinic Dates',
  ],
}

export default Constants
