source "https://rubygems.org"

# do not forget when update this file
# bundle exec jekyll serve

gem "jekyll", "~> 4.0.0"
gem "kramdown", ">= 2.3.1"
# to use GitHub Pages, remove the "gem "jekyll"" uncomment below
# gem "github-pages", group: :jekyll_plugins
# to upgrade, run `bundle update github-pages`.

group :jekyll_plugins do
  gem 'jekyll-sitemap'
  gem 'jekyll-feed'
  gem 'jekyll-seo-tag'
end

install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?


gem "addressable", ">= 2.8.0"
gem "rexml", ">= 3.2.5"