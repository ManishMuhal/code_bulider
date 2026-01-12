"use client";

import React from "react";
import Image from "next/image";

const GrowthSection = ({ heading, description, image, features }) => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-4">
          {/* LEFT IMAGE */}
          <div className="col-md-6 position-relative">
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                width: "100%",
                height: "100%",
                border: "8px solid #f7931e",
                borderRadius: "12px",
                zIndex: 0,
              }}
            ></div>

            <img
              src={image}
              alt="Growth Image"
              width={600}
              height={400}
              className="img-fluid rounded-4 position-relative"
              style={{ zIndex: 1 }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-md-6">
            <h2 className="fw-bold mb-3">{heading}</h2>
            <p className="text-muted mb-4">{description}</p>

            <div className="row g-3">
              {features?.map((f, index) => (
                <div className="col-12 col-sm-6" key={index}>
                  <div className="d-flex align-items-start justify-items-start gap-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "45px",
                        height: "45px",
                        backgroundColor: f.color || "#f7931e",
                        color: "#fff",
                        fontSize: "22px",
                        padding:'20px'
                      }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <h6 className="fw-semibold mb-1">{f.title}</h6>
                      <p className="small text-muted mb-0">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthSection;
