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
    name: 'UnaBiz',
    position: 'Machine Learning Intern',
    url: 'https://unabiz.com',
    startDate: 'April 2023',
    endDate: 'July 2023',
    highlights: [
      'Constructed a data pipeline for thermal image data, tailored for edge device constraints.',
      'Developed and deployed a compact 85 KB machine learning model using TensorFlow Lite on tCam-mini for edge computing.',
      'Developed a front-end web interface using HTML, integrated with a Flask server for handling data received via HTTP protocol from the tCam-mini, facilitating real-time visualization of human detection results.',
    ],
  },
  {
    name: 'Huawei Singapore Research Center',
    position: 'Research Intern',
    url: 'https://www.huawei.com/sg', // Replace with the actual URL if different
    startDate: 'July 2021',
    endDate: 'Dec 2021',
    highlights: [
      'Assisted in implementing algorithms to extract heartbeat waveform and respiration waveform using millimeter wave radar.',
      'Conducted industry and technical research on recent trends of wearable health devices.',
      'Designed and implemented a GUI using PyQt5 to streamline interaction with the algorithm and facilitate data visualization.',
    ],
  },
];

export default work;
