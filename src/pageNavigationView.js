export default function drawPageNavigation() {
  const pagingControl = document.createElement('div');
  pagingControl.className = 'paging-control';
  const countBtn = 4;
  for (let i = 0; i < countBtn; i += 1) {
    const btnPagingControl = document.createElement('div');
    btnPagingControl.className = 'btn-pagecontrol';
    const numberPage = document.createElement('span');
    numberPage.className = 'number-btn';
    btnPagingControl.setAttribute('tooltip', i + 1);
    numberPage.innerHTML = i + 1;
    btnPagingControl.appendChild(numberPage);
    pagingControl.appendChild(btnPagingControl);
  }

  document.body.appendChild(pagingControl);
  document.querySelector('.btn-pagecontrol').className = 'page-current';
}
