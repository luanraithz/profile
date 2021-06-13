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


formatted.forEach(c => {
	const htmlContent = marked(c.content)
	fs.writeFileSync(path.join(__dirname, c.path,"index.html"), htmlContent)
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

	return acc + `\n<div><a href="/blog/${next.path}">${next.header.title}</a><br/>-${next.header.description}</div>`
}, "")

const wrapped = `
<div class="last-posts-menu">
<h3>Last posts</h3>
	<div>
	${lastPostsMenu}
	</div>
</div>
`


fs.writeFileSync(path.join(__dirname, "last_posts.html"), wrapped)


console.log(formatted.map(x => x.header.date))