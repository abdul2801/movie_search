$(function(){
    var perpage = 4
    var pagecount =  Math.ceil(totalMov / perpage)
    var totalMov = 0
    // jQuery methods go here...
    $('.btn').click(()=> {
       $("ul.pagination").empty()
       $("tbody").empty()
       var search = $('input').val()

    $('.li').click(() => {

    })
  

$.get(`http://www.omdbapi.com/?s=${search}&apikey=5f6e70db`, (data) => {
    
    totalMov = data.Search.length
   
    let ul = ""
    try {
        Array.from(new Array(pagecount), (x,i)=> i+1).forEach(i => {
        ul += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
    })
}
catch{}


    $('ul.pagination').append(ul)
    var index = 0 
    data.Search.forEach((data) => {
    var poster =  data.Poster
    $.get(`http://www.omdbapi.com/?i=${data.imdbID}&apikey=5f6e70db` , (data) => {
    index+=1
    let genres = ""
     data.Genre.split(",").forEach(e => {
        genres=genres.concat(`<option>${e}</option>`)
        
    });
    $("tbody").append(`
    <tr>
    <th >${index}</th>
    <th><img src="${poster}" class="img-thumbnail"></th>
    <td>${data.Title}</td>
    <td> <select class="form-select form-select-sm dark" style="width : 170px;">
                ${genres}
                
              
            </td>
    <td>${data.imdbRating}</td>
    <td><div style=" overflow-y: auto; max-height: 100px;";">${data.Plot}</div>
    </tr>`)
})
})
})
})
  
}); 
