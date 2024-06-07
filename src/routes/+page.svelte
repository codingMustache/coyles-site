<script>
	import '../reset.css';
	import IG from '$lib/instagram.svelte';
	import Email from '$lib/email.svelte';
</script>

<main>
	<div class="page-content">
		<p>Come Back Later</p>
		<p>Under Construction</p>
		<div class="links">
			<a href="https://www.instagram.com/coyle_parker_?igsh=Nm1hemFxc294ZDJv">
				<button> <IG /> IG </button>
			</a>
			<a href="mailto:erniepthethrid@gmail.com">
				<button> <Email /> Email </button>
			</a>
			<a href="/contact">
				<button>Book an Appointement</button>
			</a>
		</div>
	</div>
</main>

<style>
	main {
		background: #0000 center / cover no-repeat url('/coyle.jpeg');
		height: 100vh;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.page-content {
		background-color: rgba(82, 86, 88, 0.512);
		text-align: center;
		padding: 5%;
		font-size: larger;
		color: white;
		border-radius: 5px;
	}
	button {
		display: flex;
		align-items: center;
		margin: 10px;
		padding: 5px;
		gap: 10px;
		border-radius: 5px;
		border: unset;
		box-shadow: 3px 3px 10px black;
		min-height: 30px;
	}
	.links {
		display: flex;
		align-items: center;
	}
</style>
