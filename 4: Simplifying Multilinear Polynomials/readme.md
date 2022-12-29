# simplifying multilinear polynomials

When we attended middle school were asked to simplify mathematical expressions like "3x-yx+2xy-x" (or usually bigger), and that was easy-peasy ("2x+xy"). But tell that to your pc and we'll see!

Write a function, simplify, that takes as input a string representing a multilinear non-constant polynomial with integer coefficients (like "3x-zx+2xy-x") and returns as output another string that has been simplified in the following way ( -> means application of simplify):

All possible sums and subtractions of equivalent monomials ("xy==yx") have been done, e.g.:

` "cb+cba" -> "bc+abc",`

`"2xy-yx" -> "xy",` 

`"-a+5ab+3a-c-2a" -> "-c+5ab"`


All monomials appear in order of increasing number of variables, e.g.:

`"-abc+3a+2ac" -> "3a+2ac-abc"`,

` "xyz-xz" -> "-xz+xyz"`

If two monomials have the same number of variables, they appears in lexicographic order, e.g.:

`"a+ca-ab" -> "a-ab+ac"`, 

`"xzy+zby" ->"byz+xyz"`

There is no leading + sign if the first coefficient is positive, e.g.:

`"-y+x" -> "x-y"`

, but no restrictions for -: 

`"y-x" ->"-x+y"`