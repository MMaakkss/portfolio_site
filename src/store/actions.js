import axios from "axios"

export default {
  getRepos(ctx, name) {
    return new Promise(() => {
      axios.get(`https://api.github.com/users/${name}/repos?sort=created&direction=desc`)
        .then(res => {
          if (res.status === 200) {
            const data = res.data

            const getColor = (lang) => {
              switch (lang) {
              case "vue":
                return "#81D4AF"
              case "html":
                return "#E99287"
              case "javascript":
                return "#FDC155FF"
              case "typescript":
                return "#007acc"
              case "css":
                return "#FF8A27"
              default:
                return "#81D4AF"
              }
            }

            const getDate = (val) => {
              const date = new Date(val)
              let dateDay = date.getDate()
              let dateMonth = date.getMonth()

              if (dateDay < 10) dateDay = "0" + dateDay
              if (dateMonth < 10) dateMonth = "0" + dateMonth

              return dateDay + "." + dateMonth + "." + date.getFullYear()
            }

            let list = data.map(item => {
              const lang = item.language.toLowerCase()

              return {
                url: item.html_url,
                created: getDate(item.created_at),
                description: item.description,
                name: item.name,
                homepage: item.homepage,
                img: "src/assets/examp.jpeg",
                mainTechnology: lang,
                color: getColor(lang),
              }
            })

            let tech = []

            list.forEach(item => {
              tech.push(item.mainTechnology)
            })

            tech = [...new Set(tech)]

            ctx.commit("setTechList", tech)
            ctx.commit("setProjectList", list)
          }
        })
        .catch(err => console.log(err.message))
    })
  },
}