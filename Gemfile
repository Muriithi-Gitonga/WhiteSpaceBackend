source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "2.7.4"

gem 'active_model_serializers'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.0.4"
gem 'bcrypt', '~> 3.1.7'
# gem 'password_strength', '~> 1.1', '>= 1.1.4'
# gem 'password_validation', '~> 0.0.1'


gem "jwt", "~> 2.5"
# Use postgresql as the database for Active Record
gem "pg"


# Use the Puma web server [https://github.com/puma/puma]
gem "puma", "~> 5.0"

# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem "rack-cors"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'rspec-rails', ">= 3.9.0"
end

group :development do
  # Speed up commands on slow machines / big apps [https://github.com/rails/spring]
  # gem "spring"
end

gem 'database_cleaner', '~> 2.0', '>= 2.0.1'
# gem "jwt", "~> 2.6"

# gem "bcrypt", "~> 3.1"

# gem "jwt", "~> 2.6"

# gem "active_model_serializers", "~> 0.10.13"

gem "faker", "~> 3.1"
