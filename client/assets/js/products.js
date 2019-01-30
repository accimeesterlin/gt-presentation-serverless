const token = localStorage.getItem('idToken');

if (!token) {
    window.location.href = 'signin.html'; 
}

const url = 'https://1bgg2r99p2.execute-api.us-east-1.amazonaws.com/Prod?';

log('TOKEN: ', token);

// Searching Products by ID
function fetchProductById(id) {
    $.ajax({
        url: `${url}id=${id}`,
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    .then(onProductSuccess)
    .catch(onProductFailure);
}

fetchProductById(101);


function onProductSuccess(response) {
    const item = response.data.Items[0];
    const title = item.Title;
    const PageCount = item.PageCount;
    const Price = item.Price;
    const Id = item.Id;


    $('#title').html('Title: ' + title);
    $('#pageCount').html('Page Count: ' + PageCount);
    $('#price').html('Price: ' + Price);
    $('#id').html('Id: ' + Id);
}

function onProductFailure(error) {
    log('Error: ', error);
    alert('Error: ', error);
}