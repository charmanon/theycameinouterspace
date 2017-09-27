import React, { Component } from 'react';

class Reviews extends Component {
	render() {
		return (
			<div className="reviews container">
				<h4>Real Critic Reviews! Really!</h4>
				<p className="critic">
					<b>
						<i>FIVE STARS, HIGHEST RATING!</i>
					</b>{' '}
					– This is, without a doubt, the greatest piece of entertainment ever
					produced by sentient humans. This review is totally NOT being written
					by H.W. Zoozman Jr., because that would be wrong. Somebody completely
					different. A guy named, I don’t know, Phil something. So there. Shut
					up.
				</p>
				<p className="critic">
					<b>
						<i>STILL WAITING TO BE PAID FOR THE ORIGINAL MOVIE.</i>
					</b>{' '}
					- Niles LeBeefe here, the original Commander Brad Whiteman from the
					movie. I’m 87 years old now, residing at “Double-Wide Estates,” a
					trailer park in Canoga Park. It’s only $235 dollars fer gawdsakes. I’m
					sick of dining on cat food canapés. Oh, and the guy who plays me in
					this version? Stinks.
				</p>
				<p className="critic">
					<b>
						<i>WHERE’S THE NUDITY?</i>
					</b>
					{'  '}
					- Thought there’d be nudity. Didn’t someone promise nudity? I got to
					this thing from this Filipino website where…well, it’s not important.
					I’ll play it again, try a different interactive path. Maybe I just
					missed it.
				</p>
			</div>
		);
	}
}

export default Reviews;
