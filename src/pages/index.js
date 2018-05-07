import React from "react";
import Link from "gatsby-link";
import fredo from "./wil2.jpg";

export default () => 
	<div style={{margin: `3rem auto`, fontFamily: `sans-serif`, maxWidth: 1000}}>
		<h1>Fredo's Blog</h1>
		<div>
			<Link to="/portfolio/">Portfolio</Link>
		</div> 
		<h2>Coming soon!!</h2>
		<p>Thank you for visiting my blog built using Gatsby JS. This is a work in progress. Please visit my <a href="https://medium.com/@santana.wil" target="_blank">Medium blog</a> until then.</p>
		<img src={fredo} alt="fredo" />
		<br />
	</div>
