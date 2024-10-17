import React from 'react';

const images = {
  profile1: require('../Images/Profile-11.png').default,
  profile2: require('../Images/Profile-12.png').default,
  profile3: require('../Images/Profile-13.png').default,
  profile4: require('../Images/Profile-14.png').default,
  profile5: require('../Images/Profile-15.png').default,
};

function LearnerCard({ picture, name, jobTitle, country, agency, expert = [], education, organization }) {
  const imageSrc = images[picture] || require('../Images/default.png').default; // Fallback image if not found

  return (
    <div style={styles.card}>
      <img src={imageSrc} alt={name} style={styles.image} />
      <div style={styles.info}>
        <div style={styles.name}>{fullName}</div>
        <div style={styles.detail}><strong>Expert:</strong> {expert.join(', ')}</div>
        <div style={styles.detail}><strong>Education:</strong> {education}</div>
        <div style={styles.detail}><strong>Occupation:</strong> {jobTitle}</div>
        <div style={styles.detail}><strong>Organization:</strong> {organization}</div>
      </div>
    </div>
  );
}

// Inline styles for LearnerCard component
const styles = {
  card: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '16px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
  },
  name: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '8px',
  },
  detail: {
    fontSize: '14px',
    marginBottom: '4px',
  },
};

export default LearnerCard;
