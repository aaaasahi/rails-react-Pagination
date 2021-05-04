class TodosController < ApplicationController
  include Pagenation  

  def index
    todos = Todo.all.page(params[:page]).per(5)
    pagenation = resources_with_pagination(todos)  
    @todos = todos.as_json
    json_data = { todos: @todos, kaminari: pagenation }  
    render json: json_data
  end

  def show
    todo = Todo.find(params[:id])
    render json: todo
  end

  def create
    todo = Todo.new(todo_params)
    if todo.save
      render json: todo
    else
      render json: todo.errors, status: 422
    end
  end

  def update
    todo = Todo.find(params[:id])
    if todo.update(todo_params)
      render json: todo
    else
      render json: todo.errors, status: 422
    end
  end

  def destroy
    if Todo.destroy(params[:id])
      head :no_content
    else
      render json: { error: "Failed to destroy" }, status: 422
    end
  end

  def search
    todos = Todo.where("title LIKE ?", "%#{params[:q]}%").page(params[:page]).per(5)
    render json: todos
  end

  private

  def todo_params
    params[:todo].permit(:title, :text)
  end
end
