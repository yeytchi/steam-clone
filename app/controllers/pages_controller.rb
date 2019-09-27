class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :groupe_1, :groupe_2, :groupe_3, :groupe_4, :groupe_6]

  def home
    @query = params[:query]
  end

  def groupe_1
  end

  def groupe_2
  end

  def groupe_3
  end

  def groupe_4
  end

  def groupe_6
  end
end
