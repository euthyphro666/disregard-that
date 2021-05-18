import Vue from "vue";
import Unicon from "vue-unicons";

import {
	uniTwitter,
	uniFacebookF,
	uniYoutube,
	uniAnchor,
	uniGithub,
	uniGlobe,
	uniLinkedin
} from "vue-unicons/src/icons";

const uniSpotify = {
	name: "spotify",
	style: "line",
	path: `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="98.372px" height="98.372px" viewBox="-10 -10 500 500" style="enable-background:new 0 0 98.372 98.372;" xml:space="preserve">
<g>
   <g id="Layer_1_1_">
	   <path d="M49.186,0.002C22.022,0.002,0,22.021,0,49.186C0,76.35,22.022,98.37,49.186,98.37c27.164,0,49.186-22.021,49.186-49.185
		   C98.372,22.021,76.35,0.002,49.186,0.002z M68.116,72.547c-0.796,0-1.339-0.275-2.082-0.729c-7.129-4.313-16.019-6.58-25.449-6.58
		   c-5.264,0-10.561,0.677-15.515,1.707c-0.805,0.175-1.817,0.484-2.425,0.484c-1.867,0-3.111-1.482-3.111-3.092
		   c0-2.064,1.19-3.096,2.675-3.379c6.075-1.385,12.125-2.176,18.409-2.176c10.762,0,20.354,2.471,28.608,7.418
		   c1.228,0.717,1.947,1.449,1.947,3.27C71.174,71.245,69.732,72.547,68.116,72.547z M73.475,59.529
		   c-1.067,0-1.738-0.432-2.465-0.854c-8-4.748-19.09-7.902-31.232-7.902c-6.228,0-11.604,0.873-16.053,2.058
		   c-0.959,0.265-1.496,0.549-2.394,0.549c-2.114,0-3.842-1.726-3.842-3.856c0-2.091,1.015-3.529,3.059-4.105
		   c5.529-1.52,11.177-2.689,19.394-2.689c12.875,0,25.33,3.206,35.121,9.066c1.642,0.939,2.246,2.137,2.246,3.887
		   C77.309,57.809,75.613,59.529,73.475,59.529z M79.577,44.389c-1,0-1.595-0.244-2.533-0.758
		   c-8.901-5.338-22.719-8.277-36.079-8.277c-6.67,0-13.443,0.679-19.648,2.362c-0.715,0.179-1.616,0.537-2.521,0.537
		   c-2.624,0-4.638-2.076-4.638-4.699c0-2.674,1.656-4.174,3.442-4.701c7.012-2.065,14.838-3.027,23.346-3.027
		   c14.443,0,29.639,2.971,40.738,9.488c1.496,0.849,2.533,2.126,2.533,4.468C84.215,42.462,82.061,44.389,79.577,44.389z"/>
   </g>
</g>
</svg>`
};

const uniBandcamp = {
	name: "bandcamp",
	style: "line",
	path: `<?xml version="1.0" encoding="iso-8859-1"?>
	<!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
	<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
	<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 width="97.75px" height="97.75px" viewBox="-10 -10 500 500" style="enable-background:new 0 0 97.75 97.75;" xml:space="preserve"
		>
	<g>
		<path d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
			 M64.835,70.857H12.593l20.32-43.965h52.244L64.835,70.857z"/>
	</g>
	</svg>
	`
};

Unicon.add([
	uniTwitter,
	uniFacebookF,
	uniYoutube,
	uniAnchor,
	uniGithub,
	uniGlobe,
	uniSpotify,
	uniBandcamp,
	uniLinkedin
]);
Vue.use(Unicon);