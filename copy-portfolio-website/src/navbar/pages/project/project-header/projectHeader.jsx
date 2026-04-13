import './projectHeader.css';
import project1 from '../../../../assets/mr-sing,s.jpg';
import project2 from '../../../../assets/Behance.net.png';
import project3 from '../../../../assets/zyappy-mobile-app.jpg';
import project4 from '../../../../assets/sixn.png';
import project5 from '../../../../assets/shawarma-store.jpg';
import project6 from '../../../../assets/threen.png';
import project7 from '../../../../assets/twon.png';
import project8 from '../../../../assets/global-united-esales.png';
import project9 from '../../../../assets/46.png';
import project10 from '../../../../assets/44.png';
import project11 from '../../../../assets/45.png';
import project12 from '../../../../assets/47.png';
import project13 from '../../../../assets/445.png';
import project14 from '../../../../assets/446.png';
import project15 from '../../../../assets/grandroyale (1).jpg';
import project16 from '../../../../assets/ormith (1).jpg';
import project17 from '../../../../assets/4n.png';
import project18 from '../../../../assets/newyorker.jpeg';
import project19 from '../../../../assets/legal.jpg';
// import project20 from '../../../../assets/project20.jpg';
// import project21 from '../../../../assets/project21.jpg';
// import project22 from '../../../../assets/project22.jpg';
import { MdArrowOutward } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ProjectDetails from './project-details/projectDetails';

export default function ProjectHeader() {
  const projects = [
    {
      id: 1,
      title: "Mr. Singh's",
      category: "Development",
      imageUrl: project1,
      links: "https://mrsinghspizza.co.uk/food"
    },
    {
      id: 2,
      title: "ZYAPPY Web",
      category: "Development",
      imageUrl: project2,
      links: "https://www.behance.net/"
    },
    {
      id: 3,
      title: "ZYAPPY Mobile App",
      category: "Development",
      imageUrl: project3,
      links: "https://posstagging.zyappy.com/login"
    },
    {
      id: 4,
      title: "SixN",
      category: "Development",
      imageUrl: project4,
      links: "https://www.exactflow.pl/en"
    },
    {
      id: 5,
      title: "Shawarma Store",
      category: "Development",
      imageUrl: project5,
      links: "https://www.shawarmastop.co/"
    },
    {
      id: 6,
      title: "Janjapan",
      category: "Development",
      imageUrl: project6,
      links: "https://janjapan.com/"
    },
    {
      id: 7,
      title: "Jantrading",
      category: "Development",
      imageUrl: project7,
      links: "http://jantradingco.jp/"
    },
    {
      id: 8,
      title: "Global Esales",
      category: "Development",
      imageUrl: project8,
      links: "https://guesb2b.com/auth/sign-in"
    },
    {
      id: 9,
      title: "Janslawfirm",
      category: "Development",
      imageUrl: project9,
      links: "https://janslawfirm.co.uk/"
    },
    {
      id: 10,
      title: "Nowfluence",
      category: "Development",
      imageUrl: project10,
      links: "https://app.nowfluence.co/"
    },
    {
      id: 11,
      title: "Getcontractorplus",
      category: "Development",
      imageUrl: project11,
      links: "https://app.dev.getcontractorplus.com/auth/login"
    },
    {
      id: 12,
      title: "Zoho",
      category: "Development",
      imageUrl: project12,
      links: "https://www.zoho.com/"
    },
    {
      id: 13,
      title: "Onlinelegaladvise",
      category: "Development",
      imageUrl: project13,
      links: "https://onlinelegaladvise.com/"
    },
    {
      id: 14,
      title: "Servrhotels",
      category: "Development",
      imageUrl: project14,
      links: "https://www.servrhotels.com//"
    },
    {
      id: 15,
      title: "Grand Royale Group",
      category: "Development",
      imageUrl: project15,
      links: "https://grandroyalegroup.com.au/"
    },
    {
      id: 16,
      title: "Ormith",
      category: "Development",
      imageUrl: project16,
      links: "https://ormith.com/"
    },
    {
      id: 17,
      title: "Saksfifthavenue",
      category: "Development",
      imageUrl: project17,
      links: "https://www.saksfifthavenue.com/"
    },
    {
      id: 18,
      title: "The New Yorker",
      category: "Development",
      imageUrl: project18,
      links: "https://www.newyorker.com/"
    },
    {
      id: 19,
      title: "LEGAL MOMO",
      category: "Development",
      imageUrl: project19,
      links: "https://legalmomo.com/"
    },
    {
      id: 20,
      title: "Signin - QEF",
      category: "Development",
      // imageUrl: project20,
      links: "https://qef-fe.vercel.app/"
    },
    {
      id: 21,
      title: "Samsungnac",
      category: "Development",
      // imageUrl: project21,
      links: "http://samsungnac.co.za/"
    },
        {
      id: 22,
      title: "Barney's",
      category: "Development",
      // imageUrl: project22,
      links: "https://barneysbeer.co.uk/"
    }
  ];

  return (
    <div className="project-header-container">
      <div className="project-header-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-header-card">

            {/* Hover Slide Image Container */}
            <div className="project-header-image-wrapper hover-container">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-header-image main-image"
              />
              <div className="two-images-group">
                <img src={project.imageUrl} alt={`${project.title} slide`} />
              </div>

              <Link to={project.links} target="_blank"><MdArrowOutward className="project-header-arrow-icon" /></Link>
            </div>

            <div className="project-header-content">
              <h3 className="project-header-title">{project.title}</h3>
              <p className="project-header-category">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
      <ProjectDetails />
    </div>
  );
}