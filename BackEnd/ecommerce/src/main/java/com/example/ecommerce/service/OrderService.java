package com.example.ecommerce.service;

import com.example.ecommerce.entity.Orders;
import com.example.ecommerce.exception.OrderException;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.request.CreateOrderReq;

import java.util.List;

public interface OrderService {
    Orders createOrder(CreateOrderReq createOrderReq) throws UserException;

    Orders findOrderById(Long orderId) throws OrderException;

    List<Orders> userOrderHistory(Long userId);

    Orders placedOrder(Long orderId) throws OrderException;

    Orders comfirmOrder(Long orderId) throws OrderException;

    Orders cancelOrder(Long orderId) throws  OrderException;

    List<Orders> getAllOrders();
    void deleteOrder(Long orderId) throws OrderException;

}
