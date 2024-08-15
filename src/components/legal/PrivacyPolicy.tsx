import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const PrivacyPolicy = () => {
  const [privacyContent, setPrivacyContent] = useState('');

  useEffect(() => {
    fetch('/legal/privacy-policy.md')
      .then(response => response.text())
      .then(text => setPrivacyContent(text))
      .catch(error => console.error('Error loading legal notice:', error));
  }, []);

  return (
    <div>
      <h1>Privacy Policy</h1>
      <ReactMarkdown>{privacyContent}</ReactMarkdown>
    </div>
  );
};

export default PrivacyPolicy;