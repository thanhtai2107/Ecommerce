package com.example.ecommerce.service.implement;

import com.example.ecommerce.entity.OrderItem;
import com.example.ecommerce.repositories.OrderItemRepository;
import com.example.ecommerce.repositories.OrderRepository;
import com.example.ecommerce.service.OrderItemService;
import org.springframework.stereotype.Service;

@Service
public class OrderItemServiceImpl implements OrderItemService {

    private final OrderItemRepository orderItemRepository;

    public OrderItemServiceImpl(OrderItemRepository orderItemRepository) {
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemRepository.save(orderItem);
    }
}
