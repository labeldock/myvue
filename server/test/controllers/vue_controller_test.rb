require 'test_helper'

class VueControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get vue_index_url
    assert_response :success
  end

  test "should get second" do
    get vue_second_url
    assert_response :success
  end

end
