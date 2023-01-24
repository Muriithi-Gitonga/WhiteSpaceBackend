class TasksController < ApplicationController
    skip_before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_task

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

    
    def invalid_task invalid
        render json:{errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
