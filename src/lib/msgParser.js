export const msgParser = (msg) => {
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
                width: 200px;
                height: auto;
            }
        </style>
      </head>
      <body>
        <p>${msg["first name"]} ${msg["last name"]} is interested in a tattoo.</p>
        <p>Their pronouns are ${msg["pronoun"]}.</p>
        <p>They can be reached at ${msg["email"]} or ${msg["telephone number"]}.</p>
        <p>They describe their tattoo as follows: ${msg["description"]}.</p>
        <p>The tattoo will be located on their ${msg["location of tattoo"]}.</p>
        <p>The tattoo will be ${msg["size of tattoo"]} inches.</p>
        <p>The tattoo will be in color: ${msg["color"] == 'on' ? "yes" : "no"}.</p>
        <p>They have attached some references.</p>
        ${msg.references.length > 0 ?
      msg.references.map((x) => `<img src="cid:${x}">`).join('')
      : ''}
        <p>Additional notes: ${msg["misc"]}.</p>
        </body>
    </html>
      
    
  `
}