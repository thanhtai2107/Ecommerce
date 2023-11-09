package com.example.ecommerce.service;

import com.example.ecommerce.dto.OrderDTO;
import com.example.ecommerce.entity.Orders;
import com.example.ecommerce.exception.OrderException;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.request.CreateOrderReq;

import java.util.List;

public interface OrderService {
    OrderDTO createOrder(CreateOrderReq createOrderReq) throws UserException;

    OrderDTO findOrderById(Long orderId) throws OrderException;

    List<OrderDTO> getAllOrder() throws OrderException;
    List<OrderDTO> userOrderHistory(Long userId);

//    Orders placedOrder(Long orderId) throws OrderException;
//
    OrderDTO comfirmOrder(Long orderId,String status) throws OrderException;
//
    OrderDTO cancelOrder(Long orderId,String status) throws  OrderException;

//    List<Orders> getAllOrders();
//    void deleteOrder(Long orderId) throws OrderException;

}
