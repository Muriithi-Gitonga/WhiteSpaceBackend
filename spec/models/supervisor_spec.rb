require 'rails_helper'

RSpec.describe Supervisor, type: :model do
  DatabaseCleaner.strategy = :truncation
    before(:each) do
      DatabaseCleaner.clean
    end
  
    after(:all) do
      DatabaseCleaner.clean
    end
# properties
  describe "Properties" do
    it "Verifies that Supervisor has name, username, email and password" do
      expect(Supervisor.new.attributes).to include(:name, :username, :email, :password_digest)
    end
  end

  # validations
  describe "validations" do
    describe "name" do
      it "expects name to be present" do
        expect(Supervisor.create(username: "Maureen", email: "mkaymaureen@gmail.com", password_digest: "mkay1234")).to be_invalid
        expect(Supervisor.create(name: "Maureen Kamau", username: "Maureen", email: "mkaymaureen@gmail.com", password_digest: "mkay1234")).to be_valid
      end

    end
    # username
    describe "username" do
      it ("expects username to be present") do
        expect(Supervisor.create(name: "Maureen Kamau", email: "mkaymaureen@gmail.com", password_digest:"mkay1234")).to be_invalid
        expect(Supervisor.create(name: "Maureen Kamau", username: "Mkay", email: "mkaymaureen@gmail.com", password_digest:"mkay1234")).to be_valid
      end
      it "expects username to be unique" do
        Supervisor.create(name:"Hello World", email: "hello@gmail.com",username:"Helloworld",password_digest:"hellothere")
        expect(Supervisor.create(name:"Hello World", email: "hello@gmail.com",username:"Helloworld",password_digest:"hellothere")).to be_invalid
      end
    end
    # password
    describe "password:" do
      it "expects password to have a minimum of 8 characters" do
        expect(Supervisor.create(name:"Test Pwd", email: "pwd@gmail.com", username:"Pwd",password_digest:"short")).to be_invalid
        expect(Supervisor.create(name:"Test Pwd", email: "pwd@gmail.com",username:"Pwd",password_digest:"longenough")).to be_valid
       end
    end
  end

end
