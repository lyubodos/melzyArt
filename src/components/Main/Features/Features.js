import React from 'react'

import "./Features.css";


export default function Features() {
    return (
        <section className="features">
        <article className="feature">
            <article className="feature-icon-wrapper">
               
                <i className="fas fa-feather"></i>
            </article>
            <h4 className="feature-title">
                Features
            </h4>
            <p className="feature-text">Check <a href="">some</a> of our cool features which you can use while you are ordering your items.
            </p>
        </article>
        <article className="feature">
            <article className="feature-icon-wrapper">
                <i className="fas fa-ethernet"></i>
            </article>
            <h4 className="feature-title">
                Catalog
            </h4>
            <p className="feature-text">Browse trough our catalog of accessories
            </p>
        </article>
        <article className="feature">
            <article className="feature-icon-wrapper">
                <i className="fas fa-unlock-alt"></i>
            </article>
            <h4 className="feature-title">
                Hign-end security
            </h4>
            <p className="feature-text">We may store some of your personal information and data, but you can rest assure it is not being shared with third party sites.
            </p>
        </article>
        <article className="feature">
            <article className="feature-icon-wrapper">
                <i o className="fas fa-question-circle"></i>
            </article>
            <h4 className="feature-title">
                24 hour support service
            </h4>
            <p className="feature-text">
                You can call our <a to="/contacts">24hr hotline</a> or send us an e-mail  at any time of the day or night. You will receive the best quality of advise and infromation.
            </p>
        </article>
    </section>
    )
}
