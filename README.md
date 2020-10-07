# Round Color&nbsp;

It finds the nearest base color of given color from the given base color list.

**Test image** :


![RoundColor Test img](http://i.imgur.com/ri52ekC.jpg)

**Base Colors** :
Please visit the PKRoundColor for getting the idea of color that it avaliable with the library

**usage** :

<pre>
$color = "#f3f3dd";

$PKR = new PKRoundColor();
$roundedColor = $PKR->getRoundedColor($color);
echo $roundedColor;
</pre>

**Return Value** : the nearest color to the input color.

<pre>
#f5f5dc
</pre>

