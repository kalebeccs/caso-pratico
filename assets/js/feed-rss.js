/*=============== FEED RSS ===============*/
const sourceRSS = 'https://api.rss2json.com/v1/api.json?rss_url=https://pt.ign.com/tech.xml'
const loadRSS = (feedSrc) => {
    const src = feedSrc
    const xhttp = new XMLHttpRequest();
    xhttp.responseType = 'json'
    xhttp.open("get", src, true);
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            showRSS(this)
        }
    };
    xhttp.send();
}

function showRSS(json) {
    const div = document.getElementById('rss-content'),
          objJson = json.response;
    let resultado = '';
    div.style.display = 'block'

    objJson.items.forEach((item) => {
        published = item.pubDate
        author = item.author
        link = item.link
        title = item.title
        summary = item.description

        date = new Date(published)
        day = date.getDate()
        mouth = date.getMonth() + 1
        year = date.getFullYear()
        hour = date.getHours()
        minute = date.getMinutes()

        resultado += `
                    <div class="rss__item">
                        <h3 class="rss__item-title">
                            <a href="${link}" class="rss__link" target="_blank">
                                ${title}
                            </a>
                        </h3>
                        <div class="rss__item-info">
                            <p class="rss__author">
                                <b>Author:</b> ${author}
                            </p>
                            <p class="rss__date">
                                ${day}-${mouth}-${year} | ${hour}:${minute}
                            </p>
                        </div>
                        <p class="rss__description">
                            ${summary}
                        </p>
                    </div>
                `
    })

    div.innerHTML = resultado
}

window.onload = loadRSS(sourceRSS)

/*=============== SHOW FEED ===============*/
const btnFeed = document.getElementById('rss-button'),
      feed = document.getElementById('rss')
btnFeed.addEventListener('click',() =>{

    if (feed.classList.contains('view-rss')) {
        feed.classList.remove('view-rss')
    } else {
        feed.classList.add('view-rss')
    }
})