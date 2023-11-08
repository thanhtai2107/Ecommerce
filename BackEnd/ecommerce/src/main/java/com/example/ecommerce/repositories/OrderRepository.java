package com.example.ecommerce.repositories;

import com.example.ecommerce.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Orders, Long> {
    List<Orders> getOrdersByUserId(Long userId);
    Orders findOrdersById(Long orderId);
}
