const Header = () =>{
    return(
       <>

       <div className="header_main">
        <button>Al Quran</button>
        <button>Books</button>
        <button className="medinabtn" style={{backgroundColor:"rgb(216, 65, 72)"}}>Medina Channel</button>
        <img src="https://resources.dawateislami.net/global/globalhomeweb/resources/assets/images/main-img/logo.jpg" alt="logo" />
        <button className="magazinebtn" style={{backgroundColor:"rgb(216, 65, 72)"}}>Magazines</button>
        <button>Courses</button>
        <button>Media</button>

       </div>

       <div className="header_nav">
          <h4>Home</h4>
          <h4>About Us</h4>
          <h4>Islamic Services</h4>
          <h4>Social Services</h4>
          <h4>News & Updates</h4>
          <h4>Departments</h4>
          <h4>Contact Us</h4>
          <input type="text" placeholder="Search" />
          <button>Donate</button>
       </div>
       
       
       </>
    )
}

export default Header;