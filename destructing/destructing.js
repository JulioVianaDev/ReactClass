var obj = {
    name: 'celso',
    props:{
        age: 24,
        FavoriteColor:[ 'black', 'blue']
    }
};
var age = obj.props.age;

var {
    props:{
        age: age2,
        FavoriteColor: [color1,color2]
    }
} = obj;
console.log(color1);