<a href="/">
	<p>Home</p>
</a>
<h2>Contact Form</h2>

<form method="POST" action="?/contact" enctype="multipart/form-data">
	<div class="customer">
		<label for="pronouns"> Pronouns: </label>
		<select id="pronouns" name="pronoun">
			<option value="he/him">He/Him</option>
			<option value="she/her">She/Her</option>
			<option selected value="they/them">They/Them</option>
			<option value="other">Other</option>
		</select>

		<label for="first name"> First Name: </label>
		<input name="first name" type="text" />
		<label for="last name"> Last Name: </label>
		<input name="last name" type="text" />
		<label for="email"> Email: </label>
		<input name="email" type="email" />
		<label for="telephone number"> Phone #: </label>
		<input name="telephone number" type="tel" autocorrect="on" />
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
		<class class="color">
			<label for="color"> Color: </label>
			<input name="color" type="checkbox" />
		</class>

		<label for="references"> Upload any references: </label>
		<input name="references" type="file" multiple />
		<label for="misc"> Anything else you want me to know: </label>
		<textarea placeholder="" name="misc" rows="4" cols="50" />
	</div>

	<button type="submit">Submit</button>
</form>

<style>
	h2 {
		text-align: center;
	}
	form {
		max-width: 80%;
		margin: 0 auto;
		margin-top: 30px;
	}
	label {
		margin-top: 10px;
		display: flex;
		flex-direction: column;
	}
	div {
		padding: 5px;
	}
	small {
		font-size: 0.6em;
	}
	.color {
		display: flex;
		align-items: flex-end;
	}
	input {
		padding: 3px;
		border-radius: 3px;
		border: 1px solid rgb(157, 157, 157);
	}
	textarea {
		width: 300px;
		height: 100px;
		resize: none;
	}
</style>
