REMOTE=mwolf@simon.artiosonline.com:/srv/jglcrm-2015/
CONFIG=_config.yml
BUILD=jekyll build

all: css/main.css
	$(BUILD) --config _config.yml,_config-deploy.yml

css/main.css: css/main.less
	lessc --clean-css css/main.less css/main.css

deploy: all
	rsync -alvz --del _site/ $(REMOTE)
