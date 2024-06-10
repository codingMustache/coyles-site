<script>
	import '../reset.css';
	import IG from '$lib/instagram.svelte';
	import Email from '$lib/email.svelte';
</script>

<main>
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
	<div class="page-content">
		<img src="/coyle.jpeg" alt="coyle parker head shot" />
		<div class="links">
			<a href="https://www.instagram.com/coyle_parker_?igsh=Nm1hemFxc294ZDJv">
				<button> <IG /> </button>
			</a>
			<a href="mailto:erniepthethrid@gmail.com">
				<button> <Email /> </button>
			</a>
		</div>
		<a id="book" href="/contact">
			<button>Book an Appointment</button>
		</a>
	</div>
</main>

<style>
	img {
		width: 200px;
		height: auto;
		border-radius: 5px;
		filter: grayscale();
	}
	main {
		/* background: #0000 center / cover no-repeat url('/coyle.jpeg'); */
		background-color: rgb(82, 91, 98);
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.page-content {
		background-color: rgb(63, 63, 63);
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
