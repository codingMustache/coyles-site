<script>
	import '../reset.css';
	import IG from '$lib/instagram.svelte';
	import Email from '$lib/email.svelte';
	import img from '$lib/heads.gif';
</script>

<main>
	<section id="header">
		<div>
			<h1>Coyle Parker</h1>
			<p>Tattoo Artist</p>
		</div>
		<img src={img} alt="background spooky gif" id="header-img" />
	</section>
	<section id="nav">
		<nav>
			<a href="/">
				<p>Home</p>
			</a>
			<a href="#portfolio">
				<p>Portfolio</p>
			</a>
			<a href="#bio">
				<p>Bio</p>
			</a>
			<a href="/contact">
				<p>Contact</p>
			</a>
		</nav>
	</section>
	<section>
		<p>
			Hi there! I'm Coyle Parker, a passionate tattoo artist hailing from Portland, now creating
			unique and memorable tattoos at Lucky Dagger in the vibrant city of New Orleans. My journey in
			the world of tattooing began 7 years ago, inspired by a deep love for art and storytelling.
			Each piece I create is a blend of my artistic vision and your personal story, crafted with
			care and precision. At Lucky Dagger, I specialize in [mention your styles, e.g., traditional,
			neo-traditional, blackwork, illustrative, etc.], and I'm dedicated to making every tattoo a
			meaningful experience. Whether you're looking for intricate details, bold lines, or vibrant
			colors, I bring a unique touch to each design, ensuring it resonates with you for a lifetime.
			My approach is collaborative and client-focused, from the initial consultation to the final
			ink. I believe in creating a comfortable and inspiring environment where your ideas can
			flourish. Let's work together to transform your ideas into a beautiful piece of art that
			you'll cherish forever. When I'm not at the studio, you can find me exploring the eclectic art
			scene of New Orleans, gathering inspiration from the city's rich culture and history. My
			passion for tattooing is matched only by my love for the stories behind each tattoo. Looking
			forward to meeting you and creating something amazing together!
		</p>
		<div class="page-content" id="bio">
			<img src="/image.png" alt="coyle parker head shot" />
			<div class="links">
				<a id="book" href="/contact">
					<button>Book an Appointment</button>
				</a>
			</div>
		</div>
	</section>
	<section>
		<a href="https://www.instagram.com/coyle_parker_?igsh=Nm1hemFxc294ZDJv">
			<button> <IG /> </button>
		</a>
		<a href="mailto:erniepthethrid@gmail.com">
			<button> <Email /> </button>
		</a>
	</section>
</main>

<style>
	#nav {
		position: sticky;
		top: 0;
		background-color: white;
	}
	nav {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding: 10px;
		height: 10vh;
	}
	#header {
		display: contents;
		position: absolute;
	}
	#header div {
		position: absolute;
		top: 30%;
		width: 100%;
		z-index: 1;
	}
	#header h1 {
		margin: 0 auto;
		font-weight: 800;
		color: #797164;
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: #303020;
		width: fit-content;
		font-size: 15vw;
		text-shadow: 0px 0px 10px black;
	}
	#header p {
		margin: 0 auto;
		font-weight: 1;
		color: white;
		width: fit-content;
		font-size: 4vw;
	}
	#header-img {
		box-shadow: 1px 1px 10px 50px black inset;
		object-fit: cover;
		width: 100%;
		height: 90vh;
		border-radius: 0;
	}
	section {
		width: 100%;
	}
	img {
		width: 200px;
		height: auto;
		border-radius: 5px;
		filter: sepia();
	}
	main {
		/* background: #0000 center / cover no-repeat url('/coyle.jpeg'); */
		background-color: rgb(82, 91, 98);
		flex-direction: column;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.page-content {
		background-color: rgb(0, 0, 0);
		text-align: center;
		padding: 5px;
		font-size: larger;
		color: rgb(157, 154, 154);
		border-radius: 5px;
	}
	.links button {
		display: flex;
		align-items: center;
		margin: 10px;
		padding: 5px;
		gap: 10px;
		border-radius: 100%;
		border: unset;
		color: white;
		min-height: 30px;
		background-color: rgb(90, 142, 255);
	}
	.links {
		display: flex;

		align-items: center;
		justify-content: center;
	}
	p {
		max-width: 300px;
	}
	#book button {
		background-color: transparent;
		border: 1px solid red;
		padding: 10px;
		border-radius: 5px;
		color: red;
		transition: 500ms;
		margin-bottom: 10px;
	}
	#book button:hover {
		background-color: red;
		color: white;
	}
</style>
