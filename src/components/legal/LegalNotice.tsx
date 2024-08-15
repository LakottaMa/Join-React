import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const LegalNotice = () => {
  const [legalContent, setLegalContent] = useState('');

  useEffect(() => {
    fetch('/legal/legal-notice.md')
      .then(response => response.text())
      .then(text => setLegalContent(text))
      .catch(error => console.error('Error loading legal notice:', error));
  }, []);

  return (
    <div className="legal-notice">
      <h1>Legal Notice</h1>
      <ReactMarkdown>{legalContent}</ReactMarkdown>
    </div>
  );
};

export default LegalNotice;