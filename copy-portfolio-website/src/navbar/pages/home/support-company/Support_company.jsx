import { motion } from 'framer-motion';
import './Support_company.css';
import Logo1 from '../../../../assets/support_company_logo/company-logo-1.jpg';
import Logo2 from '../../../../assets/support_company_logo/company-logo-2.png';
import Logo3 from '../../../../assets/support_company_logo/company-logo-3.png';
import Logo4 from '../../../../assets/support_company_logo/company-logo-4.png';
import Logo5 from '../../../../assets/support_company_logo/company-logo-5.png';
import Logo6 from '../../../../assets/support_company_logo/company-logo-6.png';
import Logo7 from '../../../../assets/support_company_logo/company-logo-7.webp';
import Logo8 from '../../../../assets/support_company_logo/company-logo-8.webp';
import Logo9 from '../../../../assets/support_company_logo/company-logo-9.png';
import Logo10 from '../../../../assets/support_company_logo/company-logo-10.png';
import Logo11 from '../../../../assets/support_company_logo/company-logo-11.png';
import Logo12 from '../../../../assets/support_company_logo/company-logo-12.png';
import Logo13 from '../../../../assets/support_company_logo/company-logo-13.png';
import Logo14 from '../../../../assets/support_company_logo/company-logo-14.webp';
import Logo15 from '../../../../assets/support_company_logo/company-logo-15.png';

const logos = [
  { name: 'Company 1', src: Logo1 },
  { name: 'Company 2', src: Logo2 },
  { name: 'Company 3', src: Logo3 },
  { name: 'Company 4', src: Logo4 },
  { name: 'Company 5', src: Logo5 },
  { name: 'Company 6', src: Logo6 },
  { name: 'Company 7', src: Logo7 },
  { name: 'Company 8', src: Logo8 },
  { name: 'Company 9', src: Logo9 },
  { name: 'Company 10', src: Logo10 },
  { name: 'Company 11', src: Logo11 },
  { name: 'Company 12', src: Logo12 },
  { name: 'Company 13', src: Logo13 },
  { name: 'Company 14', src: Logo14 },
  { name: 'Company 15', src: Logo15 },
];

const itemVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Support_company() {
  return (
    <div className="support-company-bg">
      <div className="support-company-grid">
        {logos.map((logo, index) => (
          <motion.div
            className="support-company-cell"
            key={logo.name}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              className="support-company-logo"
              src={logo.src}
              alt={logo.name}
              title={logo.name}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}