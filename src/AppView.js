import drawPageNavigation from './pageNavigationView';

export default class AppView {
  constructor(data, dataStatistics) {
    this.video = data;
    this.videoStatistics = dataStatistics;
  }

  draw() {
    const resultDiv = document.querySelector('.articles');

    if (this.video.items.length === 0) {
      const resultMessage = document.createElement('p');
      resultMessage.className = 'result-empty';
      resultMessage.textContent = 'По Вашему запросу ничего не найдено';
      resultDiv.appendChild(resultMessage);
    } else {
      for (let i = 0; i < this.video.items.length; i += 1) {
        const divArticle = document.createElement('div');
        divArticle.className = 'article';
        const articleTitle = document.createElement('p');
        const articleLink = document.createElement('a');
        articleLink.className = 'link-video';
        articleLink.style.backgroundImage = `url(${this.video.items[i].snippet.thumbnails.default.url})`;
        const articleDesc = document.createElement('p');
        const articleDatePublish = document.createElement('span');
        articleDatePublish.className = 'date-publish';
        const articleAuthor = document.createElement('span');
        articleAuthor.className = 'author';
        const countView = document.createElement('span');
        countView.className = 'count-view';

        articleTitle.textContent = this.video.items[i].snippet.title;
        articleTitle.className = 'title';
        articleLink.href = `https://www.youtube.com/watch?v=${this.video.items[i].id.videoId}`;
        articleDesc.textContent = this.video.items[i].snippet.description;
        articleDesc.className = 'description';
        articleDatePublish.textContent = this.video.items[i].snippet.publishedAt.slice(0, 10);
        articleAuthor.textContent = this.video.items[i].snippet.channelTitle;
        countView.textContent = this.videoStatistics.items[i].statistics.viewCount;
        articleLink.appendChild(articleTitle);
        divArticle.appendChild(articleLink);
        divArticle.appendChild(articleAuthor);
        divArticle.appendChild(articleDatePublish);
        divArticle.appendChild(countView);
        divArticle.appendChild(articleDesc);
        resultDiv.appendChild(divArticle);
        document.body.appendChild(resultDiv);
      }
      drawPageNavigation();
      const pagingControl = document.querySelector('.paging-control');
      pagingControl.addEventListener('click', (e) => {
        const currentPage = e.target.getAttribute('tooltip');
        if (currentPage !== null) {
          document.querySelector('.page-current').className = 'btn-pagecontrol';
          e.target.className = 'page-current';
          const resultDiv2 = document.getElementsByClassName('article');
          for (let j = 0; j < this.video.items.length; j += 1) {
            resultDiv2[j].style.setProperty('--i', currentPage);
          }
        }
      });
    }
  }

  remove() {
    document.querySelector('.paging-control').remove();
    document.querySelector('.articles').remove();
    const resultDiv = document.createElement('div');
    resultDiv.className = 'articles';
    document.body.appendChild(resultDiv);
    return this;
  }
}
