class Api::FoodsController < ApplicationController
  before_action :set_menu 
  # before_action :set_food, only: [:update, :destroy]

  def index
    render json: @menu.foods
  end

  def create
    food = @menu.foods.new(food_params)
    if food.save
      render json: @menu.foods
    else
      # render json: { errors: food.errors }, status: :unprocessable_entity
    end
  end

  private
    def set_menu
      @menu = Menu.find(params[:menu_id])
    end

    def food_params
      params.require(:food).permit(:name, :price)
    end

end
