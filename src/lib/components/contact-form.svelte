<script>
	// @ts-nocheck

	import Compressor from 'compressorjs';

	let files = [];
	let resizedFiles = [];

	const addPhotos = async (e) => {
		e.preventDefault();
		const filesFromElement = e.target.files;

		if (!filesFromElement) return;

		for (let i = 0; i < filesFromElement.length; i++) {
			new Compressor(filesFromElement[i], {
				quality: 0.5,
				maxWidth: 500,
				maxHeight: 500,
				resize: 'contain',
				success(result) {
					resizedFiles = [...resizedFiles, result];
				},
				error(err) {
					console.log(err.message);
				}
			});
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const form = new FormData(e.target);

		const pronoun = form.get('pronoun');
		const firstName = form.get('first name');
		const lastName = form.get('last name');
		const email = form.get('email');
		const phone = form.get('telephone number');
		const description = form.get('description');
		const location = form.get('location of tattoo');
		const size = form.get('size of tattoo');
		const color = form.get('color');
		const misc = form.get('misc');

		const jsonObj = {
			pronoun,
			firstName,
			lastName,
			email,
			phone,
			description,
			location,
			size,
			color,
			misc
		};
		const form_data = new FormData();
		for (var key in jsonObj) {
			form_data.append(key, jsonObj[key]);
		}

		resizedFiles.forEach((file) => {
			form_data.append('files', file);
		});

		return fetch('?/contact', {
			method: 'POST',
			body: form_data
		}).catch((err) => console.error(err));
	};
</script>

<form
	method="POST"
	action="?/contact"
	on:submit|preventDefault={handleSubmit}
	enctype="multipart/form-data"
>
	<div class="customer">
		<label for="pronouns"> Pronouns: </label>
		<select id="pronouns" name="pronoun">
			<option value="he/him">He/Him</option>
			<option value="she/her">She/Her</option>
			<option selected value="they/them">They/Them</option>
			<option value="other">Other</option>
		</select>

		<div class="name">
			<label for="first name">First Name</label>
			<input name="first name" placeholder="First Name" type="text" />
			<label for="last name">Last Name</label>
			<input name="last name" placeholder="Last Name" type="text" />
			<label for="email">Email</label>
			<input name="email" placeholder="Email" type="email" />
			<label for="telephone number">Phone #</label>
			<input name="telephone number" placeholder="Phone Number" type="tel" autocorrect="on" />
		</div>
	</div>
	<div class="tattoo">
		<label for="description"> Please describe your design idea: </label>
		<textarea placeholder="Skull with a snake" name="description" rows="4" cols="50" />
		<label for="location of tattoo"> Location of tattoo: </label>
		<input type="text" name="location of tattoo" />
		<label for="size of tattoo"> Size: </label>
		<select name="size of tattoo" id="size">
			<option value=">1">less than 1 inch"</option>
			<option value="1-3">1-3 inches</option>
			<option value="3-5">3-5 inches</option>
			<option value="5-7">5-7 inches</option>
			<option value="7-10">7-10 inches</option>
			<option value="<10">over 10 inches</option>
			<option value="1/2 Sleeve">Half Sleeve/Leg</option>
			<option value="Sleeve">Whole Sleeve/Leg</option>
			<option value="Chest">Chest Piece</option>
			<option value="Torso">Whole Front/Back Torso</option>
		</select>
		<div class="color">
			<p>Color Option:</p>
			<div class="color-option">
				<input name="color" type="radio" value="Full Color" />
				<label for="color"> Color </label>
			</div>
			<div class="color-option">
				<input name="color" type="radio" value="Black/Grey" />
				<label for="color"> Black and Grey </label>
			</div>
		</div>
		<div id="drop-zone">
			<label for="references"> Click Or Drop Photos to upload references Here</label>
			<input bind:files on:change={addPhotos} id="files" name="references" type="file" multiple />
			{#if files}
				<div class="thumbnail">
					{#each files as photo}
						<img src={URL.createObjectURL(photo)} alt="Uploaded" />
					{/each}
				</div>
			{/if}
		</div>
		<label for="misc"> Anything else you want me to know: </label>
		<textarea placeholder="" name="misc" rows="4" cols="50" />
	</div>
	<button type="submit">Submit</button>
</form>

<style>
	.name label {
		display: none;
	}
	.name input {
		width: 300px;
		margin: 0;
		height: 30px;
		font-size: large;
	}
	.thumbnail {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		padding: 5px;
	}
	.thumbnail img {
		width: 100px;
		height: 100px;
		object-fit: cover;
	}

	select {
		padding: 5px;
		border-radius: 5px;

		border: 1px solid rgb(157, 157, 157);
		max-width: 400px;
		font-size: large;
	}
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 20px;
	}
	label {
		display: flex;
		flex-direction: column;
	}
	label,
	input {
		margin-top: 30px;
	}
	.customer,
	.tattoo {
		padding: 5px;
	}
	.color-option {
		display: flex;
		align-items: end;
	}
	.color {
		display: flex;
		flex-direction: column;
		margin: 20px 0;
	}
	.color p {
		margin-bottom: 0;
	}
	input:not([type='file']) {
		padding: 5px;
		border-radius: 5px;
		border: 1px solid rgb(157, 157, 157);
		max-width: 400px;
	}
	textarea {
		width: 100%;
		height: 200px;
		resize: none;
		border-radius: 5px;
	}

	#drop-zone {
		position: relative;
		max-width: 500px;
		min-height: 200px;
		border: 3px dashed #979797;
		border-radius: 10px;
		background-color: #e9e9e9a5;
		padding: 20px;
		text-align: center;
		cursor: pointer;
	}

	#files {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: red;
		cursor: pointer;
		margin-top: 0;
		opacity: 0;
	}

	#drop-zone > label {
		position: relative;
		z-index: 1;
		margin-top: 0;
	}
	button {
		background-color: transparent;
		border: 1px solid #363a5b;
		padding: 20px 40px;
		font-size: larger;
		color: #dddddd;
		transition: 500ms;
		margin-bottom: 10px;
		color: #363a5b;
		align-self: flex-end;
		margin-top: 10px;
		font-family: inter-extralight;
	}
	button:hover {
		scale: 0.95;
		box-shadow: none;
	}
	.name {
		margin: 10px;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-gap: 20px 5px;
		align-items: center;
	}
	.name label {
		justify-self: end;
	}
	@media (max-width: 768px) {
		button {
			font-size: x-large;
		}
		.name {
			display: flex;
			flex-direction: column;
			width: 100%;
		}
		.name input {
			width: 100%;
		}
	}
</style>
