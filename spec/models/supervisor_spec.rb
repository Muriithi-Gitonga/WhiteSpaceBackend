require 'rails_helper'

RSpec.describe Supervisor, type: :model do
  DatabaseCleaner.strategy = :transaction
  before(:each) do
    DatabaseCleaner.start
  end

  after(:each) do
    DatabaseCleaner.clean
  end
# properties
  describe "Properties" do
    it "Verifies that Supervisor has name, username, email and password_digest" do
      expect(Supervisor.new.attributes.keys).to include("name", "username", "email", "password_digest")
    end
  end


  # validations
  
  describe "validations" do
    it "is valid with valid attributes" do
      expect(Supervisor.new(name: "Maureen Kamau", username: "Mkay", email: "mkaymaureen@gmail.com", password: "mkay1234")).to be_valid
    end
  
    it "is invalid without a name" do
      expect(Supervisor.new(username: "Mkay", email: "mkaymaureen@gmail.com", password: "mkay1234")).to be_invalid
    end
  
    it "is invalid without a username" do
      expect(Supervisor.new(name: "Maureen Kamau", email: "mkaymaureen@gmail.com", password: "mkay1234")).to be_invalid
    end
  
    it "is invalid with a duplicate username" do
      Supervisor.create(name: "Maureen Kamau", username: "Mkay", email: "mkaymaureen@gmail.com", password: "mkay1234")
      expect(Supervisor.new(name: "Maureen Kamau", username: "Mkay", email: "mkaymaureen1@gmail.com", password: "mkay1234")).to be_invalid
    end
  
    it "is invalid without an email" do
      expect(Supervisor.new(name: "Maureen Kamau", username: "Mkay", password: "mkay1234")).to be_invalid
    end
    it "is invalid with a duplicate email" do
      Supervisor.create(name: "Maureen Kamau", username: "Mkay", email: "mkaymaureen@gmail.com", password: "mkay1234")
      expect(Supervisor.new(name: "Maureen Kamau", username: "Mkay", email: "mkaymaureen1@gmail.com", password: "mkay1234")).to be_invalid
    end

    it "expects email to be in a valid format" do
      expect(Supervisor.new(name: "Maureen Kamau", username: "Maureen", email: "invalid_email", password_digest: "mkay1234")).to be_invalid
    end
  
  end

end
