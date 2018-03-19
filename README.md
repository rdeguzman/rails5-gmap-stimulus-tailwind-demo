# README

## Install

Install webpacker + stimulusjs

```
# rails new rails5-gmap-demo --database=postgresql --skip-sprockets --skip-bundle --skip-coffee --skip-test --webpack
# cd rails5-gmap-demo
# yarn add stimulus
# gem install -V bundler --no-ri --no-rdoc
# bundle install
# bundle exec rake webpacker:install
```

## Setup database
```
# bundle exec rake db:create
# bundle exec rake db:migrate
```

## Run rails for the first time
```
# bundle exec rails s -b 0.0.0.0 -e development -p 3000
```
