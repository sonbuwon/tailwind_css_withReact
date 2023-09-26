function Footer() {
  return (
    <div className="bg-[#27374D] w-full p-6 grid grid-cols-[7fr,3fr] text-yellow-100">
      <div>
        <h2 className="font-bold text-lg">Company Name</h2>
        <p>Address: 123 Main Street, City, Country</p>
        <p>Phone: +1 123-456-7890</p>
      </div>

      <div>
        <h2 className="font-bold text-lg">Quick Links</h2>
        <ul>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
