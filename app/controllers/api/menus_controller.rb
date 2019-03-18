class Api::MenusController < ApplicationController
  before_action set_menu, only:[:update, :destroy]

  def index
    render json: Menu.all
  end

  def create
    menu = Menu.new(item_params)
    if menu.save
      render json: menu
    else
    end
  end

  def update
    @menu.update(complete: !@menu.complete)
    render json: @menu
  end

  def destroy
    @menu.destroy
    render json: { message: "Menu Deleted" }
  end

  private

    def menu_params
      params.require(:menu).permit(:name)
    end

    def set_menu
      @menu = Menu.find(params[:id])
    end

end
