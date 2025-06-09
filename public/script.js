function addBorrower(event) {
  event.preventDefault();
  
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  
  const borrowerList = document.getElementById('borrower-list-ul');
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="borrower-info">
      <h3>${firstname} ${lastname}</h3>
      <div class="details">
        <p>Email: ${email || 'Neuvedeno'}</p>
        <p>Telefon: ${phone || 'Neuvedeno'}</p>
      </div>
    </div>
    <div class="actions">
      <button class="detail-btn">Detail</button>
      <button class="delete-btn">Smazat</button>
    </div>
  `;
  borrowerList.appendChild(li);
  
  li.querySelector('.delete-btn').addEventListener('click', function() {
    li.remove();
  });
  
  li.querySelector('.detail-btn').addEventListener('click', function() {
    const details = li.querySelector('.details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  });
  
  document.getElementById('borrower-form').reset();
}

function addBook(event) {
  event.preventDefault();
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const year = document.getElementById('year').value;
  const genre = document.getElementById('genre').value;
  
  const borrowedBooksList = document.getElementById('borrowed-books-list');
  const li = document.createElement('li');
  li.innerHTML = `
    <div class="book-info">
      <h3>${title}</h3>
      <div class="details">
        <p>Autor: ${author}</p>
        <p>Rok vydání: ${year}</p>
        <p>Žánr: ${genre}</p>
      </div>
    </div>
    <div class="actions">
      <button class="detail-btn">Detail</button>
      <button class="delete-book-btn">Smazat</button>
    </div>
  `;
  borrowedBooksList.appendChild(li);
  
  li.querySelector('.delete-book-btn').addEventListener('click', function() {
    li.remove();
  });
  
  li.querySelector('.detail-btn').addEventListener('click', function() {
    const details = li.querySelector('.details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
  });
  
  document.getElementById('book-form').reset();
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('borrower-form').addEventListener('submit', addBorrower);
  document.getElementById('book-form').addEventListener('submit', addBook);
});
