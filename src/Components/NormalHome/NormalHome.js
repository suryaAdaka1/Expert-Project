import React from "react";
import Navbar from "./Navbar";
import banner from "../Images/banner.jpg";
import LogoPack from "../Images/logopack.png";
import LearnerGrid from "./LearnerGrid";
import Aboutus from "../Images/Aboutus.jpg";
import AboutusBottom from "../Images/AboutusBottom.png";
import AboutusBottoms from "../Images/AboutusBackground.jpg";
import "./Navbar.css";
import ScrollToTopButton from "./ScrollToTopButton";

function NormalHome() {
  return (
    <div>
      <Navbar />

      {/* Home Section with background banner */}
      <section id="home" style={styles.homeSection}>
        {/* <img src={LogoPack} alt="logos" style={styles.img} /> */}
        <h3 style={styles.heading}>HUB OF  TALENTS </h3>
        <h3 style={styles.heading}>in </h3>
        <h3 style={styles.heading}>ENVIRONMENTAL HEALTH</h3>
      </section>

      {/* Learner Grid Section */}
      {/* <section id="LearnerGrid" className="bg-gray-50" style={styles.GridFull}>
        <LearnerGrid />
      </section> */}

      {/* About Us Section */}
      <section
        id="aboutus"
        className="about-us-section !bg-white"
        style={styles.aboutUsSection}
      >
        <h2
          className="text-center text-3xl font-bold"
          style={styles.aboutUsTitle}
        >
          About Us
        </h2>
        <div className="about-us-content" style={styles.flexContainer}>
          <p style={styles.paragraph}>
            Science, research and innovations are moving at a fast pace.
            Coordination and collaboration allow for exchange of information and
            ideas across the globe. The collaboration of research scientists
            with similar interests allows for specialization, both at the level
            of the institution and the nation, which in turn fosters
            international collaborations whereby each country can share the
            expertise from their network of institutions, possibly becoming
            regional hubs of expertise and information. Thailand is well-known
            on the international arena, with many geographical and logistical
            advantages to becoming a hub, especially for the Southeast Asian
            region.
            <br></br>
            <br></br>This has led to a national policy to develop a Hub of
            Talents and Hub of Knowledge. The Hub of Talents refers to research
            and academic institutions, whether they be governmental, public or
            private, that can be centers of expertise and know-how, and that are
            internationally accepted. They should also have the infrastructure
            to support high-level research, whether by local researchers or in
            collaboration with foreign experts. The Hub of Knowledge refers to
            research and academic institutions, whether they be government,
            public or private, that can be centers of knowledge and training,
            focusing in areas in which Thailand has the greatest expertise, such
            that Thailand can be a hub of expertise for the region.
          </p>
        
        </div>
        {/* Additional paragraphs below the flex container */}
        <p style={styles.paragraph}>
          In order to foster linkages, both at the local and national levels, as
          well as at the international levels, by creating these hubs, one of
          the first steps is the development of a platform for collaboration in
          the form of databases of experts and institutions. The main objective
          for this database is to allow the search for research scientists and
          institutions with the expertise and related facilities in various
          aspects that can be identified and contacted, whether it be to provide
          expert information to governmental, private, or other agencies that
          need it, to join in and/or support collaborative research, or to join
          in other research and academic activities that would be of use to
          network members, e.g., act as scientific and academic advisors on
          student committees.
        </p>

        <div className="about-us-content my-10" style={styles.flexContainer}>
          <img src={AboutusBottom} alt="About Us" style={styles.aboutImages} />
          <p className="ml-4" style={styles.paragraph}>
            This database of experts in environmental health (impacts of
            chemical pollutants in air, water, and hazardous waste) was
            developed by the Center of Excellence on Environmental Health and
            Toxicology (COE EHT), through{" "}
            <strong>
              the Hub of Talents in Environmental Health project of the National
              Research Council of Thailand
            </strong>
            . <br></br>
            <br></br>This Center of Excellence has 5 members, including the
            Chulabhorn Research Institute (CRI), the Chulabhorn Graduate
            Institute (CGI), Mahidol University (MU), Thammasat University (TU)
            and Burapha University (BUU).
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
  <h1 style={styles.contactTitle}>Center of Excellence on Environmental Health and Toxicology (CoE EHT)</h1>
  <p style={styles.contactParagraph}>Faculty of Science, Mahidol University</p>
  <p style={styles.contactParagraph}>K Building, 5th Floor, K 514, Rama VI Road</p>
  <p style={styles.contactParagraph}>Bangkok 10400, Thailand</p>
  <p style={styles.contactParagraph}>Tel: 0-2201-5913-14</p>
  <p style={styles.contactParagraph}>E-mail: <a href="mailto:sasiwimol@cri.or.th" style={styles.contactLink}>sasiwimol@cri.or.th</a></p>
  <p style={styles.contactParagraph}>Website: <a href="http://eht.sc.mahidol.ac.th" target="_blank" rel="noopener noreferrer" style={styles.contactLink}>eht.sc.mahidol.ac.th</a></p>
  <ScrollToTopButton/>
</section>

    </div>
  );
}

const styles = {
  GridFull:{
    borderBottom: 'solid #c1bfbf 1px',
  },
  heading:{
    color:'black',
    fontSize:'1.8rem',
    fontWeight:'800',
    letterSpacing: "2px",  // Add letter spacing
    wordSpacing: "5px", 
    padding:'0',
    marginTop:'-5px',
  },
  contactSection: {
    padding: '50px 10%', // Adjusts spacing from top/bottom and sides
    backgroundColor: '#082D9A',
    color: '#fff',
  },

  contactTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },

  contactParagraph: {
    fontSize: '16px',
    marginBottom: '10px',
  },

  contactLink: {
    color: '#fff',
    textDecoration: 'underline',
  },
  img: {
    maxWidth: "200px",
    marginLeft: "5%",
  },

  homeSection: {
    height: "70vh",
    padding: "80px 20px 20px",
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#fff",
    display: "flex",  // Enable Flexbox
    flexDirection: "column",  // Arrange children (h3 elements) in a column
    justifyContent: "top",  // Vertically center the content
    alignItems: "center",  // Horizontally center the content
    textAlign: "center",  // Ensure text is centered
  },

  // About Us Section styles

  aboutUsSection:{
    padding: "40px 10%",
    backgroundColor: "#f9f9f9",
    backgroundImage: `url(${AboutusBottoms})`,  // Use the imported image
    backgroundPosition: "center",  // Center the image
    backgroundSize: "cover",  // Make the image cover the entire section
    backgroundRepeat: "no-repeat",  // Prevent the image from repeating
  },
  
  

  aboutUsTitle: {
    textAlign: "center",
    marginBottom: "30px",
  },

  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },

  paragraph: {
    flex: 1,
    marginRight: "20px",
    lineHeight: "1.6",
    textAlign: "justify",
  },

  aboutImage: {
    width: "320px",
    height: "350px",
  },

  aboutImages: {
    width: "200px",
    height: "200px",
  },

  section: {
    padding: "80px 20px 20px",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
  },

  "@media (max-width: 600px)": {
    flexContainer: {
      flexDirection: "column",
    },
    aboutImage: {
      width: "100%",
      height: "auto",
      marginBottom: "20px",
    },
  },
};

export default NormalHome;
