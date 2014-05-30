REMOTE=mwolf@simon.artiosonline.com:/srv/jglcrm-2015/
CONFIG=_config.yml
BUILD=jekyll build

all:
	$(BUILD)

deploy: all
	rsync -alvz --del _site/ $(REMOTE)
