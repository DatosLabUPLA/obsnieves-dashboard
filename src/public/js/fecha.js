var fecha = new Date,
date = fecha.getDate()-4,
month = fecha.getMonth()+1, 
year = fecha.getFullYear();

    if(date < 10) date = ("0" + date);
    if(month < 10) month = ("0" + month);

url = "https://observatorionieves.cl/media/maps/modis/doy/terra/"+year+"_"+month+"_"+date+".html";
url1 = "https://observatorionieves.cl/media/maps/modis/doy/terra/zona_central_"+year+"_"+month+"_"+date+".html";

document.write("Última imagen disponible: "+ date+"-"+month+"-"+year);   
