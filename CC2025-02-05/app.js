//f(x) = |x-3| + 3x -1

function f(x){
    let absoluteValue = Math.abs(x - 3)
    let right = (3 * x) - 1
    let result = absoluteValue + right 
    return result
}

/* SCHEME
(define (f x)
  (let* ((absoluteValue (abs (- x 3)))
         (right (- (* 3 x) 1))
         (result (+ absoluteValue right)))
    result))
*/

/* LISP
(defun f (x)
  (let* ((absoluteValue (abs (- x 3)))
         (right (- (* 3 x) 1))
         (result (+ absoluteValue right)))
    result))
*/

function factorial(n){
    if(n === 0)
        return 1
    return n * factorial(n-1)
}
console.log(factorial(5))

function fib(n){
    let result
    if(n <= 1)
        return n
    return fib(n-1) + fib(n-2)
}

