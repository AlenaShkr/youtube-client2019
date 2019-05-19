import AppView from './AppView';

export default class AppModel {
  constructor(state) {
    this.state = state;
  }

  getClip(data) {
    const { MAXRESULT, APIKEY } = this.state;
    const url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&type=video&part=snippet&maxResults=${MAXRESULT}&q=${data}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function resp() {
      const result = JSON.parse(xhr.responseText);
      // const token = result.nextPageToken;
      if (result.items.length !== 0) {
        const videosId = [];
        for (let i = 0; i < MAXRESULT; i += 1) {
          videosId.push(result.items[i].id.videoId);
        }
        videosId.join('');

        const urlStatistic = `https://www.googleapis.com/youtube/v3/videos?key=${APIKEY}&id=${videosId}&part=statistics`;

        fetch(urlStatistic)
          .then(res => res.json())
          .then((resultStatistic) => {
            const view = new AppView(result, resultStatistic);
            view.draw();
          })
          .catch(error => error);
      }
    };
    xhr.onerror = function onerr() {
      return (`Ошибка ${this.status}`);
    };
    xhr.send();
  }

  remove() {
    const view = new AppView(this.state);
    view.remove();
  }
}
