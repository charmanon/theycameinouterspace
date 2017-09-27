import React, { Component } from 'react';
import Reviews from './Reviews';

class Landing extends Component {
	render() {
		return (
			<div className="landing">
				<p className="flow-text">
					<h3 className="title">
						<b>ZOOZMAN’S BACK! AND EARPLAY’S GOT HIM!!</b>
					</h3>
				</p>
				<div className="video-container trailer">
					<iframe
						height="400"
						src="https://player.vimeo.com/video/235097669?loop=1&autopause=0"
						allowfullscreen
					/>
				</div>
				<p className="flow-text container">
					Herbert W. Zoozman’s most outrageous exploitation opus, “<b>They Came In Outer Space</b>,”
					lives again! Zoozman’s son, <b>Herbie Zoozman Jr.</b>, has reinvented
					this masterwork in the Modern Miracle of Zoozman Interactive Cranial
					Activit-O-Vision ™, where YOU are Zoozman’s Co-Producer!
				</p>
				<br />
				<p className="flow-text container">
					“<b>They Came In Outer Space</b>,” starring Zoozman’s
					soon-to-be-ex-wife Clara “Mynx” Devlin, premiered in 731 drive-ins
					across America in 1959. In the 1960’s and 70’s it appeared
					2,837,497,208 times on late night television. It’s the mythic story of
					studly rocket-jockey Commander Brad L. Whiteman and his journey to a
					planet inhabited entirely by comely-but-deadly “Panther Women.”
				</p>
				<br />
				<p className="flow-text container">
					Brad may be one joystick short of a cockpit, but he’s no wimp. And he
					and his intrepid crew – including YOU! – will battle every cliché
					known to 1950’s B-movies in this wet-your-pants, thrill a minute
					“terrifying journey into the known.”{' '}
				</p>
				<Reviews />
			</div>
		);
	}
}

export default Landing;
