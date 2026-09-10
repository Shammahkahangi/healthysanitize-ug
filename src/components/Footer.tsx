import { Link } from "react-router-dom";
import logo from "@/assets/clinova-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link to="/">
              <img src={logo} alt="Clinova — hospital laundry Uganda" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-primary-foreground/80 max-w-md">
              Setting the standard in medical-grade hygiene solutions for healthcare 
              facilities across Uganda.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/services" className="hover:text-secondary transition-colors">Hospital Linen</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Medical-Grade Cleaning</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">24/7 Operations</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Full Management</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Clinova - M&T Cleaners Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
