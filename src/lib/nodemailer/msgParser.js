export const msgParser = (
	/** @type {{ [x: string]: any; references?: any; }} */ msg,
	/** @type {any[]} */ attachments
) => {
	return `
    <!DOCTYPE html>
      <html>
        <head>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  text-align: left;
                  color: #333;
              }
              p {
                  font-size: 14px;
                  color: #555;
              }
              img {
                object-fit: cover;
                width: 300px;
                height: 300px;
                margin: 3px;
              }
        
          </style>
        </head>
        <body>
          <p>${msg['first name'] ? msg['firstName'] : "They didn't write a last name"} ${msg['lastName'] ? msg['lastName'] : "They didn't write a last name"} is interested in a tattoo.</p>
          <p>Their pronouns are ${msg['pronoun'] ? msg['pronoun'] : "They didn't pick a pronoun"}.</p>
          <p>They can be reached at ${msg['email']} or ${msg['phone'] ? msg['phone'] : "They didn't write an email "}.</p>
          <p>They describe their tattoo as follows: ${msg['description'] ? msg['description'] : "They didn't write a description"}.</p>
          <p>The tattoo will be located on their ${msg['location'] ? msg['location'] : "They didn't pick a location"}.</p>
          <p>The tattoo will be ${msg['size'] ? msg['size'] : "They didn't pick a size"} inches.</p>
          <p>The tattoo will be in color: ${msg['color'] ? msg['color'] : "They didn't pick a color"}.</p>
          ${
						attachments.length > 0
							? attachments.map((/** @type {any} */ x) => `<img src="cid:${x}">`).join('')
							: "<p>They didn't attache any references.</p>"
					}
          <p>Additional notes: ${msg['misc'] ? msg['misc'] : ''}.</p>
          </body>
      </html>
  `;
};
