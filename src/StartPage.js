export default class StartPage {
  draw() {
    const searchDiv = document.createElement('div');
    searchDiv.className = 'search';
    const searchInputElement = document.createElement('input');
    searchInputElement.className = 'search-input';
    searchInputElement.type = 'text';
    searchInputElement.value = '';
    searchInputElement.autofocus = 'true';
    searchInputElement.name = 'q';
    searchDiv.appendChild(searchInputElement);
    const btnSubmitElement = document.createElement('button');
    btnSubmitElement.className = 'search-btnsubmit';
    btnSubmitElement.innerHTML = 'Search';
    searchDiv.appendChild(btnSubmitElement);
    document.body.appendChild(searchDiv);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'articles';
    document.body.appendChild(resultDiv);
    return this;
  }
}
