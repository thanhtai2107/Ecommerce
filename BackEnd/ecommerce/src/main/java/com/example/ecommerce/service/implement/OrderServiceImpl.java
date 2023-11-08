package com.example.ecommerce.service.implement;

import com.example.ecommerce.dto.CartDTO;
import com.example.ecommerce.dto.CartItemDTO;
import com.example.ecommerce.dto.OrderDTO;
import com.example.ecommerce.entity.*;
import com.example.ecommerce.exception.OrderException;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.mapper.OrderDTOMapper;
import com.example.ecommerce.mapper.ProductDTOMapper;
import com.example.ecommerce.repositories.*;
import com.example.ecommerce.request.CreateOrderReq;
import com.example.ecommerce.service.CartService;
import com.example.ecommerce.service.OrderService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    private final CartService cartService;
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;

    private final ProductRepository productRepository;
    private final OrderItemRepository orderItemRepository;
    private final ProductDTOMapper productDTOMapper;
    private final OrderDTOMapper orderDTOMapper;

    public OrderServiceImpl(CartService cartService, OrderRepository orderRepository, UserRepository userRepository, ProductRepository productRepository, OrderItemRepository orderItemRepository, ProductDTOMapper productDTOMapper, OrderDTOMapper orderDTOMapper) {

        this.cartService = cartService;
        this.orderRepository = orderRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.orderItemRepository = orderItemRepository;
        this.productDTOMapper = productDTOMapper;
        this.orderDTOMapper = orderDTOMapper;
    }

    @Override
    public OrderDTO createOrder(CreateOrderReq createOrderReq) throws UserException {
        User user = userRepository.findUserById(createOrderReq.getUserId());
        CartDTO cart = cartService.findUserCart(user.getId());
        List<OrderItem> orderItemList = new ArrayList<>();

        for (CartItemDTO cartItem : cart.cartItemDTOS()) {
            OrderItem orderItem = new OrderItem();
            orderItem.setPrice(cartItem.price());
            orderItem.setProduct(productDTOMapper.toProduct(cartItem.productDTO()));
            orderItem.setQuantity(cartItem.quantity());
            orderItem.setUserId(user.getId());
            orderItemList.add(orderItem);
            Product product = productRepository.findProductById(cartItem.productDTO().id());
            product.setSold(product.getSold() + cartItem.quantity());
            product.setQuantity(product.getQuantity() - cartItem.quantity());
            productRepository.save(product);
        }

        Orders savedOrder = orderRepository.save(Orders.builder()
                        .user(user)
                        .fullname(createOrderReq.getFullname())
                        .email(createOrderReq.getEmail())
                        .phone(createOrderReq.getPhone())
                        .shippingAddress(createOrderReq.getStreet() + "/b" + createOrderReq.getWard() + "/b" + createOrderReq.getDistrict() + "/b" + createOrderReq.getProvince())
                        .orderItems(orderItemList)
                        .orderStatus("PENDING")
                        .totalPrice(cart.totalPrice())
                        .totalItem(cart.totalItem())
                        .orderDate(LocalDateTime.now())
                .build());

        for (OrderItem item : orderItemList) {
            item.setOrder(savedOrder);
            OrderItem createdOrderItem = orderItemRepository.save(item);
        }
        return orderDTOMapper.apply(savedOrder);
    }

    @Override
    public OrderDTO findOrderById(Long orderId) throws OrderException {
        Optional<Orders> order = orderRepository.findById(orderId);
        if (order.isPresent()) {
            return orderDTOMapper.apply(order.get());
        }
        throw new OrderException("Order not found");
    }

    @Override
    public List<OrderDTO> getAllOrder() throws OrderException {
        List<Orders> orders = orderRepository.findAll();
        List<OrderDTO> orderDTOS = new ArrayList<>();
        for (Orders order : orders) {
            orderDTOS.add(orderDTOMapper.apply(order));
        }
        return orderDTOS;
    }

    @Override
    public List<OrderDTO> userOrderHistory(Long userId) {
        List<OrderDTO> orderDTOS = new ArrayList<>();
        List<Orders> orders = orderRepository.getOrdersByUserId(userId);
        for (Orders order : orders) {
            orderDTOS.add(orderDTOMapper.apply(order));
        }
        return orderDTOS;
    }

    @Override
    public OrderDTO comfirmOrder(Long orderId,String status) throws OrderException {
        Orders order = orderRepository.findOrdersById(orderId);
        order.setOrderStatus("CONFIRM");
        return orderDTOMapper.apply(orderRepository.save(order));
    }

    @Override
    public OrderDTO cancelOrder(Long orderId,String status) throws OrderException {
        Orders order = orderRepository.findOrdersById(orderId);
        order.setOrderStatus("CANCEL");
        return orderDTOMapper.apply(orderRepository.save(order));
    }

}
