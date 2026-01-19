
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="title">
                <section className="tf-blog-detail">
                    <div className="tf-container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="detail-inner">
                                    <div className="content-top">
                                        <h4 className="title">I Believe Everyone Can Be A Designer As Long They Love To Create Design</h4>
                                        <div className="author-infor">
                                            <div className="image">
                                                <img src="/assets/images/blog/author.jpg" alt="Image" />
                                            </div>
                                            <span>by</span>
                                            <Link href="#">Binasea</Link>
                                            <span className="mr9">|</span>
                                            <span>August 13, 2022</span>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <img src="/assets/images/blog/blog-details-1.jpg" alt="Image" />
                                    </div>
                                    <div className="content-inner">
                                        <h6 className="title">What Is The Most Fun Thing To Become A Designer?</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Cupidatat non</p>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    </div>
                                    <div className="image style-2">
                                        <img className="mr20" src="/assets/images/blog/blog-details-2.jpg" alt="Image" />
                                        <img src="/assets/images/blog/blog-details-3.jpg" alt="Image" />
                                    </div>
                                    <div className="content-inner">
                                        <h6 className="title">How Is Your Daily Routine?</h6>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Cupidatat non</p>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                                    </div>
                                    <div className="image">
                                        <img src="/assets/images/blog/blog-details-4.jpg" alt="Image" />
                                    </div>
                                    <div className="content-inner">
                                        <h6 className="title">Middle Post Heading</h6>
                                        <p>Middle Post Heading</p>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                    </div>
                                    <div className="content-bottom">
                                        <div className="widget widget-socical">
                                            <h6 className="widget-title">Share:</h6>
                                            <ul>
                                                <li><Link href="#" className="icon-fl-mess" /></li>
                                                <li><Link href="#" className="icon-fl-coolicon" /></li>
                                                <li><Link href="#" className="icon-fl-facebook" /></li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-tag">
                                            <h6 className="widget-title">Tags:</h6>
                                            <ul>
                                                <li><Link href="#">Bitcoin,</Link></li>
                                                <li><Link href="#">Token,</Link></li>
                                                <li><Link href="#">Wallet</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div id="comments">
                                        <h5 className="heading">Leave A Comment</h5>
                                        <form action="contact/contact-process.php" method="post" id="commentform" className="comment-form">
                                            <fieldset className="name"><input type="text" id="name" placeholder="Name" className="tb-my-input" name="name" tabIndex={2} aria-required="true" required /></fieldset>
                                            <fieldset className="email"><input type="email" id="email" placeholder="Email *" className="tb-my-input" name="email" tabIndex={2} aria-required="true" required /></fieldset>
                                            <fieldset className="message"><textarea id="message" name="message" rows={4} placeholder="Message" tabIndex={4} aria-required="true" required /></fieldset>
                                            <div className="btn-submit"><button className="tf-button" type="submit">Send comment</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}