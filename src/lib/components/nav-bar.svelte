<script>
	import { page } from '$app/stores';

	let isOpen = false;

	function toggleMenu() {
		isOpen = !isOpen;
	}
</script>

<nav>
	<div class="links">
		<a href="/">Home</a>
		{#if $page.route.id == '/(app)'}
			<a href="#portfolio">Portfolio</a>
			<a href="#bio">Bio</a>
		{/if}
		<a href="/blogs">Blogs</a>
		<a href="/contact">Book Appt</a>
	</div>
	<button class="hamburger" on:click={toggleMenu} aria-label="Toggle Menu">
		<svg width="30" height="30" viewBox="0 0 30 30">
			<rect class="bar1" y="0" width="30" height="3"></rect>
			<rect class="bar2" y="13.5" width="30" height="3"></rect>
			<rect class="bar3" y="27" width="30" height="3"></rect>
		</svg>
	</button>
</nav>
<div class:open={isOpen} class="menu">
	<a on:click={toggleMenu} href="/">Home</a>
	<a on:click={toggleMenu} href="/blogs">Blogs</a>
	{#if $page.route.id == '/(app)'}
		<a on:click={toggleMenu} href="#portfolio">Portfolio</a>
		<a on:click={toggleMenu} href="#bio">Bio</a>
	{/if}
</div>

<style>
	button {
		border: none;
		cursor: pointer;
		padding: 20px;
		color: #dddddd;
		transition: 200ms;
		background-color: #363a5b;
		font-size: large;
		font-family: inter-extralight;
	}

	nav {
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: fixed;
		top: 0;
		width: 100%;
		padding: 0 20px;
		z-index: 20;
		height: 10vh;
		font-size: large;
		box-sizing: border-box;
		max-height: 100px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	nav a {
		margin: 0 10px;
		text-decoration: none;
		color: black;
	}

	.hamburger {
		display: none;
		cursor: pointer;
	}

	.menu {
		display: none;
		flex-direction: column;
		align-items: flex-end;
		position: fixed;
		top: 80px;
		left: 0;
		width: 100%;
		background: rgba(255, 255, 255, 1);
		padding: 20px;
		box-sizing: border-box;
		z-index: 100;
	}

	.open.menu {
		display: flex;
	}

	.menu a {
		margin: 10px 0;
		text-decoration: none;
		color: black;
	}

	@media (max-width: 768px) {
		button {
			font-size: medium;
			padding: 20px;
		}
		nav > .links {
			display: none;
		}
		nav {
			justify-content: flex-end;
		}

		.menu a {
			font-size: xx-large;
		}
		.hamburger {
			display: flex;
			align-items: center;
			justify-content: center;
			justify-self: flex-end;
			padding: 10px;
			border-radius: 5px;
			background: transparent;
			border: none;
		}
	}
</style>
