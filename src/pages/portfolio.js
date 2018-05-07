import React from "react";
import Link from "gatsby-link";
import vegas from "./vegas.png";
import smo from "./smo.png";

export default () => 
	<div style={{margin: `3rem auto`, fontFamily: `sans-serif`, maxWidth: 1000}}>
		<Link to="/"><h1>Fredo's Blog</h1></Link>
		<h2>Portfolio</h2>
		<a href="https://brave-northcutt-5b215f.netlify.com/" target="_blank"><img style={{height: '300px'}} src={vegas} alt="Vegas App" /></a>
		<br />
		<br />
		<a href="https://adoring-raman-8394b5.netlify.com/" target="_blank"><img style={{height: '300px'}} src={smo} alt="Mario Blog" /></a>
		<br />
	</div>