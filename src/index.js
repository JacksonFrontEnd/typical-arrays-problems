
exports.min = function min (array) {
  if(typeof(array)!="undefined")
  {
  if(array.length > 0){
    var minimum = array[0];
    for(var i = 0;i<array.length;i++){
    if(array[i]<minimum) minimum=array[i];
    } 
    return minimum;
  }
}
    return 0;
}

exports.max = function max (array) {
  var maximum;
  if(typeof(array)!="undefined")
  {
  if(array.length > 0 && array!=null){
    maximum=array[0];
    for(var j = 0 ;j < array.length; j++){
    if(array[j]>maximum) maximum=array[j];
    } 
    return maximum;
  }
}
return 0;
}

exports.avg = function avg (array) {
  var sum=0;
  if(typeof(array)!="undefined")
  {
  if(array.length > 0){
    for(var k=0;k<array.length;k++){
      sum=sum+array[k];
    }
    return sum/array.length;
  }
}
  return 0;
}
