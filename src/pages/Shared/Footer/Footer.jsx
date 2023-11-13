const Footer = () => {
  return (
    <footer
      style={{ width: "100%" }}
      className="w-full footer p-10 bg-dark1 text-white"
    >
      <aside>
        <p className="text-2xl font-bold">Car<span className="text-primaryColor ">Check</span> Ltd.</p>
        <br />
        <p>Providing reliable service  since 2023</p>
      </aside>
      <nav>
        <header className="font-bold uppercase text-primaryColor">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="font-bold uppercase text-primaryColor">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="font-bold uppercase text-primaryColor">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
