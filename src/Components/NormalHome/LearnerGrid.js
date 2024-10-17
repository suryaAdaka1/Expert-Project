import React from 'react';
import './Navbar.css'; // External CSS file for styling
import profile1 from '../Images/Profile-11.png';
import profile2 from '../Images/Profile-12.png';
import profile3 from '../Images/Profile-13.png';
import profile4 from '../Images/Profile-14.png';
import profile5 from '../Images/Profile-15.png';

import learnersData from './Learner.json'; // Import the JSON data

const images = {
  profile1,
  profile2,
  profile3,
  profile4,
  profile5,
};



// LearnerCard component with dynamic image loading and updated layout
function LearnerCard({ picture, name, jobTitle, country, title, expert, education, organization }) {
  const imageSrc = images[picture]; // Use the mapping object to get the image

  return (
    <div style={styles.card}>
      <div className='text-right'><p>...</p></div>
      <div style={styles.cardHeader}>
        <img src={imageSrc} alt={name} style={styles.image} />
        <div style={styles.name}>{title} {name}</div>
      </div>
      <div style={styles.details}>
        <div style={styles.detailRow}>
          <div style={styles.detailLabel}><strong>Expert</strong></div>
          <div style={styles.detailValue}><strong>: </strong>{expert.join(', ')}</div>
        </div>
        <div style={styles.detailRow}>
          <div style={styles.detailLabel}><strong>Education</strong></div>
          <div style={styles.detailValue}><strong>: </strong>{education}</div>
        </div>
        <div style={styles.detailRow}>
          <div style={styles.detailLabel}><strong>Occupation</strong></div>
          <div style={styles.detailValue}><strong>: </strong>{jobTitle}</div>
        </div>
        <div style={styles.detailRow}>
          <div style={styles.detailLabel}><strong>Organization</strong></div>
          <div style={styles.detailValue}><strong>: </strong>{organization}</div>
        </div>
        <div style={styles.detailRow}>
          <div style={styles.detailLabel}><strong>Country</strong></div>
          <div style={styles.detailValue}><strong>: </strong>{country}</div>
        </div>
      </div>
    </div>
  );
}


function LearnerGrid() {
  const [learners, setLearners] = React.useState(learnersData); // Learners data from JSON
  const [currentPage, setCurrentPage] = React.useState(1);
  const [learnersPerPage, setLearnersPerPage] = React.useState(8);
  const [filterByCountry, setFilterByCountry] = React.useState('');
  const [filterByJobTitle, setFilterByJobTitle] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterByExpert, setFilterByExpert] = React.useState('');
  const [isGlobalSearch, setIsGlobalSearch] = React.useState(false);
  const [sortBy, setSortBy] = React.useState('default'); // Set the default to 'default'

  

  const filteredLearners = learners
  .filter(learner =>
    (filterByCountry === '' || learner.country === filterByCountry) &&
    (filterByJobTitle === '' || learner.jobTitle === filterByJobTitle) &&
    (filterByExpert === '' || learner.expert.includes(filterByExpert)) &&  // Expert filter (if expert is an array)
    (searchQuery === '' || learner.name.toLowerCase().includes(searchQuery.toLowerCase()))
  )
  .sort((a, b) => {
    // Sort by registration date if sortBy is 'newest' or 'oldest'
    if (sortBy === 'newest') {
      return new Date(b.registrationDate) - new Date(a.registrationDate); // Newest to oldest
    } else if (sortBy === 'oldest') {
      return new Date(a.registrationDate) - new Date(b.registrationDate); // Oldest to newest
    }

    // Default: Sort by name in ascending order
    return a.name.localeCompare(b.name);
  });




  const totalLearnersCount = filteredLearners.length; // Calculate total count of filtered learners

  const handleGlobalSearch = (query) => {
    setIsGlobalSearch(true);
    setSearchQuery(query);

    // Simulate global search delay
    setTimeout(() => {
      setIsGlobalSearch(false);
    }, 3000); // 3 seconds delay for global search
  };

 // Pagination logic
 const indexOfLastLearner = currentPage * learnersPerPage;
 const indexOfFirstLearner = indexOfLastLearner - learnersPerPage;
 const currentLearners = filteredLearners.slice(indexOfFirstLearner, indexOfLastLearner);
 const totalPages = Math.ceil(filteredLearners.length / learnersPerPage);


 const handleNextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(prev => prev + 1);
  }
};

const handlePreviousPage = () => {
  if (currentPage > 1) {
    setCurrentPage(prev => prev - 1);
  }
};


  return (
    <div className='GridContainer' style={styles.gridContainer}>
      {/* Count of learners */}
      <h3 style={styles.header}>Expert <span className='text-gray-100' style={styles.count}>({totalLearnersCount})</span></h3>
      <div>
      {/* Filters */}
      <div className='filters' style={styles.filters}>
        {/* Filters on the left side */}
        <div className='filters' style={styles.filtersLeft}>
          {/* <select onChange={(e) => setFilterByCountry(e.target.value)} style={styles.select}>
            <option value="">Filter by Country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="India">India</option>
            <option value="Thailand">Thailand</option>
          </select> */}
           <div style={styles.learnersPerPage}>
          <label>Show: </label>
          <select className='GridDefault' onChange={(e) => setLearnersPerPage(parseInt(e.target.value, 10))} style={styles.select}>
            <option value="8">Default</option>
            <option value="10">10 per page</option>
            <option value="25">25 per page</option>
          </select>
        </div>

          <select onChange={(e) => setFilterByExpert(e.target.value)} style={styles.select}>
    <option value="">Filter by Expert</option> {/* Default option */}
    <option value="Air emissions (only for health)">Air emissions (only for health)</option>
    <option value="Water pollution and sanitation">Water pollution and sanitation</option>
    <option value="Chemicals and hazardous waste">Chemicals and hazardous waste</option>
    <option value="Environmental problems: Develop technology">Environmental problems: Develop technology</option>
    {/* Add more expert types as needed */}
  </select>

          <select onChange={(e) => setSortBy(e.target.value)} style={styles.select}>
  <option value="default">Default (Alphabetical)</option> {/* New default option */}
  <option value="newest">Newest to Oldest</option>
  <option value="oldest">Oldest to Newest</option>
</select>
        </div>

        {/* Search input on the right side */}
        <div className='filtersRight' style={styles.filtersRight}>
          <input 
            type="text" 
            placeholder="Expert search..." 
            onChange={(e) => handleGlobalSearch(e.target.value)} 
            style={styles.input}
          />
          {isGlobalSearch && <p style={styles.globalSearchMessage}>This is a global search, it may take a few minutes...</p>}
        </div>
      </div>

      {/* Learners Grid */}
      <div className="MainHomegrid" style={styles.learnersGrid}>
        {currentLearners.map(learner => (
          <LearnerCard 
            key={learner.id}
            picture={learner.picture}
            name={learner.name}
            jobTitle={learner.occupation} // Updated to match prop names
            country={learner.country}
            agency={learner.agency}
            expert={learner.expert} // Ensure this is an array of strings
            education={learner.education}
            organization={learner.organization}
            title={learner.title}
          />
        ))}
      </div>
</div>
      {/* Pagination */}
      <div style={styles.paginationContainer}>
       
        <div style={styles.pagination}>
  {/* Previous button */}
  <button
    onClick={handlePreviousPage}
    disabled={currentPage === 1}
    style={styles.button}
  >
    Previous
  </button>

  {/* Always show the first page */}
  <button
    onClick={() => setCurrentPage(1)}
    style={currentPage === 1 ? styles.currentPage : styles.pageButton}
  >
    1
  </button>

  {/* Ellipsis if there are more than 2 pages between the first and current */}
  {currentPage > 3 && <span style={styles.ellipsis}>...</span>}

  {/* Show previous page only if it's not the first page */}
  {currentPage > 2 && (
    <button
      onClick={() => setCurrentPage(currentPage - 1)}
      style={styles.pageButton}
    >
      {currentPage - 1}
    </button>
  )}

  {/* Show current page if it's not the first or last */}
  {currentPage !== 1 && currentPage !== totalPages && (
    <button style={styles.currentPage}>
      {currentPage}
    </button>
  )}

  {/* Show next page only if it's not the last page */}
  {currentPage < totalPages - 1 && (
    <button
      onClick={() => setCurrentPage(currentPage + 1)}
      style={styles.pageButton}
    >
      {currentPage + 1}
    </button>
  )}

  {/* Ellipsis if there are more than 2 pages between the current and last */}
  {currentPage < totalPages - 2 && <span style={styles.ellipsis}>...</span>}

  {/* Always show the last page */}
  {totalPages > 1 && (
    <button
      onClick={() => setCurrentPage(totalPages)}
      style={currentPage === totalPages ? styles.currentPage : styles.pageButton}
    >
      {totalPages}
    </button>
  )}

  {/* Next button */}
  <button
    onClick={handleNextPage}
    disabled={currentPage === totalPages}
    style={styles.button}
  >
    Next
  </button>
</div>


      </div>
    </div>
  );
}
// Inline styles
const styles = {
select:{
  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  padding:'10px',
},

  gridContainer: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    margin:'0 10%',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
  },
  header: {
    fontSize: '30px',
    fontWeight: 'bold',
    padding:'20px 0px',
  },
  count: {
    fontSize: '24px',
    color: 'gray',
  },
  filters: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  filtersLeft: {
    display: 'flex',
    gap: '10px',
  },
  filtersRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  input: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  globalSearchMessage: {
    color: '#666',
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    marginTop: '20px',
  },
  learnersPerPage: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    background:'white',
    gap: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  },
  button: {
    padding: '10px 20px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  pageButton: {
    padding: '10px 15px',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  currentPage: {
    padding: '3px 10px',
    border: '1px solid #333',
    borderRadius: '4px',
    backgroundColor: '#082D9A',
    color: '#fff',
  },
  ellipsis: {
    padding: '10px 15px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px', // Adjust width as needed
    marginBottom: '20px',
    background:'white',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  image: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '15px',
  },
  name: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  detailRow: {
    display: 'flex',
    marginBottom: '5px',
    width: '100%', // Ensure the details take full width
  },
  detailLabel: {
    flex: '0 0 30%', // Labels take 30% of the width
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize:'12px',
  },
  detailValue: {
    flex: '1 0 70%', // Values take 70% of the width
    textAlign: 'left',
    fontSize:'11px',
  },

  detailValue: {
    flex: '1 0 70%', // Values take 70% of the width
    textAlign: 'left',
    fontSize:'11px',
    color:'gray',
  },
};


export default LearnerGrid;
