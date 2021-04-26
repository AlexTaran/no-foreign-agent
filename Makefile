
clean:
	rm -rf build
build:
	mkdir -p build/
	zip -r build/no-foreign-agent.zip extension
