let graphDiv = document.getElementById('tester');

let data = [{
  x : ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
  y : [98, 87, 93, 83, 78, 69, 95, 91, 93, 95, 92, 89],
  type : "bar", 
  marker : {
    color : "#ffcccc",
    line : {width : 2.5}
  }
}] ; 

let layout = {
  title : "Pourcentage de CA de l'année 2023", 
  xaxis : {
    title : "",
    showgrid : false, //lignes de grilles dessinées ou non
    zeroline : false, //ligne tracée le long de la valeur 0
  },
  yaxis : {
    title : "  ",
    showline : false, // ligne de y tracée ou non
  }
} ;

let config = {responsive : true} ;
Plotly.newPlot(graphDiv, data, layout, config); 

