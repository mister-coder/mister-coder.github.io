
function animateSection(psn, csn) {		//psn = previous section numbber. csn = current section number.

	// console.log('psn: '+psn);
	// console.log('csn: '+csn);
	var sections = [
						{ 	
							"className"	: "sectionTwo", 
							"title"		: "titleTwo",
							"subtitle"	: "subtitleTwo",
							"image"		: "imageTwo"
						},
						{ 	
							"className"	: "sectionThree", 
							"title"		: "titleThree",
							"subtitle"	: "subtitleThree",
							"image"		: "imageThree"
						},
						{ 	
							"className"	: "sectionFour", 
							"title"		: "titleFour",
							"subtitle"	: "subtitleFour",
							"image"		: "imageFour"
						}
					];		
	
	if( psn == 0 ) {
		gsap.to('.sectionOne', { opacity: 0, y: -100, duration: 0.5, ease: "power4.inOut" });
	}

	if( csn == 0 ) {
		gsap.to('.sectionOne', { opacity: 1, y: 0, duration: 0.3, ease: "power4.inOut" });
	}


	// psn < csn means going down
	if( csn == 1 ) {
		if( psn < csn ) {
			var insert = "."+sections[csn - 1]["image"];
			gsap.fromTo(insert, { opacity: 0, y: 200}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			var insert = "."+sections[csn - 1]["title"];
			gsap.fromTo(insert, { opacity: 0, y: 400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			var insert = "."+sections[csn - 1]["subtitle"];
			gsap.fromTo(insert, { opacity: 0, y: 400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

		}
	} else if( csn == 2 ) {
		if( psn < csn ) {
			// current
			var insert = "."+sections[csn - 1]["image"];
			gsap.fromTo(insert, { opacity: 0, x: 200}, 
								{ opacity: 1, x: 0, duration: 1.2, ease: "power1.inOut", delay: 0.4 });

			var insert = "."+sections[csn - 1]["title"];
			gsap.fromTo(insert, { opacity: 0, y: 400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			var insert = "."+sections[csn - 1]["subtitle"];
			gsap.fromTo(insert, { opacity: 0, y: 400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			
			/* previous
			var insertPrev = "."+sections[psn - 1]["image"];
			gsap.fromTo(insertPrev, { opacity: 1, y: 0}, 
									{ opacity: 0, y: -500, duration: 0.5, ease: "power1.inOut", delay: 0 });*/
			
		}
	} else if( csn == 3 ) {
		if( psn < csn ) {
			var insert = "."+sections[csn - 1]["image"];
			gsap.fromTo(insert, { opacity: 0, x: -200}, 
								{ opacity: 1, x: 0, duration: 1.2, ease: "power1.inOut", delay: 0.4 });

			var insert = "."+sections[csn - 1]["title"];
			gsap.fromTo(insert, { opacity: 0, y: 400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			var insert = "."+sections[csn - 1]["subtitle"];
			gsap.fromTo(insert, { opacity: 0, y: 400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			/*/ previous
			var insertPrev = "."+sections[psn - 1]["image"];
			gsap.fromTo(insertPrev, { opacity: 1, x: 0}, 
									{ opacity: 0, x: 500, duration: 1.5, ease: "power1.inOut", delay: 0 });*/
		}
	}

	// psn > csn means going down
	if( csn == 1 ) {
		if( psn > csn ) {
			var insert = "."+sections[csn - 1]["image"];
			gsap.fromTo(insert, { opacity: 0, y: -200}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			var insert = "."+sections[csn - 1]["title"];
			gsap.fromTo(insert, { opacity: 0, y: -400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			var insert = "."+sections[csn - 1]["subtitle"];
			gsap.fromTo(insert, { opacity: 0, y: -400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

		}
	} else if( csn == 2 ) {
		if( psn > csn ) {
			// current
			var insert = "."+sections[csn - 1]["image"];
			gsap.fromTo(insert, { opacity: 0, x: 200}, 
								{ opacity: 1, x: 0, duration: 1.2, ease: "power1.inOut", delay: 0.4 });

			var insert = "."+sections[csn - 1]["title"];
			gsap.fromTo(insert, { opacity: 0, y: -400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			var insert = "."+sections[csn - 1]["subtitle"];
			gsap.fromTo(insert, { opacity: 0, y: -400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			
			/*/ previous
			var insertPrev = "."+sections[psn - 1]["image"];
			console.log(insertPrev);*/
			
		}
	} else if( csn == 3 ) {
		if( psn > csn ) {
			var insert = "."+sections[csn - 1]["image"];
			gsap.fromTo(insert, { opacity: 0, x: -200}, 
								{ opacity: 1, x: 0, duration: 1.2, ease: "power1.inOut", delay: 0.4 });

			var insert = "."+sections[csn - 1]["title"];
			gsap.fromTo(insert, { opacity: 0, y: -400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });

			var insert = "."+sections[csn - 1]["subtitle"];
			gsap.fromTo(insert, { opacity: 0, y: -400}, 
								{ opacity: 1, y: 0, duration: 1.5, ease: "power1.inOut", delay: 0.2 });


		}
	}
}