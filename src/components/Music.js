import React, { Component } from 'react';

class Music extends Component {
	render() {
		return (
			<div className="lower-text music container">
				<h4>
					<b>Music from They Came in Outer Space</b>
				</h4>
				<p className="flow-text music">
					Zoozman recorded the title song, “<b>When Girls Collide</b>!” then
					changed the title to “<b>They Came In Outer Space</b>.” Rather than
					spend the $75 dollars to write and record a new song, he kept the
					original music and performance by Frank “Fling-A-Ding” Diamond, the
					“Frank Sinatra of Winnemucca, Nevada.”
				</p>

				<p className="flow-text music">
					Diamond headlined his “Vegas In Winnemuca” Revue at the Pair O’ Dice
					Motel from 1957 to 1971, performing as he re-stocked the salad bar.
					“When Girls Collide” was included in what seems to be Mr. Diamond’s
					only album release, “Diamond Is A Girl’s Best Friend!” (1960). You can
					find the title track here:
				</p>
				<div className=" ">
					<iframe
						title="Shiki Shiki"
						width="100%"
						height="200"
						scrolling="no"
						frameborder="no"
						src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/343712974&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
					/>
				</div>
			</div>
		);
	}
}

export default Music;
