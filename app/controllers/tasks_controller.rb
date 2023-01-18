class TasksController < ApplicationController
    skip_before_action :authorize
    def index
        tasks = Task.all
        render json: tasks
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
        render json: task
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
        render json: task
    end

    private

    def task_params
        params.permit(:title, :description, :solution, :comment, :student_id, :supervisor_id, :completed)
    end

end
