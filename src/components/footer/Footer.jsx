import footetCSS from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={footetCSS.FooterWrapper}>
      <div>
        <div>
          <h3>Comany</h3>
          <ul>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
          </ul>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>Email Us</li>
            <li>Message Us</li>
          </ul>
        </div>
      </div>
      <div className={footetCSS.FooterAddress}>
        <p>2402 shehu shagari way,</p>
        <p>Maitama,</p>
        <p>Abuja FCT,</p>
        <p>Nigeria.</p>
      </div>
    </div>
  );
};
export default Footer;
