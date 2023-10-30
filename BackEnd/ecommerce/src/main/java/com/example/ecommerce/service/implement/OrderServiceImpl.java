package com.example.ecommerce.service.implement;

import com.example.ecommerce.entity.*;
import com.example.ecommerce.exception.OrderException;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.repositories.*;
import com.example.ecommerce.request.CreateOrderReq;
import com.example.ecommerce.service.CartService;
import com.example.ecommerce.service.OrderItemService;
import com.example.ecommerce.service.OrderService;
import com.example.ecommerce.service.UserService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {
    private final CartService cartService;
    private final OrderRepository orderRepository;
    private final AddressRepository addressRepository;
    private final UserService userService;
    private final UserRepository userRepository;
    private final OrderItemService orderItemService;
    private final OrderItemRepository orderItemRepository;

    public OrderServiceImpl(CartService cartService, OrderRepository orderRepository, AddressRepository addressRepository, UserService userService, UserRepository userRepository, OrderItemService orderItemService, OrderItemRepository orderItemRepository) {

        this.cartService = cartService;
        this.orderRepository = orderRepository;
        this.addressRepository = addressRepository;
        this.userService = userService;
        this.userRepository = userRepository;
        this.orderItemService = orderItemService;
        this.orderItemRepository = orderItemRepository;
    }

    @Override
    public Orders createOrder(CreateOrderReq createOrderReq) throws UserException {
        User user = userService.findUserById(createOrderReq.getUserId());
        Address address = new Address();
        address.setStreet(createOrderReq.getStreet());
        address.setWard(createOrderReq.getWard());
        address.setDistrict(createOrderReq.getDistrict());
        address.setProvince(createOrderReq.getProvince());
        address.setUser(user);
        Address address1 = addressRepository.save(address);
        user.getAddresses().add(address);
        userRepository.save(user);

        Cart cart = cartService.findUserCart(user.getId());
        List<OrderItem> orderItemList = new ArrayList<>();

        for (CartItem cartItem : cart.getCartItems() ) {
            OrderItem orderItem = new OrderItem();
            orderItem.setPrice(cartItem.getPrice());
            orderItem.setProduct(cartItem.getProduct());
            orderItem.setQuantity(cartItem.getQuantity());
            orderItem.setUserId(user.getId());

            OrderItem createdOrderItem = orderItemRepository.save(orderItem);
            orderItemList.add(createdOrderItem);
        }

        Orders createOrder = new Orders();
        createOrder.setUser(user);
        createOrder.setOrderItems(orderItemList);
        createOrder.setTotalPrice(cart.getTotalPrice());
        createOrder.setTotalItem(cart.getTotalItem());
        createOrder.setShippingAddress(address);
        createOrder.setOrderDate(LocalDateTime.now());
        createOrder.setOrderStatus("PENDING");
        createOrder.setFullname(createOrder.getFullname());
        createOrder.setEmail(createOrder.getEmail());
        createOrder.setPhone(createOrder.getPhone());

        Orders savedOrder = orderRepository.save(createOrder);
        for (OrderItem item : orderItemList) {
            item.setOrder(savedOrder);
        }

        return savedOrder;


    }

    @Override
    public Orders findOrderById(Long orderId) throws OrderException {
        Optional<Orders> order = orderRepository.findById(orderId);
        if (order.isPresent()) {
            return order.get();
        }
        throw new OrderException("Order not found");
    }

    @Override
    public List<Orders> userOrderHistory(Long userId) {
        return orderRepository.getOrdersByUserId(userId);
    }

    @Override
    public Orders placedOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public Orders comfirmOrder(Long orderId) throws OrderException {
        Orders order = findOrderById(orderId);
        order.setOrderStatus("CONFIRM");
        return order;
    }

    @Override
    public Orders cancelOrder(Long orderId) throws OrderException {
        return null;
    }

    @Override
    public List<Orders> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public void deleteOrder(Long orderId) throws OrderException{
        Orders order = findOrderById(orderId);
        orderRepository.delete(order);
    }
}
