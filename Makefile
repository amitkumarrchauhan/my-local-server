cucumber:
		@NODE_ENV=test ./node_modules/.bin/cucumber.js tests/features \
				-r tests/features/step_definitions

.PHONY: cucumber