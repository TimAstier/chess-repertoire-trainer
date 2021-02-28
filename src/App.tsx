import fetch from 'node-fetch';
import React from 'react';

const studyId = '9fP4KZIY';

const createStudyUrl = (studyId: string) => {
  return `https://lichess.org/study/${studyId}.pgn`;
};

export const App = () => {
  React.useEffect(() => {
    const fetchStudy = async () => {
      const response = await fetch(createStudyUrl(studyId));
      console.log(response);
    };
    fetchStudy();
  }, []);

  return <div>:)</div>;
};
