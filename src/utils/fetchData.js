export const  exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com' ,
    'X-RapidAPI-Key':  '0681355effmsh6a3af7873e69fa4p1538dcjsn690a29b4e541'
    
  }
};


export const fetchData = async (url,options) =>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;

}


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0681355effmsh6a3af7873e69fa4p1538dcjsn690a29b4e541',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};