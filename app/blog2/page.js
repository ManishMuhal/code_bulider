
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Blog2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog 2" breadcrumbHeading>
                <section className="tf-blog">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="main-content">
                                    <article className="tf-blog-item style-2">
                                        <div className="image">
                                            <Link href="/blog-details"><img src="/assets/images/blog/blog-5.jpg" alt="Image" /></Link>
                                        </div>
                                        <div className="title">
                                            <h5><Link href="/blog-details">The Next Big Trend In Crypto</Link></h5>
                                            <Link href="/blog-details" className="tf-button style-1"><span>Music NFT’s</span></Link>
                                        </div>
                                        <p className="content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...</p>
                                        <div className="meta">
                                            <span className="admin"> <i className="fal fa-user" />
                                                By SalvadorDali
                                            </span>
                                            <span className="date"><i className="far fa-clock" />Feb 19, 2021</span>
                                        </div>
                                    </article>
                                    <article className="tf-blog-item style-2">
                                        <div className="image">
                                            <Link href="/blog-details"><img src="/assets/images/blog/blog-6.jpg" alt="Image" /></Link>
                                        </div>
                                        <div className="title">
                                            <h5><Link href="/blog-details">Decentraland And Meta Verse</Link></h5>
                                            <Link href="/blog-details" className="tf-button style-1"><span>Music NFT’s</span></Link>
                                        </div>
                                        <p className="content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...</p>
                                        <div className="meta">
                                            <span className="admin"> <i className="fal fa-user" />
                                                By SalvadorDali
                                            </span>
                                            <span className="date"><i className="far fa-clock" />Feb 19, 2021</span>
                                        </div>
                                    </article>
                                    <article className="tf-blog-item style-2">
                                        <div className="image">
                                            <Link href="/blog-details"><img src="/assets/images/blog/blog-7.jpg" alt="Image" /></Link>
                                        </div>
                                        <div className="title">
                                            <h5><Link href="/blog-details">Beeple Everydays The First 10 Days</Link></h5>
                                            <Link href="/blog-details" className="tf-button style-1"><span>Music NFT’s</span></Link>
                                        </div>
                                        <p className="content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters...</p>
                                        <div className="meta">
                                            <span className="admin"> <i className="fal fa-user" />
                                                By SalvadorDali
                                            </span>
                                            <span className="date"><i className="far fa-clock" />Feb 19, 2021</span>
                                        </div>
                                    </article>
                                    <div className="load-more style-2">
                                        <Link className="tf-button loadmore" href="#">Load more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="side-bar">
                                    <div className="widget widget-category">
                                        <h6 className="widget-title">Category</h6>
                                        <ul>
                                            <li><Link href="#">Music NFT’s</Link> <span>300</span></li>
                                            <li><Link href="#">NFT Creators</Link> <span>23</span></li>
                                            <li><Link href="#">Rare Products</Link> <span>12</span></li>
                                            <li><Link href="#">Rare Vedios</Link> <span>76</span></li>
                                            <li><Link href="#">Digital Arts</Link> <span>123</span></li>
                                            <li><Link href="#">App Music NFT’s</Link> <span>64</span></li>
                                            <li><Link href="#">Application</Link> <span>108</span></li>
                                            <li><Link href="#">Art</Link> <span>67</span></li>
                                        </ul>
                                    </div>
                                    <div className="widget widget-recent-post">
                                        <h6 className="widget-title">Recent Post</h6>
                                        <ul>
                                            <li>
                                                <div className="post-img">
                                                    <img src="/assets/images/blog/recent-post-1.jpg" alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <h6 className="title"><Link href="/blog-details">Best Corporate Tips You Will Read This Year. </Link></h6>
                                                    <Link href="/blog-details" className="post-category"> Music NFT’s</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="post-img">
                                                    <img src="/assets/images/blog/recent-post-2.jpg" alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <h6 className="title"><Link href="/blog-details">Should Fixing Corporate Take 100 Steps. </Link></h6>
                                                    <Link href="/blog-details" className="post-category"> Music NFT’s</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="post-img">
                                                    <img src="/assets/images/blog/recent-post-3.jpg" alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <h6 className="title"><Link href="/blog-details">The Next 100 Things To Immediately Do About </Link></h6>
                                                    <Link href="/blog-details" className="post-category"> Music NFT’s</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="post-img">
                                                    <img src="/assets/images/blog/recent-post-4.jpg" alt="Post New" />
                                                </div>
                                                <div className="post-content">
                                                    <h6 className="title"><Link href="/blog-details">Top 5 Lessons About Corporate To Learn </Link></h6>
                                                    <Link href="/blog-details" className="post-category"> Music NFT’s</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget-tag ">
                                        <h6 className="widget-title">Popular Tag</h6>
                                        <ul>
                                            <li><Link href="#">Bitcoin</Link></li>
                                            <li><Link href="#">NFT</Link></li>
                                            <li><Link href="#">Bids</Link></li>
                                            <li><Link href="#">Digital</Link></li>
                                            <li><Link href="#">Arts</Link></li>
                                            <li><Link href="#">Maketplace</Link></li>
                                            <li><Link href="#">Token</Link></li>
                                            <li><Link href="#">Wallet</Link></li>
                                            <li><Link href="#">Crypto</Link></li>
                                        </ul>
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