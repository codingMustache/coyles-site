<script>
	import headShot from '$lib/images/headshot-cutout.png';
</script>

<div id="bio">
	<p>
		Hi there! I'm Coyle Parker, a passionate tattoo artist hailing from Portland, now creating
		unique and memorable tattoos at Lucky Dagger in the vibrant city of New Orleans. My journey in
		the world of tattooing began 7 years ago, inspired by a deep love for art and storytelling. Each
		piece I create is a blend of my artistic vision and your personal story, crafted with care and
		precision. At Lucky Dagger, I specialize in [mention your styles, e.g., traditional,
		neo-traditional, blackwork, illustrative, etc.], and I'm dedicated to making every tattoo a
		meaningful experience. Whether you're looking for intricate details, bold lines, or vibrant
		colors, I bring a unique touch to each design, ensuring it resonates with you for a lifetime. My
		approach is collaborative and client-focused, from the initial consultation to the final ink. I
		believe in creating a comfortable and inspiring environment where your ideas can flourish. Let's
		work together to transform your ideas into a beautiful piece of art that you'll cherish forever.
		When I'm not at the studio, you can find me exploring the eclectic art scene of New Orleans,
		gathering inspiration from the city's rich culture and history. My passion for tattooing is
		matched only by my love for the stories behind each tattoo. Looking forward to meeting you and
		creating something amazing together!
	</p>

	<img src={headShot} alt="coyle parker head shot" />
</div>

<style>
	#bio {
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 20px;
	}
	p {
		width: 60%;
		line-height: 1.5;
	}
	img {
		width: auto;
		height: 500px;
		border-radius: 5px;
		filter: sepia();
	}
	@media (max-width: 768px) {
		#bio {
			flex-direction: column;
		}
		p {
			width: 90%;
			text-align: center;
		}
		img {
			width: 100%;
			height: auto;
			margin-top: 50px;
		}
	}
</style>
