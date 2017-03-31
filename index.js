console.log('Ola mundo!')

var cores = ['blue', 'red', 'green'];

cores.push('black');
cores.unshift('black');

cores.forEach(function(item, index, array){
    //console.log(item, index, array);
    console.log(item);

});
