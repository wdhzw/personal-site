import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2001-05-06');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'Hometown',
    label: 'Hometown',
    value: 'JiuJiang, China',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 10,
    link:
      'https://www.google.com/maps/d/embed?mid=1gLr32tyBAJCA46Z9h-c9MDTadQeeNas&ehbc=2E312F" width="640" height="480',
  },
  {
    key: 'location',
    label: 'Current Base',
    value: 'Singapore',
  },
  {
    key: 'languages',
    label: 'Languages',
    value: 'Mandarin, English, JiuJiang Dialect',
  },
];

export default data;
