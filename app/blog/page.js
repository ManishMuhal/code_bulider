import Layout from "@/components/layout/Layout"
import Link from "next/link"

const blogs = [
  {
    title: "The Next Big Trend In Crypto",
    slug: "the-next-big-trend-in-crypto",
    image: "/assets/images/blog/blog-1.jpg",
    category: "Music NFT’s",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    author: "SalvadorDali",
    date: "Feb 19, 2021",
  },
  {
    title: "Decentraland And Meta Verse",
    slug: "decentraland-and-metaverse",
    image: "/assets/images/blog/blog-2.jpg",
    category: "Music NFT’s",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    author: "SalvadorDali",
    date: "Feb 19, 2021",
  },
  {
    title: "Beeple Everydays The First 10 Days",
    slug: "beeple-everydays-first-10-days",
    image: "/assets/images/blog/blog-3.jpg",
    category: "Music NFT’s",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    author: "SalvadorDali",
    date: "Feb 19, 2021",
  },
  {
    title: "Videos Releases Car Drive",
    slug: "videos-releases-car-drive",
    image: "/assets/images/blog/blog-4.jpg",
    category: "Music NFT’s",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    author: "SalvadorDali",
    date: "Feb 19, 2021",
  },
]

export default function Blog() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog" >
        <section className="tf-blog">
          <div className="tf-container">
            <div className="row">
              {blogs.map((blog, index) => (
                <div className="col-md-6" key={index}>
                  <article className="tf-blog-item">
                    <div className="image">
                      <Link href={`/blog/${blog.slug}`}>
                        <img src={blog.image} alt={blog.title} />
                      </Link>
                    </div>

                    <div className="title">
                      <h5>
                        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                      </h5>
                      <Link
                        href={`/blog/${blog.slug}`}
                        className="tf-button style-1"
                      >
                        <span>{blog.category}</span>
                      </Link>
                    </div>

                    <p className="content">{blog.description}</p>

                    <div className="meta">
                      <span className="admin">
                        <i className="fal fa-user" /> By {blog.author}
                      </span>
                      <span className="date">
                        <i className="far fa-clock" /> {blog.date}
                      </span>
                    </div>
                  </article>
                </div>
              ))}

              <div className="col-md-12">
                <div className="load-more">
                  <Link className="tf-button loadmore" href="#">
                    Load more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
