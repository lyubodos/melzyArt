import React from 'react';
import Features from './Features';

import "./Main.css";


export default function Main() {
    return (

        <div className="main-container">
            <div className="main-container_general">
                <img src="https://scontent-sof1-2.xx.fbcdn.net/v/t31.18172-8/16178759_680466542135297_7342882260727301062_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=Ik0hRjcwhjgAX9BGwhG&_nc_ht=scontent-sof1-2.xx&oh=438b3cb3b99a35cf3580f29940f492cf&oe=618068CA" alt="profile-pic" />
                <div className="main-container-text">
                    <h2>Hello, I'm Melynda</h2>
                    <p>This is my official site to handmade figures and accessories. Since I was little, I always like creating things out of simple items and materials. After finishing my degree in acting in the National Academy For Theatre and Film Arts "Krastyo Sarafov", I started working as a full time actor in the Variety Theatre in Sofia and as a part-time
                        crafter for home and body accessories. Delivering the best qualitiy products at the best possible prices has always been my mission. If you like any of the available accessories in the <a href="" className="anchor-merch">Merch</a> section, You can order them <strong>right now</strong> at the best possible price! </p>
                </div>
            </div>

            <div className="main-container_extras">
               <Features/>
            </div>

        </div>
    )
}
