import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.png";
import Home from "../assets/Home.png";
import { Input } from "postcss";
import { FaFire, FaHeadphonesAlt, FaHome, FaIcicles, FaICursor, FaInfoCircle, FaMicrophone, FaPhotoVideo, FaPlayCircle, FaPowerOff, FaQuestionCircle, FaRegFileExcel, FaSms, FaVideo, FaVideoSlash, IconName } from "react-icons/fa";

const navbar = () => {
  return (
    // <div id={styles.nav} className="row">
    //   <div className="col-md-3 col-lg-3 col-sm-12">
    // <nav>
    //   <div id={styles.wrapper} className='row'>
    //   <div className='col-md-4'></div>
    //   <div className='col-md-4'>
    //   <Image
    //   className="image"
    //   src={logo}
    //   alt="Picture of the author"
    //   width={144}
    //   height={35}
    // />
    // </div>
    //   <div className='col-md-4'></div>
    //   </div>
    //   <div className="row">
    //     <div className="col-md-2"></div>

    //   </div>
    //   <ul>
    //     <li>

    //       <Link href={'/'}>Home</Link>
    //     </li>
    //   </ul>
    // </nav>
    // </div>
    // </div>
    // <div className={styles.navcontainer} >

    //   <div className={styles.logo}>

    //   <Image
    //      className={styles.Imagelogo}
    //      src={logo}
    //      alt="Picture of the author"
    //      width={144}
    //      height={35}

    //      />

    //   </div>
    //   <div className={styles.wrapper}>
    //     <div className={styles.menu}>

    //     <h5> Menu</h5>
    //     </div>
    //     <div className={styles.list}>

    //       <Link href="#">home
    //       </Link>
    //     <ul>

    //      {/* <Image className={styles.Icons}
    //      src={Home}
    //      /> */}

    //         <li>
    //         <a href="#">Create Revohloo</a>
    //         </li>
    //         <li>
    //         <a href="#">Hot & New!</a>
    //         </li>
    //         <li>
    //         <a href="#">Revohloo Videos</a>
    //         </li>
    //         <li>
    //         <a href="#">Arstists</a>
    //         </li>
    //         <li>
    //         <a href="#">About Us</a>
    //         </li>

    //         </ul>
    //         </div>

    //          </div>

    //          <div className={styles.wrapper}>
    //     <div className={styles.menu}>

    //     <h5> Settings</h5>
    //     </div>
    //     <div className={styles.list}>
    //     <ul>
    //       <li>
    //         <a href="#">Faqs</a>
    //         </li>
    //         <li>
    //         <a href="#">Help Canter</a>
    //         </li>
    //         <li>
    //         <a href="#">Term of Use</a>
    //         </li>
    //         <li>
    //         <a href="#">Privacy Policy</a>
    //         </li>
    //         <li>
    //         <a href="#">Log Out</a>
    //         </li>

    //         </ul>
    //         </div>

    //          </div>
    //          <div className={styles.menu}>

    //     <h5> Questions?Contact US</h5>
    //     </div>
    //      </div>

    <div className={styles.bnr}>
      <div className="row">
        <div className="col-lg-12">
          <div className={styles.navdiv}>
            <div className={styles.mainLogo}>
              <Image src={logo} className={styles.logo} />
            </div>
            {/* menu */}
            <div className={styles.menu}>
           <h5> Menu</h5>     
           <ul>
            <li>
           <FaHome size={20} color={''} className={ styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>Home
           </Link>
            </li>
            <li>
           <FaPlayCircle size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>Create Revohloo
           </Link>
            </li>
            <li>
           <FaFire size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>Hot & New!
           </Link>
            </li>

            <li>
           <FaPhotoVideo size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>Revohloo Videos
           </Link>
            </li>
            <li>
           <FaMicrophone size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>Arstists
           </Link>
            </li>
            <li>
           <FaInfoCircle size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>About Us
           </Link>
            </li>
           </ul>
            </div>

{/* setting */}
           <div className={styles.menu}>
           <h5> Setting</h5>     
           <ul>
            <li>
           <FaSms size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>FAQs
           </Link>
            </li>
            <li>
           <FaHeadphonesAlt size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>Help Center
           </Link>
            </li>
            <li>
           <FaRegFileExcel size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>Terms Of Use
           </Link>
            </li>

            <li>
           <FaPhotoVideo size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>Privacy Policy
           </Link>
            </li>
            <li>
           <FaPowerOff size={20} className={styles.sidelogos}/>
            <Link href="#" className={styles.linkk}>Logout
           </Link>
            </li>
           
           </ul>
            </div>
            <div className={styles.question}>
              <FaQuestionCircle size={20}/>
              <h6> Question? <span>Contact Us</span></h6>
            </div>

          </div>
        </div>
      
      </div>
    </div>
  );
};

export default navbar;
