import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, breadcrumbHeading }) {
    return (
        <>
            {breadcrumbHeading &&  <div style={{ height: "88px" }} />}
            <section className="tf-page-title">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumbs">
                                <li><Link href="/">Home</Link></li>
                                {breadcrumbHeading && <li><Link href="/explore">Explore</Link></li>}
                                <li>{breadcrumbTitle}</li>
                            </ul>
                            {breadcrumbHeading && <h4 className="page-title-heading">{breadcrumbTitle}</h4>}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
