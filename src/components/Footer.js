import React, { Component } from 'react';
import amazon from '../images/amazon.png';
import google from '../images/google.png';
import itunes from '../images/itunes.png';
import googleassist from '../images/googleassist.png';
import alexa from '../images/alexa.png';

class Footer extends Component {
	render() {
		return (
			<footer className="page-footer">
				<div className="container">
					<div className="row">
						<div className="col l6 s12">
							With Earplay, you can enjoy audio stories you play with your
							voice, featuring voice acting and sound effects like in a radio
							drama. Experience this exciting new storytelling medium where you
							become part of the story, interacting with characters to affect
							how the events unfold. -- Explore the Earplay Library at the {' '}
							<a className="links" href="https://www.earplay.com/">
								Earplay website.
							</a>
						</div>
						<div className="col l4 offset-l2 s12">
							{/* <h5 className="links">Follow us!</h5>
							<ul>
								<li />
								<li>
									<a className="links" href="#!">
										Production team
									</a>
								</li>
								<li>
									<a className="links" href="#!">
										Sign up for updates
									</a>
								</li>
							</ul> */}
							<h5 className="">Play They Came in Outer Space!</h5>
							<ul>
								<li>
									<a className="" href="#!">
										<img className="badges" src={alexa} alt="Amazon Link" />
									</a>
								</li>
								<li>
									<a className="" href="#!">
										<img
											className="badges"
											src={google}
											alt="Google Play Link"
										/>
									</a>
								</li>
								<li>
									<a className="" href="#!">
										<img
											className="badges"
											src={googleassist}
											alt="Google Assistant Link"
										/>
									</a>
								</li>
								<li>
									<a className="" href="#!">
										<img className="badges" src={itunes} alt="iTunes Link" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copyright">
					<div className="container">
						© 2017 Copyright{' '}
						<a className="links" href="http://doublerrstudios.com/">
							Double RR Studios
						</a>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
