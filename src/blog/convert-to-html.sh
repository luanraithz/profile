# !/bin/bash


## Add: Order by date, tags

declare -a posts

while read line; do
	txt=$(cat "$line""index.md")

	txt=${txt##---}

	header=${txt%%---*}

	function getHeader ()
	{
	local res=$(echo "$header" | grep "$1" | sed "s|$1:||")
	echo $res
	return 0
	}
	
	declare -A p
	p[title]=$(getHeader "title")
	p[date]=$(getHeader "date")
	p[tags]=$(getHeader "tags")
	p[lang]=$(getHeader "lang") || echo "pt"
	p[description]=$(getHeader "description")
	echo "${p[title]}"

	posts=(${posts[@]} $p)

done <<< "$(ls -d */)"


for post in "${posts[@]}"; do 
  echo "${post[title]}"
done
	# v="""$res
	# <div>
	# 	<b>$title</b>
	# 	<span class=\"description\">$description<span>
	# 	<span class=\"date\">
	# 		${date%%T*}
	# 		</span>
	# 	<div class=\"tags\">
	# 	</div>
	# </div>

	# """
	# echo $v