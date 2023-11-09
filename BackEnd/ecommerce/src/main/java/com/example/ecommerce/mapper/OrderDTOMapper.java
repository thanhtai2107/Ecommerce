package com.example.ecommerce.mapper;

import com.example.ecommerce.dto.OrderDTO;
import com.example.ecommerce.dto.OrderItemDTO;
import com.example.ecommerce.entity.OrderItem;
import com.example.ecommerce.entity.Orders;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

@Service
public class OrderDTOMapper implements Function<Orders, OrderDTO> {
    private final UserDTOMapper userDTOMapper;
    private final OrderItemDTOMapper orderItemDTOMapper;

    public OrderDTOMapper(UserDTOMapper userDTOMapper, OrderItemDTOMapper orderItemDTOMapper) {
        this.userDTOMapper = userDTOMapper;
        this.orderItemDTOMapper = orderItemDTOMapper;
    }

    @Override
    public OrderDTO apply(Orders order) {
        return OrderDTO.builder()
                .id(order.getId())
                .fullname(order.getFullname())
                .email(order.getEmail())
                .phone(order.getPhone())
                .userDTO(userDTOMapper.apply(order.getUser()))
                .orderItemDTOList(orderItemDTOS(order.getOrderItems()))
                .localDateTime(order.getOrderDate())
                .shippingAddress(order.getShippingAddress())
                .totalPrice(order.getTotalPrice())
                .orderStatus(order.getOrderStatus())
                .totalItem(order.getTotalItem())
                .build();
    }

    public List<OrderItemDTO> orderItemDTOS(List<OrderItem> orderItems) {
        List<OrderItemDTO> orderItemDTOS = new ArrayList<>();
        for (OrderItem orderItem: orderItems) {
            orderItemDTOS.add(orderItemDTOMapper.apply(orderItem));
        }
        return orderItemDTOS;
    }
}
