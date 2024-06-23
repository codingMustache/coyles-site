<form method="POST" action="?/contact" enctype="multipart/form-data">
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
			<input name="first name" type="text" />
			<label for="last name">Last Name</label>
			<input name="last name" type="text" />
			<label for="email">Email</label>
			<input name="email" type="email" />
			<label for="telephone number">Phone #</label>
			<input name="telephone number" type="tel" autocorrect="on" />
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

		<label for="references"> Upload any references: </label>
		<input id="files" name="references" type="file" multiple />
		<label for="misc"> Anything else you want me to know: </label>
		<textarea placeholder="" name="misc" rows="4" cols="50" />
	</div>
	<button type="submit">Submit</button>
</form>

<style>
	form {
		width: 100%;
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		width: fit-content;
	}
	label {
		display: flex;
		flex-direction: column;
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
	}
	textarea {
		width: 100%;
		height: 100px;
		resize: none;
		border-radius: 5px;
	}
	#files {
		margin-bottom: 20px;
	}
	button {
		background-color: transparent;
		border: 1px solid #dddddd;
		padding: 10px;
		border-radius: 5px;
		color: #dddddd;
		transition: 500ms;
		margin-bottom: 10px;
		background-color: #363a5b;
		align-self: flex-end;
		margin-top: 10px;
	}
	button:hover {
		scale: 0.95;
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
</style>
