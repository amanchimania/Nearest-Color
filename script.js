Array.closest = (function () {
    function dist(s, t) {
        if (!s.length || !t.length) return 0;
        return dist(s.slice(2), t.slice(2)) +
            Math.abs(parseInt(s.slice(0, 2), 16) - parseInt(t.slice(0, 2), 16));
    }

    return function (arr, str) {
        var min = 0xffffff;
        var best, current, i;
        for (i = 0; i < arr.length; i++) {	
            current = dist(arr[i], str)
            if (current < min) {
                min = current
                best = arr[i];
            }
        }
        return best;
    };
}());



// http://www.crockford.com/wrrrld/color.html
var colors = {
    '191970': 'midnightblue',
    '696969': 'dimgray',
    '708090': 'slategray',
    '778899': 'lightslategray',
    '800000': 'maroon',
    '800080': 'purple',
    '808000': 'olive',
    '808080': 'gray',
    'f0f8ff': 'aliceblue',
    'faebd7': 'antiquewhite',
    '00ffff': 'cyan',
    '7fffd4': 'aquamarine',
    'f0ffff': 'azure',
    'f5f5dc': 'beige',
    'ffe4c4': 'bisque',
    '000000': 'black',
    'ffebcd': 'blanchedalmond',
    '0000ff': 'blue',
    '8a2be2': 'blueviolet',
    'a52a2a': 'brown',
    'deb887': 'burlywood',
    '5f9ea0': 'cadetblue',
    '7fff00': 'chartreuse',
    'd2691e': 'chocolate',
    'ff7f50': 'coral',
    '6495ed': 'cornflowerblue',
    'fff8dc': 'cornsilk',
    'dc143c': 'crimson',
    '00008b': 'darkblue',
    '008b8b': 'darkcyan',
    'b8860b': 'darkgoldenrod',
    'a9a9a9': 'darkgray',
    '006400': 'darkgreen',
    'bdb76b': 'darkkhaki',
    '8b008b': 'darkmagenta',
    '556b2f': 'darkolivegreen',
    'ff8c00': 'darkorange',
    '9932cc': 'darkorchid',
    '8b0000': 'darkred',
    'e9967a': 'darksalmon',
    '8fbc8f': 'darkseagreen',
    '483d8b': 'darkslateblue',
    '2f4f4f': 'darkslategray',
    '00ced1': 'darkturquoise',
    '9400d3': 'darkviolet',
    'ff1493': 'deeppink',
    '00bfff': 'deepskyblue',
    '1e90ff': 'dodgerblue',
    'b22222': 'firebrick',
    'fffaf0': 'floralwhite',
    '228b22': 'forestgreen',
    'ff00ff': 'magenta',
    'dcdcdc': 'gainsboro',
    'f8f8ff': 'ghostwhite',
    'ffd700': 'gold',
    'daa520': 'goldenrod',
    '008000': 'green',
    'adff2f': 'greenyellow',
    'f0fff0': 'honeydew',
    'ff69b4': 'hotpink',
    'cd5c5c': 'indianred',
    '4b0082': 'indigo',
    'fffff0': 'ivory',
    'f0e68c': 'khaki',
    'e6e6fa': 'lavender',
    'fff0f5': 'lavenderblush',
    '7cfc00': 'lawngreen',
    'fffacd': 'lemonchiffon',
    'add8e6': 'lightblue',
    'f08080': 'lightcoral',
    'e0ffff': 'lightcyan',
    'fafad2': 'lightgoldenrodyellow',
    'd3d3d3': 'lightgray',
    '90ee90': 'lightgreen',
    'ffb6c1': 'lightpink',
    'ffa07a': 'lightsalmon',
    '20b2aa': 'lightseagreen',
    '87cefa': 'lightskyblue',
    'b0c4de': 'lightsteelblue',
    'ffffe0': 'lightyellow',
    '00ff00': 'lime',
    '32cd32': 'limegreen',
    'faf0e6': 'linen',
    '66cdaa': 'mediumaquamarine',
    '0000cd': 'mediumblue',
    'ba55d3': 'mediumorchid',
    '9370db': 'mediumpurple',
    '3cb371': 'mediumseagreen',
    '7b68ee': 'mediumslateblue',
    '00fa9a': 'mediumspringgreen',
    '48d1cc': 'mediumturquoise',
    'c71585': 'mediumvioletred',
    'f5fffa': 'mintcream',
    'ffe4e1': 'mistyrose',
    'ffe4b5': 'moccasin',
    'ffdead': 'navajowhite',
    '000080': 'navy',
    'fdf5e6': 'oldlace',
    '6b8e23': 'olivedrab',
    'ffa500': 'orange',
    'ff4500': 'orangered',
    'da70d6': 'orchid',
    'eee8aa': 'palegoldenrod',
    '98fb98': 'palegreen',
    'afeeee': 'paleturquoise',
    'db7093': 'palevioletred',
    'ffefd5': 'papayawhip',
    'ffdab9': 'peachpuff',
    'cd853f': 'peru',
    'ffc0cb': 'pink',
    'dda0dd': 'plum',
    'b0e0e6': 'powderblue',
    'ff0000': 'red',
    'bc8f8f': 'rosybrown',
    '4169e1': 'royalblue',
    '8b4513': 'saddlebrown',
    'fa8072': 'salmon',
    'f4a460': 'sandybrown',
    '2e8b57': 'seagreen',
    'fff5ee': 'seashell',
    'a0522d': 'sienna',
    'c0c0c0': 'silver',
    '87ceeb': 'skyblue',
    '6a5acd': 'slateblue',
    'fffafa': 'snow',
    '00ff7f': 'springgreen',
    '4682b4': 'steelblue',
    'd2b48c': 'tan',
    '008080': 'teal',
    'd8bfd8': 'thistle',
    'ff6347': 'tomato',
    '40e0d0': 'turquoise',
    'ee82ee': 'violet',
    'f5deb3': 'wheat',
    'ffffff': 'white',
    'f5f5f5': 'whitesmoke',
    'ffff00': 'yellow',
    '9acd32': 'yellowgreen'
};

// convert the `colors`-object to an array
var colorsArr = [];
for(var key in colors) {
    colorsArr.push(key);
}

var $input = $('input');
var $button = $('button');
console.log("aaaaaa"); 
$(document).ready(function(){
$("button").click('click', function() {
console.log("aaaaaa"); 
    // get value and remove the hash
    
console.log("aaaaaa"); 
    // convert 3 digits to 6
    hex = hex.length < 6 ? hex.replace(/(.)/g, '$1$1') : hex;
console.log("aaaaaa"); 
    // get the closest color // HERE'S THE PROBLEM
    var match = Array.closest(colorsArr, hex);
   console.log("aaaaaa"); 
    // get the closest color name and change the background 
    document.body.style.backgroundColor = colors[match];
console.log("aaaaaa"); 
    console.log( colors[match] ); // => 'chocolate'
console.log("aaaaaa"); 
});
});