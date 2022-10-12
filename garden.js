document.addEventListener("DOMContentLoaded", function(){
	const switches = document.getElementsByClassName("switch");
	const profile = document.getElementsByClassName("profile");
	const reloadCss = (profileEl) => {
		const cssFile = profileEl.target.id;
		console.log("getting to reloadCss() :" + profileEl.target.id);
  		const link = document.getElementById("css-file");
  		let cssPath = "./css/"+cssFile+".css";
  		link.href = cssPath;
	};

	for (let i =0; i < switches.length; i++) {
		switches[i].addEventListener('click', reloadCss.bind(this));
	}
})