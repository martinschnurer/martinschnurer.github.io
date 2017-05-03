This is artificial intelligence - searching space solution to 8 or more MxN dimensional puzzle.

You can choose between two heuristics:
<ul>
<li>Manhattan heuristic - sum of x and y distances to right position of box (foreach box) </li>
<li>Simple heuristic - sum of boxes that are not on its right place</li>
</ul>

<b>Always keep one box empty ("")</b>

Solution starting on the bottom of the right text column. In the very ending row is your starting puzzle composition. As you go up, on the beginning of every row except last is your move of box to the blank box. 
For example, if there is move "UP", this not means you move UP with blank box, but with box under blank, you move up to the blank :)

<b>Warning:</b>
<ol>
<li>Set up only <b>valid</b> solution - otherwise you'll end up with endless loop
<li>Not recommended to set up large dimensions (MxN). Complexity and computational time is much bigger then. Try 3x3,4x4,5x5,6x6. And it's dimensional permutations 2x6,5x4 and so on. 
</ol>
