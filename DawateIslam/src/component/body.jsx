const Body = () =>{
    return(
        <>
        <div className="body_main">
            <h1>Welcome To DawateIslami Global</h1>
            <h3>Please Select Language</h3>

            <div className="lang_body">

            <section className="lang_main" style={{backgroundColor:"black", color:"white"}}>
                <div className="lang_title">
                <img src="https://resources.dawateislami.net/global/globalhomeweb/resources/assets/images/lang/en.png" alt="" />
              <h1 style={{textDecoration:"underline"}}>English</h1>
              </div>
              <p>If you select English, next time you will be automatically redirected to English by cookies.</p>
              
             
            </section>


            <section className="lang_main" style={{backgroundColor:"rgb(216, 65, 72)", color:"white", borderStyle:"none"}}>
                <div className="lang_title">
                <img src="https://resources.dawateislami.net/global/globalhomeweb/resources/assets/images/lang/ur.png" alt="" />
              <h1 style={{textDecoration:"underline"}}>اردو</h1>
              </div>
              <p>اگر آپ اردو کو منتخب کرتے ہیں، تو اگلی بار آٹومیٹک کوکیز کے ذریعے اردو ویب سائٹ اوپن ہوگی</p>
              
             
            </section>

            <section className="lang_main" style={{height:"150px", borderStyle:"none", backgroundColor:"black", color:"white"}}>
                <div className="lang_title">
                <img src="https://resources.dawateislami.net/global/globalhomeweb/resources/assets/images/lang/ar.png" alt="" />
              <h1 style={{textDecoration:"underline"}}>العربية</h1>
              </div>
              <p>للا نتقال إلى النسخة العربية انقر هنا</p>
              
             
            </section>

            </div>
           





        </div>

        <div className="body_sec1">
           <img src="https://data2.dawateislami.net/static/images/main-website/global/new-books-library-en.webp" alt="" />

           <section>
            <h2>Great Treasure of Books</h2>
            <h1>Al Madina Online</h1>
            <h1>Books Library</h1>
            <h3>is Updated Now</h3>

            <button><b>Read More</b></button>
           </section>


        </div>
        
        
        </>
    )
}

export default Body;