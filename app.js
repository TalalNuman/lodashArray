
let x = require('lodash')

    window.min = function min(array){
           let n = _.min(array);
            return n;
        }
 
    window.max = function max(array){
           let m  = _.max(array);
            return m;
        }
        window.sum = function sum(array){
            let add = _.reduce(array, function(sum, n) {
                return sum + n;
              }, 0);
              return add;
        }

        