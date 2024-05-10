/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Mind Stretcher Education',
    position: 'FullStack Developer Intern',
    url: '', // Add the company website URL if available
    startDate: '2024-01',
    endDate: '2024-04', // Assuming the position is still active
    highlights: [
      'Developed RESTful APIs, front-end components, and backend database migration scripts for an educational AI LLM bot. Utilized Next.js for the front end and FastAPI for the backend.',
      'Conducted testing of various LLM models to determine the optimal performance for our AI bot.',
      'Collaborated with product designers and the business team on the development',
    ],
  },
  {
    name: 'UnaBiz',
    position: 'Machine Learning Engineer Intern',
    url: 'https://unabiz.com',
    startDate: '2023-04',
    endDate: '2023-07',
    highlights: [
      'Developed a computer vision model for detecting humans using an tCam-mini, achieving 93% accuracy with TensorFlow for building the model and TensorFlow Lite for on-device deployment.',
      'Set up a Python data pipeline for automatic image collection, labeling, preprocessing, and augmentation to create a strong dataset for model training.',
      'Programmed the tCam-mini in C++ for making real-time prediction using the model inference, integrating InfluxDB Cloud database for data storage on cloud and a Flask server for real-time data receiving and display on a web page.',
    ],
  },
  {
    name: 'Ubicomp Lab, National University of Singapore',
    position: 'Undergraduate Research Assistant',
    url: '', // Add the lab website URL if available
    startDate: '2022-05',
    endDate: '2022-07',
    highlights: [
      'Created an efficient data pipeline using Numpy and Pandas to clean, augment, and visualize the raw IMU data from 30 participants.',
      'Assisted in implementing deep learning models using TensorFlow to classify 10 different face-touching activities.',
    ],
  },
  {
    name: 'Huawei Singapore Research Center',
    position: 'Research Intern',
    url: 'https://www.huawei.com/sg',
    startDate: '2021-07',
    endDate: '2021-12',
    highlights: [
      'Assisted in implementing algorithms to extract heartbeat waveform and respiration waveform using millimeter wave radar.',
      'Conducted industry and technical research on recent trends of wearable health devices.',
      'Designed and implemented a GUI using PyQt5 to streamline interaction with the algorithm and facilitate data visualization.',
    ],
  },
];

export default work;