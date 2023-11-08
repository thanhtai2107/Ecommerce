package com.example.ecommerce.service.implement;

import com.example.ecommerce.dto.OrderDTO;
import com.example.ecommerce.dto.UserDTO;
import com.example.ecommerce.entity.Orders;
import com.example.ecommerce.entity.User;
import com.example.ecommerce.exception.OrderException;
import com.example.ecommerce.exception.UserException;
import com.example.ecommerce.mapper.OrderDTOMapper;
import com.example.ecommerce.mapper.UserDTOMapper;
import com.example.ecommerce.repositories.OrderRepository;
import com.example.ecommerce.repositories.UserRepository;
import com.example.ecommerce.service.UserService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserDTOMapper userDTOMapper;
    private final UserRepository userRepository;
    private final OrderRepository orderRepository;
    private final OrderDTOMapper orderDTOMapper;

    public UserServiceImpl(UserDTOMapper userDTOMapper, UserRepository userRepository, OrderRepository orderRepository, OrderDTOMapper orderDTOMapper) {
        this.userDTOMapper = userDTOMapper;
        this.userRepository = userRepository;
        this.orderRepository = orderRepository;
        this.orderDTOMapper = orderDTOMapper;
    }

    @Override
    public Optional<User> findByUsername(String email) {
        return userRepository.findByEmail(email);
    }


    @Override
    public UserDTO findUserById(Long id) throws UserException {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return userDTOMapper.apply(user.get());
        }
        throw new UserException("User not found");
    }

    @Override
    public List<UserDTO> findAllUser() throws UserException {
        List<UserDTO> userDTOList = new ArrayList<>();
        List<User> userList = userRepository.findAll();
        for (User user:userList) {
            userDTOList.add(userDTOMapper.apply(user));
        }
        return userDTOList;
    }

    @Override
    public List<OrderDTO> findOrdersByUser(Long userId) throws OrderException {
        List<Orders> orders = orderRepository.getOrdersByUserId(userId);
        List<OrderDTO> orderDTOS = new ArrayList<>();
        for (Orders order: orders) {
            orderDTOS.add(orderDTOMapper.apply(order));
        }
        return orderDTOS;
    }
}
