const fs = require("fs")
const path = require("path")
const marked = require("marked")

const folders = fs.readdirSync(__dirname, { withFileTypes: true }).filter(x => x.isDirectory())

const formatted = folders.map(f => {
	const mdx = fs.readFileSync(path.join(__dirname, f.name, "index.md")).toString()

	const [header, ...rest] = mdx.replace("---", "").split("---")

	const headerProps = header.split("\n").reduce((acc, next) => {
		const [name, ...value] = next.split(":")
		if (name.trim())
			acc[name.trim()] = value.join(":").trim()
		return acc
	}, {})

	return { header: headerProps, content: rest.join(""), path: f.name }
})


formatted.sort((b1, b2) => new Date(b2.header.date) - new Date(b1.header.date))


const css = fs.readFileSync(path.join(__dirname, "..", "styles.css"))
formatted.forEach(c => {
	const htmlContent = marked(c.content)

	const date = new Date(c.header.date)
	const m = date.toLocaleString("default", { month: "long" })
	const content = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Luan Raithz's website">
  <title>${c.header.title}</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,700&display=swap" rel="stylesheet">
  <link rel="icon" type="image/png" href="/assets/favicon.ico"/>
  <style>${css}</style>
</head>

<body>
  <div id="app">
  <div class="blog-content">
	<a href="/" class="link"> Back to home </a>
  	<h1 class="title">${c.header.title}</h1>
	  <h2 class="date">${m} - ${date.getFullYear()}</h2>
	  <div>
	  <main>
	  	<article>
  		${htmlContent}
	  	</article>
	  </main>
	  </div>
  </div>
  </div>
</body>

</html>
`
	fs.writeFileSync(path.join(__dirname, c.path,"index.html"), content)
})

const lastPosts = formatted.slice(0, 3)

const lastPostsMenu = lastPosts.reduce((acc, next) => {
	// const MAX_DESCRIPTION_SIZE = 60
	// let description = ""
	// for (const word of next.header.description?.split(" ")) {
	// 	if (description.length + word.length > MAX_DESCRIPTION_SIZE)  {
	// 		description+= "..."
	// 		break
	// 	} 
	// 	description+=" "+word
	// }

	const date = new Date(next.header.date)
	const m = date.toLocaleString("default", { month: "short" })
	return acc + `\n<div><a href="/blog/${next.path}" class="with-theme-color"><small><b>${next.header.title} (${m}/${date.getFullYear()})</b></small></a><br/></div>`
}, "")

const wrapped = `

<div class="last-posts-menu">
	<h3>Last posts</h3>
	<div>
	${lastPostsMenu}
	</div>
	<a href="/blog"> 
		See all...
	</a>

</div>
`


fs.writeFileSync(path.join(__dirname, "last_posts.html"), wrapped)

