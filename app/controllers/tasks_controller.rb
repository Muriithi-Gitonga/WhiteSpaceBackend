class TasksController < ApplicationController

      def index 
        task = Task.all
        render json: task
      end

      def show
        task = Task.find(params[:id])
        render json: task
      end
  
      def create
        task = Task.create!(task_params)
        render json: task, status: :created
      end

      def update
        task = Task.find(params[:id])
        task.update!(task_params)
        render json: task, status: :updated
      end

      def destroy
        task = Task.find(params[:id])
        task.destroy
        render json: task, status
        render json: task.errors, status: :unprocessable_entity
      end

      private

      def task_params
        params.permit(:title, :description, :solutions, :comments, :student_id, :supervisor_id, :completed, :student_username)
end
