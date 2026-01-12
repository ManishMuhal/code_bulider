import Link from "next/link"

export default function Footer1() {
    return (
        <>

            <footer className="footer">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md-3">
                            <div className="widget widget-infor">
                                <div className="logo">
                                    <img id="logo_footer" src="/assets/images/logo/logo_dark.png" alt="Image" width={'200px'}/>
                                </div>
                                <p className="content">PM IT Solution is a leading result oriented Web, App, Game Development Company. We have an experienced Developers for Web, App and Game development for getting our services please get in touch with us.</p>
                                <ul className="social-item">
                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram-plane" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                    <li><Link href="#"><i className="icon-fl-tik-tok-2" /></Link></li>
                                    <li><Link href="#"><i className="icon-fl-vt" /></Link></li>
                                </ul>
                                <p className="copy-right">Copyright © 2020-23 PM IT Solution.
                                    All rights reserved.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-5">
                            <div className="widget widget-menu">
                                <div className="menu menu-1">
                                    <h6 className="widget-title">Services</h6>
                                    <ul>
                                        <li><Link href="#">Digital Marketing</Link></li>
                                        <li><Link href="#">Web Development</Link></li>
                                        <li><Link href="#">Mobile App Development</Link></li>
                                        <li><Link href="#">Game Development</Link></li>
                                        <li><Link href="#">E commerce Development</Link></li>
                                        <li><Link href="#">Software Development</Link></li>

                                    </ul>
                                </div>
                                <div className="menu menu-2">
                                    <h6 className="widget-title">Quick Links</h6>
                                    <ul>
                                        <li><Link href="#">Home </Link></li>
                                        <li><Link href="#">About </Link></li>
                                        <li><Link href="#">Work </Link></li>
                                        <li><Link href="#">Blog </Link></li>
                                        <li><Link href="#">Digital Marketing Internship  </Link></li>
                                        <li><Link href="#">Contact Us </Link></li>
                                    </ul>
                                </div>
                                {/* <div className="menu menu-3">
                                    <h6 className="widget-title">Resoure</h6>
                                    <ul>
                                        <li><Link href="#">Blogs</Link></li>
                                        <li><Link href="#">Help and Center</Link></li>
                                        <li><Link href="#">FaQs</Link></li>
                                    </ul>
                                </div>
                                <div className="menu menu-4">
                                    <h6 className="widget-title">My account</h6>
                                    <ul>
                                        <li><Link href="#">Profile</Link></li>
                                        <li><Link href="#">My wallet</Link></li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-4">
                            <div className="widget widget-subcribe">
                                <h6 className="widget-title">Subscribe Us</h6>
                                <p className="content">Signup for our newsletter to get the latest news in your inbox.</p>
                                <form action="#" id="subscribe-form">
                                    <input type="email" placeholder="Info@yourgmail.com" required id="subscribe-email" />
                                    <button className="tf-button" type="submit" id="subscribe-button"><i className="icon-fl-send" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
