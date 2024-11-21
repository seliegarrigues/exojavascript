/* 

Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

    left - The current floor of the left elevator
    right - The current floor of the right elevator
    call - The floor that called an elevator

It should return the name of the elevator closest to the called floor ("left"/"right").

In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

You can assume that the inputs will always be valid integers between 0-2. */

/* Examples: elevator(0, 1, 0); <i>// => "left"</i>
elevator(0, 1, 1); <i>// => "right"</i>
elevator(0, 1, 2);<i> // => "right"</i>
elevator(0, 0, 0);<i> // => "right"</i>
elevator(0, 2, 1);<i> // => "right"</i> */

function elevator(left, right, call) {
    if (Math.abs(left-call) < Math.abs(right-call)) {
        return "left";
    }
     else  {
return "right";
     }
    }
/*     Explanation: using the absolute value method of the Math object allows us to find the distance between the elevator and the place an elevator was called. If the distance is less to the left elevator, the function will return “left,” else (ie if the distance is greater to the left elevator than to the right elevator or if the elevators are equidistant to the elevator call) return “right." */