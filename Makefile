install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

brain-calc: 
  node bin/brain-calc.js

brain-gcd: 
  node bin/brain-gcd.js

brain-even: 
  node bin/brain-even.js

brain-prime: 
  node bin/brain-prime.js

brain-progression: 
  bin/brain-progression.js